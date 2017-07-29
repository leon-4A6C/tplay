const TMDB = require("themoviedatabase");
const tmdb = new TMDB("81485988d49a76332eea5e3a5297d342");
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
const backdropBaseUrl = "https://image.tmdb.org/t/p/w780";

Promise.all([
  tmdb.tv.popular({page: 1}),
  tmdb.tv.popular({page: 2})
]).then(shows => {
  console.log(shows);
  showsResults = [];
  for (var i = 0; i < shows.length; i++) {
    showsResults = showsResults.concat(shows[i].results);
  }
  // add the item to the shows page
  for (let i = 0; i < showsResults.length; i++) {
    addItemToPage(showsResults[i], pages[0]);
  }
});
//
// Promise.all([
//   tmdb.movies.popular({page: 1}),
//   tmdb.movies.popular({page: 2})
// ]).then(movies => {
//   moviesResults = [];
//   for (var i = 0; i < movies.length; i++) {
//     moviesResults = moviesResults.concat(movies[i].results);
//   }
//   for (let i = 0; i < moviesResults.length; i++) {
//     // add the item to the movies page
//     addItemToPage(moviesResults[i], pages[1]);
//   }
// });

function generateItem(data) {
  let imgUrl = posterBaseUrl + data.poster_path;
  let template = document.querySelector("#item");
  let clone = document.importNode(template.content, true);
  clone.title = data.name;
  let img = clone.querySelector("img");
  img.src = imgUrl;
  img.alt = data.name || data.title;
  return clone;
}

function addItemToPage(data, page) {
  let clone = generateItem(data);

  page.appendChild(clone);


  const items = page.querySelectorAll(".item");

  // fix the height
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = e => {
      console.log(e);
    };
    items[i].title = items[i].children[0].alt;
    items[i].style.height = (items[i].getBoundingClientRect().width * 1.5) + "px";
  }

}
