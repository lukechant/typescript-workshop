import * as ActionType from "./constants";

export const setName = <Type>(payload: Type) => ({
  type: ActionType.SET_NAME,
  payload,
});

export const setAge = <Type>(payload: Type) => ({
  type: ActionType.SET_AGE,
  payload,
});

export const setPrevEmployer1Name = <Type>(payload: Type) => ({
  type: ActionType.SET_PREV_EMPLOYER_1_NAME,
  payload,
});

export const setPrevEmployer1Duration = <Type>(payload: Type) => ({
  type: ActionType.SET_PREV_EMPLOYER_1_DURATION,
  payload,
});

export const setPrevEmployer2Name = <Type>(payload: Type) => ({
  type: ActionType.SET_PREV_EMPLOYER_2_NAME,
  payload,
});

export const setPrevEmployer2Duration = <Type>(payload: Type) => ({
  type: ActionType.SET_PREV_EMPLOYER_2_DURATION,
  payload,
});

export const setPrevEmployer3Name = <Type>(payload: Type) => ({
  type: ActionType.SET_PREV_EMPLOYER_3_NAME,
  payload,
});

export const setPrevEmployer3Duration = <Type>(payload: Type) => ({
  type: ActionType.SET_PREV_EMPLOYER_3_DURATION,
  payload,
});
