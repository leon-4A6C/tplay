import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const items = [];
    for (let item of this.props.pages) {
      items.push(<li key={item.key} className="selected">{item.props.name}</li>);
    }

    return (
      <div className="topBar">
        <div className="block blockLeft">
          <ul className="optionBar">
            {items}
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
