/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { CounterState } from './counter.state';
import {
  INCREMENT,
  DECREMENT
} from './counter.actions';

const initialState: CounterState = { counter: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<CounterState> =
  (state: CounterState = initialState, action: Action): CounterState => {
    switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });
    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
    }
  };
