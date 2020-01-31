import React from 'react';
import './App.css';
import Headers from './components/header';
import Footer from './components/footer';
import styled from 'styled-components'
import Number from './components/number'
function createAlert(){
  alert("hello, u clicked me!!");
}
const pstyle = {
  fontSize: '4em',
  color: 'red'
}
const Paragraph = styled.p`
   font-size: 3em;
   color: blue;
`;
function App() {
  return (
    <div className="App">
      <Number/>
    </div>
  );
}

export default App;
