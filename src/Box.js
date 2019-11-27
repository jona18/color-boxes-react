import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeColor(this.props.color, this.props.id);
  }
  
  render() {
    return (
      <div className='Box' onClick={this.handleClick} id={this.props.id} style={{backgroundColor: this.props.color}}>

      </div>
    );
  }
}

export default Box;
