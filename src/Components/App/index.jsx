import React, { Component } from 'react';
import AppPropType from '../../PropTypes/AppPropType';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('someThing');
    /* eslint-enable no-console */
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Chuxie</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = { ...AppPropType };
export default App;
