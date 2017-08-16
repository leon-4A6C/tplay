import React from 'react';

export default class FadedBackground extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = "https://image.tmdb.org/t/p/w780";
  }
  render() {
    if (this.props.src) {
      return (
        <div className="background">
          <img src={this.baseUrl + this.props.src} alt={this.props.alt}></img>
          <div className="fade"></div>
        </div>
      );
    } else {
      return (
        <div className="background">
          <div className="fade"></div>
        </div>
      );
    }
  }
}
