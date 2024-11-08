import './App.css';
import { useState } from "react";

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <h2>Home page will go here!</h2>
      </header>
    </div>
  );
}

export default App;
