import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  handleColorChange() {
    this.props.customClickEvent(this.props.color, this.props.id);
  }
  render() {
    return (
      <div className='Box' onClick={this.handleColorChange} id={this.props.id} style={{backgroundColor: this.props.color}}>

      </div>
    );
  }
}

export default Box;
