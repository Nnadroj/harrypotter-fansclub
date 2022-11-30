import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  return (
    <div className="home-container">
      <h2 className="home-title">
        Welcome to Hogwarts School of Witchcraft and Wizardry
      </h2>

      <div className="home-logo-houses">
        {houses.map((house) => {
          return (
            <div>
              <p className="home-house-name">{house}</p>
              <Link className="home-house-button" to={`/${house}`}>
                <img
                  src={require(`../assets/${house}.png`)}
                  alt={`${house}-logo`}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="home-character-list-button">
        <Link to="/characters-list">
          <button type="button">See all characters</button>{" "}
        </Link>{" "}
      </div>
    </div>
  );
}

export default Home;
