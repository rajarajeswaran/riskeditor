import { Component, OnInit, Inject, Input } from '@angular/core';
import { AppStore } from '../app-state/app.store';
import { AppState } from '../app-state/app.State';
import  * as Redux  from 'redux';
import { getRiskById } from '../app-state/risk/risk.reducer';
import { Risk } from '../app-state/risk/risk.model';

@Component({
  selector: 'app-risksummary',
  templateUrl: './risksummary.component.html',
  styleUrls: ['./risksummary.component.css']
})
export class RisksummaryComponent implements OnInit {
  risk : Risk;
  @Input() riskId: string;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
  store.subscribe(()=> this.readRiskState());
}
readRiskState(): any {
  var riskTemp = getRiskById(this.store.getState())(Number.parseInt(this.riskId)-1);
  if(this.risk !=  riskTemp )
    this.risk = riskTemp;
  }
  ngOnInit() {
    this.readRiskState();
  }

}
