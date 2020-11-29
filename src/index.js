import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './CGOL/CGOL.js';
import Projects from './Projects/projects.js';
import './main.scss';
import './title.scss';

ReactDOM.render(<Grid length="150" />, document.getElementById('grid'));
// ReactDOM.render(<Projects />, document.getElementById('projects'));