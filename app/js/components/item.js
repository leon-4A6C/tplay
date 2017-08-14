import React from 'react';
import ReactDOM from 'react-dom';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: 0
      }
    }
  }

  componentDidMount() {
    var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      style: {
        height: (rect.width * 1.5) + "px"
      }
    });
  }

  render() {
    return (
      <div title={this.props.name} style={this.state.style} className="item">
        <img src={`http://image.tmdb.org/t/p/w500${this.props.src}`} alt={this.props.name}></img>
      </div>
    )
  }
}
