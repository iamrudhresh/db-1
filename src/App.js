import React from 'react';
import CSVReader from './CSVReader'; // Adjust the path as per your project structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CSV Display App</h1>
      </header>
      <main>
        <CSVReader />
      </main>
    </div>
  );
}

export default CSVReader;
