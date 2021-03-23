import React, {Component } from 'react';
import './App.css';

// functional component
function Welcome(props) {
  return <h1>hello, {props.name}</h1>
}

class App extends Component {
  render() {
    return (
      // {} javascript expression
      <Welcome name={"CryptoDash"}/>
    );
    };
}



export default App;
