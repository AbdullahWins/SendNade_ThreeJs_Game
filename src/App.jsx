// src/App.js
import './App.css';
import Game from './components/Game';
import Tree from './components/Tree';

function App() {
  return (
    <div className="App">
      <h1>Grenade Game</h1>
      <Game />
      <Tree />
    </div>
  );
}

export default App;
