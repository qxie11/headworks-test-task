import { MainActionTypes } from "../types/main";
import MainTypes from '../types/string-types/main';
import { UsersData } from './../types/global/index';

interface IState {
  data: UsersData[] | null,
  err: boolean,
  isLoading: boolean
}

const initialState: IState = {
  data: null,
  err: false,
  isLoading: true
};

const main = (state: IState = initialState, { type, payload }: MainActionTypes) => {
  switch (type) {
    case MainTypes.SET_DATA:
      return {
        ...state,
        data: payload
      };

    case MainTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload
      };

    case MainTypes.SET_ERROR:
      return {
        ...state,
        err: payload
      };

    default:
      return state;
  }
};

export default main;
