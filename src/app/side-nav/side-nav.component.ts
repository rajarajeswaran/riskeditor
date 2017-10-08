import { Component, OnInit, Inject } from '@angular/core';
import  * as Redux  from 'redux';

import { AppStore } from '../app-state/app.store';
import { AppState } from '../app-state/app.state';
import { LayoutState } from '../app-state/laytout/layout.state';
import * as LayoutActions from '../app-state/laytout/layout.actions';
import { getLayoutState } from '../app-state/laytout/layout.reducer';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  layout : LayoutState;
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readLayoutState());
  //  this.readLayoutState();
  }
  readLayoutState(): void {
    console.log('called layout')
    console.log(this.store.getState());

    var x = this.store.getState();
    console.log(x);
    console.log(getLayoutState(this.store.getState()));
    this.layout = getLayoutState(this.store.getState());
    console.log('called layout')
    console.log(this.layout);
      }
  ngOnInit() {
  }

}
