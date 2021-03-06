import { Config } from '@stencil/core';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ],
  plugins: [
    globals(),
    builtins(),
  ]
};
