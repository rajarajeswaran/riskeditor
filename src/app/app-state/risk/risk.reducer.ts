import { Action } from 'redux';

import { RiskState } from './risk.state';
import {Risk} from './risk.model'
import * as RiskActions from './risk.actions';

const initialState: RiskState = {
risks: new Array<Risk>()
}

export const RiskReducer =
function(state: RiskState = initialState, action: Action): RiskState {
  switch (action.type) {
    case RiskActions.SET_CURRENT_RISK:
    return Object.assign({}, state);
    case RiskActions.ADD_NEW_RISK:
    return Object.assign({}, state, state.risks.concat([{Description:'new', policyId:'NNNNNNN'}]));
    default:
      return state;
  }
};


