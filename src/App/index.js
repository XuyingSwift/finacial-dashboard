import React, {Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import styled, {css} from 'styled-components';

const MyButton = styled.div`
color:green;
${props => props.primary && css`
  color: red;
`}
`

const TomatoButton = styled(MyButton)`
  color:tomato;
  border-color: black;
`

class App extends Component {
  render() {
    return (
      // {} javascript expression
      <div>
        <Welcome/>
        <MyButton>Xuying</MyButton>
        <MyButton primary>Xuying</MyButton>
        <TomatoButton>Xuying</TomatoButton>

      </div>
      
    );
    };
}



export default App