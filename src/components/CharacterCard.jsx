import React from "react";
import defaultProfile from "../assets/default.png";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  console.log(props.image);
  return (
    <div key={props.index} className="character-item">
      <div className="character-card-left-part">
        <img
          className="character-card-profile-pic"
          src={props.image === "" ? defaultProfile : props.image}
          alt={props.name}
        />
      </div>
      <div className="character-card-center-part">
        <h3>{props.name}</h3>
        <p>{props.specy}</p>
      </div>
      <div className="character-card-right-part">
        <Link
          name={props.name}
          className="home-house-button"
          to={`/characters-list/${props.house ? props.house : "none"}/${
            props.name
          }`}
        >
          <button type="button">see more</button>
        </Link>
      </div>
    </div>
  );
}

export default CharacterCard;
