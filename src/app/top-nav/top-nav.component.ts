import { Component, OnInit, Inject } from '@angular/core';
import  * as Redux  from 'redux';


import { AppStore } from '../app-state/app.store';
import { AppState } from '../app-state/app.state';
import { LayoutState } from '../app-state/laytout/layout.state';
import * as LayoutActions from '../app-state/laytout/layout.actions';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  public isCollapsed = true;
  layout : LayoutState;
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(()=> this.readLayoutState());
    this.readLayoutState();
  }

  ngOnInit() {
  }
  readLayoutState(): void {

      }

  addWindow(){
    this.store.dispatch(LayoutActions.addWindow())
  };

}
