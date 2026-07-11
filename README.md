# LANCER 中文資料庫

科幻機甲 TRPG《LANCER》的非官方中文資料查詢網站。

**網站網址**：https://boyiad2110.github.io/lancer-data-zh-tw/

## 專案架構

- 英文原始資料來自官方公開的 [lancer-data](https://github.com/massif-press/lancer-data)（透過 npm 安裝，不修改原始資料）
- 中文翻譯放在 `src/data/zh/` 底下的 JSON 檔，以條目 id 對應；未翻譯的條目自動顯示英文
- 介面術語（數值名稱、製造商譯名等）集中在 `src/data/terms.js`，方便統一修改
- 網站以 Vue 3 + Vite 建置，推送到 `main` 分支後由 GitHub Actions 自動部署到 GitHub Pages

## 本機開發

```bash
npm install     # 第一次下載專案後執行
npm run dev     # 啟動本機預覽（http://localhost:5173）
npm run build   # 建置正式版
```

## 版權聲明

本站為非官方粉絲翻譯，僅供學習交流。LANCER 及其所有資料版權屬於 [Massif Press](https://massifpress.com/)。
