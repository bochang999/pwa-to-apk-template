export default [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                window: "readonly", document: "readonly", console: "readonly",
                localStorage: "readonly", history: "readonly", navigator: "readonly"
            }
        },
        rules: {
            "no-unused-vars": ["warn", { "args": "none" }],
            "no-undef": "error",
            "quotes": ["warn", "single", { "allowTemplateLiterals": true }]
        }
    }
];