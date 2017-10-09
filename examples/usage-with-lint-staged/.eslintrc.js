module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "extends": ["eslint:recommended", "ivweb"],
    "globals": {
        "__inline": true,
        "IS_SERVER": true,
        "__uri": true
    }
};
