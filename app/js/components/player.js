import React from "react";
import { connect } from "react-redux";

import { player } from "../actions";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  closePlayer() {
    this.props.dispatch(player.close());
  }

  render() {
    const { player } = this.props;
    if (player.action === "PLAYER_PLAY_TRAILER") {
      // TODO: make a custom video player for yt vids
      return (
        <div className="player">
          <div onClick={this.closePlayer.bind(this)} className="close">X</div>
          <iframe id="ytplayer"
                  src={`https://www.youtube.com/embed/${player.trailer}?rel=0&autoplay=1`}
                  frameBorder="0" allowfullscreen>
          </iframe>
        </div>
      );
    }

    return (
      <div className="player playerClosed">

      </div>
    );
  }
}

export default connect((state) => {
  return {
    player: state.player
  };
})(Player);
