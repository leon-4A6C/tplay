import React from "react";
import { connect } from "react-redux";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { player } = this.props;
    if (player.action === "PLAYER_PLAY_TRAILER") {
      // TODO: make a custom video player for yt vids
      return (
        <div className="player">
          <iframe id="ytplayer" type="text/html" width="640" height="360"
                  src={`https://www.youtube.com/embed/${player.trailer}?autoplay=1&fs=1`}
                  frameBorder="0">
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
