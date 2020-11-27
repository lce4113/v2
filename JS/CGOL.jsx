class Grid extends React.Component {
  state = {
    "cells": [
      {
        "alive": true
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.cells.map(cell =>
          <Cell alive={cell.alive} />)}
      </React.Fragment>
    );
  }
}

function Cell(props) {
  var classes = "cell " +
    (props.alive ? "alive-cell" : "dead-cell");
  console.log(classes);
  return (
    <div class={classes}></div>
  );
}

const grid = document.getElementById('grid');
ReactDOM.render(React.createElement(Grid), grid);