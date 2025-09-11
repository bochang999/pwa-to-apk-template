export default [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                // Browser environment
                window: 'readonly', document: 'readonly', console: 'readonly',
                localStorage: 'readonly', history: 'readonly', navigator: 'readonly',
                setInterval: 'readonly', setTimeout: 'readonly', clearInterval: 'readonly', clearTimeout: 'readonly',
                confirm: 'readonly', alert: 'readonly', prompt: 'readonly',
                fetch: 'readonly', Response: 'readonly', Request: 'readonly', URL: 'readonly',
                location: 'readonly', Blob: 'readonly',
                // Service Worker environment
                self: 'readonly', caches: 'readonly', clients: 'readonly',
                importScripts: 'readonly', registration: 'readonly',
                // Node.js / CommonJS
                module: 'readonly', exports: 'readonly', require: 'readonly',
                // Global objects
                Event: 'readonly', EventTarget: 'readonly', MessageEvent: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': ['warn', { 'args': 'none' }],
            'no-undef': 'error',
            'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }]
        }
    }
];