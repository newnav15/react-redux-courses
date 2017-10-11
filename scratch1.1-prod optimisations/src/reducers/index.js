/*eslint-disable import/default */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import  ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress

});//es6 short hand property names


export default rootReducer;
