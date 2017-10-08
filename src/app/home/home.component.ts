import {Component,Inject} from '@angular/core'

import  * as Redux  from 'redux';

import { AppStore } from '../app-state/app.store';
import { AppState } from '../app-state/app.state';
import { LayoutState } from '../app-state/laytout/layout.state';
import { LayoutReducer, getLayoutState } from '../app-state/laytout/layout.reducer';
import * as LayoutActions from '../app-state/laytout/layout.actions';

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent{
  layout : LayoutState;
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readLayoutState());
    this.readLayoutState();
  }
  readLayoutState(): void {
    this.layout = getLayoutState(this.store);
      }
}
