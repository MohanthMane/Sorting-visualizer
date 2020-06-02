import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import SortingVisualizer from './components/SortingVisualizer'

function App() {
  return (
    <div className="container">
      <Navigation/>
      <SortingVisualizer/>
    </div>
  );
}

export default App;
