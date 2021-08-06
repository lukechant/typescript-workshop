import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My TypeScript App</h1>
        <h2>C.V. Builder</h2>
      </header>
      <main className="app-main">
        <section className="app-input-form">
          <h3 className="app-section-header">Input Form</h3>
        </section>
        <article className="app-cv-output">
          <h3 className="app-section-header">C.V.</h3>
        </article>
      </main>
    </div>
  );
}
