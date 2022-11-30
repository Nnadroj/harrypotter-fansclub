import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import fetchFunctions from "./Fetch";
import CharacterCard from "./CharacterCard";
import "./House.css";
import CharactersInfosContext from "../contexts/CharactersInfosContext";
import gryffindorLogo from "../assets/logos/Gryffindor-logo.png";
import slytherinLogo from "../assets/logos/Slytherin-logo.png";
import hufflepuffLogo from "../assets/logos/Hufflepuff-logo.png";
import ravenclawLogo from "../assets/logos/Ravenclaw-logo.png";

function House() {
  const { house } = useParams();
  const { characters, setCharacters } = useContext(CharactersInfosContext);

  useEffect(
    () => {
      fetchFunctions.fetchDataByHouse(house).then((data) => {
        setCharacters(data);
      });
    } /* [house] */
  );

  /*   console.log(characters[1]); */

  return (
    <CharactersInfosContext.Provider
      value={{
        characters: characters,
        setCharacters: setCharacters,
      }}
    >
      <div>
        <div className="house-title-logo-container">
          <img
            className="house-title-logo"
            src={
              house === "Gryffindor"
                ? gryffindorLogo
                : house === "Slytherin"
                ? slytherinLogo
                : house === "Hufflepuff"
                ? hufflepuffLogo
                : ravenclawLogo
            }
            alt={`${house}-logo`}
          />
          <h2 className="house-title">Welcome to {house} !</h2>
        </div>
        <div className="house-character-boxes">
          {characters?.map((char, index) => (
            <div key={index} className="house-character-box">
              <CharacterCard
                name={char.name}
                image={char.image}
                house={char.house}
                specy={char.species}
              />
            </div>
          ))}
        </div>
      </div>
    </CharactersInfosContext.Provider>
  );
}

export default House;
