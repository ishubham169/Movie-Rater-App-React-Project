import React from 'react';
import './App.css';
import Headers from './components/header';
import Footer from './components/footer';

function createAlert(){
  alert("hello, u clicked me!!");
}
function App() {
  return (
    <div className="App">
      <Headers info="This is my headers."
                num="45"/>
      <p>
        Main content
      </p>
      <Footer trademark="this is my footers."
      myalert={createAlert}/>
    </div>
  );
}

export default App;
