// ============================================================
// 資料層：讀取官方 lancer-data 的英文資料，套上中文翻譯。
// 翻譯檔在 src/data/zh/ 底下，以資料 id 為索引；
// 還沒翻譯的條目會自動顯示英文原文，網站不會開天窗。
// ============================================================
import framesRaw from 'lancer-data/lib/frames.json'
import backgroundsRaw from 'lancer-data/lib/backgrounds.json'
import skillsRaw from 'lancer-data/lib/skills.json'
import zhFrames from './zh/frames.zh.json'
import zhBackgrounds from './zh/backgrounds.zh.json'
import zhSkills from './zh/skills.zh.json'

function mergeFrame(frame, zh) {
  if (!zh) return { ...frame, zhName: null, rulesTranslated: false, fullyTranslated: false }
  return {
    ...frame,
    // rulesTranslated：特性與核心系統翻完（跑團查規則夠用）
    // fullyTranslated：連背景描述也翻完
    rulesTranslated: Boolean(zh.traits && zh.core_system),
    fullyTranslated: Boolean(zh.traits && zh.core_system && zh.description),
    zhName: zh.name ?? null,
    description: zh.description ?? frame.description,
    traits: (frame.traits ?? []).map((t, i) => ({ ...t, ...(zh.traits?.[i] ?? {}) })),
    core_system: { ...frame.core_system, ...(zh.core_system ?? {}) },
  }
}

export const frames = framesRaw
  .filter((f) => f.id !== 'missing_frame')
  .map((f) => mergeFrame(f, zhFrames[f.id]))

export function getFrame(id) {
  return frames.find((f) => f.id === id)
}

// 通用合併：zh 檔裡同名欄位覆蓋英文原文，保留英文名到 enName
function mergeSimple(list, zhMap) {
  return list.map((item) => {
    const zh = zhMap[item.id]
    if (!zh) return { ...item, enName: item.name, translated: false }
    return { ...item, ...zh, enName: item.name, translated: true }
  })
}

export const backgrounds = mergeSimple(backgroundsRaw, zhBackgrounds)
export const skills = mergeSimple(skillsRaw, zhSkills)
