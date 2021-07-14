import {combineReducers} from 'redux';
import {authorization} from './authorization/authorization';
import {data} from './data/data';
import {operationProcess} from './operation-process/operation-process';


export const ReducerType = {
  AUTHORIZATION: 'AUTHORIZATION',
  DATA: 'DATA',
  OPERATION: 'OPERATION',
};

export const rootReducer = combineReducers({
  [ReducerType.AUTHORIZATION]: authorization,
  [ReducerType.DATA]: data,
  [ReducerType.OPERATION]: operationProcess,
});
