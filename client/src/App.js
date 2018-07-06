import React, { Component } from 'react';
import ToDo from './components/todo';


class App extends Component {
  render() {
    return (
      <div className="row">
         <ToDo />
      </div>
    );
  }
}

export default App;
