import { Component,  Inject, Input, OnInit } from '@angular/core';
import  * as Redux  from 'redux';


import { AppStore } from './../app-state/app.store';
import { AppState } from './../app-state/app.state';
import { RiskState } from './../app-state/risk/risk.state';
import * as RiskActions from './../app-state/risk/risk.actions';
import {Risk} from './../app-state/risk/risk.model'
import { getRiskState, getRiskById } from '../app-state/risk/risk.reducer';


@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent  implements OnInit  {

  @Input() riskId: string;
  risk : Risk;
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readRiskState());
  }

  ngOnInit(): void {
    this.readRiskState();
  }
  readRiskState() {
    var riskTemp = getRiskById(this.store.getState())(Number.parseInt(this.riskId)-1);
    if(this.risk !=  riskTemp )
      this.risk = riskTemp;
  }

}
