import React from 'react';
import { connect } from "react-redux";

import { trailer } from "../actions";

class TrailerButton extends React.Component {
  constructor(props) {
    super(props);

    this.playTrailer = this.playTrailer.bind(this);
  }

  playTrailer(e) {
    this.props.dispatch(trailer.play(this.props.trailer));
  }

  render() {
    return (
      <button disabled={this.props.trailer ? false : true} onClick={this.playTrailer} className="trailerButton" type="button" name="button">
        <span className="fa fa-play"></span>
        {`\ttrailer`}
      </button>
    )
  }
}

export default connect()(TrailerButton);
