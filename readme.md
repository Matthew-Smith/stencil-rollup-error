# Stencil error with rollup-plugin-node-globals
As of January 21th 2019

This is a simple Test repo to show an error that happens when trying to use the `rollup-plugin-node-globals` plugin with a stencil app
  * **NOTE** the `rollup-plugin-node-builtins` plugin is added to as it is part of the instructions from stencil's documentation

Following the [stencil module-bundling instructions](https://stenciljs.com/docs/module-bundling) to add the plugin alongside a package that will use the globals such as `bufferutil` will produce this error:
```bash
[ ERROR ]  Rollup: 
           Could not load 7dba83a5ffbfed604f669155d84753 (imported by
           /Users/matthewsmith/replicant/stencil-rollup-test/node_modules/bufferutil/index.js): ENOENT: no such file or
           directory, open '7dba83a5ffbfed604f669155d84753'
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
npm run build --debug
```
