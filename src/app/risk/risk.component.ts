import { Component,  Inject } from '@angular/core';
import  * as Redux  from 'redux';


import { RiskStore } from './../app-state/risk/risk.store';
import { RiskState } from './../app-state/risk/risk.state';
import * as RiskActions from './../app-state/risk/risk.actions';
import {Risk} from './../app-state/risk/risk.model'


@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent  {
  risk : Risk;
  constructor(@Inject(RiskStore) private riskStore: Redux.Store<RiskState>) {
    riskStore.subscribe(()=> this.readRiskState());
    this.readRiskState();
  }

  readRiskState() {
    this.riskStore.dispatch(RiskActions.addNewRisk())
    const state: RiskState = this.riskStore.getState() as RiskState;
    this.risk = state.risks[0];

  }

  setCurrentRisk(){
    this.riskStore.dispatch(RiskActions.setCurrentRisk())
  };

}
