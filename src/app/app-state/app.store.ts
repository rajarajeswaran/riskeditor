import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';

import {  default as reducer } from './app.reducer';
import {  AppState } from './app.state';

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> =
window['devToolsExtension'] ?
window['devToolsExtension']() : f => f;
export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    reducer,
    compose(devtools)
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];
