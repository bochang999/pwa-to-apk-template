export default [
    // Browser環境 - 一般的なJSファイル
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                // ブラウザ環境のグローバル変数を手動定義
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                localStorage: 'readonly',
                history: 'readonly',
                navigator: 'readonly',
                // 追加のブラウザグローバル変数
                setInterval: 'readonly',
                setTimeout: 'readonly',
                clearInterval: 'readonly',
                clearTimeout: 'readonly',
                confirm: 'readonly',
                alert: 'readonly',
                prompt: 'readonly',
                location: 'readonly',
                XMLHttpRequest: 'readonly',
                fetch: 'readonly',
                URL: 'readonly',
                URLSearchParams: 'readonly',
                // Node.js互換性チェック用グローバル変数
                module: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': ['warn', { 'args': 'none' }],
            'no-undef': 'error',
            'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }]
        }
    },

    // Service Worker環境 - sw.js等
    {
        files: ['sw.js', 'src/sw/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                // Service Worker固有のグローバル変数
                self: 'readonly',
                caches: 'readonly',
                fetch: 'readonly',
                Response: 'readonly',
                clients: 'readonly',
                location: 'readonly',
                URL: 'readonly',
                console: 'readonly',
                addEventListener: 'readonly',
                removeEventListener: 'readonly',
                importScripts: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': ['warn', { 'args': 'none' }],
            'no-undef': 'error',
            'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }]
        }
    },

    // Node.js環境 - ビルドスクリプト等
    {
        files: ['scripts/**', '.github/**', 'build/**', '*.config.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module', 
            globals: {
                // Node.js環境のグローバル変数
                module: 'readonly',
                exports: 'readonly',
                require: 'readonly',
                process: 'readonly',
                global: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                Buffer: 'readonly',
                console: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': ['warn', { 'args': 'none' }],
            'no-undef': 'error',
            'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }]
        }
    },

    // TypeScript環境 - TSファイルはno-undefをオフ
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            'no-undef': 'off'
        }
    }
];