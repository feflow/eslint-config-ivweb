'use strict';

module.exports = {
    rules: {
        // getter必须有返回值，并且禁止返回值为undefined, 比如 return;
        'getter-return': [2, { allowImplicit: false }]
    }
};
