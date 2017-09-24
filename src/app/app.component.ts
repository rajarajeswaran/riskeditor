import { Component,  Inject } from '@angular/core';
import  * as Redux  from 'redux';


import { CounterStore } from './app-state/counter/counter.store';
import { CounterState } from './app-state/counter/Counter.state';
import * as CounterActions from './app-state/counter/counter.actions';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public isCollapsed = true;

  title = 'Risk Editor';
  counter: number;



    constructor(@Inject(CounterStore) private store: Redux.Store<CounterState>) {
      store.subscribe(() => this.readState());
      this.readState();


    }

    readState() {
      const state: CounterState = this.store.getState() as CounterState;
      this.counter = state.counter;
    }

    increment() {
      this.store.dispatch(CounterActions.increment());
    }

    decrement() {
      this.store.dispatch(CounterActions.decrement());
    }

}
