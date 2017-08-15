import React from 'react';
import { connect } from 'react-redux';
const TMDB = require("themoviedatabase");

import FadedBackground from "./fadedBackground.js";
import TrailerButton from "./trailerButton.js";
import InfoList from "./infoList.js";

const tmdb = new TMDB("81485988d49a76332eea5e3a5297d342");

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
    const { info } = this.props;
    const tmdbOption = {};
    if (info.type === "movies") {
      tmdbOption["movie_id"] = info.tmdbId;
    } else if(info.type === "tv") {
      tmdbOption["tv_id"] = info.tmdbId;
    } else {
      throw new Error("Wrong type!, only movies and tv allowed");
    }
    Promise.all([
      tmdb[info.type].details({}, tmdbOption),
      tmdb[info.type].videos({}, tmdbOption),
      tmdb[info.type].credits({}, tmdbOption)
    ]).then(info => {
      console.log(info);
      this.setState({
        info: info[0],
        trailer: this.getTrailer(info[1].results),
        cast: info[2].cast,
        crew: info[2].crew,
        seasons: info[0].seasons
      });
    }).catch(e => console.log(e));
  }

  getTrailer(res) {
    for (let vid of res) {
      if (vid.site === "YouTube" && vid.type === "Trailer") {
        return vid.key;
      }
    }
    return null;
  }

  render() {
    const infoLists = [<InfoList key="cast" cast={this.state.cast} title="cast"></InfoList>, <InfoList key="crew" crew={this.state.crew} title="crew"></InfoList>];
    if (this.state.seasons) {
      infoLists.unshift(<InfoList key="seasons" seasons={this.state.seasons} title="seasons"></InfoList>);
    }
    return (
      <div className="info">
        <div className="bgWrapper">
          <FadedBackground src={this.state.info.backdrop_path} alt={this.props.info.title}></FadedBackground>
          <h1>{this.props.info.title}</h1>
          <p>{this.state.info.overview}</p>
          <TrailerButton trailer={this.state.trailer}></TrailerButton>
        </div>
        {infoLists}
      </div>);
  }
}

export default connect((state) => {
  return state.info;
})(Info);
