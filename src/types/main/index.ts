import MainTypes from './../string-types/main';
import { UsersData } from '../global';

type SetData = {
  type: typeof MainTypes.SET_DATA,
  payload: UsersData[] | null
}

type SetError = {
  type: typeof MainTypes.SET_ERROR,
  payload: true
}

type SetLoading = {
  type: typeof MainTypes.SET_LOADING,
  payload: boolean
}

export type MainActionTypes = SetData | SetError | SetLoading;