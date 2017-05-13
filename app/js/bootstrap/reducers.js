import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { ASYNC_STATE_KEY, asyncReducer } from '../helpers/asyncActions';
import { UI_STATE_KEY } from '../constants/reducerKeys';
import ui from '../business/ui/reducers';

const reducers = combineReducers({
  [ASYNC_STATE_KEY]: asyncReducer,
  [UI_STATE_KEY]: ui,
  routing: routerReducer,
  form: formReducer,
});

export default reducers;
