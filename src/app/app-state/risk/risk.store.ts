import { InjectionToken } from '@angular/core';
import {createStore,Store,compose,StoreEnhancer} from 'redux';

import {RiskState} from './risk.state';
import {RiskReducer} from './risk.reducer'


export const RiskStore = new InjectionToken('risk.store');

const devtools: StoreEnhancer<RiskState> =
window['devToolsExtension'] ?
window['devToolsExtension']() : f => f;



export function createRiskStore(): Store<RiskState> {
  return createStore<RiskState>(
    RiskReducer,
    compose(devtools)
  );
}

export const riskStoreProviders = [
  { provide: RiskStore, useFactory: createRiskStore }
];
