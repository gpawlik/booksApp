//import { Platform } from 'react-native';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devTools()
  )
);

export default store;
