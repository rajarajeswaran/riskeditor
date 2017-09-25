import { Component,  Inject } from '@angular/core';
import  * as Redux  from 'redux';


import { RiskStore } from './../app-state/risk/risk.store';
import { RiskState } from './../app-state/risk/risk.state';
import * as RiskActions from './../app-state/risk/risk.actions';


@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent  {
  risk : RiskState;
  constructor(@Inject(RiskStore) private riskStore: Redux.Store<RiskState>) {
    riskStore.subscribe(()=> this.readRiskState());
    this.readRiskState();
  }

  readRiskState() {
    const state: RiskState = this.riskStore.getState() as RiskState;
    this.risk = state;

  }

  setCurrentRisk(){
    this.riskStore.dispatch(RiskActions.setCurrentRisk())
  };

}
