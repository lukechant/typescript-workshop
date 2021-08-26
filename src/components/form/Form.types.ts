import { Dispatch, SetStateAction } from "react";
import { IForm } from "./state/types";

export interface IFormPage {
  setFormState: Dispatch<SetStateAction<IForm>>;
}
