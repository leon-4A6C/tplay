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
    tmdb[type].details({append_to_response: "videos,credits"}, tmdbOption)
      .then(details => {
        dispatch({
          type: "INFO_REQUEST_SUCCES",
          payload: {
            details: details,
            videos: details.videos,
            credits: details.credits,
            trailer: getTrailer(details.videos.results),
            cast: details.credits.cast,
            crew: details.credits.crew,
            seasons: details.seasons
          }
        });
      }).catch(e => dispatch({type: "INFO_REQUEST_FAIL", payload: {error: e}}));
  }
}
