module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": 2,
    "react/no-did-update-set-state": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-will-update-set-state": 2,
    "react/require-render-return": 2,
    "react/jsx-closing-tag-location": 2,
    "react/jsx-closing-bracket-location": [2, { selfClosing: 'tag-aligned' }],
    "react/jsx-key": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-vars": 2,
  }
};