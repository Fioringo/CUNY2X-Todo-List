import React, { Component } from 'react';
import logo from './logo.svg';
import { createEntry } from './reducers';
import './App.css';
import Entry from './components/Entry';

class App extends Component {
  

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onCreate(event.target.value)
  }
  
  render() {
    const todoList = this.props.value.map((item, index) => <Entry value={item} key={index}/>)
    return (
      <div className="App">
        <form id="" onSubmit={this.handleSubmit}>
          <input type="text"></input>
        </form>
        {todoList}
      </div>
    );
  }
}

export default App;
