import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState(populateCards());

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

  function cardClick(id) {
    console.log('Clicked card with id: ' + id);
    // If card clicked, gameover
    // Else increase score
    // If all cards have been clicked you win the round
  }

  // Map over card data and create card components for each element
  const cardElements = cards.map((card) => {
    return (
      <Card
        handleClick={() => cardClick(card.id)}
        title={card.title}
        image={card.image}
      />
    );
  });

  return <div className="cards-container">{cardElements}</div>;
}

export default App;
