import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

export const defaultValues = {
  data: [],
};

export const getInitialFromLocalStore = () => {
  const covidInfoLSData = localStorage.getItem('covidInfo');
  if (covidInfoLSData) {
    return JSON.parse(covidInfoLSData);
  }
  return defaultValues;
};

export const initialState: ContainerState = {
  ...getInitialFromLocalStore(),
  isLoading: false,
};

const loginSlice = createSlice({
  name: 'covidInfo',
  initialState,
  reducers: {
    getCovidDataDeaths(state) {
      state.isLoading = true;
    },
    getCovidDataDeathsCompleted(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getCovidDataDeathsFailed(state) {
      state.isLoading = false;
    },
    getCovidDataRecovered(state) {
      state.isLoading = true;
    },
    getCovidDataRecoveredCompleted(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getCovidDataRecoveredFailed(state) {
      state.isLoading = false;
    },
    getCovidDataConfirmed(state) {
      state.isLoading = true;
    },
    getCovidDataConfirmedCompleted(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getCovidDataConfirmedFailed(state) {
      state.isLoading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
