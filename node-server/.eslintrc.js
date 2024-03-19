module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es2021': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': [
            'warn',
            4
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'never'
        ],
        'no-trailing-spaces': 'warn',
        'no-unused-vars': 'warn',
        'object-curly-spacing': [
            'warn', 'always'
        ],
        'arrow-spacing': [
            'warn', { 'before': true, 'after': true }
        ],
        'no-console': 0
    }
}