
import {Reducer, combineReducers } from 'redux'

import {AppState} from './app.State'
// import {RiskState} from './risk/risk.state'
// import {LayoutState} from './laytout/layout.state'

import {RiskReducer} from './risk/risk.reducer'
import {LayoutReducer} from './laytout/layout.reducer'


const rootReducer  = combineReducers<AppState>({
  LayoutState:LayoutReducer,
  RiskState:RiskReducer
})
export default rootReducer;
