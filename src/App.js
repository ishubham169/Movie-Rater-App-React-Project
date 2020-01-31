import React from 'react';
import './App.css';
import Headers from './components/header';
import Footer from './components/footer';
import styled from 'styled-components'

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
      <Headers info="This is my headers."
                num="45"/>
      <p style = {pstyle}>  Main content </p>
      <Paragraph>New Style</Paragraph>
      <Footer trademark="this is my footers."
      myalert={createAlert}/>
    </div>
  );
}

export default App;
