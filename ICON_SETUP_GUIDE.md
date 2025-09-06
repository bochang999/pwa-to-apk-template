# 🎨 PWA Template カスタムアイコンシステム

## 🚀 概要
このプロジェクトは、BOC-47で開発されたアイコン変更技術手順を完全実装したカスタムアイコンシステムを提供します。

## 📁 ファイル構成

### 🖼️ アイコンファイル
```
├── app-icon-master.svg          # マスターSVGアイコン（編集用）
├── app-icon-master.png          # 1024x1024 マスターアイコン
├── favicon.ico                  # ブラウザファビコン
├── icons/                       # 全解像度アイコンセット
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   └── apple-touch-icon.png
└── icons-backup/                # 元アイコンのバックアップ
```

## 🛠️ 利用方法

### 🎨 アイコンデザイン変更
1. `app-icon-master.svg`を編集してデザインを変更
2. SVGからPNGマスターアイコンを生成：
```bash
magick app-icon-master.svg -resize 1024x1024 app-icon-master.png
```

### ⚡ 自動アイコン生成
全解像度アイコンを一括生成：
```bash
npm run icons:generate
```

プラットフォーム別生成：
```bash
npm run icons:generate:android    # Android専用
npm run icons:generate:ios        # iOS専用
```

### 🔧 手動生成（カスタム制御時）
```bash
# 個別サイズ生成
magick app-icon-master.png -resize 192x192 icons/icon-192x192.png
magick app-icon-master.png -resize 512x512 icons/icon-512x512.png

# ファビコン生成
magick app-icon-master.png -resize 16x16 -colors 256 favicon.ico
```

## 🎯 デザインガイドライン

### 🎨 現在のデザイン仕様
- **テーマカラー**: #2C3E50 (ダークネイビー)
- **アクセントカラー**: #3498DB (ブルー), #1ABC9C (ターコイズ)
- **強調カラー**: #E74C3C (レッド), #F39C12 (オレンジ)
- **スタイル**: モダンなグラデーション + 立体的なPWAアイコン

### 📐 技術仕様
- **マスター解像度**: 1024x1024px
- **フォーマット**: PNG (透明背景対応)
- **デザイン**: iOS角丸・Android Material Design対応
- **最適化**: 各解像度での視認性考慮

## ✅ 検証・テスト

### 🌐 ブラウザ確認
```bash
npm run serve
# http://localhost:8080 でブラウザ確認
# - ファビコン表示確認
# - PWA "ホーム画面に追加" アイコン確認
```

### 📱 Android APK確認
```bash
npm run capacitor:add:android
npm run capacitor:sync
npm run android:build
# 生成されたAPKでアイコン確認
```

### 🔍 PWA Manifest確認
- `manifest.json`内のアイコン設定自動更新済み
- すべての解像度アイコンが適切に参照されている

## 🚀 統合されたワークフロー

### 開発フロー
1. **デザイン**: SVG編集 → マスターPNG生成
2. **生成**: 自動アイコン生成実行
3. **同期**: Capacitor同期実行
4. **テスト**: ブラウザ・APKでの確認
5. **デプロイ**: GitHub Actions自動ビルド

### 自動化対応
- **npm scripts**: ワンコマンドでアイコン更新
- **Capacitor Assets**: 自動リサイズ・配置
- **GitHub Actions**: CI/CD統合（元プロジェクト継承）

## 💡 カスタマイズのヒント

### 🎨 色変更
`app-icon-master.svg`内の以下を編集：
- `bgGradient`: 背景グラデーション
- `iconGradient`: アイコン本体の色
- `fill`属性: 各要素の色

### 🔧 デザイン変更
- P文字 → 他の文字・図形に変更可能
- 矢印要素 → ウェブ・モバイル関連アイコンに変更可能
- 装飾要素 → ブランドに合わせて調整可能

### 📊 解像度追加
必要に応じて`package.json`の`icons:generate`に新サイズ追加：
```json
"icons:generate:custom": "magick app-icon-master.png -resize 256x256 icons/icon-256x256.png"
```

---
*🎨 BOC-47技術手順完全実装版*  
*📱 PWA Template カスタムアイコンシステム v1.0*