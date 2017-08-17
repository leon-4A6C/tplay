import React from 'react';
const profile_path = "http://image.tmdb.org/t/p/h632";
const noImgImg = "http://via.placeholder.com/427x632"; // the img to use when there is no img

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
      throw new Error("in correct title prop, it should be seasons, cast or crew");
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
  }
  render() {
    return (
      <li>
        <img src={this.props.data.poster_path ? `${profile_path}${this.props.data.poster_path}` : noImgImg}></img>
        <h3>{this.props.data.season_number == 0 ? "specials" : "season " + this.props.data.season_number}</h3>
      </li>
    )
  }
}

class CastItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <img src={this.props.data.profile_path ? `${profile_path}${this.props.data.profile_path}` : noImgImg}></img>
        <h3>{this.props.data.name}</h3>
        <h6>{this.props.data.character}</h6>
      </li>
    )
  }
}

class CrewItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <img src={this.props.data.profile_path ? `${profile_path}${this.props.data.profile_path}` : noImgImg}></img>
        <h3>{this.props.data.name}</h3>
        <h6>{this.props.data.job}</h6>
      </li>
    )
  }
}
