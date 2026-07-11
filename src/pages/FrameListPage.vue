<script setup>
import { computed, ref } from 'vue'
import { frames } from '../data/index.js'
import { MANUFACTURERS, MECHTYPES, licenseLabel } from '../data/terms.js'

const search = ref('')

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return frames
  return frames.filter(
    (f) =>
      f.name.toLowerCase().includes(q) ||
      (f.zhName && f.zhName.includes(q)) ||
      f.source.toLowerCase().includes(q),
  )
})

// 依製造商分組，順序照 MANUFACTURERS 的定義
const grouped = computed(() =>
  Object.keys(MANUFACTURERS)
    .map((src) => ({
      mfr: MANUFACTURERS[src],
      list: filtered.value.filter((f) => f.source === src),
    }))
    .filter((g) => g.list.length > 0),
)
</script>

<template>
  <h1>機甲框架</h1>
  <p class="subtitle">核心規則書收錄的 {{ frames.length }} 台機體</p>

  <input
    v-model="search"
    class="search-box"
    type="search"
    placeholder="搜尋機體名稱（中英文皆可）…"
  />

  <div v-for="group in grouped" :key="group.mfr.abbr" class="manufacturer-block">
    <div class="manufacturer-name" :style="{ color: group.mfr.color }">
      {{ group.mfr.abbr }}｜{{ group.mfr.name }}
      <small>{{ group.mfr.fullName }}</small>
    </div>
    <div class="card-grid">
      <RouterLink
        v-for="f in group.list"
        :key="f.id"
        :to="`/frames/${f.id}`"
        class="frame-card"
        :style="{ '--mfr-color': group.mfr.color }"
      >
        <div class="en-name">{{ f.name }}</div>
        <div class="zh-name">{{ f.zhName ?? '（未翻譯）' }}</div>
        <div class="meta">
          {{ f.mechtype.map((t) => MECHTYPES[t] ?? t).join('／') }} ·
          {{ licenseLabel(f.license_level) }}
        </div>
      </RouterLink>
    </div>
  </div>

  <p v-if="grouped.length === 0" class="subtitle">找不到符合「{{ search }}」的機體。</p>
</template>
