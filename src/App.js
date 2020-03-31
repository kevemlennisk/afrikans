import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="main-message">
          A Nigéria é o país com maior população negra no mundo.
        </p>
        <p data-testid="secondary-message">O segundo maior, é o Brasil.</p>
      </header>
    </div>
  );
}

export default App;
