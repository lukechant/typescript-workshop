import { useState } from "react";
import "./App.css";
import { Form } from "./components/form/Form";
import { CV } from "./components/cv/CV";
import { initialState } from "./components/form/state/initalState";
import { IForm } from "./components/form/state/types";

export default function App() {
  const [formState, setFormState] = useState<IForm>(initialState);

  return (
    <div className="app">
      <header className="app-header">
        <h1>My TypeScript App</h1>
        <h2>C.V. Builder</h2>
      </header>
      <main className="app-main">
        <section className="app-input-form">
          <h3 className="app-section-header">Input Form</h3>
          <Form setFormState={setFormState} />
        </section>
        <article className="app-cv-output">
          <h3 className="app-section-header">C.V.</h3>
          <CV formState={formState} />
        </article>
      </main>
    </div>
  );
}
