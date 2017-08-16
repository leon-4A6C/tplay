import React from 'react';
import { connect } from 'react-redux';

import FadedBackground from "./fadedBackground.js";
import TrailerButton from "./trailerButton.js";
import InfoList from "./infoList.js";

import { info as infoActions } from "../actions";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "loading",
        overview: "loading",
        backdrop_path: ""
      },
      trailer: "loading",
      cast: [],
      crew: [],
      seasons: [],
    }
  }

  componentWillUpdate() {
    const { itemInfo, tmdb } = this.props;
    if (!tmdb.action) {
      this.props.dispatch(infoActions.request(itemInfo.tmdbId, itemInfo.type));
    }
  }

  render() {
    const infoLists = [<InfoList key="cast" cast={this.state.cast} title="cast"></InfoList>, <InfoList key="crew" crew={this.state.crew} title="crew"></InfoList>];
    if (this.state.seasons) {
      infoLists.unshift(<InfoList key="seasons" seasons={this.state.seasons} title="seasons"></InfoList>);
    }
    return (
      <div className="info infoClosed">
        <div className="bgWrapper">
          <FadedBackground src={this.state.info.backdrop_path} alt={this.props.itemInfo.title}></FadedBackground>
          <h1>{this.props.itemInfo.title}</h1>
          <p>{this.state.info.overview}</p>
          <TrailerButton trailer={this.state.trailer}></TrailerButton>
        </div>
        {infoLists}
      </div>);
  }
}

export default connect((state) => {
  console.log(state);
  return {
    itemInfo: state.info,
    tmdb: state.tmdb
  };
})(Info);
