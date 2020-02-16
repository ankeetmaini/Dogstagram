import reducer, {AppState} from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {AppActionTypes} from './actions/Actions';

export default (intialState?: AppState) =>
  createStore(
    reducer,
    intialState,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActionTypes>),
  );
