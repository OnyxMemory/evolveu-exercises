import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ll from './components/linkedList';
import LinkedListComp from './components/LinkedListComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <LinkList />
        <h1>This is my new beginning</h1>
        <LinkedListComp/>
      </div>
    );
  }
}

class LinkList extends Component {
  constructor() {
    super();
    this.state = {
      x : 0,
      linked: new ll.LinkedList("first")
    }
    //this.linked = new ll.LinkedList(this.state.x);
    this.handleChange = this.handleChange.bind(this);
    this.addDiv = this.addDiv.bind(this);
  }
  
  addDiv() {
    //this.setState({linked: new ll.LinkedList(this.state.x)});
    this.state.linked.add(this.state.x);
    //this.linked.add(this.state.x);
    console.log(this.state.linked.show());
  }
  handleChange(event) {
    this.setState({x: event.target.value});
  }

  render() {
    return (
      <div>
        <input value={this.state.x} onChange={this.handleChange}></input>
        <button id='btn' onClick={this.addDiv}>Add Node</button>
      </div>
    );
  }
}

export default App;
