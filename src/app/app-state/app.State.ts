import {RiskState} from './risk/risk.state'
import {LayoutState} from './laytout/layout.state'

export interface AppState{
  RiskState : RiskState;
  LayoutState: LayoutState
}
