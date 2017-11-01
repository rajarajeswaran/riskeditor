import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appStoreProviders } from './../app-state/app.store';
import { RiskComponent } from './risk.component';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
// import { HttpModule,JsonpModule  } from '@angular/http';
import { ResourceModule } from '../resource/resource.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule,

    ResourceModule
  ],
  declarations: [
    RiskComponent],
  providers:[
    appStoreProviders
  ],
  exports:[
    RiskComponent
  ]
})
export class RiskModule { }
