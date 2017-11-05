import { Component, OnInit, Inject } from '@angular/core';
import  * as Redux  from 'redux';


import { AppStore } from '../app-state/app.store';
import { AppState } from '../app-state/app.state';
import { LayoutState  } from '../app-state/laytout/layout.state';
import { LayoutReducer, getLayoutState } from '../app-state/laytout/layout.reducer';
import * as LayoutActions from '../app-state/laytout/layout.actions';

import { RiskState  } from '../app-state/risk/risk.state';
import { RiskReducer, getRiskState } from '../app-state/risk/risk.reducer';
import * as RiskActions from '../app-state/risk/risk.actions';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  public isCollapsed = true;

  risk : RiskState;
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readState());
    this.readState();
  }

  ngOnInit() {
  }
  readState(): void {

    this.risk = getRiskState(this.store.getState());
      }

  addRisk(){

    this.store.dispatch(RiskActions.addNewRisk())
  };

  editRisk(){

        this.store.dispatch(RiskActions.editRisk())
      };

}
