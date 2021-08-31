import * as ActionType from "./constants";

export const setName = (payload: any) => ({
  type: ActionType.SET_NAME,
  payload,
});

export const setAge = (payload: any) => ({
  type: ActionType.SET_AGE,
  payload,
});

export const setPrevEmployer1Name = (payload: any) => ({
  type: ActionType.SET_PREV_EMPLOYER_1_NAME,
  payload,
});

export const setPrevEmployer1Duration = (payload: any) => ({
  type: ActionType.SET_PREV_EMPLOYER_1_DURATION,
  payload,
});

export const setPrevEmployer2Name = (payload: any) => ({
  type: ActionType.SET_PREV_EMPLOYER_2_NAME,
  payload,
});

export const setPrevEmployer2Duration = (payload: any) => ({
  type: ActionType.SET_PREV_EMPLOYER_2_DURATION,
  payload,
});

export const setPrevEmployer3Name = (payload: any) => ({
  type: ActionType.SET_PREV_EMPLOYER_3_NAME,
  payload,
});

export const setPrevEmployer3Duration = (payload: any) => ({
  type: ActionType.SET_PREV_EMPLOYER_3_DURATION,
  payload,
});
