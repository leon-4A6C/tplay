import React from 'react';
import ReactDOM from 'react-dom';
const TMDB = require("themoviedatabase");
const tmdb = new TMDB("81485988d49a76332eea5e3a5297d342");
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
const backdropBaseUrl = "https://image.tmdb.org/t/p/w780";
const pagesLoaded = {
  tv: 1,
  movies: 1
};

// Promise.all([
//   tmdb.tv.popular({page: pagesLoaded.tv++})
// ]).then(shows => {
//   console.log(shows);
//   showsResults = [];
//   for (var i = 0; i < shows.length; i++) {
//     showsResults = showsResults.concat(shows[i].results);
//   }
//   // add the item to the shows page
//   for (let i = 0; i < showsResults.length; i++) {
//     addItemToPage(showsResults[i], pages[0]);
//   }
// }).catch(e => {
//   console.log(e);
// });
//
// Promise.all([
//   tmdb.movies.popular({page: pagesLoaded.movies++})
// ]).then(movies => {
//   moviesResults = [];
//   for (var i = 0; i < movies.length; i++) {
//     moviesResults = moviesResults.concat(movies[i].results);
//   }
//   for (let i = 0; i < moviesResults.length; i++) {
//     // add the item to the movies page
//     addItemToPage(moviesResults[i], pages[1]);
//   }
// }).catch(e => {
//   console.log(e);
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

// load more when scrolled all the way to the bottom
for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener("scroll", e => {
    if (pages[i].scrollTop >= (pages[i].scrollHeight - pages[i].clientHeight)) {
      console.log("add new items!");
    }
  });
}

window.addEventListener("keydown", e => {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i] === currentPage) {
      break;
    }
  }
  // right key
  if (e.keyCode === 39) {
    if (i >= pages.length-1) {
      i = 0;
    } else {
      i++;
    }
    shiftPages(pages[i]);
  } else if (e.keyCode === 37) { // left key
    if (i <= 0) {
      i = pages.length-1;
    } else {
      i--;
    }
    shiftPages(pages[i]);
  }
});

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
