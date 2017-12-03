import { handleAction, combineActions } from 'redux-actions';

import { authGood, logoutDone, loginSucceeded } from './action';

export const user = handleAction(combineActions(authGood, logoutDone, loginSucceeded), {
  next(state, action) {
    // console.log('action: ', action);
    return action.payload;
  },
}, {});
