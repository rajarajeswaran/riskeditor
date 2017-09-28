import { Action } from 'redux';
import { LayoutState } from './layout.state';
import * as LayoutActions from './layout.actions';

const initialState: LayoutState = {
  windowId : 'ROOT',
  description:'THIS IS ROOT WINDOW',
  isActive:true,
  children:new Array<LayoutState>()
}

export const LayoutReducer =
function(state: LayoutState = initialState, action: Action): LayoutState {
  switch (action.type) {
    case LayoutActions.SET_WINDOW_ACTIVE:
    return state;
    case LayoutActions.ADD_WINDOW:
    let cloneState = Object.assign({}, state);
    cloneState.children.push({
      windowId:'NewWindow',
      description:'New Window description',
      isActive:true,
      children:new Array<LayoutState>()});
    return cloneState;
    case LayoutActions.REMOVE_WINDOW:
    return Object.assign({}, state, { children: state.children.pop()}, { isActive: state.children[0].isActive=true});
    default:
      return state;
  }
};


