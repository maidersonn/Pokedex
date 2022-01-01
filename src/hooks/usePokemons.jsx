import { useEffect, useState } from "react";
import { getAll, getOne } from "services";

const usePokemons = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const response = await getAll();

      const pokemons = [];

      for await (let pokemon of response.results) {
        const pokeInfo = await getOne(pokemon.url);

        pokemons.push({
          name: pokeInfo.name,
          types: pokeInfo.types.map((type) => type.type.name),
          id: pokeInfo.id,
          sprites: pokeInfo.sprites.front_default,
          abilities: pokeInfo.abilities.map((ability) => ability.ability.name),
          weight: pokeInfo.weight,
        });
      }

      setList((prevState) => [...prevState, ...pokemons]);
    };

    apiCall();
  }, []);

  const apiCallGetOne = async (search) => {
    const response = await getOne(
      `https://pokeapi.co/api/v2/pokemon/${search}`
    );

    const pokemon = {
      name: response.name,
      types: response.types.map((type) => type.type.name),
      id: response.id,
      sprites: response.sprites.front_default,
      abilities: response.abilities.map((ability) => ability.ability.name),
      weight: response.weight,
    };

    setList((prevState) => [...prevState, pokemon]);
    return pokemon;
  };

  return { list, apiCallGetOne };
};

export default usePokemons;
