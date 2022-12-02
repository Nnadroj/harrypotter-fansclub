import axios from "axios";

const fetchFunctions = {
  fetchDataByCharacters() {
    return axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((res) => res.data);
  },

  fetchDataByHouse(house) {
    return axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((res) => res.data);
  },
};
export default fetchFunctions;
