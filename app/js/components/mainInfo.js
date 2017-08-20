import React from "react";

import Info from "./info.js";
import SeasonOverview from "./seasonOverview.js";

class mainInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mainInfo">
        <Info></Info>
        <SeasonOverview></SeasonOverview>
      </div>
    );
  }
}
