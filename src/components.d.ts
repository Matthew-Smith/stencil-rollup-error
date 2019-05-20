/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {
  interface AppHome {}
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes {}
  interface AppProfile extends JSXBase.HTMLAttributes {
    'match'?: MatchResults;
  }
  interface AppRoot extends JSXBase.HTMLAttributes {}

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

