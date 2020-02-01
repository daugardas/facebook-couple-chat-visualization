import { START_PROCCESSING_DATA, DONE_PROCCESSING_DATA, DataActionTypes, Data } from '../types/Data';

export function startProccessingData(): DataActionTypes {
  return {
    type: START_PROCCESSING_DATA
  };
};

export function doneProccesingData(data: Data): DataActionTypes {
  return {
    type: DONE_PROCCESSING_DATA,
    payload: data
  };
}