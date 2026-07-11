<script setup>
import { frames } from '../data/index.js'

const translatedCount = frames.filter((f) => f.translated).length
</script>

<template>
  <h1>LANCER 中文資料庫</h1>
  <p class="subtitle">科幻機甲 TRPG《LANCER》的中文資料查詢站</p>

  <div class="panel">
    <p>
      在遙遠的未來，人類跨越星海重新聯合。你是一名「持槍騎兵」（Lancer）——
      駕駛機甲的菁英駕駛員。這裡收錄了《LANCER》核心規則書中的機體與裝備資料，
      供中文玩家快速查閱。
    </p>
    <p>
      <RouterLink to="/frames">→ 瀏覽機甲框架</RouterLink>
    </p>
  </div>

  <div class="panel">
    <strong>翻譯進度</strong>
    <p>
      機甲框架：{{ translatedCount }} / {{ frames.length }} 台已翻譯。
      尚未翻譯的條目會先顯示英文原文，翻譯將持續更新。
    </p>
  </div>
</template>
