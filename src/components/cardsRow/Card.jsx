import React from 'react';
import renderHTML from 'react-render-html'

const Card = ({ info, columns }) => {
  const entity  = info.entity;
  const cardWidth = (100 / columns) + '%';

  console.log(cardWidth);

  const styles = {
    width: cardWidth,
    float: 'left'
  };

  console.log(info);
  return (
    <div className="card-row-item" style={styles}>
      <h2>{entity.fieldCardTitle}</h2>
      { renderHTML(entity.fieldCardDescription.value) }
    </div>
  );
}

export default Card;