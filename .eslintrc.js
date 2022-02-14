module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['udyux/vue'],
  root: true,
  ignorePatterns: ['src/libraries/**/*.js'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: { jest: true }
    }
  ]
}
