export interface Employer {
  name: string;
  duration?: number;
}

export interface IForm {
  name: string;
  age?: number;
  employer1: Employer;
  employer2: Employer;
  employer3: Employer;
}

export interface IAction {
  type: string;
  payload?: any;
}
