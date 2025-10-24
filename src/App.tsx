import Quiz from './components/Quiz/Quiz';
import questionsData from './data/questions.json';
import type { Question } from './types/quiz';
import './App.css';

const questions = questionsData as Question[];

function App() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;