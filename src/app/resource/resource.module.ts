import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule,JsonpModule  } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';

import { InsuredService, CurrencyService, UnderwriterService, DomicileService, PolicyStatusService } from './rest/rest.service';

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
    InsuredService,
    CurrencyService,
    UnderwriterService,
    DomicileService,
    PolicyStatusService
  ],
  exports:[

  ]
})
export class ResourceModule { }
