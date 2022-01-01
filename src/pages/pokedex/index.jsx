import { useState } from "react";
import { useContext } from "react";

import context from "store/context";
import Pokedex from "components/pokedex";
import { Redirect } from "react-router-dom";

let id = null;

const PokedexPage = () => {
  const { list, apiCallGetOne, user, loading } = useContext(context);
  const [search, setSearch] = useState("");

  const filterList = (list) => {
    const filtered = list.filter(
      ({ name, id, types }) =>
        !search ||
        name.toLowerCase().includes(search.toLowerCase()) ||
        id === parseInt(search) ||
        types.find((type) => type.includes(search))
    );

    if (list.length && !filtered.length) {
      onEmptyList(search);
    }

    return filtered;
  };

  const onEmptyList = (search) => {
    clearTimeout(id);
    id = setTimeout(async () => await apiCallGetOne(search), 2000);
  };

  const onSearchChange = ({ target }) => {
    setSearch(target.value);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log("pokedex user", user);
  return !user ? (
    <Redirect to="/login" />
  ) : (
    <Pokedex
      search={search}
      onSearchChange={onSearchChange}
      filteredList={filterList(list)}
    />
  );
};

export default PokedexPage;
