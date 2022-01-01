import { useContext } from "react";
import { NavLink } from "react-router-dom";
import context from "store/context";
import "./header.scss";

const Header = () => {
  const { user } = useContext(context);
  return (
    <section className="header">
      <section className="title">
        <h2 className="titlePokedex">Mai-Pokedex</h2>
      </section>
      <section className="link">
        <section>
          <NavLink className="default" activeClassName="selected" to="/home">
            Home
          </NavLink>
        </section>

        {user ? (
          <section className="linksUnderCondition">
            <section>
              <NavLink
                className="default"
                activeClassName="selected"
                to="/user"
              >
                Me
              </NavLink>
            </section>
            <section>
              <NavLink
                className="default"
                activeClassName="selected"
                to="/pokedex"
              >
                Pokedex
              </NavLink>
            </section>
          </section>
        ) : (
          <section className="linksUnderCondition">
            <NavLink className="default" activeClassName="selected" to="/login">
              Login
            </NavLink>
            <NavLink
              className="default"
              activeClassName="selected"
              to="/register"
            >
              Register
            </NavLink>
          </section>
        )}
      </section>
    </section>
  );
};

export default Header;
