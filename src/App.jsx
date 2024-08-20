import { useState } from "react";
import pokemonBg from "./assets/pokedex.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="=App container">
      <div className="header">
        <img src={pokemonBg} alt="pokemon-bg" className="pokemon-image" />
        <button className="start-button">포켓몬 도감 시작하기</button>
      </div>
    </div>
  );
}

export default App;
