import React from 'react';
import ReactDOM from 'react-dom';

export default class FadedBackground extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = "https://image.tmdb.org/t/p/w780";
  }
  render() {
    return (
      <div className="background">
        <img src={this.baseUrl + this.props.src} alt={this.props.alt}></img>
        <div className="fade"></div>
      </div>
    )
  }
}
