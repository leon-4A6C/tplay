import React from 'react';
import FadedBackground from "./fadedBackground.js";
import TrailerButton from "./trailerButton.js";
import InfoList from "./infoList.js";
const TMDB = require("themoviedatabase");
const tmdb = new TMDB("81485988d49a76332eea5e3a5297d342");

export default class Info extends React.Component {
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

  componentWillMount() {
    const tmdbOption = {};
    if (this.props.type === "movies") {
      tmdbOption["movie_id"] = this.props.tmdbId;
    } else if(this.props.type === "tv") {
      tmdbOption["tv_id"] = this.props.tmdbId;
    } else {
      throw new Error("Wrong type!, only movies and tv allowed");
    }

    Promise.all([
      tmdb[this.props.type].details({}, tmdbOption),
      tmdb[this.props.type].videos({}, tmdbOption),
      tmdb[this.props.type].credits({}, tmdbOption)
    ]).then(info => {
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
          <FadedBackground src={this.state.info.backdrop_path} alt={this.state.info.name}></FadedBackground>
          <h1>{this.state.info.name || this.state.info.title}</h1>
          <p>{this.state.info.overview}</p>
          <TrailerButton trailer={this.state.trailer}></TrailerButton>
        </div>
        {infoLists}
      </div>);
  }
}
