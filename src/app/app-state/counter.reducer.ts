
import {Reducer, Action} from 'redux'
import {  INCREMENT,  DECREMENT} from './counter.actions'
import {  AppState} from './app.state'




const initialState: AppState = {counter:0};


export const counterReducer : Reducer<AppState> = (state: AppState , action: Action):AppState => {

  return state;
};


