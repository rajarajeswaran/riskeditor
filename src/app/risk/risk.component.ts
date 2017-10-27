import { Component,  Inject, Input, OnInit, Injectable } from '@angular/core';

import  * as Redux  from 'redux';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';



import { AppStore } from './../app-state/app.store';
import { AppState } from './../app-state/app.state';
import { RiskState } from './../app-state/risk/risk.state';
import * as RiskActions from './../app-state/risk/risk.actions';
import {Risk} from './../app-state/risk/risk.model'
import { getRiskState, getRiskById } from '../app-state/risk/risk.reducer';
import { WikiService } from '../resource/wiki/wiki.service';
import { InsuredService } from '../resource/insured/insured.service';




@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']

})
export class RiskComponent  implements OnInit  {

  @Input() riskId: string;
  risk : Risk;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>, private _service: WikiService, private _insuredService: InsuredService) {
    store.subscribe(()=> this.readRiskState());
  }

  ngOnInit(): void {
    this.readRiskState();
  }
  readRiskState() {
    var riskTemp = getRiskById(this.store.getState())(Number.parseInt(this.riskId)-1);
    if(this.risk !=  riskTemp )
      this.risk = riskTemp;

  }
  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  search = (text$: Observable<string>) =>  text$
    .debounceTime(300)
    .distinctUntilChanged()
    .do(() => this.searching = true)
    .switchMap(term =>
      this._service.search(term)
        .do(() => this.searchFailed = false)
        .catch(() => {
          this.searchFailed = true;
          return Observable.of([]);
        }))
    .do(() => this.searching = false)
    .merge(this.hideSearchingWhenUnsubscribed);



    insuredSearching = false;
    insuredSearchFailed = false;
    insuredHideSearchingWhenUnsubscribed = new Observable(() => () => this.insuredSearching = false);
    insuredSearch = (text$: Observable<string>) =>  text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.insuredSearching = true)
      .switchMap(term =>
        this._insuredService.search(term)
          .do(() => this.insuredSearchFailed = false)
          .catch((e) => {
            this.insuredSearchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.insuredSearching = false)
      .merge(this.insuredHideSearchingWhenUnsubscribed);
      insuredDisplayFormat = (insobj) => <string>(insobj.Name);
      insuredresultFormatter = (insobj) => <string>(insobj.Name);
}
