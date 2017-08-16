import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Item from "./item.js";
import tmdb from "../tmdb";

import { page } from "../actions";

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.loadedPages = 0;
    this.scrollLoadOffset = 500;
    this.items = [];

    this.addItems = this.addItems.bind(this);
    this.scrolledToBottom = this.scrolledToBottom.bind(this);
  }

  componentWillMount() {
    this.addItems(2);
  }

  addItems(amountPages = 1) {
    for (var i = 0; i < amountPages; i++) {
      this.props.dispatch(page.request(this.props.type, ++this.loadedPages));
    }
  }

  scrolledToBottom(e) {
    const page = ReactDOM.findDOMNode(this);
    if (page.scrollTop >= (page.scrollHeight - page.clientHeight)-this.scrollLoadOffset && !this.isLoading) {
      this.addItems();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page.page != this.props.page.page) {
      let newItems = [...this.props.page.results]
                    .map((x) => (<Item type={this.props.type} src={x.poster_path} key={x.id} tmdbId={x.id} name={x.name || x.title}></Item>));
      this.items = [...this.items, newItems];
    }
  }

  render() {


    return (
      <section onScroll={this.scrolledToBottom} id={this.props.name} className={`contentWrapper ${this.props.name}`}>
        {this.items}
      </section>
    );
  }
}
export default connect((state) => {
  return {
    page: state.page
  }
})(Page);
