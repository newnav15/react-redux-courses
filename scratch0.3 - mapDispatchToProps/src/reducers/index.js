import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses

});//es6 short hand property names


export default rootReducer;
