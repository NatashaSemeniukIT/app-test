import { combineReducers } from 'redux';
import toolkitSlice from './toolkitSlice';

export const rootReducer = combineReducers({
  toolkit: toolkitSlice
})
