import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Carousel from './components/carousel';
// import Cards from './components/cardsRow';
// import SidePhoto from './components/sidePhoto';

// import { CardsRow } from 'react-components-examples';

import CardsRow from 'react-components-examples';


ReactDOM.render(
  <div>
    {/* <Carousel id="1" />
    <hr />
    <CardsRow />
    <hr />
    <SidePhoto id="5" />
    <hr />
    <SidePhoto id="6" /> */}

    <CardsRow />
  </div>
  , document.getElementById('root'));
