import {Component,Inject} from '@angular/core'

import  * as Redux  from 'redux';

import { AppStore } from '../app-state/app.store';
import { AppState } from '../app-state/app.state';
import { LayoutState } from '../app-state/laytout/layout.state';
import { LayoutReducer, getLayoutState } from '../app-state/laytout/layout.reducer';
import * as LayoutActions from '../app-state/laytout/layout.actions';
import { RiskState  } from '../app-state/risk/risk.state';
import { RiskReducer, getRiskState } from '../app-state/risk/risk.reducer';
import * as RiskActions from '../app-state/risk/risk.actions';

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent{
  layout : LayoutState;
  risk : RiskState;
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readAppState());
    this.readAppState();
  }
  readAppState(): void {
    this.layout = getLayoutState(this.store.getState());
    this.risk = getRiskState(this.store.getState());
      }
    }
