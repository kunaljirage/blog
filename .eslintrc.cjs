module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh',  "import", "jsx-a11y"],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  
    "no-debugger": 0,
    "no-alert": 0,
    "no-await-in-loop": 0,
    "no-return-assign": [
      "error",
      "except-parens"
    ],
    "no-restricted-syntax": [
      2,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-unused-vars": [
      1,
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all"
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
   
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "import/no-cycle": 1,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/display-name": 1,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/require-default-props": 0,
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "radix": 0,
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
        "tabWidth": 2,
        "semi": true,
        "jsxBracketSameLine": false,
        "endOfLine": "auto",
        "arrowParens": "avoid"
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "invalidHref"
        ]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
}
