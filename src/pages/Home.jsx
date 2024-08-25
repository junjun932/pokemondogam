import styled from "styled-components";
import { Link } from "react-router-dom";
import pokemonBg from "../assets/pokedex.png";
export const Home = () => {
  return (
    <div className="=App container">
      <div className="header">
        <img src={pokemonBg} alt="pokemon-bg" className="pokemon-image" />
        <button className="start-button">포켓몬 도감 시작하기</button>
        <Link to="/dex">덱스이동</Link>
      </div>
    </div>
  );
};
