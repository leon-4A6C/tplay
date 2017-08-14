import React from 'react';
import ReactDOM from 'react-dom';
import Item from "./item.js";
const TMDB = require("themoviedatabase");
const tmdb = new TMDB("81485988d49a76332eea5e3a5297d342");

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.loadedPages = 0;

    this.addItems = this.addItems.bind(this);
    this.scrolledToBottom = this.scrolledToBottom.bind(this);
  }

  componentWillMount() {
    this.addItems(2);
  }

  addItems(amountPages) {
    this.isLoading = true;
    const x = [];
    for (let i = 0; i < amountPages; i++) {
      x.push(tmdb.tv.popular({page: this.loadedPages+1}));
      this.loadedPages++;
    }
    Promise.all(x).then(data => {
      const x = [];
      for (let d of data) {
        for (let res of d.results) {
          x.push(res);
        }
      }
      return x;
    }).then(res => res.map((x) => (<Item src={x.poster_path} key={x.id} tmdbId={x.id} name={x.name || x.title}></Item>)))
      .then(items => {
        let itemState = this.state.items;
        for (let item of items) {
          itemState.push(item);
        }
        this.setState({
          items: itemState
        });
        this.isLoading = false;
      });
  }

  scrolledToBottom(e) {
    const page = ReactDOM.findDOMNode(this);
    if (page.scrollTop >= (page.scrollHeight - page.clientHeight) && !this.isLoading) {
      this.addItems(1);
    }
  }

  render() {
    return (
      <section onScroll={this.scrolledToBottom} id={this.props.name} className={`contentWrapper ${this.props.name}`}>
        {this.state.items}
      </section>
    )
  }
}
