import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState(populateCards());
  const [score, setScore] = useState(0);

  // Check if win condition has been met
  useEffect(() => {
    if (score >= cards.length) console.log('YOU WIN!');
  }, [score]);

  // Test populat cars method
  function populateCards() {
    const newCards = [];
    for (let i = 0; i < 12; i++) {
      newCards.push({
        id: i,
        clicked: false,
        title: 'card-title',
        image: null,
      });
    }

    return newCards;
  }

  function cardClick(card) {
    if (card.clicked) {
      console.log('Gameover');
    } else {
      setCards(
        cards.map((newCard) => {
          return newCard.id === card.id ? { ...card, clicked: true } : newCard;
        })
      );
      setScore((prev) => prev + 1);
    }
  }

  // Map over card data and create card components for each element
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
    </div>
  );
}

export default App;
