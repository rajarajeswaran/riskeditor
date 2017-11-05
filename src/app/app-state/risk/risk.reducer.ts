import { Action, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { memoize } from 'lodash';


import { RiskState } from './risk.state';
import {Risk,AnalysisCode,Underwriter} from './risk.model'
import * as RiskActions from './risk.actions';

const initialState: RiskState = {
risks: new Array<Risk>()
}

export const RiskReducer =
function(state: RiskState = initialState, action: AnyAction): RiskState {
  switch (action.type) {

    case RiskActions.ADD_NEW_RISK:
      var risk :Risk = {
        PolicyId : '',
        Description: '',
        GUID:  '',
        Insured:  {InsuredId: 0,        InsuredName: '',        InsuredType: ''},
        AnalysisCodes:  new Array<AnalysisCode>(),
        AccountYear:0,
        Currency:'',
        Underwriter : { Code:  '',        Name:  ''},
        Domicile:'',
        PolicyStatus:'',
        UxState:{IsActive:false}
      };
      risk.PolicyId =(state.risks.length?state.risks.length+1:1).toString();
      var mutation = state.risks.concat([risk]);
      mutation.forEach(r => r.UxState.IsActive = false);
      mutation[mutation.length-1].UxState.IsActive = true;
      var newState =  Object.assign({}, state, {risks:mutation});
      return newState;

    case RiskActions.EDIT_RISK:
      var newState1 =  Object.assign({}, state);
      newState1.risks[0].Description = "EDIT"
      return newState1;
    case RiskActions.SET_CURRENT_RISK:
    var copyState =  Object.assign({}, state);
    copyState.risks.forEach(
      (r,i)=> {
        var currentRisk =  <Risk> action.payload;
        if(r == currentRisk) {
          r.UxState.IsActive = true
        }
        else if(r.UxState.IsActive)
          {r.UxState.IsActive = false}

    }

    );
    return copyState;
    default:
      return state;
  }
};

export const getRiskState = (state): RiskState => state.RiskState;
export const getRiskById  =   createSelector(getRiskState, rs => memoize(index => rs.risks[index]));
export const getRiskIds  =   createSelector(getRiskState, rs => rs.risks.map(r=>r.PolicyId));




