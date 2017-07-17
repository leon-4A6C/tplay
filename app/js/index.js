const TMDB = require("themoviedatabase");
const tmdb = new TMDB("81485988d49a76332eea5e3a5297d342");
const baseImg = "https://image.tmdb.org/t/p/w500";
for (var i = 1; i <= 2; i++) {
  tmdb.tv.popular({page: i}).then(shows => {
    for (var i = 0; i < shows.results.length; i++) {
      pages[0].appendChild(generateItem(shows.results[i]));
    }
  });
  tmdb.movies.popular({page: i}).then(movie => {
    for (var i = 0; i < movie.results.length; i++) {
      pages[1].appendChild(generateItem(movie.results[i]));
    }
  });
}

function generateItem(data) {
  let imgUrl = baseImg + data.poster_path;
  let template = document.querySelector("#item");
  let clone = document.importNode(template.content, true);
  clone.title = data.name;
  let img = clone.querySelector("img");
  img.src = imgUrl;
  img.alt = data.name;
  return clone;
}
