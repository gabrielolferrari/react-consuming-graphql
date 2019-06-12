import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './components/carousel';
import CardsRow from './components/cardsRow'

ReactDOM.render(
  <div>
    <Carousel id="1" />
    <CardsRow />
  </div>
  , document.getElementById('root'));
