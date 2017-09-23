import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';

import { CounterState } from './counter.state';
import {
  counterReducer as reducer
} from './counter.reducer';

export const CounterStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<CounterState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

export function createCounterStore(): Store<CounterState> {
  return createStore<CounterState>(
    reducer,
    compose(devtools)
  );
}

export const counterStoreProviders = [
   { provide: CounterStore, useFactory: createCounterStore }
];
