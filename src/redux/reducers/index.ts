import {
  IMAGE_DATA_FETCHED,
  DATA_LOADING,
  FETCH_MORE,
  SET_USER_INFO,
} from '../actions/fetch';
interface Action {
  type: string;
  payload: any;
}
export interface IReduxState {
  data: any[];
  loading: boolean;
  userInfo: any;
}

const initialState = {
  data: [],
  loading: false,
  userInfo: {},
};

export default (
  state: IReduxState = initialState,
  action: Action,
): IReduxState => {
  switch (action.type) {
    case IMAGE_DATA_FETCHED:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_MORE:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case DATA_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
