module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "node": true,
  },
  "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
  "extends": "eslint:recommended",
  "rules": {
    'no-console': 'off',
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
