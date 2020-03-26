import React, { Component } from "react";
import axios from "axios";

const newsAPI_KEY = "924908deb4f7425a85d441b973795506";
const gNews_API_KEY = "33879167-2ec2-4971-997b-80ee8f9ef01a";

export default class News extends Component {
  state = {
    gNews: [],
    newsAPI: []
  };

  // calling two APIs to retrieve news articles related to higher education
  componentDidMount() {
    axios
      .get(
        `https://content.guardianapis.com/search?q=higher%20education%20AND%20education&api-key=${gNews_API_KEY}`
      )
      .then(res => {
        axios
          .get(
            `http://newsapi.org/v2/everything?q=university&apiKey=${newsAPI_KEY}`
          )
          .then(res2 => {
            this.setState({
              gNews: res.data.response.results,
              newsAPI: res2.data.articles
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.gNews === 0 || this.state.newsAPI === 0) {
      return <h5>loading...</h5>;
    } else {
      // map through Guardian API to render articles on page
      const guardianStories = this.state.gNews.map(story => {
        return (
          // Guardian API doesn't contain images for stories
          <div className="news__section--div" key={story.id}>
            <a className="url" href={`${story.webUrl}`}>
              <h5 className="url__h5">{story.webTitle}</h5>
              <p className="url__description">{story.webPublicationDate}</p>
            </a>
          </div>
        );
      });
      // map through newsAPI to render articles on page
      const newsAPIStories = this.state.newsAPI.map((article, i) => {
        return (
          // some IDs in dataset are null and throw a lot of errors, so used this method instead
          <div className="news__section--div" key={i}>
            <a href={`${article.url}`} className="url">
              <h5 className="url__h5">{article.title}</h5>
              <img
                className="url__img"
                src={`${article.urlToImage}`}
                alt="article-cover-photo"
              />
              <p className="url__description">{article.description}</p>
            </a>
          </div>
        );
      });
      return (
        <main className="news">
          <h1 className="news__title">Articles related to higher education</h1>
          <section className="news__section">
            {newsAPIStories}
            {guardianStories}
          </section>
        </main>
      );
    }
  }
}
