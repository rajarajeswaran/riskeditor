import { Component, OnInit, Inject } from '@angular/core';
import  * as Redux  from 'redux';

import { LayoutStore } from '../app-state/laytout/layout.store';
import { LayoutState } from '../app-state/laytout/layout.state';
import * as LayoutActions from '../app-state/laytout/layout.actions';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  layout : LayoutState;
  constructor(@Inject(LayoutStore) private layoutStore: Redux.Store<LayoutState>) {
    layoutStore.subscribe(()=> this.readLayoutState());
    this.readLayoutState();
  }
  readLayoutState(): void {
    this.layout = this.layoutStore.getState();
      }
  ngOnInit() {
  }

}
