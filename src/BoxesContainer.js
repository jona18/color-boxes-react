import React, {Component} from 'react';
import './BoxesContainer.css';
import Box from './Box'

class BoxesContainer extends Component {
  static defaultProps = {
    colors: ['red', 'blue', 'green', 'yellow', 'violet', 'grey', 'darkgray', 'black', 'pink', 'orange', 'brown', 'darkblue', 'gold', 'cyan', 'greenyellow', 'darkred', 'darkmagenta', 'wheat', 'darkturquoise', 'lightskyblue', 'lime', 'rebeccapurple'],
    boxes: 18
  }
  constructor(props) {
    super(props);
    this.state = {
      boxes: this.createBoxes()
    };
    this.changeColor = this.changeColor.bind(this);
  }
 
  createBoxes() {
    let boxes = [];
    let id = 0;

    for(let i = 0; i < this.props.boxes; i++) {
      boxes.push({color: this.props.colors[Math.floor(Math.random() * this.props.boxes)], id: id+= 1})
    }

    return boxes;
  }

  changeColor(oldColor, id) {
    let newColors = this.props.colors.filter(color => color !== oldColor);
    let randomColor = newColors[Math.floor(Math.random() * newColors.length)]
    
    let newBoxes = this.state.boxes.map(box => {
      if(box.id === id) {
        return {...box, color: randomColor}
      }
      return box;
    });

    this.setState({boxes: newBoxes});
  }

  render() {
    return (
      <div className="BoxesContainer">
        {this.state.boxes.map(box => (<Box changeColor={this.changeColor} color={box.color} id={box.id} />))}
      </div>
    );
  }
}

export default BoxesContainer;
