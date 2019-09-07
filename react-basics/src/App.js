import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Hi, I am react App!</h1>
          <Person/>
        </div>
      </div>
    );

    /* return React.createElement('div',{className:'App'},React.createElement('h1',null,'hi, I\'m a react app!')); */
  }
}

export default App;
