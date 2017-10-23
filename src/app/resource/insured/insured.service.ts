import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { HttpParams } from '@angular/common/http';
import {Jsonp, URLSearchParams, RequestOptions,Headers, ResponseContentType} from '@angular/http';
import { kvp } from '../resource.model';

@Injectable()
export class InsuredService {

  constructor(private _http: Http) {}

      search(term: string) {
        if (term === '') {
          return Observable.of([]);
        }

        let wikiUrl = 'http://webservices-ci.globaldev.local/rest/api/Insured';
        let params = new URLSearchParams();
        params.append('term', term);
        params.append('skip', '1');
        params.append('take', '1');

        return this._http
        .get(wikiUrl,{params:params})
        .map(response => <kvp[]> response[1]);
      }

}
