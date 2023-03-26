import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {


  //This is where the important logic lies in our application
  
  //this is a state (variable) to hold the fetched data from server1
  const [importedData, setImportedData] = useState("");

  //fetch data from server1 and set it to the state
  fetch('http://localhost:4000/')
        .then(response => response.json())
        .then(data => {
          console.log("data", data)
          setImportedData(data.data)
        });

  return (
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
          Learn React
        </a>
         {/*Here we "print" the fetched data so everyone can see the "Hello world!" message from server1...
         we basically use the global state here to read the data after it's changed from the fetch function*/}
        <div>{importedData}</div>
      </header>
    </div>
  );
}

export default App;
