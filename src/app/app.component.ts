import { Component,  Inject } from '@angular/core';
import  * as Redux  from 'redux';


import { CounterStore } from './app-state/counter/counter.store';
import { CounterState } from './app-state/counter/Counter.state';
import * as CounterActions from './app-state/counter/counter.actions';


import { RiskStore } from './app-state/risk/risk.store';
import { RiskState } from './app-state/risk/risk.state';
import * as RiskActions from './app-state/risk/risk.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public isCollapsed = true;

  title = 'Risk Editor';
  counter: number;

  risk : RiskState;

    constructor(@Inject(CounterStore) private store: Redux.Store<CounterState>, @Inject(RiskStore) private riskStore: Redux.Store<RiskState>) {
      store.subscribe(() => this.readState());
      this.readState();

      riskStore.subscribe(()=> this.readRiskState());
      this.readRiskState();
    }

    readState() {
      const state: CounterState = this.store.getState() as CounterState;
      this.counter = state.counter;
    }
    readRiskState() {
      const state: RiskState = this.riskStore.getState() as RiskState;
      this.risk = state;

    }

    setCurrentRisk(){
      console.log('clicked');
      this.riskStore.dispatch(RiskActions.setCurrentRisk())
    };
    increment() {
      this.store.dispatch(CounterActions.increment());
    }

    decrement() {
      this.store.dispatch(CounterActions.decrement());
    }

}
