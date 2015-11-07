module.exports = {
  extends: [
    'eslint-config-sugarshin/rules/best-practices',
    'eslint-config-sugarshin/rules/errors',
    'eslint-config-sugarshin/rules/legacy',
    'eslint-config-sugarshin/rules/node',
    'eslint-config-sugarshin/rules/strict',
    'eslint-config-sugarshin/rules/stylistic',
    'eslint-config-sugarshin/rules/variables'
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    mocha: true,
    jest: true,
    jquery: true
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
