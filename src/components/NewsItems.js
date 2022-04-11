import React, { Component } from "react";
export class NewsItemBelowCard extends Component {
  render() {
    let { title, description, imageURL, newsURL, updateTime, source } =
      this.props;

    return (
      <div>
        <div className="card" style={{ height: "29rem" }}>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By: {source} on {updateTime}
              </small>
            </p>
            <a
              href={newsURL}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItemBelowCard;
