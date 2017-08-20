import React from 'react';

import MainInfo from "./mainInfo.js";
import Page from "./page.js";
// import Settings from "./settings.js";
// import Nav from "./nav.js";
import Player from "./player.js";

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: [
        <Page key="tv" type="tv" name="tv-shows"></Page>
      ]
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
        <MainInfo></MainInfo>
        <Player></Player>
      </div>
    )
  }
}
