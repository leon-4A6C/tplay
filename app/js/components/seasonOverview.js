import React from 'react';
import { connect } from 'react-redux';

import FadedBackground from "./fadedBackground.js";
import TrailerButton from "./trailerButton.js";
import InfoList from "./infoList.js";

import { info as infoActions } from "../actions";

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    const { itemInfo, tmdb } = this.props;
    if (itemInfo.tmdbId != prevProps.itemInfo.tmdbId) {
      this.props.dispatch(infoActions.request(itemInfo.tmdbId, itemInfo.type));
    }
  }

  closeInfo() {
    this.props.dispatch(infoActions.close());
  }

  render() {

    const { itemInfo, tmdb } = this.props;

    if (tmdb.action === "INFO_REQUEST_SUCCES") {

      return (
        <div className="info">
          <div onClick={this.closeInfo.bind(this)} className="close">X</div>
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
          <div onClick={this.closeInfo.bind(this)} className="close">X</div>
          <h1>loading...</h1>
        </div>
      );
    } else if (tmdb.action === "INFO_REQUEST_FAIL") {
      return (
        <div className="info">
          <div onClick={this.closeInfo.bind(this)} className="close">X</div>
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
