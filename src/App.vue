<template>
  <header class="site-header">
    <div class="site-title">
      LANCER 中文資料庫<span>非官方粉絲翻譯</span>
    </div>
    <nav class="site-nav">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/frames">機甲框架</RouterLink>
      <RouterLink to="/backgrounds">玩家背景</RouterLink>
      <RouterLink to="/skills">本領</RouterLink>
    </nav>
  </header>

  <main class="container">
    <RouterView />
  </main>

  <footer class="site-footer">
    本站為非官方粉絲中文翻譯，僅供學習交流。LANCER 及其資料版權屬於
    <a href="https://massifpress.com/" target="_blank" rel="noopener">Massif Press</a>。
    英文資料來源：<a href="https://github.com/massif-press/lancer-data" target="_blank" rel="noopener">lancer-data</a>
  </footer>
</template>
