import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className='Box' onClick={this.props.customClickEvent} id={this.props.id} data-color={this.props.color} style={{backgroundColor: this.props.color}}>

      </div>
    );
  }
}

export default Box;
