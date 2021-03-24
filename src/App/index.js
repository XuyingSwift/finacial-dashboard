import React, {Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout'
import AppBar from './AppBar';
import AppProvider from "./AppProvider";

class App extends Component {
  render() {
    return (
      // {} javascript expression
      <AppLayout>
          <AppProvider>
              <AppBar/>
              <Welcome/>
          </AppProvider>

      </AppLayout>
    )
    };
}

export default App