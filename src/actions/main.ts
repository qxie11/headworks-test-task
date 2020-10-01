import { Dispatch } from 'redux';
import { MainActionTypes } from '../types/main';
import { UsersData } from '../types/global';
import MainTypes from './../types/string-types/main';

export const setData = (data: UsersData[] | null): MainActionTypes => ({
  type: MainTypes.SET_DATA,
  payload: data
});

export const setError = (err: true): MainActionTypes => ({
  type: MainTypes.SET_ERROR,
  payload: err
});

export const setLoading = (isLoading: boolean): MainActionTypes => ({
  type: MainTypes.SET_LOADING,
  payload: isLoading
});

export const loadData = (page: number = 1) => async (dispatch: Dispatch<MainActionTypes>, getState: any) => {
  const response: Response = await fetch(`http://localhost:3001/list-of-clients?_page=${page}&_limit=10`);
  if (response.ok) {
    const oldData = getState().main.data;
    const data: UsersData[] = await response.json();
    oldData && data.unshift(...oldData);
    dispatch(setData(data));
  } else {
    dispatch(setError(true));
  }
  dispatch(setLoading(false));
}
