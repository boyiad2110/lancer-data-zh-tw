<script setup>
import { computed } from 'vue'
import { skills } from '../data/index.js'
import { SKILL_FAMILIES } from '../data/terms.js'

// 依分類分組
const grouped = computed(() =>
  Object.keys(SKILL_FAMILIES)
    .map((fam) => ({
      key: fam,
      label: SKILL_FAMILIES[fam],
      list: skills.filter((s) => s.family === fam),
    }))
    .filter((g) => g.list.length > 0),
)
</script>

<template>
  <h1>本領</h1>
  <p class="subtitle">
    創角時選 4 個本領（各 +2）。機師做規則沒有明確涵蓋的事情時，
    符合的本領可以加到你的能力檢定上。點開每個項目可看完整說明。
  </p>

  <div v-for="group in grouped" :key="group.key">
    <h2>{{ group.label }}</h2>
    <details v-for="sk in group.list" :key="sk.id" class="panel" style="cursor: pointer">
      <summary>
        <strong style="color: var(--accent)">{{ sk.name }}</strong>
        <span class="tag" style="margin-left: 8px">{{ sk.enName }}</span>
        <span style="color: var(--text-dim); font-size: 0.9rem; margin-left: 8px">
          {{ sk.description }}
        </span>
      </summary>
      <div class="desc" style="margin-top: 8px" v-html="sk.detail"></div>
    </details>
  </div>
</template>
