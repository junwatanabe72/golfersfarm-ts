import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from './components/templates/Header';
// import Body from './components/templates/Body';
// import Modal from './container/ModalContainer';

async function axiosGet(){
  const data = await axios.get("http://localhost:3000/users");
  console.log({data});
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={()=>{axiosGet()}}>
          hello world!
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
      <Header />
    </div>
  );
}

export default App;
