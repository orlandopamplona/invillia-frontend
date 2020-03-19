import React, { useState } from 'react';
import './App.css';
import CardMenu from "./components/cardMenu/cardMenu"
import CardItem from "./components/cardItem/cardItem"

function App() {

  const [characterItem, setCharacterItem] = useState()

  const handleChange = event => {
    setCharacterItem(
      event
    );
  };

  return (
    <div className="app">
      <div id="divMenu" className="divCardMenu">
        <CardMenu click={handleChange}></CardMenu>
      </div>
      <div id="divCard" className="divCardItem">
        <CardItem character={characterItem}></CardItem>
      </div>

    </div>
  );
}

export default App;
