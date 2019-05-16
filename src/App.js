import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Sonia",
        age: 1
      },
      {
        name: "SoniaJ",
        age: 2
      },
      {
        name: "SoniaJa",
        age: 3
      }
    ],
    other: "other value"
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 1
        },
        {
          name: "SoniaJ",
          age: 2
        },
        {
          name: "SoniaJa",
          age: 4
        }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Sonia',
          age: 1
        },
        {
          name: event.target.value,
          age: 2
        },
        {
          name: "SoniaJa",
          age: 4
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Project</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, "SoniaJain")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "ss")}
          changed={this.nameChangedHandler}
        >
          <b>Hobbies::</b> ABCD
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
