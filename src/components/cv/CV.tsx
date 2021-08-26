import { FC } from "react";
import { ICV } from "./CV.types";

export const CV: FC<ICV> = ({ formState }) => {
  const { name, age, employer1, employer2, employer3 } = formState;

  return (
    <article>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </article>
  );
};
