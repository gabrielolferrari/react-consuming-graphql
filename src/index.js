import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './components/carousel';
import CardsRow from './components/cardsRow';
import SidePhoto from './components/sidePhoto';

ReactDOM.render(
  <div>
    <Carousel id="1" />
    <hr />
    <CardsRow />
    <hr />
    <SidePhoto id="3" />
    <hr />
    <SidePhoto id="4" />
  </div>
  , document.getElementById('root'));
