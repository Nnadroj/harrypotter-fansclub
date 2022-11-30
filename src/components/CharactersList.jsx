import React, { useContext, useState, useEffect } from "react";
import fetchFunctions from "./Fetch";
import "./CharactersList.css";
import "./CharacterCard.css";
import CharacterCard from "./CharacterCard";
import CharactersInfosContext from "../contexts/CharactersInfosContext";

function CharactersList() {
  const { characters, setCharacters } = useContext(CharactersInfosContext);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("---");

  useEffect(() => {
    fetchFunctions.fetchDataByCharacters().then((data) => {
      setCharacters(data);
    });
  }, [setCharacters]);

  const handleChangeHouse = (event) => setSelectedHouse(event.target.value);

  return (
    <div>
      <h2 className="charactersList-title">Characters</h2>
      <div className="charactersList-filters-container">
        <div className="charactersList-searchBar">
          <p>Search a character</p>
          <input
            placeholder=" Character search..."
            type="text"
            onChange={(e) => setSelectedCharacter(e.target.value.toLowerCase())}
          />
        </div>
        <form className="charactersList-filter-house">
          <label htmlFor="filter-house">
            Filter by house
            <select onChange={handleChangeHouse} id="select-house">
              <option value="---">---</option> ||
              {
                characters.reduce(
                  (acc, { house }) =>
                    acc[0].indexOf(house) === -1
                      ? [
                          [...acc[0], house],
                          [
                            ...acc[1],
                            <option key={`${house}-select`} value={house}>
                              {!house ? "No house" : house}
                            </option>,
                          ],
                        ]
                      : acc,
                  [[], []]
                )[1]
              }
            </select>
          </label>
        </form>
      </div>
      <div className="charactersList-boxes">
        {characters
          ?.filter(
            (char) =>
              selectedCharacter === "" ||
              char.name.toLowerCase().includes(selectedCharacter)
          )
          .filter(
            (char) => selectedHouse === "---" || char.house === selectedHouse
          )

          .map((char, index) => (
            <div key={index} className="charactersList-box">
              <CharacterCard
                key={index}
                name={char.name}
                image={char.image}
                house={char.house}
                specy={char.species}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CharactersList;
