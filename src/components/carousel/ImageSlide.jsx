import React from 'react';
import renderHTML from 'react-render-html'

const ImageSlide = ({ slide }) => {
  const entity = slide.entity;

  const styles = {
    backgroundImage: `url(${entity.fieldCarouselSlideImage.url})`
  };

  return (
    <div className="image-slide" style={styles}>
      <div className="slide-content">
        {renderHTML(entity.fieldCarouselSlideDescription.value)}

        { entity.fieldCarouselSlideLink &&
          <a className="btn" href={entity.fieldCarouselSlideLink.uri}>{ entity.fieldCarouselSlideLink.title ? entity.fieldCarouselSlideLink.title : entity.fieldCarouselSlideLink.uri }</a>
        }
      </div>
    </div>
  );
}

export default ImageSlide;