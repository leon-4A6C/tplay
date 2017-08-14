import React from 'react';
import ReactDOM from 'react-dom';
import Info from "./js/components/info.js";
import Page from "./js/components/page.js";
// import Settings from "./js/components/settings.js";
// import Nav from "./js/components/nav.js";

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: [<Page key="tv" name="tv-shows"></Page>]
    }
  }
  render() {
    return (
      <div className="main">
        <nav>
        </nav>
        <main>
          {this.state.pages}
        </main>
        <Info type="tv" tmdbId="1399"></Info>
      </div>
    )
  }
}

ReactDOM.render(
  <Main></Main>,
  document.querySelector(".container")
);
