// export interface CovidTotalResults {
//   totalDeaths: CovidTotalDeathInterface[];
//   totalRecovered: [];
//   totalConfirmed: [];
// }
export interface CovidInfoAppState {
  data: CovidTotalDeathInterface[];
  isLoading: boolean;
}

export interface CovidTotalDeathInterface {}

export type ContainerState = CovidInfoAppState;
