<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getFrame } from '../data/index.js'
import {
  STAT_LABELS,
  MECHTYPES,
  MOUNTS,
  MANUFACTURERS,
  ACTIVATIONS,
  USES,
  licenseLabel,
} from '../data/terms.js'

const route = useRoute()
const frame = computed(() => getFrame(route.params.id))
const mfr = computed(() => MANUFACTURERS[frame.value?.source])

// 數值顯示順序
const statOrder = [
  'size', 'structure', 'hp', 'armor', 'repcap',
  'stress', 'heatcap', 'evasion', 'edef', 'speed',
  'sensor_range', 'tech_attack', 'save', 'sp',
]
</script>

<template>
  <div v-if="!frame">
    <RouterLink to="/frames" class="back-link">← 回機甲列表</RouterLink>
    <h1>找不到這台機體</h1>
  </div>

  <div v-else>
    <RouterLink to="/frames" class="back-link">← 回機甲列表</RouterLink>

    <h1>
      {{ frame.zhName ?? frame.name }}
      <span v-if="frame.zhName" style="font-size: 0.6em; color: var(--text-dim)">
        {{ frame.name }}
      </span>
    </h1>
    <p class="subtitle">
      <span :style="{ color: mfr?.color }">{{ mfr?.abbr }} {{ mfr?.name }}</span>
      · {{ frame.mechtype.map((t) => MECHTYPES[t] ?? t).join('／') }}
      · {{ licenseLabel(frame.license_level) }}
    </p>

    <div v-if="!frame.translated" class="untranslated-note">
      ⚠ 這台機體尚未翻譯，以下顯示英文原文。
    </div>

    <h2>機體數值</h2>
    <div class="stat-grid">
      <div v-for="key in statOrder" :key="key" class="stat-cell">
        <span class="label">{{ STAT_LABELS[key] }}</span>
        <span class="value">{{ frame.stats[key] }}</span>
      </div>
    </div>

    <h2>武器掛架</h2>
    <p>
      <span v-for="(m, i) in frame.mounts" :key="i" class="tag accent">
        {{ MOUNTS[m] ?? m }}
      </span>
    </p>

    <h2>機體特性</h2>
    <div v-for="trait in frame.traits" :key="trait.name" class="panel">
      <strong>{{ trait.name }}</strong>
      <div class="desc" v-html="trait.description"></div>
    </div>

    <h2>核心系統</h2>
    <div class="panel">
      <strong style="color: var(--accent)">{{ frame.core_system.name }}</strong>
      <div v-if="frame.core_system.description" class="desc" v-html="frame.core_system.description"></div>
      <div v-if="frame.core_system.active_name" style="margin-top: 12px">
        <strong>啟動：{{ frame.core_system.active_name }}</strong>
        <span class="tag">{{ ACTIVATIONS[frame.core_system.activation] ?? frame.core_system.activation }}</span>
        <span class="tag" v-if="frame.core_system.use">{{ USES[frame.core_system.use] ?? frame.core_system.use }}</span>
        <div class="desc" v-html="frame.core_system.active_effect"></div>
      </div>
    </div>

    <h2>機體描述</h2>
    <div class="panel desc" v-html="frame.description"></div>
  </div>
</template>
