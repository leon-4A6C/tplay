import React from 'react';
import ReactDOM from 'react-dom';
const profile_path = "http://image.tmdb.org/t/p/h632";

export default class Infolist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.title === "seasons") {
      this.items = this.props.seasons.map(x => (<SeasonsItem key={x.id} data={x}></SeasonsItem>));
    } else if (this.props.title === "cast") {
      this.items = this.props.cast.map(x => (<CastItem key={x.id} data={x}></CastItem>));
    } else if (this.props.title === "crew") {
      this.items = this.props.crew.map(x => (<CrewItem key={x.id} data={x}></CrewItem>));
    } else {
      console.warn("in correct title prop, it should be seasons, cast or crew");
    }
    return (
      <div className="infoList">
        <h2 className={`${this.props.title}Title`}>{this.props.title}</h2>
        <ul className="infoListUl">
          {this.items}
        </ul>
      </div>
    )
  }
}

class SeasonsItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <li>
        <img src={`${profile_path}${this.props.data.poster_path}`}></img>
        <h3>{this.props.title} 1</h3>
      </li>
    )
  }
}

class CastItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <li>
        <img src={`${profile_path}${this.props.data.profile_path}`}></img>
        <h3>{this.props.title} 1</h3>
      </li>
    )
  }
}

class CrewItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <li>
        <img src={`${profile_path}${this.props.data.profile_path}`}></img>
        <h3>{this.props.title} 1</h3>
      </li>
    )
  }
}
