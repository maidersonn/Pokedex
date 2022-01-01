import { useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import context from "store/context";

const User = () => {
  const { user, loading } = useContext(context);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return !user ? (
    <Redirect to="/login" />
  ) : (
    <section>
      <h2>User page</h2>
      <p>Hello {user.username}. You are in Mai-Pokedex Api.</p>
      <p>Have fun !!</p>
      <Link to="/pokedex">Go to Pokedex</Link>
    </section>
  );
};

export default User;
