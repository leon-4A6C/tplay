import React from 'react';

import Info from "./info.js";
import Page from "./page.js";
// import Settings from "./settings.js";
import Nav from "./nav.js";

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: [<Page key="tv" type="tv" name="tv-shows"></Page>]
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
        <Info></Info>
      </div>
    )
  }
}
