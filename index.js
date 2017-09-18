'use strict';

module.exports = {
    rules: {
        /* section1 : 可能存在的错误 */
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

        /* section2: 最佳实践 */
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
        // error; 代码中不允许使用eval
        'no-eval': 2,
        // error; 禁止修改原生对象
        'no-extend-native': 2,
        // error; 禁止出现没必要的 bind
        'no-extra-bind': 2,
        // error; 表示小数时，禁止省略 0，比如 .5
        'no-floating-decimal': 2,
        // off; 允许这些写法，性能上更好
        'no-implicit-coercion': 0,
        // error; 浏览器端不允许定义全局变量和全局函数，可以通过挂载到window对象上和使用IIFE表达式
        'no-implicit-globals': 2,
        // off; this的使用比较灵活
        'no-invalid-this': 0,
        // error; 禁止使用 __iterator__
        'no-iterator': 2,
        // error; 禁止使用没必要的 {} 作为代码块
        'no-lone-blocks': 2,
        // off; 允许代码里面使用魔法数（多次使用，没有使用枚举的方式进行定义的数字）
        'no-magic-numbers': 0,
        // error; 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
        'no-multi-spaces': [
            2,
            {
                ignoreEOLComments: true,
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],
        // error; 禁止使用/来进行字符串换行
        'no-multi-str': 2,
        // error; 禁止直接 new 一个类而不赋值
        'no-new': 2,
        // error; 禁止使用 new Function，比如 const expression = new Function("a", "b", "return a + b");
        'no-new-func': 2,
        // error; 对于JS的原始类型比如String, Number, Boolean等，不允许使用new 操作符
        'no-new-wrappers': 2,
        // error; 禁止使用八进制的转义符比如 "Copyright \251"
        'no-octal-escape': 2,
        // error; 禁止对函数的参数重新赋值
        'no-param-reassign': 2,
        // error; 禁止直接使用__proto__属性，可以使用getPrototypeOf替代
        'no-proto': 2,
        // error; return语句中禁止进行赋值语句操作
        'no-return-assign': 2,
        // error; 禁止在 return 语句里使用 await
        'no-return-await': 2,
        // off; 允许location.href = 'javascript:void(0)'的形式
        'no-script-url': 0,
        // error; 禁止throw一个字面量，比如 throw 2, throw "error";
        'no-throw-literal': 2,
        // error; 禁止出现没必要的 call 或 apply
        'no-useless-call': 2,
        // error; 禁止出现没必要的字符串拼接，比如 'hello' + 'world'，可以直接写成'hello world'
        'no-useless-concat': 2,
        // off; 对return的使用不进行限制
        'no-useless-return': 0,
        // error; 禁止在代码里面出现void
        'no-void': 2,
        // off; TODO 和 FIXME 类型的注释用的比较多，不限制
        'no-warning-comments': 0,
        // error; 代码里面禁止使用 with 表达式
        'no-with': 2,
        // error; Promise 的 reject方法必须传入 Error 对象，而不能是字面量
        'prefer-promise-reject-errors': 2,
        // off; parseInt的时候第二个参数可以不传入，默认就是10进制
        'radix': 0,
        // error; async函数里面必须有await
        'require-await': 2,
        // off; var变量定义没必要限制太严格
        'vars-on-top': 0,
    }
};
