import React from 'react';
import ReactDOM from 'react-dom';

export default class TrailerButton extends React.Component {
  constructor(props) {
    super(props);

    this.playTrailer = this.playTrailer.bind(this);
  }

  playTrailer(e) {
    console.log("play trailer: " + this.props.trailer);
  }

  render() {
    return (
      <button onClick={this.playTrailer} className="trailerButton" type="button" name="button">
        <span className="fa fa-play"></span>
        {`\ttrailer`}
      </button>
    )
  }
}
