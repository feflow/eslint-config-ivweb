eslint-config-ivweb
===========================

[![npm package](https://img.shields.io/npm/v/eslint-config-ivweb.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-ivweb)
[![NPM downloads](http://img.shields.io/npm/dt/eslint-config-ivweb.svg?style=flat-square)](https://npmjs.org/package/eslint-config-ivweb)

腾讯IVWEB团队ESLint共享配置规则

## 安装

```
$ npm install --save-dev eslint eslint-plugin-react eslint-config-ivweb
```

## 文档
* [介绍](docs/eslint-standard.md)
* [规则解释](docs/RULE.md)

## 使用
一旦`eslint-config-ivweb`安装成功，你可以通过[ESLint配置文件]((http://eslint.org/docs/user-guide/configuring)) 中的字段extends中使用它

```js
{
  "extends": "ivweb",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### 配合`eslint:recommended`使用`ivweb`
有部分[eslint:recommended](http://eslint.org/docs/rules/)提到的规则在ivweb中没有提到，因此最好配合eslint:recommend一起使用。

只需要同时继承eslint:recommend 和 ivweb 即可，确保 ivweb 放置在最后。部分eslint:recommend定义的规则有点严格，ivweb里面有做定制化的修改。

```js
{
  "extends": ["eslint:recommended", "plugin:react/recommended", "ivweb"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## 如何贡献

1. 从目前已经存在的issue或者提出一个新的issue去讨论新的特性或者存在的bug.
2. 在Github上Fork [仓库](https://github.com/feflow/eslint-config-ivweb)_，然后在master或者其它分支上开始进行您的修改.
3. 编写测试用力表明某个bug被修复掉了或者新的特性可以正常工作.
4. 提交PR直到它被merge或者发布出去了. :) 记得把您添加进 [AUTHORS_](AUTHORS).

## 版本日志

[版本日志](CHANGELOG.md)

## 许可证

Apache-2 © IVWEB
