module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-html',
  ignoreFiles: ['**/app.scss', '**/index.scss', 'node_modules/**', '**/libraries/**'],
  rules: {
    'font-weight-notation': null,
    'color-hex-case': 'lower';
  }
}
