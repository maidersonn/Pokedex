import "./details.css";

export const Details = ({ pokemon }) => {
  return (
    <div>
      <section className="detail_box">
        <section className="image_box">
          <img
            className="detail_image"
            src={pokemon.sprites}
            alt={`${pokemon.name}`}
          />
        </section>
        <section className="detail_pokeInfo">
          <p className="name">Name: {pokemon.name}</p>
          <p>Id: {pokemon.id}</p>
          <p>Types:</p>
          {pokemon.types.map((type, index) => {
            return <span>- {type} </span>;
          })}
          <p>Abilities:</p>
          {pokemon.abilities.map((ability) => {
            return <span>- {ability}</span>;
          })}
          <p>Weight: {pokemon.weight}</p>
        </section>
      </section>
    </div>
  );
};
