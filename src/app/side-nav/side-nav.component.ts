import { Component, OnInit, Inject } from '@angular/core';
import  * as Redux  from 'redux';

import { AppStore } from '../app-state/app.store';
import { AppState } from '../app-state/app.state';
import { getRiskIds, getRiskById } from '../app-state/risk/risk.reducer';
import * as RiskActions from '../app-state/risk/risk.actions';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  riskIds : string[];
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readAppState());
  //  this.readLayoutState();
  }
  ngOnInit(): void {
    this.readAppState();
  }
  readAppState(): void {
    this.riskIds = getRiskIds(this.store.getState());
      }
setCurrentRisk(riskId:string){
  var risk = getRiskById(this.store.getState())(Number.parseInt(riskId)-1)
      this.store.dispatch(RiskActions.setCurrentRisk(risk));
    }
}


