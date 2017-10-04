import{
Action,
ActionCreator
}from 'redux';



export const SET_CURRENT_RISK = 'SET_CURRENT_RISK';
export const setCurrentRisk: ActionCreator<Action> = () => ({type:SET_CURRENT_RISK })


export const ADD_NEW_RISK = 'ADD_NEWT_RISK';
export const addNewRisk: ActionCreator<Action> = () => ({type:ADD_NEW_RISK })
