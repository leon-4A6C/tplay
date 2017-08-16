import React from 'react';
import { connect } from 'react-redux';

import FadedBackground from "./fadedBackground.js";
import TrailerButton from "./trailerButton.js";
import InfoList from "./infoList.js";

import { info as infoActions } from "../actions";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.lastTmdbId = null;
  }

  componentDidUpdate() {
    const { itemInfo, tmdb } = this.props;
    console.log(this.props);
    if (itemInfo.tmdbId != this.lastTmdbId) {
      this.lastTmdbId = itemInfo.tmdbId;
      this.props.dispatch(infoActions.request(itemInfo.tmdbId, itemInfo.type));
    }
  }

  render() {

    const { itemInfo, tmdb } = this.props;

    if (tmdb.action === "INFO_REQUEST_SUCCES") {

      const infoLists = [<InfoList key="cast" cast={tmdb.cast} title="cast"></InfoList>,
                         <InfoList key="crew" crew={tmdb.crew} title="crew"></InfoList>];
      if (tmdb.seasons) {
        infoLists.unshift(<InfoList key="seasons" seasons={tmdb.seasons} title="seasons"></InfoList>);
      }

      return (
        <div className="info">
        <div className="bgWrapper">
        <FadedBackground src={tmdb.details.backdrop_path} alt={itemInfo.title}></FadedBackground>
        <h1>{itemInfo.title}</h1>
        <p>{tmdb.details.overview}</p>
        <TrailerButton trailer={tmdb.trailer}></TrailerButton>
        </div>
          {infoLists}
        </div>);

    } else if (tmdb.action === "INFO_REQUEST_START") {
      return (
        <div className="info">
          <h1>loading...</h1>
        </div>
      );
    } else if (tmdb.action === "INFO_REQUEST_FAIL") {
      return (
        <div className="info">
          <h1>failed to retrieve data</h1>
          <p>please check if you have an internet connection, if you have check if this site is up <a href="https://www.themoviedb.org/">here</a></p>
        </div>
      );
    } else {
      return (
        <div className="info infoClosed"></div>
      );
    }
  }
}

export default connect((state) => {
  return {
    itemInfo: state.info,
    tmdb: state.tmdb
  };
})(Info);
