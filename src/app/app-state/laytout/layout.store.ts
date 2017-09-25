import { InjectionToken } from '@angular/core';
import {  createStore,  Store,  compose,  StoreEnhancer} from 'redux';



import { LayoutState } from './layout.state';
import {
  LayoutReducer as reducer
} from './layout.reducer';

export const LayoutStore = new InjectionToken('layout.store');

const devtools: StoreEnhancer<LayoutState> =
window['devToolsExtension'] ?
window['devToolsExtension']() : f => f;

export function createLayoutStore(): Store<LayoutState> {
  return createStore<LayoutState>(
    reducer,
    compose(devtools)
  );
}

export const layoutStoreProviders = [
  { provide: LayoutStore, useClass: createLayoutStore }
];
