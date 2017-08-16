import tmdb from "../tmdb";

export function request(tmdbId, type) {

  function getTrailer(res) {
    for (let vid of res) {
      if (vid.site === "YouTube" && vid.type === "Trailer") {
        return vid.key;
      }
    }
    return null;
  }

  return (dispatch) => {
    dispatch({type: "INFO_REQUEST_START"});
    const tmdbOption = {};
    if (type === "movies") {
      tmdbOption["movie_id"] = tmdbId;
    } else if(type === "tv") {
      tmdbOption["tv_id"] = tmdbId;
    } else {
      throw new Error("Wrong type!, only movies and tv allowed");
    }
    Promise.all([
      tmdb[type].details({}, tmdbOption),
      tmdb[type].videos({}, tmdbOption),
      tmdb[type].credits({}, tmdbOption)
    ]).then(info => {
      dispatch({
        type: "INFO_REQUEST_SUCCES",
        payload: {
          details: info[0],
          videos: info[1],
          credits: info[2],
          trailer: getTrailer(info[1].results),
          cast: info[2].cast,
          crew: info[2].crew,
          seasons: info[0].seasons
        }
      });
    }).catch(e => dispatch({type: "INFO_REQUEST_FAIL", payload: {error: e}}));
  }
}
