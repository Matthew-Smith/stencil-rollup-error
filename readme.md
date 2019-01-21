# Stencil error with rollup-plugin-node-globals
As of January 21th 2019

This is a simple Test repo to show an error that happens when trying to use the `rollup-plugin-node-globals` plugin with a stencil app
  * **NOTE** the `rollup-plugin-node-builtins` plugin is added to as it is part of the instructions from stencil's documentation

Following the [stencil module-bundling instructions](https://stenciljs.com/docs/module-bundling) to add the plugin this is the error output seen:
```bash
[ ERROR ]  Rollup: Plugin Error
           Unexpected token (5:17675) in
           /Users/matthewsmith/replicant/stencil-rollup-test/node_modules/@stencil/state-tunnel/dist/esm/es5/stencil-state-tunnel.core.js
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

Or to run with debug output:
```bash
./node_modules/@stencil/core/bin/stencil build --debug
```
