module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      extends: ['plugin:cypress/recommended'],
      files: ['cypress/**/*.js']
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  rules: {
    'spaced-comment': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-multi-spaces': ['error'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 0,
    'react-hooks/exhaustive-deps': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'react/no-unescaped-entities': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'prefer-const': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': [2, { commonjs: true }],
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-absolute-path': 'off',
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    // needed because of
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    // & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 'tab', { SwitchCase: 1 }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false }
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'react/button-has-type': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'jsx-a11y/mouse-events-have-key-events': ['off']
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['.']
      }
    }
  }
}
