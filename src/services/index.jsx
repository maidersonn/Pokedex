import axios from "axios";

import { getAllPoks, getOnePok } from "./pokemons";
import { login, user, register } from "./auth";

const pokeClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(process.env.REACT_APP_BACK_URL);
const authClient = axios.create({
  baseURL: "https://pokedex-maider.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

const auth = {
  login: login(authClient),
  user: user(authClient),
  register: register(authClient),
};

const getAll = getAllPoks(pokeClient);
const getOne = getOnePok(axios);

export { auth };

export { getAll, getOne };
