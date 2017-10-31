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

        //let wikiUrl = 'http://webservices-ci.globaldev.local/rest/api/Insured';
        let wikiUrl = 'http://localhost:17743/api/Insured'
        let params = new URLSearchParams();
        params.append('term', term);
        params.append('skip', '0');
        params.append('take', '10');

        return this._http
        .get(wikiUrl,{params:params,withCredentials:true})
        .map(response =>  <any[]>response.json())
        .map(items =>    items.map(item => <kvp>{key : item.Id, value : item.Name, data:item}));
      }

}