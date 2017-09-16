'use strict';

module.exports = {
    extends: 'airbnb-base',
    rules: {
        // getter必须有返回值，并且禁止返回值为undefined, 比如 return;
        'getter-return': ['error', { allowImplicit: false }]
    }
};