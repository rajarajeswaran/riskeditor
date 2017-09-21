import { Action } from 'redux';
import { Risk } from './risk.model';
import * as RiskActions from './risk.actions';


export interface RiskState {
  currentRisk : Risk;
}

const initialState: RiskState = {
  currentRisk : null
}

export const RiskReducer =
function(state: RiskState = initialState, action: Action): RiskState {
  switch (action.type) {
    case RiskActions.SET_CURRENT_RISK:
    const risk: Risk = (<RiskActions.SetCurrentRiskAction>action).risk;
      return {
        currentRisk: risk
      };
    default:
      return state;
  }
};

export const getRiskState = (state): RiskState => state.risk;

