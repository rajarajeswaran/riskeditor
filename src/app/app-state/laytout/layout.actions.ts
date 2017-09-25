import{
  Action,
  ActionCreator
  }from 'redux';



  export const SET_WINDOW_ACTIVE = 'SET_WINDOW_ACTIVE';
  export const setWindowActive: ActionCreator<Action> = () => ({type:SET_WINDOW_ACTIVE })


  export const ADD_WINDOW = 'ADD_WINDOW';
  export const addWindow: ActionCreator<Action> = () => ({type:ADD_WINDOW })


  export const REMOVE_WINDOW = 'REMOVE_WINDOW';
  export const removeWindow: ActionCreator<Action> = () => ({type:REMOVE_WINDOW })

