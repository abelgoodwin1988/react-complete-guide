import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {Name: 'Max', age: 28},
      {Name: 'Manu', age: 29},
      {Name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState(
      {
        persons: [
          {Name: newName, age: 28},
          {Name: 'Manu', age: 29},
          {Name: 'Stephanie', age: 27}
        ]
      }
    );
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {Name: 'Max', age: 28},
          {Name: event.target.value, age: 29},
          {Name: 'Stephanie', age: 26}
        ]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>
          Hi, I'm a React App!
        </h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].Name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[1].Name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
          >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].Name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
        />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1',null,'Hi, I\'m a react ap!!!'))
  }
}

export default App;
