import React, { Component } from 'react';
import omurl from './om.txt';
import './CGOL.scss';

class Grid extends Component {

  constructor(props) {
    super(props);
    setTimeout(() => this.update(), 1250);
    this.length = Number(props.length);
    document.documentElement.style.setProperty('--length', this.length);
    this.cellsize = window.innerWidth / this.length;
    this.height = Math.floor(window.innerHeight / this.cellsize);
    this.maxHeight = this.height;
    this.state = {
      "grid": Array(this.height).fill(0).map(() =>
        Array(this.length).fill(0).map(() => false))
    };
    window.onresize = () => {
      this.cellsize = window.innerWidth / this.length;
      this.height = Math.min(Math.floor(window.innerHeight / this.cellsize), this.maxHeight);
      var grid = Array(this.height).fill(0).map((n, i) =>
        this.state.grid[i] || Array(this.length).fill(false));
      this.setState({ grid });
    };
  }

  update() {
    setTimeout(() => {
      const oldgrid = this.state.grid;
      var grid = [];
      for (let i = 0; i < oldgrid.length; i++) {
        grid.push([]);
        for (let j = 0; j < oldgrid[i].length; j++) {
          var neighbors = 0;
          for (let k = -1; k <= 1; k++) {
            for (let l = -1; l <= 1; l++) {
              if (
                (k === 0 && l === 0) ||
                (i + k < 0 || i + k >= oldgrid.length) ||
                (j + l < 0 || j + l >= oldgrid[i].length)
              ) continue;
              if (oldgrid[i + k][j + l]) neighbors++;
            }
          }
          grid[i][j] = oldgrid[i][j]
            ? neighbors === 2 || neighbors === 3
            : neighbors === 3;
        }
      }
      this.setState({ grid });
      this.update();
    }, 150);
  }

  async componentDidMount() {
    const res = await fetch(omurl);
    const text = await res.text();
    const om = text.split('\n').map(s =>
      s.split(', ').map(n => n === "1"));
    var grid = Array(this.height).fill(0)
      .map(() => Array(this.length).fill(false));
    grid = grid.map((row, i) => {
      const h = Math.floor(i - (this.height - om.length) / 2);
      const dist = 4;
      if (om.length <= h || h < 0) {
        if (om.length + dist > h && h >= -dist) return row;
        return row.map(() => Math.random() < 0.15);
      }
      const l = Math.floor((this.length - om[h].length) / 2);
      return row.map((cell, j) => om[h][j - l] || false);
    });
    this.setState({ grid });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.grid.map((row, i) =>
          <div className="row">{row.map((cell, j) =>
            <Cell alive={cell} key={[i, j]} />)}</div>)}
      </React.Fragment>
    );
  }

}

function Cell(props) {
  return (
    <div className={"cell " +
      (props.alive ? "alive" : "")}></div>
  );
}

export default Grid;