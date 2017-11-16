module.exports = {
    "plugins": [
        "react"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "ivweb"],
    "globals": {
        "__inline": true,
        "IS_SERVER": true,
        "__uri": true
    }
};
