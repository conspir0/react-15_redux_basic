import { combineReducers } from 'react-redux';
import appReducer from './appReducers';


export const rootReducer = combineReducers({
  comments: appReducer,
})