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
| [init-declarations](https://eslint.org/docs/rules/init-declarations) | off | 变量定义时强制赋值或者强制先定义后赋值有点严格 |
| [no-label-var](https://eslint.org/docs/rules/no-label-var) | error | 禁止label名称和var相同 |
| [no-undefined](https://eslint.org/docs/rules/no-undefined) | error | 进制将undefined当成标志符 |
| [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define) | error | 变量使用之前必须进行定义 |
| [no-undef](https://eslint.org/docs/rules/no-undef) | error | 禁止使用未定义的变量, typeof 后面的变量除外 |
| [array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline) | off | 数组前后括号必须换行的要求有点严格，不采纳 |
| [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing) | error | 数组的括号前后禁止有空格 |
| [array-element-newline](https://eslint.org/docs/rules/array-element-newline) | off | 数组里面的元素强制换行有点严格，不采纳 |
| [block-spacing](https://eslint.org/docs/rules/block-spacing) | off | 代码块如果在一行，则大括号内的首尾必须有空格，比如 function (a, b) { retur a + b; } |
| [brace-style](https://eslint.org/docs/rules/brace-style) | error | 大括号的用法要求 |
| [camelcase](https://eslint.org/docs/rules/camelcase) | error | 变量命名需要以驼峰命名法，对属性字段不做限制 |
| [capitalized-comments](https://eslint.org/docs/rules/capitalized-comments) | off | 注释的首字母必须大写，对此不做限制 |
| [comma-dangle](https://eslint.org/docs/rules/comma-dangle) | error | 默认不允许尾随逗号, ie8及以下浏览器会报错 |
| [comma-spacing](https://eslint.org/docs/rules/comma-spacing) | error | 逗号后面强制要求加空格 |
| [comma-style](https://eslint.org/docs/rules/comma-style) | error | 逗号必须写在最后面 |
| [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing) | error | 函数名和执行它的括号之间禁止有空格 |
| [func-name-matching](https://eslint.org/docs/rules/func-name-matching) | error | 函数赋值给变量时，函数名必须和赋值的变量名一致的限制不采纳 |
| [func-names](https://eslint.org/docs/rules/func-names) | off | 不限制匿名函数的命名问题 |
| [func-style](https://eslint.org/docs/rules/func-style) | off | 必须只使用函数申明或只使用函数表达式 |
| [id-blacklist](https://eslint.org/docs/rules/id-blacklist) | off | 变量黑名单，不采纳 |
| [id-length](https://eslint.org/docs/rules/id-length) | off | 变量命名长度不做限制 |
| [id-match](https://eslint.org/docs/rules/id-match) | off | 变量命令的字符需要在某个正则匹配规则里面，不采纳 |
| [indent](https://eslint.org/docs/rules/indent) | error | 一个缩进必须用四个空格替代, switch语句里面的case 2个空格 |
| [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes) | error | jsx 中的属性必须用双引号 |
| [key-spacing](https://eslint.org/docs/rules/key-spacing) | error | 对象字面量中冒号前面禁止有空格，后面必须有空格 |
| [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing) | error | 关键字前后必须要加上空格 |
| [line-comment-position](https://eslint.org/docs/rules/line-comment-position) | off | 注释的位置不进行限制 |
| [linebreak-style](https://eslint.org/docs/rules/linebreak-style) | off | 对换行符不限制 |
| [lines-around-comment](https://eslint.org/docs/rules/lines-around-comment) | off | 注释前后必须有空行的限制，不采纳 |
| [max-depth](https://eslint.org/docs/rules/max-depth) | error | 代码块嵌套的深度禁止超过 5 层 |
| [max-len](https://eslint.org/docs/rules/max-len) | error | 单行最多允许80个字符, 对包含url的行不进行此限制 |
| [max-lines](https://eslint.org/docs/rules/max-lines) | off | 某个文件能够放置的最大代码行数，不限制 |
| [max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks) | error | 回调函数嵌套禁止超过 3 层，多了请用 async await 替代 |
| [max-params](https://eslint.org/docs/rules/max-params) | error | 函数的参数禁止超过 10 个 |
| [max-statements](https://eslint.org/docs/rules/max-statements) | off | 一个函数块里面的语句行数的限制，不采纳 |
| [max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line) | off | 一行中的语句数量 |
| [multiline-ternary](https://eslint.org/docs/rules/multiline-ternary) | off | 三目元算语句换行限制，不采纳 |
| [new-cap](https://eslint.org/docs/rules/new-cap) | error | 构造函数的必须以大写字母开头 |
| [new-parens](https://eslint.org/docs/rules/new-parens) | error | new 后面类必须带上括号 |
| [newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call) | off | 链式调用必须换行的限制，不采纳 |
| [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor) | error | 禁止使用 Array 构造函数 |
| [no-bitwise](https://eslint.org/docs/rules/no-bitwise) | off | 位操作，不进行限制 |
| [no-continue](https://eslint.org/docs/rules/no-continue) | off | continue语句的使用，不限制 |
| [no-inline-comments](https://eslint.org/docs/rules/no-inline-comments) | off | 内联注释不限制 |
| [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if) | off | 允许单独使用if语句，而不配套使用else、else if等 |
| [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs) | error | 禁止混用空格和缩进 |
| [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign) | off | 连续赋值比如 a = b = c = 4; 不限制 |
| [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines) | off | 连续空行，不限制 |
| [no-negated-condition](https://eslint.org/docs/rules/no-negated-condition) | off | if里面不允许出现否定表达式， 不采纳 |
| [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary) | off | 允许三元表达式的嵌套使用 |
| [no-new-object](https://eslint.org/docs/rules/no-new-object) | error | 禁止直接 new Object |
| [no-plusplus](https://eslint.org/docs/rules/no-plusplus) | off | 允许使用 ++ 或 -- |
| [no-ternary](https://eslint.org/docs/rules/no-ternary) | off | 允许使用三元表达式 |
| [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces) | error | 禁止行尾部有空格 |
| [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle) | off | 允许变量名中出现下划线 |
| [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property) | error | 禁止属性前有空格，比如 foo. bar() |
| [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline) | error | 大括号内的首尾必须有换行 |
| [object-property-newline](https://eslint.org/docs/rules/object-curly-spacing) | off | 对象字面量内的属性每行必须只有一个，不采纳 |
| [one-var](https://eslint.org/docs/rules/one-var) | error | 声明变量时，禁止一条语句声明多个变量 |
| [one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line) | error | 变量申明必须每行一个 |
| [quotes](https://eslint.org/docs/rules/quotes) | error | 必须使用单引号 |
| [semi](https://eslint.org/docs/rules/semi) | error | 结尾必须有分号 |
| [semi-spacing](https://eslint.org/docs/rules/semi-spacing) | error | 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格 |
| [semi-style](https://eslint.org/docs/rules/semi-style) | error | 分号必须写在行尾，禁止在行首出现 |
| [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks) | error | if, function 等的大括号之前必须要有空格 |
| [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren) | error | function 的小括号前面必须有空格 |
| [space-in-parens](https://eslint.org/docs/rules/space-in-parens) | error | 小括号内的首尾禁止有空格 |
| [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops) | error | 操作符左右必须有空格, const ret = 'hello' + 'world'|
| [spaced-comment](https://eslint.org/docs/rules/spaced-comment) | off | 注释空格不限制 |
| [switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing) | error | case 子句冒号前禁止有空格，冒号后必须有空格 |
| [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style) | off | 箭头函数返回值可以只是一个值，没必须一定用大括号写成多条语句. |
| [arrow-parens](https://eslint.org/docs/rules/arrow-parens) | off | 箭头函数的参数必须用括号包裹起来，限制去掉。当只有一个参数时，没必要使用括号 |
| [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing) | error | 箭头函数的箭头前后必须有空格 |
| [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing) | error | generator 的 * 前面禁止有空格，后面必须有空格 |
| [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports) | error | 禁止import重复模块 |
| [no-var](https://eslint.org/docs/rules/no-var) | error | 禁止采用var去定义变量，必须使用let或者const |
| [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback) | off | 禁止采用var去定义变量，必须使用let或者const |
| [prefer-const](https://eslint.org/docs/rules/prefer-const) | error | 变量如果没有发生修改，则必须使用const进行命名 |
| [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring) | off | 强制使用结构的限制，不采纳 |
| [prefer-template](https://eslint.org/docs/rules/prefer-template) | off | 不强制使用模板字符串，字符串拼接也是可取的 |
| [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing) | error | ... 的后面禁止有空格 |
| [sort-imports](https://eslint.org/docs/rules/sort-imports) | off | import 排序不用限制|
| [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing) | error | 模板字符串内的首尾禁止有空格，比如${test}不要写成${ test } |
| [yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing) | error | yield* 后面必须加空格 |
