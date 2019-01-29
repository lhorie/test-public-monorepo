/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env browser */
import * as React from 'react';

import FusionApp, {createPlugin, CriticalChunkIdsToken} from 'fusion-core';
import {prepare} from './async/index.js';
import PrepareProvider from './async/prepare-provider';
import {registerInjector, withServices} from './injector.js';

import serverRender from './server';
import clientRender from './client';

import ProviderPlugin from './plugin';
import ProvidedHOC from './hoc';
import Provider from './provider';

declare var __NODE__: Boolean;

export default class App extends FusionApp {
  constructor(root: React.Element<*>, render: ?(React.Element<*>) => any) {
    if (!React.isValidElement(root))
      throw new Error(
        'Invalid React element. Ensure your root element is a React.Element (e.g. <Foo />) and not a React.Component (e.g. Foo)'
      );
    const renderer = createPlugin({
      deps: {
        criticalChunkIds: CriticalChunkIdsToken.optional,
      },
      provides() {
        return (el: React.Element<*>) => {
          return prepare(el).then(() => {
            if (render) {
              return render(el);
            }
            return __NODE__ ? serverRender(el) : clientRender(el);
          });
        };
      },
      middleware({criticalChunkIds}) {
        return (ctx, next) => {
          if (__NODE__ && !ctx.element) {
            return next();
          }

          const markAsCritical = __NODE__
            ? chunkId => {
                // Push to legacy context for backwards compat w/ legacy SSR template
                ctx.preloadChunks.push(chunkId);

                // Also use new service if registered
                if (criticalChunkIds) {
                  let chunkIds = criticalChunkIds.from(ctx);
                  chunkIds.add(chunkId);
                }
              }
            : noop;
          ctx.element = (
            <PrepareProvider markAsCritical={markAsCritical}>
              {ctx.element}
            </PrepareProvider>
          );
          return next();
        };
      },
    });
    super(root, renderer);
    registerInjector(this);
  }
}

export {ProviderPlugin, ProvidedHOC, Provider, withServices};

function noop() {}

export * from './async/index.js';
