import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CharactersInfosContext from "../contexts/CharactersInfosContext";
import "./CharacterPage.css";
import gryffindorLogo from "../assets/logos/Gryffindor-logo.png";
import slytherinLogo from "../assets/logos/Slytherin-logo.png";
import hufflepuffLogo from "../assets/logos/Hufflepuff-logo.png";
import ravenclawLogo from "../assets/logos/Ravenclaw-logo.png";
import defaultProfile from "../assets/default.png";

function CharacterPage() {
  const { name } = useParams();
  const { characters } = useContext(CharactersInfosContext);

  const selectedChar = characters.find((element) => {
    return element.name === `${name}`;
  });

  console.log(selectedChar);
  return (
    <div className="characterPage-global-container">
      <div className="characterPage-left-part">
        <div className="characterPage-title">
          <h2>{selectedChar.name}</h2>
        </div>
        <div className="characterPage-main-infos">
          <div className="characterPage-life">
            <p>Gender: {selectedChar.gender}</p>
            <div className="characterPage-date-birth">
              <p>
                {selectedChar.dateOfBirth === ""
                  ? `We have no information about ${selectedChar.name}'s date of birth`
                  : `Date of birth: ${selectedChar.dateOfBirth}`}
              </p>
            </div>
            <div className="characterPage-life-status">
              <p>
                {selectedChar.alive === false
                  ? `${selectedChar.name} is dead`
                  : `${selectedChar.name} is alive`}
              </p>
            </div>
          </div>
          <div className="characterPage-house">
            <p>
              {selectedChar.house === ""
                ? `${selectedChar.name} is not a student from Hogwarts`
                : `${selectedChar.name} is part of the house ${selectedChar.house}`}
            </p>
            <img
              src={
                selectedChar.house === "Gryffindor"
                  ? gryffindorLogo
                  : selectedChar.house === "Slytherin"
                  ? slytherinLogo
                  : selectedChar.house === "Hufflepuff"
                  ? hufflepuffLogo
                  : selectedChar.house === "Ravenclaw"
                  ? ravenclawLogo
                  : "no"
              }
              alt={
                selectedChar.house === "" ? "" : `${selectedChar.house}-logo`
              }
            />
          </div>
        </div>
        <div className="characterPage-physical-infos">
          <h3>Physical infos</h3>
          <p>
            Specy:{" "}
            {selectedChar.species === "" ? "No info" : selectedChar.species}
          </p>
          <p>
            Ancestry:{" "}
            {selectedChar.ancestry === "" ? "No info" : selectedChar.ancestry}
          </p>

          <p>
            Eyes colour:{" "}
            {selectedChar.eyeColour === "" ? "No info" : selectedChar.eyeColour}
          </p>
          <p>
            Hair colour:{" "}
            {selectedChar.hairColour === ""
              ? "No info"
              : selectedChar.hairColour}
          </p>
        </div>
        <div className="characterPage-wand-infos">
          {selectedChar.ancestry === "muggle" ? (
            "Muggles don't own wands"
          ) : (
            <>
              <h3>Wand information</h3>
              <ul>
                <li>
                  {selectedChar.wand.core === ""
                    ? "Core: no info"
                    : `Core: ${selectedChar.wand.core}`}
                </li>
                <li>
                  {selectedChar.wand.length === null
                    ? "Size: no info"
                    : `Size: ${selectedChar.wand.length} cm`}
                </li>
                <li>
                  {selectedChar.wand.wood === ""
                    ? "Wood type: no info"
                    : `Wood type: ${selectedChar.wand.wood}`}
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="characterPage-right-part">
        <div className="characterPage-profile-pic">
          <img
            src={
              selectedChar.image === "" ? defaultProfile : selectedChar.image
            }
            alt={selectedChar.name}
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
