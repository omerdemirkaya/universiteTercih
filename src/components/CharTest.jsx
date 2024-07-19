import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './oneri.json';
import './CharTest.css';

const CharTest = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswerSelect = (questionId, score) => {
    setAnswers({ ...answers, [questionId]: score });
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((acc, score) => acc + score, 0);
    const suggestedDepartments = data.departments.filter(
      (dept) => totalScore >= dept.scoreRange[0] && totalScore <= dept.scoreRange[1]
    );
    setResult(suggestedDepartments);
  };

  const resetTest = () => {
    setAnswers({});
    setResult(null);
  };

  return (
    <div className={result ? "char-test-wrapper-second" : "char-test-wrapper"}>
      <div className="char-test-container">
        <h2 className="char-test-heading">Karakter Testi</h2>
        {result ? (
          <div className='suggestion'>
            <h3 className="result-heading">Sizin İçin Önerilen Bölümler:</h3>
            <ul className="result-list">
              {result.map((dept, index) => (
                <li key={index} className="result-item">
                  <Link to={`/depcontent/${dept.name.toLowerCase().replace(/\s+/g, '-')}`} className="result-link">
                    <strong>{dept.name}</strong>: {dept.description}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="reset-button" onClick={resetTest}>Testi Sıfırla</button>
          </div>
        ) : (
          <div>
            {data.questions.map((question) => (
              <div key={question.id} className="question-container">
                <p className="question-text">{question.question}</p>
                <ul className="answer-list">
                  {question.answers.map((answer, index) => (
                    <li key={index} className="answer-item">
                      <label className="answer-label">
                        <input
                          type="radio"
                          name={`question${question.id}`}
                          value={answer.score}
                          onChange={() => handleAnswerSelect(question.id, answer.score)}
                        />
                        {answer.option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button className="result-button" onClick={calculateResult}>Sonucu Göster</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharTest;
