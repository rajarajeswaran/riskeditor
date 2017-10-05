import { Component,  Inject } from '@angular/core';

import * as Redux from 'redux';

import { AppStore } from './app-state/app.store';
import { AppState } from './app-state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isCollapsed = true;
  public isCollapsed1 = false;

  title = 'Risk Editor';

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {

  }


}
