# eslint-config-ivweb

ESLint shareable config for the IVWEB JavaScript style guide.


## Installation

```
$ npm install --save-dev eslint eslint-config-ivweb
```


## Usage

Once the `eslint-config-ivweb` package is installed, you can use it by specifying `ivweb` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "ivweb",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `ivweb` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that IVWEB style is not opinionated about that you might want to enforce in your project.

To use IVWEB style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `ivweb` last:

```js
{
  "extends": ["eslint:recommended", "ivweb"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

To see how the `ivweb` config compares with `eslint:recommended`, refer to the [source code of `index.js`](https://github.com/iv-web/eslint-config-ivweb/blob/master/index.js), which lists every ESLint rule along with whether (and how) it is enforced by the `ivweb` config.


## License

Apache-2 © IVWEB
