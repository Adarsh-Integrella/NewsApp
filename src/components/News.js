import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async updateNews(updatePage) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=3abe6be0a10b437c9e71d3f39d8d1511&page=${updatePage}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: updatePage,
      articles: parsedData.articles,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3abe6be0a10b437c9e71d3f39d8d1511&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevious = async () => {
    this.updateNews(this.state.page - 1);
  };

  handleNext = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.updateNews(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1
          className="text-center"
          style={{ margin: "35px 0px", textTransform: "uppercase" }}
        >
          {this.props.category} - headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 60)
                        : ""
                    }
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                    updateTime={element.publishedAt.slice(0, 10)}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <br />
        <hr />
        <div className="container d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-secondary"
            onClick={this.handlePrevious}
          >
            {" "}
            &laquo; Previous
          </button>
          <button
            className="btn btn-secondary"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNext}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
