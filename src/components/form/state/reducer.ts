import * as ActionTypes from "./constants";
import { IAction, IForm } from "./types";

export const formReducer = (
  state: IForm,
  { type, payload }: IAction
): IForm => {
  switch (type) {
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case ActionTypes.SET_AGE:
      return {
        ...state,
        age: payload,
      };
    case ActionTypes.SET_PREV_EMPLOYER_1_NAME:
      return {
        ...state,
        employer1: {
          ...state.employer1,
          name: payload,
        },
      };
    case ActionTypes.SET_PREV_EMPLOYER_1_DURATION:
      return {
        ...state,
        employer1: {
          ...state.employer1,
          duration: payload,
        },
      };
    case ActionTypes.SET_PREV_EMPLOYER_2_NAME:
      return {
        ...state,
        employer2: {
          ...state.employer2,
          name: payload,
        },
      };
    case ActionTypes.SET_PREV_EMPLOYER_2_DURATION:
      return {
        ...state,
        employer2: {
          ...state.employer2,
          duration: payload,
        },
      };
    case ActionTypes.SET_PREV_EMPLOYER_3_NAME:
      return {
        ...state,
        employer3: {
          ...state.employer3,
          name: payload,
        },
      };
    case ActionTypes.SET_PREV_EMPLOYER_3_DURATION:
      return {
        ...state,
        employer3: {
          ...state.employer3,
          duration: payload,
        },
      };
    default:
      return state;
  }
};
