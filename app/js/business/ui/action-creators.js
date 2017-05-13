import { push } from 'react-router-redux';
import * as routes from 'js/constants/routes';
import { AsyncActions } from 'js/helpers/asyncActions';
import { ASYNC_EX } from 'js/constants/asyncActions';

export const goHome = mode => (dispatch) => {
  dispatch(push(routes.Root));
};

export const asyncEx = d => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_EX));

  return Promise.resolve(d)
    .then((data) => {
      dispatch(AsyncActions.successFetch(ASYNC_EX, data));
    })
    .catch((error) => {
      dispatch(AsyncActions.errorFetch(ASYNC_EX, error));
      throw error;
    });
};
