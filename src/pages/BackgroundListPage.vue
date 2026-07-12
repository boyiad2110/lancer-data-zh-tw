<script setup>
import { backgrounds } from '../data/index.js'
</script>

<template>
  <h1>玩家背景</h1>
  <p class="subtitle">
    創角第一步：選一個背景，勾勒出你的機師是誰。
    背景沒有數值效果，但當它與你的行動相關時，可以作為敘事依據。
  </p>

  <div v-for="bg in backgrounds" :key="bg.id" class="panel">
    <strong style="color: var(--accent); font-size: 1.1rem">{{ bg.name }}</strong>
    <span class="tag" style="margin-left: 8px">{{ bg.enName }}</span>
    <div class="desc" v-html="bg.description"></div>
  </div>
</template>
