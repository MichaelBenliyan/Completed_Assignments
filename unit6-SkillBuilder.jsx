import React from 'react';
import ReactDOM from 'react-dom';

console.log(colors);

const colorHeader = <h2 id="colorHead">Color Changer!</h2>;
ReactDOM.render(colorHeader, document.getElementById('header'));

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxColors: []
    };
    this.reset = this.reset.bind(this)
  }
  reset() {
    const newColors = [];
    for (let i = 0; i < this.state.boxColors.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.props.colors.length);
      newColors.push(this.props.colors[randomIndex]);
    }
    this.setState({boxColors: newColors});
  }

  render() {
    console.log('Board Props', this.props.colors);
    // notice we can render all of the tags in the array boxes by writing {boxes}.
    // Any code appearing between curly braces in jsx will be evaluated as javascript.
    // This allows us to do things like: <div id={myVar}>Example!</div>
    const boxes = [];
    for (let i=0; i < 16; i++ ) {
      const randomIndex = Math.floor(Math.random() * this.props.colors.length);
      this.state.boxColors.push(this.props.colors[randomIndex]);
      boxes.push(<Box color = {this.state.boxColors[i]}/>);
    }
    return (
      <div id="board">
        <button className="btn" onClick={this.reset}>New Colors!</button>
        {boxes}
      </div>
    );
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const color = this.props.color;
    return (
      <div className='box' style={{background: color}}></div>
    );
  }
}

ReactDOM.render(<Board colors = {colors}/>, document.getElementById('content'));
