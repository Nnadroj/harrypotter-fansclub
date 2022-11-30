import "./App.css";
import CharactersList from "./components/CharactersList";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import House from "./components/House";
import CharacterPage from "./components/CharacterPage";
import Footer from "./components/Footer";
import CharactersInfosContext from "./contexts/CharactersInfosContext";
import { useState } from "react";
function App() {
  const [characters, setCharacters] = useState([]);
  return (
    <CharactersInfosContext.Provider
      value={{
        characters: characters,
        setCharacters: setCharacters,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:house" element={<House />} />
            <Route path="/characters-list" element={<CharactersList />} />
            <Route
              path="/characters-list/:house/:name"
              element={<CharacterPage />}
            />
            <Route path="/:house/:name" element={<CharacterPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>

        {/*  */}
      </div>
    </CharactersInfosContext.Provider>
  );
}

export default App;
