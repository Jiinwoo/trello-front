module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        // 'prettier/@typescript-eslint',
        // 'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // 추후 .prettierrc.js 파일에서 설정해줄 예정
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}