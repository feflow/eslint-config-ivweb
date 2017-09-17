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
| [complexity][https://eslint.org/docs/rules/complexity] | off | 关闭代码复杂度限制 |
| [default-case](https://eslint.org/docs/rules/default-case) | error | switch case语句里面一定需要default分支 |
| [no-alert](https://eslint.org/docs/rules/no-alert) | warn | 代码中使用了alert给出警告 |
| [no-empty-function](https://eslint.org/docs/rules/no-empty-function) | error | 不允许使用空函数，除非在空函数里面给出注释说明 |
| [no-eq-null](https://eslint.org/docs/rules/no-eq-null)| off | foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法 |
