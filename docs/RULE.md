## 规则列表

| 规则名称        | 错误级别           | 说明  |
| :------------- |:-------------| :-----|
| [for-direction](https://eslint.org/docs/rules/for-direction) | error | for 循环的方向要求必须正确 |
| [getter-return](https://eslint.org/docs/rules/getter-return)      | error | getter必须有返回值，并且禁止返回值为undefined, 比如 return;  |
| [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)| off | 允许在循环里面使用await |
| [no-console](https://eslint.org/docs/rules/no-console) | off | 允许在代码里面使用console |
| [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins) | warn | 直接调用对象原型链上的方法 |
| [valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc) | off | 函数注释一定要遵守jsdoc规则 |
| [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string) | warn | 在字符串里面出现{和}进行警告 |
| [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs) | warn | getter和setter没有成对出现时给出警告 |
| [array-callback-return](https://eslint.org/docs/rules/array-callback-return) | error | 对于数据相关操作函数比如reduce, map, filter等，callback必须有return |
| [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var) | error | 把var关键字看成块级作用域，防止变量提升导致的bug |
| [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this) | error | 要求在Class里面合理使用this，如果某个方法没有使用this,则应该申明为静态方法 |
| [complexity](https://eslint.org/docs/rules/complexity) | off | 关闭代码复杂度限制 |
| [default-case](https://eslint.org/docs/rules/default-case) | error | switch case语句里面一定需要default分支 |
| [no-alert](https://eslint.org/docs/rules/no-alert) | warn | 代码中使用了alert给出警告 |
| [no-empty-function](https://eslint.org/docs/rules/no-empty-function) | error | 不允许使用空函数，除非在空函数里面给出注释说明 |
| [no-eq-null](https://eslint.org/docs/rules/no-eq-null)| off | foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法|
| [no-eval](https://eslint.org/docs/rules/no-eval)| error | 代码中不允许使用eval |
| [no-extend-native](https://eslint.org/docs/rules/no-extend-native) | error | 禁止修改原生对象 |
| [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind) | error | 禁止出现没必要的 bind |
| [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal) | error | 表示小数时，禁止省略 0，比如 .5 |
| [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion) | off | 允许这些写法，性能上更好 |
| [no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals) | error | 浏览器端不允许定义全局变量和全局函数，可以通过挂载到window对象上和使用IIFE表达式 |
| [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this) | off | this的使用比较灵活 |
| [no-iterator](https://eslint.org/docs/rules/no-iterator) | error | 禁止使用 __iterator__ |
| [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks) | error | 禁止使用没必要的 {} 作为代码块 |
| [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers) | error | 允许代码里面使用魔法数（多次使用，没有使用枚举的方式进行定义的数字） |
| [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces) | error | 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等 |
| [no-multi-str](https://eslint.org/docs/rules/no-multi-str) | error | 禁止使用/来进行字符串换行 |
| [no-new](https://eslint.org/docs/rules/no-new) | error | 禁止直接 new 一个类而不赋值 |
| [no-new-func](https://eslint.org/docs/rules/no-new-func) | error | 禁止使用 new Function，比如 const expression = new Function("a", "b", "return a + b"); |
| [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers) | error | 对于JS的原始类型比如String, Number, Boolean等，不允许使用new 操作符 |
| [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape) | error | 禁止使用八进制的转义符比如 "Copyright \251" |
| [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign) | error |禁止对函数的参数重新赋值 |
| [no-proto](https://eslint.org/docs/rules/no-proto) | error | 禁止直接使用__proto__属性，可以使用getPrototypeOf替代 |
| [no-return-assign](https://eslint.org/docs/rules/no-return-assign) | error | return语句中禁止进行赋值语句操作 |
| [no-return-await](https://eslint.org/docs/rules/no-return-await) | error | 禁止在 return 语句里使用 await |
| [no-script-url](https://eslint.org/docs/rules/no-script-url) | error | 允许location.href = 'javascript:void(0)'的形式 |
| [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal) | error | 禁止throw一个字面量，比如 throw 2, throw "error"; |
| [no-useless-call](https://eslint.org/docs/rules/no-useless-call) | error | 禁止出现没必要的 call 或 apply |
| [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat) | error | 禁止出现没必要的字符串拼接，比如 'hello' + 'world'，可以直接写成'hello world' |
| [no-useless-return](https://eslint.org/docs/rules/no-useless-return) | off | 对return的使用不进行限制 |
| [no-void](https://eslint.org/docs/rules/no-void) | error | 禁止在代码里面出现void |
| [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments) | off | TODO 和 FIXME 类型的注释用的比较多，不限制 |
| [no-with](https://eslint.org/docs/rules/no-with) | error | 代码里面禁止使用 with 表达式 |
| [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors) | error | Promise 的 reject方法必须传入 Error 对象，而不能是字面量 |
| [radix](https://eslint.org/docs/rules/radix) | error | parseInt的时候第二个参数可以不传入，默认就是10进制 |
| [require-await](https://eslint.org/docs/rules/require-await) | error | async函数里面必须有await |
| [vars-on-top](https://eslint.org/docs/rules/vars-on-top) | error | var变量定义没必要限制太严格 |
| [no-undefined](https://eslint.org/docs/rules/no-undefined) | error | 进制将undefined当成标志符 |
| [no-use-before-define]() | error | 变量使用之前必须进行定义 |
