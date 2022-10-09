import React from "react";
import Card from "./Card";

const Cardlist = ({pokemons}) => {
  return (
    <div className="mt4">
      {pokemons.map((user, i) => {
        return (
          <Card
            key={pokemons[i].id}
            id={pokemons[i].id}
            name={pokemons[i].name}
            type={pokemons[i].type}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
