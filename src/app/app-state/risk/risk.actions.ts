import{
Action,
ActionCreator
}from 'redux';



export const SET_CURRENT_RISK = 'SET_CURRENT_RISK';
export const setCurrentRisk: ActionCreator<Action> = () => ({type:SET_CURRENT_RISK })

