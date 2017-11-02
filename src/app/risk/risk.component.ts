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
import {kvp} from '../resource/resource.model';
import { InsuredService, CurrencyService, UnderwriterService, DomicileService, PolicyStatusService } from '../resource/rest/rest.service';




@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']

})
export class RiskComponent  implements OnInit  {

  @Input() riskId: string;
  risk : Risk;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>, private _insuredService: InsuredService,
    private _currencyService: CurrencyService, private _underwriterService:UnderwriterService,  private _domicileService:DomicileService,
    private _policyStatusService:PolicyStatusService) {
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

    xPolicyId : string;
    xDescription: string;
    xGUID: string;
    xInsured: kvp;
    xAccountYear:number;
    xCurrency:kvp;
    xUnderwriter:kvp;
    xDomicile:kvp;
    xPolicyStatus:kvp;

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
    insuredDisplayFormat = (insobj:kvp) => <string>(insobj.value);
    insuredresultFormatter = (insobj:kvp) => <string>(insobj.value);


    currencySearching = false;
    currencySearchFailed = false;
    currencyHideSearchingWhenUnsubscribed = new Observable(() => () => this.currencySearching = false);
    currencySearch = (text$: Observable<string>) =>  text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.currencySearching = true)
      .switchMap(term =>
        this._currencyService.search(term)
          .do(() => this.currencySearchFailed = false)
          .catch((e) => {
            this.currencySearchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.currencySearching = false)
      .merge(this.currencyHideSearchingWhenUnsubscribed);
      currencyDisplayFormat = (insobj:kvp) => <string>(insobj.value);
      currencyresultFormatter = (insobj:kvp) => <string>(insobj.value);


      underwriterSearching = false;
      underwriterSearchFailed = false;
      underwriterHideSearchingWhenUnsubscribed = new Observable(() => () => this.underwriterSearching = false);
      underwriterSearch = (text$: Observable<string>) =>  text$
        .debounceTime(300)
        .distinctUntilChanged()
        .do(() => this.underwriterSearching = true)
        .switchMap(term =>
          this._underwriterService.search(term)
            .do(() => this.underwriterSearchFailed = false)
            .catch((e) => {
              this.underwriterSearchFailed = true;
              return Observable.of([]);
            }))
        .do(() => this.underwriterSearching = false)
        .merge(this.underwriterHideSearchingWhenUnsubscribed);
        underwriterDisplayFormat = (insobj:kvp) => <string>(insobj.value);
        underwriterresultFormatter = (insobj:kvp) => <string>(insobj.value);


        domicileSearching = false;
        domicileSearchFailed = false;
        domicileHideSearchingWhenUnsubscribed = new Observable(() => () => this.domicileSearching = false);
        domicileSearch = (text$: Observable<string>) =>  text$
          .debounceTime(300)
          .distinctUntilChanged()
          .do(() => this.domicileSearching = true)
          .switchMap(term =>
            this._domicileService.search(term)
              .do(() => this.domicileSearchFailed = false)
              .catch((e) => {
                this.domicileSearchFailed = true;
                return Observable.of([]);
              }))
          .do(() => this.domicileSearching = false)
          .merge(this.domicileHideSearchingWhenUnsubscribed);
          domicileDisplayFormat = (insobj:kvp) => <string>(insobj.value);
          domicileresultFormatter = (insobj:kvp) => <string>(insobj.value);


          policyStatusSearching = false;
          policyStatusSearchFailed = false;
          policyStatusHideSearchingWhenUnsubscribed = new Observable(() => () => this.policyStatusSearching = false);
          policyStatusSearch = (text$: Observable<string>) =>  text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.policyStatusSearching = true)
            .switchMap(term =>
              this._policyStatusService.search(term)
                .do(() => this.policyStatusSearchFailed = false)
                .catch((e) => {
                  this.policyStatusSearchFailed = true;
                  return Observable.of([]);
                }))
            .do(() => this.policyStatusSearching = false)
            .merge(this.policyStatusHideSearchingWhenUnsubscribed);
            policyStatusDisplayFormat = (insobj:kvp) => <string>(insobj.value);
            policyStatusresultFormatter = (insobj:kvp) => <string>(insobj.value);
}
