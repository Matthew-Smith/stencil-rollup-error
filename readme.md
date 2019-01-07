# Stencil error with rollup-plugin-node-globals
As of January 7th 2019

This is a simple Test repo to show an error that happens when trying to use the `rollup-plugin-node-globals` plugin with a stencil app

Following the [stencil module-bundling instructions](https://stenciljs.com/docs/module-bundling) to add the plugin this is the error output seen:
```bash
[ ERROR ]  Rollup: Plugin Error
           Unexpected token (5:17675) in
           /Users/matthewsmith/replicant/stencil-rollup-test/node_modules/@stencil/state-tunnel/dist/esm/es5/stencil-state-tunnel.core.js

[ ERROR ]  TypeError: Cannot read property 'cache' of undefined at
           /Users/matthewsmith/replicant/stencil-rollup-test/node_modules/@stencil/core/dist/compiler/index.js:24073:48
           at Generator.throw (<anonymous>) at rejected
           (/Users/matthewsmith/replicant/stencil-rollup-test/node_modules/@stencil/core/dist/compiler/index.js:30:65)
```

## init
clone this repo, navigate to it and execute
```bash
npm install
```

## Build
To build the app and see the error output:

```bash
npm run build
```
