import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import {Jsonp, URLSearchParams, RequestOptions,Headers, ResponseContentType} from '@angular/http';
import { kvp } from '../resource.model';
import { _ } from 'lodash';

@Injectable()
export class InsuredService {

  constructor(private _http: Http) {}

      search(term: string) {
        if (term === '') {
          return Observable.of([]);
        }

        let insuredServiceUrl = 'http://webservices-ci.globaldev.local/rest/api/Insured'
        let params = new URLSearchParams();
        params.append('term', term);
        params.append('skip', '0');
        params.append('take', '10');

        return this._http
        .get(insuredServiceUrl,{params:params,withCredentials:true})
        .map(response =>  <any[]>response.json())
        .map(items =>    items.map(item => <kvp>{key : item.Id, value : item.Name, data:item}));
      }

}

@Injectable()
export class CurrencyService {

    constructor(private _http: Http) {}

        search(term: string) {
          if (term === '') {
            return Observable.of([]);
          }

          //let currencyServiceUrl = 'http://webservices-ci.globaldev.local/rest/api/Currency'
          let currencyServiceUrl = './assets/data/currency.json'
          let params = new URLSearchParams();
          params.append('term', term);
          params.append('skip', '0');
          params.append('take', '10');

          return this._http
          .get(currencyServiceUrl,{params:params,withCredentials:true})
          .map(response =>  <any>response.json())
          .map(itemsGroup =>  <any[]>( new Array(...[], ...itemsGroup.Exact || [], ...itemsGroup.Top|| [], ...itemsGroup.Other|| [])))
          .map(items =>    items.map(item => <kvp>{key : item.Psu, value : item.Name, data:item}));
        }

  }


  @Injectable()
  export class UnderwriterService {
      constructor(private _http: Http) {}
          search(term: string) {
            if (term === '') {
              return Observable.of([]);
            }

            //let underwriterServiceUrl = 'http://webservices-ci.globaldev.local/rest/api/Underwriter'
            let underwriterServiceUrl = './assets/data/underwriter.json'
            let params = new URLSearchParams();
            params.append('term', term);
            params.append('skip', '0');
            params.append('take', '10');

            return this._http
            .get(underwriterServiceUrl,{params:params,withCredentials:true})
            .map(response =>  <any>response.json())
            .map(items =>    items.map(item => <kvp>{key : item.Code, value : item.Name, data:item}));
          }
    }

    @Injectable()
    export class DomicileService {
        constructor(private _http: Http) {}
            search(term: string) {
              if (term === '') {
                return Observable.of([]);
              }

              //let domicileServiceUrl = 'http://webservices-ci.globaldev.local/rest/api/Domicile';
              let domicileServiceUrl = './assets/data/domicile.json';
              let params = new URLSearchParams();
              params.append('term', term);
              params.append('skip', '0');
              params.append('take', '10');

              return this._http
              .get(domicileServiceUrl,{params:params,withCredentials:true})
              .map(response =>  <any>response.json())
              .map(itemsGroup =>  <any[]>( new Array(...[], ...itemsGroup.Exact || [], ...itemsGroup.Top|| [], ...itemsGroup.Other|| [])))
              .map(items =>    items.map(item => <kvp>{key : item.Code, value : item.Name, data:item}));
            }
      }
      @Injectable()
      export class PolicyStatusService {
          constructor(private _http: Http) {}
              search(term: string) {
                if (term === '') {
                  return Observable.of([]);
                }

                //let policyStatusServiceUrl = 'http://webservices-ci.globaldev.local/rest/api/PolicyStatus';
                let policyStatusServiceUrl = './assets/data/policystatus.json'
                let params = new URLSearchParams();
                params.append('term', term);
                params.append('skip', '0');
                params.append('take', '10');

                return this._http
                .get(policyStatusServiceUrl,{params:params,withCredentials:true})
                .map(response =>  <any>response.json())
                .map(items =>    items.map(item => <kvp>{key : item.Code, value : item.Description, data:item}));
              }
        }


        @Injectable()
        export class BrokerService {
            constructor(private _http: Http) {}
                search(term: string) {
                  if (term === '') {
                    return Observable.of([]);
                  }

                //  let brokerServiceUrl = 'http://webservices-ci.globaldev.local/rest/api/Broker'
                  let brokerServiceUrl = './assets/data/broker.json'
                  let params = new URLSearchParams();
                  params.append('term', term);
                  params.append('skip', '0');
                  params.append('take', '10');

                  return this._http
                  .get(brokerServiceUrl,{params:params,withCredentials:true})
                  .map(response =>  <any>response.json())
                  .map(items =>    items.map(item => <kvp>{key : item.Code, value : item.Name, data:item}));
                }
          }



        @Injectable()
        export class OfficeService {
            constructor(private _http: Http) {}
                search(term: string) {
                  if (term === '') {
                    return Observable.of([]);
                  }

                  //let officeServiceUrl = 'http://webservices-ci.globaldev.local/rest/api/Office'
                  let officeServiceUrl = './assets/data/office.json'
                  let params = new URLSearchParams();
                  params.append('term', term);
                  params.append('skip', '0');
                  params.append('take', '10');

                  return this._http
                  .get(officeServiceUrl,{params:params,withCredentials:true})
                  .map(response =>  <any>response.json())
                  .map(items =>    items.map(item => <kvp>{key : item.Code, value : item.Name, data:item}));
                }
          }

