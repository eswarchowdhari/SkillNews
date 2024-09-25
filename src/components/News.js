import React, { Component } from 'react';
import NewsUpdate from './NewsUpdate';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    category: "general",
  }

  static propTypes = {
    category:PropTypes.string,
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async (page = 1) => {
    try {
      this.setState({ loading: true });
      const url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=8bf841dad04e4a4f81c3993b49020e71&page=${page}&pageSize=12`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page,
      });
    } catch (error) {
      console.error("Error fetching articles:", error);
      this.setState({ loading: false });
    }
  };

  nextClick = () => {
    this.fetchArticles(this.state.page + 1);
  };

  previousClick = () => {
    if (this.state.page > 1) {
      this.fetchArticles(this.state.page - 1);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousClick}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextClick}
          >
            Next
          </button>
        </div>
        <h2 className="text-center">TOP HEADLINES</h2>
        {this.state.loading && <Spinner/>}
        <div className="d-flex flex-wrap">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsUpdate
                author={element.author}
                date = {element.publishedAt}
                title={element.title}
                newsUrl={element.url}
                description={element.description}
                imageUrl={element.urlToImage}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousClick}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
