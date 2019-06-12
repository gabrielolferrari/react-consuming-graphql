import React, { Component } from 'react';
import renderHTML from 'react-render-html'
import api from '../../util/api';
import './style.css';

class SidePhoto extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      content: null
    }
  }

  componentDidMount() {
    const GET_CONTENT = `
      {
        blockContentById(id: "${this.props.id}") {
          ... on BlockContentTextAndPhoto {
            fieldSidePhotoContent {
              value
              format
              processed
            }
            fieldSidePhotoImageUrl
            fieldSidePhotoPosition
          }
        }
      }
    `;

    api
    .post('', { query: GET_CONTENT })
    .then(result => {
      const content_date = result.data.data.blockContentById;
      this.setState({
        content: content_date
      });
    });
  }
  
  render () {
    const content = this.state.content;
    const side = content ? (content.fieldSidePhotoPosition === "right" ? 2 : 1) : null;
    const op = content ? (content.fieldSidePhotoPosition === "right" ? 1 : 2) : null;
    return (
      <div className="side-photo">
        { content &&
          <React.Fragment>
            <div className="photo-content" style={{ order: side }}>
              <img src={ content.fieldSidePhotoImageUrl } alt="this is a side pic" />
            </div>

            <div className="text-content" style={{ order: op }}>
              { renderHTML(content.fieldSidePhotoContent.value) }
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default SidePhoto;