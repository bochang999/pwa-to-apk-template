// Manual globals definitions (globals package conflicts with sharp dependency)
const browserGlobals = {
    window: 'readonly', document: 'readonly', console: 'readonly',
    localStorage: 'readonly', sessionStorage: 'readonly', history: 'readonly', 
    navigator: 'readonly', location: 'readonly', fetch: 'readonly',
    setTimeout: 'readonly', setInterval: 'readonly', clearTimeout: 'readonly',
    clearInterval: 'readonly', alert: 'readonly', confirm: 'readonly', 
    prompt: 'readonly', XMLHttpRequest: 'readonly', URL: 'readonly',
    URLSearchParams: 'readonly', FormData: 'readonly', Blob: 'readonly',
    File: 'readonly', FileReader: 'readonly'
};

const serviceWorkerGlobals = {
    self: 'readonly', caches: 'readonly', fetch: 'readonly', 
    Response: 'readonly', Request: 'readonly', clients: 'readonly',
    location: 'readonly', URL: 'readonly', console: 'readonly',
    addEventListener: 'readonly', removeEventListener: 'readonly',
    importScripts: 'readonly', registration: 'readonly', skipWaiting: 'readonly',
    postMessage: 'readonly', MessageChannel: 'readonly', MessagePort: 'readonly',
    PushManager: 'readonly', Notification: 'readonly', BroadcastChannel: 'readonly'
};

const nodeGlobals = {
    module: 'readonly', exports: 'readonly', require: 'readonly',
    process: 'readonly', global: 'readonly', __dirname: 'readonly',
    __filename: 'readonly', Buffer: 'readonly', console: 'readonly',
    setTimeout: 'readonly', setInterval: 'readonly', clearTimeout: 'readonly',
    clearInterval: 'readonly', setImmediate: 'readonly', clearImmediate: 'readonly'
};

const es2021Globals = {
    globalThis: 'readonly', Promise: 'readonly', Symbol: 'readonly',
    WeakMap: 'readonly', WeakSet: 'readonly', Map: 'readonly', Set: 'readonly',
    Proxy: 'readonly', Reflect: 'readonly', ArrayBuffer: 'readonly',
    DataView: 'readonly', Int8Array: 'readonly', Uint8Array: 'readonly'
};

// Shared base configuration
const baseConfig = {
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'no-unused-vars': ['warn', { 'args': 'none' }],
        'no-undef': 'error',
        'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }]
    }
};

export default [
    // Browser環境 - ESMモジュールのJSファイル
    {
        files: ['**/*.{js,jsx}'],
        ignores: ['sw.js', 'src/sw/**', 'scripts/**', '.github/**', 'build/**', '*.config.js'],
        languageOptions: {
            ...baseConfig.languageOptions,
            globals: {
                ...browserGlobals,
                ...es2021Globals,
                // Capacitor PWA固有グローバル変数
                Capacitor: 'readonly',
                CapacitorCookies: 'readonly',
                CapacitorHttp: 'readonly',
                CapacitorPreferences: 'readonly',
                StatusBar: 'readonly',
                SplashScreen: 'readonly',
                // Capacitor互換性チェック
                cordova: 'readonly',
                device: 'readonly'
            }
        },
        rules: baseConfig.rules
    },

    // Browser環境 - CommonJS互換性チェックありファイル
    {
        files: ['script.js'], // module互換性チェックが必要な特定ファイル
        languageOptions: {
            ...baseConfig.languageOptions,
            globals: {
                ...browserGlobals,
                ...es2021Globals,
                // Capacitor PWA固有グローバル変数
                Capacitor: 'readonly',
                CapacitorCookies: 'readonly', 
                CapacitorHttp: 'readonly',
                CapacitorPreferences: 'readonly',
                StatusBar: 'readonly',
                SplashScreen: 'readonly',
                // 互換性チェック用のみ
                module: 'readonly'
            }
        },
        rules: baseConfig.rules
    },

    // Service Worker環境 - sw.js等
    {
        files: ['sw.js', 'src/sw/**'],
        languageOptions: {
            ...baseConfig.languageOptions,
            globals: {
                ...serviceWorkerGlobals,
                // 追加のService Worker API
                registration: 'readonly',
                skipWaiting: 'readonly',
                postMessage: 'readonly',
                MessageChannel: 'readonly',
                MessagePort: 'readonly',
                PushManager: 'readonly',
                Notification: 'readonly',
                BroadcastChannel: 'readonly',
                Cache: 'readonly',
                CacheStorage: 'readonly'
            }
        },
        rules: baseConfig.rules
    },

    // Node.js環境 - ビルドスクリプト等 (CommonJS)
    {
        files: ['scripts/**', '.github/**', 'build/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs', // CommonJS設定
            globals: {
                ...nodeGlobals
            }
        },
        rules: baseConfig.rules
    },

    // Node.js環境 - 設定ファイル (ESM)
    {
        files: ['*.config.js', '*.config.mjs'],
        languageOptions: {
            ...baseConfig.languageOptions,
            globals: {
                ...nodeGlobals
            }
        },
        rules: baseConfig.rules
    },

    // TypeScript環境 - TSファイルはno-undefをオフ
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            ...baseConfig.languageOptions,
            globals: {
                ...browserGlobals,
                ...es2021Globals,
                // Capacitor TypeScript固有
                Capacitor: 'readonly',
                CapacitorCookies: 'readonly',
                CapacitorHttp: 'readonly',
                CapacitorPreferences: 'readonly'
            }
        },
        rules: {
            ...baseConfig.rules,
            'no-undef': 'off' // TypeScriptコンパイラが処理
        }
    }
];