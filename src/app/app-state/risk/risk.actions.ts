import{
Action,
ActionCreator
}from 'redux';

import{
  Risk
}from './risk.model';

export const SET_CURRENT_RISK = '[Risk] Set Current';
export interface SetCurrentRiskAction extends Action {
  risk: Risk;
}
export const setCurrentRisk: ActionCreator<SetCurrentRiskAction> =
  (risk) => ({
    type: SET_CURRENT_RISK,
    risk: risk
  });
