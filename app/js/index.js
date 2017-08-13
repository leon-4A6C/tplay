import React from 'react';
import ReactDOM from 'react-dom';
// import { Info } from './dist/js/components';
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

class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="bgWrapper">
          <div className="background">
          <img src="https://image.tmdb.org/t/p/w780/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg" alt=""></img>
          <div className="fade"></div>
        </div>
        <h1>Game of thrones</h1>
        <p>Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and the icy horrors beyond.</p>
        <button className="trailerButton" type="button" name="button">
          <span className="fa fa-play">
          </span> trailer
        </button>
      </div>
      <h2 className="seasonsTitle">seasons</h2>
      <ul className="infoList seasons">
        <li>
          <h3>season 1</h3>
        </li>
        <li>
          <h3>season 2</h3>
        </li>
      </ul>
      <h2 className="crewTitle">crew</h2>
      <ul className="infoList crew">
        <li>
          <h3>bla</h3>
        </li>
        <li>
          <h3>bla</h3>
        </li>
      </ul>
    </div>);
  }
}

ReactDOM.render(
  <Info></Info>,
  document.querySelector('.info')
);
