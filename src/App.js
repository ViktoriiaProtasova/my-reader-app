import React from 'react';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import Reader from './components/Reader/Reader.jsx';
import publications from './publications.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reader items={publications} />
      </div>
    );
  }
}

export default App;
