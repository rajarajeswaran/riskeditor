import { Component,  Inject } from '@angular/core';
import  * as Redux  from 'redux';


import { AppStore } from './../app-state/app.store';
import { AppState } from './../app-state/app.state';
import { RiskState } from './../app-state/risk/risk.state';
import * as RiskActions from './../app-state/risk/risk.actions';
import {Risk} from './../app-state/risk/risk.model'
import { getRiskState } from '../app-state/risk/risk.reducer';


@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent  {
  risk : Risk;
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readRiskState());
      }

  readRiskState() {

    const state: RiskState = getRiskState(this.store.getState())
    this.risk = this.risk ? this.risk: state.risks[state.risks.length-1];
  }

  // setCurrentRisk(){
  //   this.store.dispatch(RiskActions.setCurrentRisk())
  // };

}
