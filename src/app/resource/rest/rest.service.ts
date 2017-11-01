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

        let insuredServiceUrl = 'http://localhost:17743/api/Insured'
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

          let currencyServiceUrl = 'http://localhost:17743/api/Currency'
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

            let underwriterServiceUrl = 'http://localhost:17743/api/Underwriter'
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
