import React from 'react';
import ReactDOM from 'react-dom';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: "100%" // this apperently helps with the fix in height below
      }
    }
  }

  componentDidMount() {
    const rect = ReactDOM.findDOMNode(this);
    window.addEventListener("resize", () => {
      this.fixHeight(rect);
    });
    this.fixHeight(rect);
  }

  fixHeight(rect) {
    // fix the diff in height
    this.setState({
      style: {
        height: (rect.getBoundingClientRect().width * 1.5) + "px"
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
