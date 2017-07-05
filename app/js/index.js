const TMDB = require("themoviedatabase");
const tmdb = new TMDB("81485988d49a76332eea5e3a5297d342");

Promise.all([
  tmdb.jobs(),
  tmdb.movies.videos(null, {movie_id: 297762})
]).then(stuff => {
  console.log(stuff);
});

tmdb.search.movies({query: "batman", year: 2007}).then(movies => {
  console.log(movies);
});
