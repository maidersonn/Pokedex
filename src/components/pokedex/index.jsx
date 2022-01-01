import { Link } from "react-router-dom";
import Pokemon from "components/pokemon";
import "./pokedex.css";

const Pokedex = ({ search, onSearchChange, filteredList }) => {
  return (
    <section>
      <section className="container">
        <input
          className="input"
          placeholder="Search by name, id or type"
          value={search}
          onChange={onSearchChange}
        />
      </section>

      <section className="pokemons">
        {filteredList.map((pokemon) => {
          return (
            <Link
              to={{
                pathname: `/pokedex/${pokemon.name}`,
                state: pokemon,
              }}
              className={"card"}
            >
              <Pokemon
                name={pokemon.name}
                sprites={pokemon.sprites}
                id={pokemon.id}
                types={pokemon.types}
              />
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default Pokedex;
