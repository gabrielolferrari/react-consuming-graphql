import React, { Component } from 'react';
import api from '../../util/api';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import './style.css';

const GET_CAROUSEL_SLIDES = `
  {
    blockContentById(id: "1") {
      ... on BlockContentCarousel {
        fieldCarouselTitle
        fieldCarouselSlideParagraph {
          ... on FieldBlockContentCarouselFieldCarouselSlideParagraph {
            entity {
              ... on ParagraphCarouselSlide {
                fieldCarouselSlideTitle,
                fieldImageUrl,
                fieldCarouselSlideLink {
                  uri
                  title
                },
                fieldCarouselSlideDescription {
                  value
                  format
                  processed
                }
              }
            }
          }
        }
      }
    }
  }
`;

class Carousel extends Component {
  componentDidMount() {
    api
    .post('', { query: GET_CAROUSEL_SLIDES })
    .then(result => {
      const carousel_data = result.data.data.blockContentById.fieldCarouselSlideParagraph;
      this.setState({
        slides: carousel_data
      });
    });
  }

  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      slides: []
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = this.state.slides.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = this.state.slides.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        { this.state.slides.length > 0 &&
          <ImageSlide slide={ this.state.slides[this.state.currentImageIndex] } />
        }


        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;