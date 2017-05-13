import { createReducer } from 'js/helpers/redux';
import * as types from './actions';

const initialState = {
  d: null,
};

function set(state, { d }) {
  return {
    ...state,
    d,
  };
}

export default createReducer(initialState, {
  [types.SET]: set,
});
