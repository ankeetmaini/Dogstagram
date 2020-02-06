import {AppActionTypes} from '../actions/Actions';
import {ReducerInitialState} from '../utils/actionCreator';

type State = ReducerInitialState<{url?: string}>;
const initialState: State = {
  asyncStatus: 'INIT',
  data: {
    url: undefined,
  },
  error: null,
};
export default function Dog(
  state = initialState,
  action: AppActionTypes,
): State {
  switch (action.type) {
    case 'GET_DOG_IMAGE_REQUEST':
      return {
        ...state,
        asyncStatus: 'LOADING',
      };
    case 'GET_DOG_IMAGE_SUCCESS':
      return {
        ...state,
        asyncStatus: 'SUCCESS',
        data: {url: action.payload.res.message},
      };

    default:
      return state;
  }
}
