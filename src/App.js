import React, { Component } from "react";

class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>
         button clicked {this.state.count} times
        </button>
      </div>
    )

  }
}

export default App;
