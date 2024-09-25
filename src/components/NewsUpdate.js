import React, { Component } from 'react';
import defaultimg from './defaultimg.jpg'

export class NewsUpdate extends Component {
  render() {
    let { author, date, title, description, imageUrl, newsUrl } = this.props;
    const defaultImageUrl = defaultimg; // Default image URL

    return (
      <div className='my-3'>
        <div className="card mx-2" style={{ width: '25rem' }}>
          <div className="card-header bg-warning">
            {author}
          </div>
          <img 
            src={imageUrl ? imageUrl : defaultImageUrl} 
            className="card-img-top" 
            alt="News" 
            height="200px" 
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-primary">Read</a>
          </div>
          <div className='card-footer text-muted'>
            publishedAt : {date.slice(0, 10)}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsUpdate;
