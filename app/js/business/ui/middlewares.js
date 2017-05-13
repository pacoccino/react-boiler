import * as actions from './actions';

const middleware = store => next => (action) => {
  switch (action.type) {
    case actions.SET: {
      break;
    }
  }

  next(action);
};

export default middleware;
