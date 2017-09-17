'use strict';

module.exports = {
    rules: {
        // error; for循转方向出错
        'for-direction': 2,
        // error; getter必须有返回值，并且禁止返回值为undefined, 比如 return;
        'getter-return': [2, { allowImplicit: false }]
        // off; 不允许在循环中出现await
        'no-await-in-loop': 0,
        // off; 允许使用console进行代码调试
        'no-console': 0,
        // warn; 直接调用对象原型链上的方法
        'no-prototype-builtins': 1,
        // off; 函数注释一定要遵守jsdoc规则
        'valid-jsdoc': 0,
        // warn; 在字符串里面出现{和}进行警告
        'no-template-curly-in-string': 1,
        // warn; get和set没有成对出现时给出警告
        'accessor-pairs': 1,
        // error; 对于数据相关操作函数比如reduce, map, filter等，callback必须有return
        'array-callback-return': 2,
        // error; 把var关键字看成块级作用域，防止变量提升导致的bug
        'block-scoped-var': 2,
        // error; 要求在Class里面合理使用this，如果某个方法没有使用this,则应该申明为静态方法
        'class-methods-use-this': 2,
        // off; 关闭代码复杂度限制
        'complexity': 0,
        // error; switch case语句里面一定需要default分支
        'default-case': 2,
        // warn: 代码中使用了alert给出警告
        'no-alert': 1,
        // error; 不允许使用空函数，除非在空函数里面给出注释说明
        'no-empty-function': 2,
        // off; foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法
        'no-eq-null': 0,
    }
};
