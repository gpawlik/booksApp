import { fromJS } from 'immutable';
import {
  GET_LEFTINGS_SUCCESS,
  GET_LEFTINGS_FAILURE,
  GET_LEFTING_SUCCESS,
  DELETE_LEFTING_SUCCESS
} from './Leftings.actionTypes';

const initialState = fromJS({
  leftings: [],
  lefting: {}
});

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_LEFTINGS_SUCCESS:
      return state.set('leftings', fromJS(action.leftings));
    case GET_LEFTING_SUCCESS:
      return state.set('lefting', fromJS(action.lefting));
    case DELETE_LEFTING_SUCCESS:
      const deletedLeftingIndex = state.get('leftings').findIndex(obj => obj._id === action.leftingId);

      return state.deleteIn(['leftings', deletedLeftingIndex]);
    case GET_LEFTINGS_FAILURE:
    default:
      return state;
  }
};
