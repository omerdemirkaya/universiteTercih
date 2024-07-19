import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Choice.css'; // CSS dosyasını import ediyoruz

const Choice = () => {
  const [ranking, setRanking] = useState('');
  const [displayRanking, setDisplayRanking] = useState('');

  const handleInputChange = (event) => {
    let inputValue = event.target.value.replace(/\D/, '');
    if (inputValue !== '') {
      inputValue = parseInt(inputValue, 10);
      if (inputValue < 1) inputValue = 1;
      if (inputValue > 3000000) inputValue = 3000000;
    }
    setRanking(inputValue.toString());
  };

  const handleButtonClick = () => {
    const targetRanking = parseInt(ranking, 10);
    let currentRanking = 0;

    const animateRanking = () => {
      if (currentRanking < targetRanking) {
        currentRanking += Math.ceil(targetRanking / 100); // Hızlı artış için
        if (currentRanking > targetRanking) currentRanking = targetRanking;
        setDisplayRanking(currentRanking);
        requestAnimationFrame(animateRanking);
      }
    };

    animateRanking();
  };

  return (
    <div className="choice-wrapper">
      <div className="choice-container">
        <h2>Üniversite Sınavı Tercih Sıralaması</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            Sınavda kaçıncı olduğunuzu girin (1 - 3,000,000 arası):
            <input
              type="text"
              value={ranking}
              onChange={handleInputChange}
              placeholder="Örneğin: 1, 100, 1000"
              required
            />
          </label>
          <button type="button" onClick={handleButtonClick}>Kaydet</button>
        </form>
        {displayRanking && (
          <div className="ranking-display">
            Sıralamanız: {displayRanking}
            <Link to="/test">
              <button className="navigate-button">KARAKTER TESTİ</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Choice;
