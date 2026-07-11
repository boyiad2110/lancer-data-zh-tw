// ============================================================
// 術語表：所有介面上的固定翻譯都集中在這裡，方便日後統一修改。
// 想改譯名（例如「應力」要不要改叫「壓力」）只要改這一個檔案。
// ============================================================

// 機體數值名稱
export const STAT_LABELS = {
  size: '體型',
  structure: '結構值',
  stress: '應力值',
  armor: '裝甲',
  hp: '生命值',
  evasion: '迴避',
  edef: '電子防禦',
  heatcap: '熱容量',
  repcap: '修理值',
  sensor_range: '感測範圍',
  tech_attack: '科技攻擊',
  save: '豁免目標值',
  speed: '速度',
  sp: '系統點數',
}

// 機體定位
export const MECHTYPES = {
  Balanced: '均衡型',
  Striker: '打擊型',
  Controller: '控場型',
  Support: '支援型',
  Defender: '防禦型',
  Artillery: '砲擊型',
}

// 武器掛架
export const MOUNTS = {
  Main: '主掛架',
  Heavy: '重型掛架',
  Flex: '彈性掛架',
  Aux: '輔助掛架',
  'Aux/Aux': '輔助／輔助掛架',
  'Main/Aux': '主／輔助掛架',
}

// 製造商
export const MANUFACTURERS = {
  GMS: { abbr: 'GMS', name: '通用量產系統', fullName: 'General Massive Systems', color: '#9ec1cf' },
  'IPS-N': { abbr: 'IPS-N', name: 'IPS-北極星', fullName: 'Interplanetary Shipping-Northstar', color: '#e05d44' },
  SSC: { abbr: 'SSC', name: '史密斯-島野企業', fullName: 'Smith-Shimano Corpro', color: '#e6b422' },
  HORUS: { abbr: 'HORUS', name: '荷魯斯', fullName: 'HORUS', color: '#7bc96f' },
  HA: { abbr: 'HA', name: '哈里遜軍工', fullName: 'Harrison Armory', color: '#b78ee0' },
}

// 系統啟動方式
export const ACTIVATIONS = {
  Protocol: '協定',
  Quick: '快速動作',
  Full: '完整動作',
  Free: '自由動作',
  Reaction: '反應',
  'Quick Tech': '快速科技',
  'Full Tech': '完整科技',
}

// 使用頻率
export const USES = {
  Turn: '每回合 1 次',
  'Next Turn': '至下回合',
  Round: '每輪 1 次',
  'Next Round': '至下一輪',
  Scene: '每場景 1 次',
  Encounter: '每次遭遇 1 次',
  Mission: '每次任務 1 次',
}

// 授權等級顯示
export function licenseLabel(level) {
  return level === 0 ? '基礎裝備' : `授權等級 ${level}`
}
