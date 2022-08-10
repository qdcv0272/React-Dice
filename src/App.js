import Button from "./Button";
import { useState } from "react";
import Board from "./Board";

import logoImg from './assets/logo.png';

import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [gameHistory, setGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);

    setGameHistory([...gameHistory, nextNum]);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setGameHistory([]);
    setOtherGameHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logoImg} alt='주사위게임 로고' />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
          <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>

      <div className="App-boards">
        <div className="Board App-board">
          <Board className='App-board' color='blue' name='나' gameHistory={gameHistory} />
        </div>
        <div className="Board App-board">
          <Board className='App-board' color='red' name='상대' gameHistory={otherGameHistory} />
        </div>
      </div>
    </div>
  );
}

export default App;