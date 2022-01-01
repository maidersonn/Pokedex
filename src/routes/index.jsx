import Pokedex from "pages/pokedex";
import Details from "pages/details";
import Login from "pages/login";
import Home from "pages/home";
import Register from "pages/register";
import User from "pages/user";

export default [
  {
    path: "/pokedex",
    component: Pokedex,
    exact: true,
  },
  {
    path: "/pokedex/:name",
    component: Details,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
  },
  {
    path: "/user",
    component: User,
    exact: true,
  },
];
