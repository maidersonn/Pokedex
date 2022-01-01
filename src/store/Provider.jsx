import context from "./context";
import usePokemons from "../hooks/usePokemons";
import { useAuth } from "hooks/useAuth";

const Provider = (props) => {
  const { list, apiCallGetOne } = usePokemons();
  const { user, login, loading, register, registered } = useAuth();

  return (
    <context.Provider
      value={{
        list,
        apiCallGetOne,
        user,
        login,
        loading,
        register,
        registered,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default Provider;
