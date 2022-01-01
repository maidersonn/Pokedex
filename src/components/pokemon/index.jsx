import "./pokemon.css";

const Pokemon = ({ sprites, name, id, types }) => (
  <section>
    <section>
      <img className="image" src={sprites} alt={`${name}`} />
    </section>
    <section className="pokeInfo">
      <p className="name">Name: {name}</p>
      <p>Id: {id}</p>
      <p>Types:</p>
      {types.map((type, index) => {
        return <span>- {type} </span>;
      })}
    </section>
  </section>
);

export default Pokemon;
