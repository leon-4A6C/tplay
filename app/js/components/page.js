import React from 'react';
import ReactDOM from 'react-dom';
import item from "./item.js";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  render() {
    return (
      <section id={this.props.name} className={`contentWrapper ${this.props.name}`}>
        {this.state.items}
      </section>
    )
  }
}
