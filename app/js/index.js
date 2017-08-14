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

class FadedBackground extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = "https://image.tmdb.org/t/p/w780";
  }
  render() {
    return (
      <div className="background">
        <img src={this.baseUrl + this.props.src} alt={this.props.alt}></img>
        <div className="fade"></div>
      </div>
    )
  }
}

class TrailerButton extends React.Component {
  constructor(props) {
    super(props);

    this.playTrailer = this.playTrailer.bind(this);
  }

  playTrailer(e) {
    console.log("play trailer: " + this.props.trailer);
  }

  render() {
    return (
      <button onClick={this.playTrailer} className="trailerButton" type="button" name="button">
        <span className="fa fa-play"></span>
         trailer
      </button>
    )
  }
}

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "loading",
        overview: "loading",
        backdrop_path: "loading"
      },
      trailer: "loading"
    }
    const tmdbOption = {};
    if (this.props.type === "movies") {
      tmdbOption["movie_id"] = this.props.tmdbId;
    } else if(this.props.type === "tv") {
      tmdbOption["tv_id"] = this.props.tmdbId;
    } else {
      console.warn("Wrong type!, only movies and tv allowed");
    }

    Promise.all([
      tmdb[this.props.type].details({}, tmdbOption),
      tmdb[this.props.type].videos({}, tmdbOption),
      tmdb[this.props.type].credits({}, tmdbOption)
    ]).then(info => {
      console.log(info);
      this.setState({
        info: info[0],
        trailer: this.getTrailer(info[1].results),
        cast: info[2].cast,
        crew: info[2].crew
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
    return (
      <div>
        <div className="bgWrapper">
          <FadedBackground src={this.state.info.backdrop_path} alt={this.state.info.name}></FadedBackground>
          <h1>{this.state.info.name || this.state.info.title}</h1>
          <p>{this.state.info.overview}</p>
          <TrailerButton trailer={this.state.trailer}></TrailerButton>
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
        <h2 className="castTitle">cast</h2>
        <ul className="infoList cast">
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
  <Info type="tv" tmdbId="1399"></Info>,
  document.querySelector('.info')
);
