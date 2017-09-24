import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { riskStoreProviders } from './../app-state/risk/risk.store';
import { RiskComponent } from './risk.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RiskComponent],
  providers:[
    riskStoreProviders
  ],
  exports:[
    RiskComponent
  ]
})
export class RiskModule { }
