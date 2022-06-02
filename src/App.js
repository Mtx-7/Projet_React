import logo from './logo.svg';
import './App.css';
import React from 'react'

let element = (
   <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by doing zakaria
        </a>
      </header>
    </div>
   </React.Fragment>
   

)

function getTitle(){
  return <h1>{process.env.REACT_APP_TITLE}</h1>
}

const App = () => {
  return (
    <>
     {getElemrnt("Hello")} 
     {getTitle()}
    </>
    );

}

function getElemrnt(title){

  return<h1>{title}</h1>
}



export default App;
