import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule,JsonpModule  } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';

import { WikiService } from './wiki/wiki.service';
import { InsuredService } from './insured/insured.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers:[
    WikiService,
    InsuredService
  ],
  exports:[

  ]
})
export class ResourceModule { }
