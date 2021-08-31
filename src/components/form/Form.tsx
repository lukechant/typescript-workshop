import { FC, useReducer } from "react";
import { formReducer } from "./state/reducer";
import { initialState } from "./state/initalState";
import { IFormPage } from "./Form.types";
import * as Actions from "./state/actions";
import "./Form.css";

export const Form: FC<IFormPage> = ({ setFormState }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { name, age, employer1, employer2, employer3 } = state;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setFormState(state);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>About you</legend>
        <label>
          <span className="label-text">Name:</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => dispatch(Actions.setName(event.target.value))}
          />
        </label>
        <label>
          <span className="label-text">Age:</span>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(event) => dispatch(Actions.setAge(event.target.value))}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Job #1</legend>
        <label>
          <span className="label-text">Latest employer:</span>
          <input
            type="text"
            name="previous-employer1"
            value={employer1.name}
            onChange={(event) =>
              dispatch(Actions.setPrevEmployer1Name(event.target.value))
            }
          />
        </label>
        <label>
          <span className="label-text">Years of experience in role:</span>
          <input
            type="number"
            name="previous-employer-duration1"
            value={employer1.duration}
            onChange={(event) =>
              dispatch(Actions.setPrevEmployer1Duration(event.target.value))
            }
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Job #2</legend>
        <label>
          <span className="label-text">Latest employer:</span>
          <input
            type="text"
            name="previous-employer2"
            value={employer2.name}
            onChange={(event) =>
              dispatch(Actions.setPrevEmployer2Name(event.target.value))
            }
          />
        </label>
        <label>
          <span className="label-text">Years of experience in role:</span>
          <input
            type="number"
            name="previous-employer-duration2"
            value={employer2.duration}
            onChange={(event) =>
              dispatch(Actions.setPrevEmployer2Duration(event.target.value))
            }
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Job #3</legend>
        <label>
          <span className="label-text">Latest employer:</span>
          <input
            type="text"
            name="previous-employer3"
            value={employer3.name}
            onChange={(event) =>
              dispatch(Actions.setPrevEmployer3Name(event.target.value))
            }
          />
        </label>
        <label>
          <span className="label-text">Years of experience in role:</span>
          <input
            type="number"
            name="previous-employer-duration3"
            value={employer3.duration}
            onChange={(event) =>
              dispatch(Actions.setPrevEmployer3Duration(event.target.value))
            }
          />
        </label>
      </fieldset>

      <input type="submit" value="Submit" />
    </form>
  );
};
