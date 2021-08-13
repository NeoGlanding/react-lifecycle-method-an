import React, {Component} from 'react'
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      counter: 1
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState((prevState, prevProps) => {
      return {counter: prevState.counter + 1}
    }, () => console.log(this.state.counter))
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.clickHandler}>increment</button>
      </div>
    )
  }
}
export default App;
