import { Action } from 'redux';
import { createSelector } from 'reselect';


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
    var mutation = state.risks.concat([{Description:'new', policyId:(state.risks.length?state.risks.length+1:0).toString()}]);
    var newState =  Object.assign({}, state, {risks:mutation});
    return newState;
    default:
      return state;
  }
};

export const getRiskState = (state): RiskState => state.RiskState;
export const getRiskById = createSelector(getRiskState, (rs) => rs  );
