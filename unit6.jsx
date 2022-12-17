import React, { Component } from 'react';
import { render } from 'react-dom';


const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board  />
    </div>
  );
};


const Box = (props) => {
  return (
    <button className='box' onClick={() => props.stateChanger(props.idx)} key = {props.idx}> {props.test} </button>
  );
};


const Row = (props) => {
  return (
    <div>
      <Box test={props.test[props.i]} stateChanger={props.stateChanger} idx = {props.i}/>
      <Box test={props.test[props.i+1]} stateChanger={props.stateChanger} idx = {props.i+1}/>
      <Box test={props.test[props.i+2]} stateChanger={props.stateChanger} idx = {props.i+2}/>
    </div>
  );
};

const Board = () => {
  const [states, changeStates] = React.useState(['-', '-', '-','-', '-', '-','-', '-', '-']);
  const [turn, switchTurn] = React.useState('X');

  const stateChanger = (key) => {
    const newState = [...states];
    newState[key] = turn;
    changeStates(newState);
    if(turn === 'X') switchTurn('O');
    else switchTurn('X');
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] != '-' && squares[a] === squares[b] && squares[a] === squares[c]) {
        alert('WINNER IS ' +squares[a]);
      }
    }
  };

  React.useEffect(() => {
    calculateWinner(states);
  });
  
  return (
    <div>
      <Row test={states} stateChanger={stateChanger} i = {0}></Row>
      <Row test={states} stateChanger={stateChanger} i = {3}></Row>
      <Row test={states} stateChanger={stateChanger} i = {6}></Row>
    </div>
  );
};


render(<App />, document.querySelector('#root'));
