import {AppActionTypes} from '../actions/Actions';
import {ReducerInitialState} from '../utils/actionCreator';

type State = ReducerInitialState<string[]>;
const initialState: State = {
  asyncStatus: 'INIT',
  data: [],
  error: null,
};
export default function Breeds(
  state = initialState,
  action: AppActionTypes,
): State {
  switch (action.type) {
    case 'GET_BREEDS_REQUEST':
      return {
        ...state,
        asyncStatus: 'LOADING',
      };
    case 'GET_BREEDS_SUCCESS':
      return {
        ...state,
        asyncStatus: 'SUCCESS',
        data: Object.keys(action.payload.res.message),
      };

    default:
      return state;
  }
}
