import {Component,Inject} from '@angular/core'

import  * as Redux  from 'redux';

import { LayoutStore } from '../app-state/laytout/layout.store';
import { LayoutState } from '../app-state/laytout/layout.state';
import * as LayoutActions from '../app-state/laytout/layout.actions';

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent{
  layout : LayoutState;
  constructor(@Inject(LayoutStore) private layoutStore: Redux.Store<LayoutState>) {
    layoutStore.subscribe(()=> this.readLayoutState());
    this.readLayoutState();
  }
  readLayoutState(): void {
    this.layout = this.layoutStore.getState();
      }
}
