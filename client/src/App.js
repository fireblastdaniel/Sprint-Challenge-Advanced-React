import React from 'react';
import DisplayData from './components/DataDisplay'
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayData />
    </div>
  );
}

export default App;
