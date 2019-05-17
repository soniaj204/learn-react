import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    inputV: ""
  };

  inputChangeHandler = event => {
    this.setState({
      inputV: event.target.value
    });
  };

  deleteCharHandler = (index) => {
    const txt = this.state.inputV.split("");
    txt.splice(index, 1);
    const txtU = txt.join("");
    this.setState({
      inputV: txtU
    })
  }

  render() {
    const charL = this.state.inputV.split("").map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.inputV}
        />
        <p>{this.state.inputV}</p>
        <Validation inputL={this.state.inputV.length} />
        {charL}
      </div>
    );
  }
}

export default App;
