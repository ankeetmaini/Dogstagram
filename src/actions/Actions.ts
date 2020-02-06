import {GetActionTypes, createAsyncAction} from '../utils/actionCreator';
import DogApi from '../api/DogApi';
import * as ActionTypes from './ActionTypes';

const AppActions = {
  getBreeds: createAsyncAction(
    [
      ActionTypes.GET_BREEDS_REQUEST,
      ActionTypes.GET_BREEDS_SUCCESS,
      ActionTypes.GET_BREEDS_ERROR,
    ],
    DogApi.getBreeds,
  ),

  getDog: createAsyncAction(
    [
      ActionTypes.GET_DOG_IMAGE_REQUEST,
      ActionTypes.GET_DOG_IMAGE_SUCCESS,
      ActionTypes.GET_DOG_IMAGE_ERROR,
    ],
    DogApi.getDog,
  ),
};

export default AppActions;
export type AppActionTypes = GetActionTypes<typeof AppActions>;
