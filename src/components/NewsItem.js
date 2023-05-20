import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className='my-2'>
        <div className="card" style={{maxWidth: "25rem",}}>
            <img src={imgUrl} className="card-img-top" alt="..." style={{height: "15rem", width: "100%"}} />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target='_blank' className="button" rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem