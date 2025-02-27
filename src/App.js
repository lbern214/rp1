/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Date Calculator</h1>
        <p>This is your custom React application.</p>
      </header>
    </div>
  );
}
*/
import React, { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  const [futureDate, setFutureDate] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const calculateFutureDate = () => {
    const inputDate = new Date(date);
    inputDate.setDate(inputDate.getDate() + 28);
    setFutureDate(inputDate.toISOString().split('T')[0]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Date Calculator</h1>
        <p>Enter a date and calculate the date 28 days in the future.</p>
        <input type="date" value={date} onChange={handleDateChange} />
        <button onClick={calculateFutureDate}>Calculate</button>
        {futureDate && (
          <p>The date 28 days after {date} is {futureDate}</p>
        )}
      </header>
    </div>
  );
}


export default App;
