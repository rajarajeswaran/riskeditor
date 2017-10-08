import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appStoreProviders } from './../app-state/app.store';
import { RiskComponent } from './risk.component';



@NgModule({
  imports: [
    CommonModule
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
