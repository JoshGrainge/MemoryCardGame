import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import ConsoleSelector from './components/ConsoleSelector';

// TODO make gameover screen
// TODO when changing console selector value start new game
// TODO make new game logic (for gameover new game button and console selector)

function App() {
  const [gamesInfo, setGamesInfo] = useState([]);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    if (gamesInfo.length > 0) setCards(populateCards());
  }, [gamesInfo]);

  // Check if win condition has been met
  useEffect(() => {
    if (score >= cards.length) console.log('YOU WIN!');
  }, [score]);

  let platformId = 15;
  const ps2GamesRequest = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&platforms=`;

  async function getGames() {
    const response = await fetch(ps2GamesRequest + platformId);
    const json = await response.json();

    const games = [];

    for (const result of json.results) {
      games.push({
        title: result.name,
        image: result.background_image,
      });
    }

    setGamesInfo(games);
  }

  function populateCards() {
    const gameInfoData = getRandomGamesInfoArray();
    const newCards = [];
    for (let i = 0; i < 12; i++) {
      newCards.push({
        id: i,
        clicked: false,
        title: gameInfoData[i].title,
        image: gameInfoData[i].image,
      });
    }

    return newCards;
  }

  function shuffleCards() {
    const newCards = [...cards];
    let currentIndex = cards.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [newCards[currentIndex], newCards[randomIndex]] = [
        newCards[randomIndex],
        newCards[currentIndex],
      ];
    }

    return newCards;
  }

  function getRandomGamesInfoArray() {
    const gameInfoCopy = [...gamesInfo];
    const returnArray = [];
    while (gameInfoCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * gameInfoCopy.length);
      returnArray.push(gameInfoCopy[randomIndex]);
      gameInfoCopy.splice(randomIndex, 1);
    }

    return returnArray;
  }

  function cardClick(card) {
    if (card.clicked) {
      console.log('Gameover');
    } else {
      // Shuffle cards and set card just clicked value to be true
      const newCards = shuffleCards();
      setCards(
        newCards.map((newCard) => {
          return newCard.id === card.id ? { ...card, clicked: true } : newCard;
        })
      );
      setScore((prev) => prev + 1);
    }
  }

  const cardElements = cards.map((card) => {
    return (
      <Card
        key={card.id}
        handleClick={() => cardClick(card)}
        title={card.title}
        image={card.image}
      />
    );
  });

  return (
    <div>
      <h1>Score: {score}</h1>
      <div className="cards-container">{cardElements}</div>
      <ConsoleSelector
        handleClick={(e) => {
          platformId = e.target.value;
          getGames();
        }}
      />
    </div>
  );
}

export default App;
