module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-hooks', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _templates: './src/components/templates',
          _routes: './src/routes',
          _views: './src/views',
          _services: './src/services',
          _styles: './src/styles',
          _utils: './src/utils',
        },
      },
    },
  },
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
    'react/prop-types': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': ['error', { multiline: true }],
    'operator-linebreak': 0,
    'max-len': [
      1,
      {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
