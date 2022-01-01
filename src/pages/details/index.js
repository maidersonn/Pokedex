import { useEffect, useState, useContext } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { Details } from "components/details";
import context from "store/context";

const DetailPage = () => {
  const { apiCallGetOne, list, user, loading } = useContext(context);
  const history = useHistory();
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    id: 0,
    sprites: "",
    types: [],
    abilities: [],
    weight: 0,
  });
  const goBack = () => {
    history.push("/pokedex");
  };

  const isPokemonInList = () => list.find((poke) => poke.name === name);

  useEffect(() => {
    const getPokemon = async () => {
      if (isPokemonInList()) {
        const pokemon = list.find((pokemon) => pokemon.name === name);
        console.log("el poke del name", pokemon);
        setPokemon(pokemon);
      } else {
        const newPokemon = await apiCallGetOne(name);
        setPokemon(newPokemon);
        console.log("entra en else", newPokemon);
      }
    };
    getPokemon();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return !user ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <Details pokemon={pokemon} />

      <section className="back_button">
        <button onClick={goBack}>Go back</button>
      </section>
    </div>
  );
};

export default DetailPage;
