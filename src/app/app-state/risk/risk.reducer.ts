import { Action } from 'redux';
import { createSelector } from 'reselect';
import { memoize } from 'lodash';


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
    var mutation = state.risks.concat([{description:'new', policyId:(state.risks.length?state.risks.length+1:1).toString()}]);
    var newState =  Object.assign({}, state, {risks:mutation});
    return newState;
    case RiskActions.EDIT_RISK:
    var newState1 =  Object.assign({}, state);
    newState1.risks[0].description = "EDIT"
    return newState1;
    default:
      return state;
  }
};

export const getRiskState = (state): RiskState => state.RiskState;
export const getRiskById  =   createSelector(getRiskState, rs => memoize(index => rs.risks[index]));
export const getRiskIds  =   createSelector(getRiskState, rs => rs.risks.map(r=>r.policyId));




