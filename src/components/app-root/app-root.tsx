import { Component, h } from '@stencil/core';
import '@stencil/router'

import * as bufferUtil from 'bufferutil';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  componentWillLoad() {
    if (bufferUtil) {
      console.log('buffer util exists');
    } else {
      console.log(`buffer util doesn't exist, but at least it compiled`);
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
