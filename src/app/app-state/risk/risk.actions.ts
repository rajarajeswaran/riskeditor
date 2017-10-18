import{
Action,
ActionCreator
}from 'redux';



export const SET_CURRENT_RISK = 'SET_CURRENT_RISK';
export const setCurrentRisk: ActionCreator<Action> = () => ({type:SET_CURRENT_RISK })


export const ADD_NEW_RISK = 'ADD_NEWT_RISK';
export const addNewRisk: ActionCreator<Action> = () => ({type:ADD_NEW_RISK })


export const EDIT_RISK = 'EDIT_RISK';
export const editRisk: ActionCreator<Action> = () => ({type:EDIT_RISK })
