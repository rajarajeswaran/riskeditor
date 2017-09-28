import { Component, OnInit, Inject } from '@angular/core';
import  * as Redux  from 'redux';


import { LayoutStore } from '../app-state/laytout/layout.store';
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
  constructor(@Inject(LayoutStore) private layoutStore: Redux.Store<LayoutState>) {
    layoutStore.subscribe(()=> this.readLayoutState());
    this.readLayoutState();
  }

  ngOnInit() {
  }
  readLayoutState(): void {

      }

  addWindow(){
    this.layoutStore.dispatch(LayoutActions.addWindow())
  };

}
