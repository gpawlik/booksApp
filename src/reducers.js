import { combineReducers } from 'redux';

import usersReducer from 'components/User/Users.reducer';
import leftingsReducer from 'components/Leftings/Leftings.reducer';
import claimReducer from 'components/Claim/Claim.reducer';
import flashReducer from 'common/Flash/Flash.reducer';
import authReducer from 'components/Auth/Auth.reducer';

const rootReducer = combineReducers({
  usersStore: usersReducer,
  leftingsStore: leftingsReducer,
  claimStore: claimReducer,
  flashStore: flashReducer,
  authStore: authReducer
});

export default rootReducer;
