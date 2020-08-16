---
title: Hot Module Replacement in AngularJS with babel-plugin
date: '2019-12-08'
description: >-
  _Learn how to enable Hot Module Replacement in your AngularJS project. This tutorial shows you how to setup Hot Reloading with a simple Babel plugin in Webpack._
keywords:
  - JavaScript
  - AngularJS
  - Hot Module Replacement
  - Babel
  - Webpack
---

> **Note:**
> In 2020 AngularJS will turn 10 years old and with it's final sunset is only 1.5 years away (on [June 30, 2021](https://blog.angular.io/stable-angularjs-and-long-term-support-7e077635ee9c)) you should not start to write new applications using AngularJS!

Despite its age there are still some AngularJS applications out there.
While the most websites on the internet already have replaced AngularJS by something newer, there are still some pretty large AngularJS applications alive behind the safe firewalls of company-intranets.
So if you still have to deal with AngularJS there is some good news: While upgrading from AngularJS may not be an option for you, you can still give your development experience a decent upgrade by enabling hot-module-replacement on your project.

# Upgrade your developer experience by using Hot-Module-Replacement

The only requirement for this is that your project is already uses a bundler (like [webpack](https://webpack.js.org/) or [Parcel](https://parceljs.org/)) which supports hot-module-replacement (HMR) and [babel](https://babeljs.io/) to transform your source.

Next install the `babel-plugin-ng-hot-reload` package from npm:

```sh
npm i -D babel-plugin-ng-hot-reload     # npm or
yarn add -D babel-plugin-ng-hot-reload  # yarn
```

Now, update your `.babelrc.js` file and add the newly installed plugin:

```js
// .babelrc.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, // <- The plugin works with es-modules!
      },
    ],
  ],
  plugins: ['babel-plugin-ng-hot-reload'],
};
```

When you are using Parcel no other configuration is necessary.
If you're using webpack, make sure to enable hot-module-replacement in your `webpack.config.js`:

```diff
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  mode: 'development,
  entry: [
+   `${require.resolve('webpack-dev-server/client')}?/`,
+   require.resolve('webpack/hot/only-dev-server'),
    './src/index.js'
  ],
  output: {
    path: 'dist',
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
      ...
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    ...
+   new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
+   hot: true,
  },
};
```

Now you can edit your HTML, CSS or JavaScript files and they should be replaced without a reload of your application.

Fore some more advanced use-cases here are some examples available on CodeSandbox:

- [Webpack / JavaScript demo on CodeSandbox ](https://codesandbox.io/s/github/ofhouse/babel-plugin-ng-hot-reload/tree/master/examples/javascript-webpack)
  - Uses `angular` as global variable
- [Webpack / TypeScript demo on CodeSandbox](https://codesandbox.io/s/github/ofhouse/babel-plugin-ng-hot-reload/tree/master/examples/typescript-webpack)
  - Uses TypeScript babel-preset
  - Uses [`angularjs-annotate`](https://github.com/schmod/babel-plugin-angularjs-annotate) babel-plugin
  - Uses Lazy-Loading provided by [`ocLazyLoad`](https://oclazyload.readme.io/)
- [Parcel / TypeScript demo on GitHub](https://github.com/ofhouse/babel-plugin-ng-hot-reload/tree/master/examples/typescript-parcel)
  (_Does not run on CodeSandbox_)
  - Uses Parcel instead of webpack

# Some words about `babel-plugin-ng-hot-reload`

Under the hood the plugin relies on the solid work of the [`ng-hot-reload`](https://github.com/noppa/ng-hot-reload) library by [Oskari Noppa](https://github.com/noppa).
Since this library originally provides a webpack-loader the usage was limited to webpack.
Another limitation from the loader is that it is only compatible with `commonJS` modules created by babel, so if your are using `import` and `export` syntax it gets rewritten to `require('...')` and `module.exports = {...}` which is incompatible with tree-shaking.

This babel-plugin takes a deeper look at your code by preserving the `import`s and `export`s and only adds the code required for the hot-reload to the modules which are interacting with angular.
So the code for the browser is less bloated and can use the same tree-shaking like the production version (Lazy-loaded AngularJS modules are also supported by the plugin).

If you want to know more, the the plugin and the examples are open source and available here:
{% github ofhouse/babel-plugin-ng-hot-reload %}
