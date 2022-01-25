import axios from "axios";

import { getAllPoks, getOnePok } from "./pokemons";
import { login, user, register } from "./auth";

const pokeClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

const authClient = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
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
