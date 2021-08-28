import { FC } from "react";
import { ICV } from "./CV.types";
import "./CV.css";

export const CV: FC<ICV> = ({ formState }) => {
  const { name, age, employer1, employer2, employer3 } = formState;
  const employer1Experience = employer1.duration ?? 0;
  const employer2Experience = employer2.duration ?? 0;
  const employer3Experience = employer3.duration ?? 0;
  const yearsOfExperience =
    employer1Experience + employer2Experience + employer3Experience;
  return (
    <article>
      <h2>About Me</h2>
      <div className="cv-experience-wrapper">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Years of experience:</strong> {yearsOfExperience}
        </p>
      </div>

      <h2>My Experience</h2>
      <div className="cv-experience-wrapper">
        <h3>Employer 1</h3>
        <p>
          <strong>Name:</strong> {employer1.name}
        </p>
        <p>
          <strong>Years at company:</strong> {employer1.duration}
        </p>
      </div>
      <div className="cv-experience-wrapper">
        <h3>Employer 2</h3>
        <p>
          <strong>Name:</strong> {employer2.name}
        </p>
        <p>
          <strong>Years at company:</strong> {employer2.duration}
        </p>
      </div>
      <div className="cv-experience-wrapper">
        <h3>Employer 3</h3>
        <p>
          <strong>Name:</strong> {employer3.name}
        </p>
        <p>
          <strong>Years at company:</strong> {employer3.duration}
        </p>
      </div>
    </article>
  );
};
