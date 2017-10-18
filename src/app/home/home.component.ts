import {Component,Inject, OnInit} from '@angular/core'

import  * as Redux  from 'redux';

import { AppStore } from '../app-state/app.store';
import { AppState } from '../app-state/app.state';
import { LayoutState } from '../app-state/laytout/layout.state';
import { LayoutReducer, getLayoutState } from '../app-state/laytout/layout.reducer';
import * as LayoutActions from '../app-state/laytout/layout.actions';
import { RiskState  } from '../app-state/risk/risk.state';
import { RiskReducer, getRiskState, getRiskIds } from '../app-state/risk/risk.reducer';
import * as RiskActions from '../app-state/risk/risk.actions';

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit {

  riskIds : string[];
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readAppState());

  }
    ngOnInit(): void {
      this.readAppState();
    }
    readAppState(): void {
      this.riskIds = getRiskIds(this.store.getState());
        }
      }
