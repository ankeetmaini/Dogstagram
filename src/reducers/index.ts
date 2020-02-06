import breeds from './BreedsReducer';
import dog from './DogReducer';
import {combineReducers} from 'redux';
import {ReducerMappedState} from '../utils/actionCreator';

const reducers = {
  breeds,
  dog,
};

export type AppState = ReducerMappedState<typeof reducers>;
export default combineReducers<AppState>(reducers);
