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
      boxes: Array.from({length: this.props.boxes})
    };
    this.renderBoxes = this.renderBoxes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
 
  componentWillMount() {
    this.renderBoxes();
  }
  renderBoxes() {
    let id = 0;
    this.setState(currState => ({
      boxes: currState.boxes.map(box => ({color: this.props.colors[Math.floor(Math.random() * this.props.boxes)], id: id+= 1}))
    }));
  }
  renderBox(oldColor, id) {
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
  handleClick(color, id) {
    this.renderBox(color, id);
  }
  render() {
    console.log();
    return (
      <div className="BoxesContainer">
        {this.state.boxes.map(box => (<Box customClickEvent={this.handleClick} color={box.color} id={box.id} />))}
      </div>
    );
  }
}

export default BoxesContainer;
