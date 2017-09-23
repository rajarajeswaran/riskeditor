import { Action } from 'redux';
import { RiskState } from './risk.state';
import * as RiskActions from './risk.actions';

const initialState: RiskState = {
  policyId : null,
  Description:null
}

export const RiskReducer =
function(state: RiskState = initialState, action: Action): RiskState {
  switch (action.type) {
    case RiskActions.SET_CURRENT_RISK:
    return Object.assign({}, state, { policyId:  '000000' ,Description : '??????' });
    default:
      return state;
  }
};

export const getRiskState = (state): RiskState => state.risk;

