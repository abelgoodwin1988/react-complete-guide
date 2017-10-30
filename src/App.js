import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hi, I'm a React App!
        </h1>
        <p>This is really working!</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1',null,'Hi, I\'m a react ap!!!'))
  }
}

export default App;
