# 🚀 PWA→APK 開発テンプレート

最速でPWAからAPKへの変換開発を開始できる完全なテンプレートプロジェクトです。

## ✨ 特徴

- 📱 **PWA完全対応** - Service Worker, manifest.json, オフライン動作
- 📦 **APK自動ビルド** - GitHub ActionsでプッシュするだけでAPK生成
- 🎨 **レスポンシブUI** - モバイル・デスクトップ両対応
- ⚙️ **設定システム** - LocalStorage自動保存
- 🔧 **Capacitor統合** - Web→ネイティブ変換
- 🚀 **即座に開始可能** - クローンして即開発開始

## 🎯 使用方法

### 1. テンプレート取得
```bash
# このリポジトリをクローン
git clone https://github.com/YOUR_USERNAME/pwa-to-apk-template.git my-new-app
cd my-new-app

# 依存関係インストール
npm install
```

### 2. カスタマイズ
```bash
# package.json の情報を更新
nano package.json  # name, version, author等

# manifest.json を更新  
nano manifest.json  # アプリ名, 説明, テーマカラー等

# capacitor.config.ts を更新
nano capacitor.config.ts  # appId, appName
```

### 3. アイコン設置
```bash
# icons/ フォルダに自分のアイコンを配置
# 詳細は icons/README.md を参照
```

### 4. 開発開始
```bash
# 開発サーバー起動
npm run dev

# ブラウザで http://localhost:8080 を開く
```

### 5. GitHub設定（APK自動ビルド用）

#### 5-1. GitHub Secrets設定（オプション）
リポジトリの Settings > Secrets and variables > Actions で以下を設定:

```bash
# 本番用キーストア（推奨）
KEYSTORE_B64="[base64エンコードされたキーストアファイル]"
KEYSTORE_PASSWORD="your-keystore-password"  
KEY_ALIAS="your-key-alias"
KEY_PASSWORD="your-key-password"
```

**注意**: 未設定の場合はテンプレート用キーストアが自動生成されます。

#### 5-2. 自動ビルド開始
```bash
# mainブランチにプッシュすると自動でAPKビルド開始
git add .
git commit -m "Initial setup"
git push origin main
```

## 📁 プロジェクト構造

```
pwa-to-apk-template/
├── index.html              # メインHTML
├── style.css               # スタイルシート（レスポンシブ）
├── script.js               # メインロジック（クラスベース）
├── manifest.json           # PWA設定
├── sw.js                   # Service Worker
├── capacitor.config.ts     # Capacitor設定
├── package.json            # パッケージ設定
├── .github/workflows/      # GitHub Actions設定
│   └── build-apk.yml      # APK自動ビルド
└── icons/                  # アイコン各サイズ
    ├── README.md          # アイコン設置ガイド
    └── *.png              # 各サイズのアイコン
```

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev
npm run serve

# Capacitor操作
npm run capacitor:init      # 初期化
npm run capacitor:sync      # 同期
npm run android:build       # Android APKビルド（ローカル）

# その他
npm run build              # ビルド
npm run test               # テスト
```

## 📱 機能詳細

### PWA機能
- ✅ **オフライン動作** - Service Workerによるキャッシュ
- ✅ **インストール可能** - ブラウザからアプリとしてインストール
- ✅ **プッシュ通知** - 通知機能（設定次第）
- ✅ **バックグラウンド同期** - オフライン時の同期

### APK機能  
- ✅ **ネイティブ動作** - Capacitorによる変換
- ✅ **Status Bar対応** - Android Status Bar最適化
- ✅ **自動署名** - GitHub Actionsで署名済みAPK生成
- ✅ **リリース対応** - 本番環境用APK対応

### UI機能
- ✅ **レスポンシブデザイン** - 全デバイス対応
- ✅ **ダークモード対応** - システム設定連動
- ✅ **アクセシビリティ** - キーボード操作・フォーカス管理
- ✅ **タッチ操作最適化** - モバイル操作に最適化

## 🔧 カスタマイズガイド

### 基本情報変更

1. **package.json**
```json
{
  "name": "your-app-name",
  "version": "1.0.0", 
  "description": "あなたのアプリの説明",
  "author": "Your Name <your.email@example.com>"
}
```

2. **manifest.json**
```json
{
  "name": "Your App Name",
  "short_name": "YourApp",
  "description": "あなたのアプリの説明",
  "theme_color": "#YourColor"
}
```

3. **capacitor.config.ts**
```typescript
const config: CapacitorConfig = {
  appId: 'com.yourcompany.yourapp',
  appName: 'Your App Name',
  // ...
};
```

### デザインカスタマイズ

**style.css のCSS変数を変更:**
```css
:root {
    --primary-color: #YourPrimaryColor;
    --secondary-color: #YourSecondaryColor;
    /* ... */
}
```

### 機能追加

**script.js のPWATemplateクラスを拡張:**
```javascript
class YourApp extends PWATemplate {
    constructor() {
        super();
        // あなたの初期化処理
    }
    
    // あなたの機能を追加
    yourCustomMethod() {
        // ...
    }
}

const app = new YourApp();
```

## 🔐 APK署名設定ガイド

### Production APK署名の完全設定手順

#### 1. Keystoreファイル作成
```bash
# 本番用Keystoreを作成（推奨設定）
keytool -genkeypair -v \
  -keystore your-app-release-keystore.jks \
  -alias your-app-release-key \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -dname "CN=Your App Name,OU=Your Organization,O=Your Company,L=City,ST=State,C=JP" \
  -storepass your-keystore-password-2024 \
  -keypass your-keystore-password-2024
```

#### 2. Base64エンコード
```bash
# KeystoreをBase64に変換（GitHub Secrets用）
base64 -w 0 your-app-release-keystore.jks > keystore_base64.txt
```

#### 3. GitHub Secrets設定（必須4項目）
Repository Settings > Secrets and variables > Actions:

| Secret名 | 値 | 説明 |
|----------|-----|------|
| `KEYSTORE_BASE64` | Base64文字列 | 改行・スペースなしで完全コピー |
| `KEYSTORE_PASSWORD` | your-keystore-password-2024 | Keystoreパスワード |
| `KEY_ALIAS` | your-app-release-key | キーエイリアス名 |
| `KEY_PASSWORD` | your-keystore-password-2024 | キーパスワード（通常はstorepassと同じ） |

#### 4. 署名成功の確認ポイント

✅ **正しい設定チェックリスト:**
- [ ] Base64文字列に改行・スペースが入っていない
- [ ] エイリアス名が`keytool -list`で確認した実際の名前と完全一致
- [ ] パスワードに特殊文字が含まれていない
- [ ] 4つのSecrets全てが設定済み

⚠️ **よくある失敗パターン:**
- GitHub SecretsのBase64データにコピー時の改行混入
- キーエイリアス名の大文字小文字間違い
- Keystoreパスワードとキーパスワードの混同
- ワークフローファイルのkeystoreファイル名不一致

#### 5. APK署名エラーの診断方法

**エラーメッセージ別対処法:**

| エラー | 原因 | 解決方法 |
|--------|------|---------|
| `keystore password was incorrect` | パスワード間違い | GitHub Secretsの`KEYSTORE_PASSWORD`確認 |
| `does not contain a key` | エイリアス名間違い | `keytool -list`で正しい名前確認 |
| `Given final block not properly padded` | Base64データ破損 | Base64再生成・改行除去 |
| `java.io.EOFException` | Keystoreファイル破損 | 新規Keystore作成・Base64再生成 |

#### 6. 動的Keystore検出システム（実装済み）

テンプレートには以下の安全機能が実装済み:
```yaml
# GitHub Secretsの有無を自動判定
if [ -f "../../../../../../your-app-release-keystore.jks" ]; then
  KEYSTORE_FILE="../../../../../../your-app-release-keystore.jks"
elif [ -f "../../../../../../template-release.keystore" ]; then
  KEYSTORE_FILE="../../../../../../template-release.keystore"  # フォールバック
else
  echo "❌ キーストアファイルが見つかりません"
  exit 1
fi
```

#### 7. ESLint Flat Config対応（必須）

GitHub Actions環境で必要な設定:
```yaml
env:
  ESLINT_USE_FLAT_CONFIG: true  # 必須: eslint.config.js認識用
```

## 📋 トラブルシューティング

### よくある問題

#### APKビルドが失敗する
- **APK署名エラー**: 上記「APK署名設定ガイド」を参照
- GitHub Secretsの設定を確認
- capacitor.config.tsのappIdが重複していないか確認
- Java/Node.jsバージョンを確認

#### PWAが動作しない
- manifest.jsonの構文エラーを確認
- Service Workerがブロックされていないか確認
- HTTPSで動作しているか確認（localhost除く）

#### アイコンが表示されない
- icons/フォルダのファイル存在を確認
- manifest.jsonのpaths設定を確認
- ブラウザキャッシュをクリア

## 🔗 参考リンク

- [PWA Builder](https://www.pwabuilder.com/)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

## 📝 更新履歴

### v1.0.0 (Initial Release)
- ✅ PWA→APK変換テンプレート完成
- ✅ GitHub Actions自動ビルド
- ✅ Capacitor統合
- ✅ レスポンシブUI
- ✅ アイコンシステム

---

**🚀 Happy Coding!** このテンプレートを使って素晴らしいアプリを作成してください！