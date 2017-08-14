import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="topBar">
        <div className="block blockLeft">
          <ul className="optionBar">
            <li className="selected">tv-shows</li>
            <li className="">movies</li>
            <li className="">anime</li>
          </ul>
        </div>
        <div className="block blockRight">
          <i id="settingsButton" className="fa fa-cog"></i>
          <input type="text" name="" value="" placeholder="Search"></input>
        </div>
      </div>
    )
  }
}
