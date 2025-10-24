import React from 'react';
import Quiz from './components/Quiz/Quiz';
import questions from './data/questions.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;