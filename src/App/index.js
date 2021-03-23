import React, {Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout'

class App extends Component {
  render() {
    return (
      // {} javascript expression
      <AppLayout>
          <Welcome/>
      </AppLayout>
    )
    };
}

export default App