import React from 'react';
import ReactDOM from 'react-dom';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sideBar sideBarClosed">
        <div id="exitSettings" className="exit">
          <i className="fa fa-close"></i>
        </div>
        <h1>settings</h1>
      </div>
    )
  }
}
