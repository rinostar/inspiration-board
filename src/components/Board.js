import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARD_DATA["cards"],
    }
  }

  makeCards () {
    const boardCards = this.state.cards.map((card, i) => {
      return <Card
        text={card.text}
        emjoi={card.emoji}
        key={i} 
      />;
    });
    return boardCards
  }

  render() {
    return (
      <div>
        { this.makeCards() }
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
