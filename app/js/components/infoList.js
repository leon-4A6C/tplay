import React from 'react';
import ReactDOM from 'react-dom';

export default class Infolist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="infoList">
        <h2 className={`${this.props.title}Title`}>{this.props.title}</h2>
        <ul className="infoListUl">
          <li>
            <h3>{this.props.title} 1</h3>
          </li>
          <li>
            <h3>{this.props.title} 2</h3>
          </li>
        </ul>
      </div>
    )
  }
}
