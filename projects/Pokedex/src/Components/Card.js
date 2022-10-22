import React, { Component } from "react";
import './card.css'

const Card = ({name,id,type}) => {
  return (
    <div className=" dib br3 pa3 ma2 colour grow bw2 shadow-5">
      <img className="bg-light-blue"  src={`https://img.pokemondb.net/artwork/${name.toLowerCase()}.jpg`} alt="" />
      <h2 className="tc ttc">{name}</h2>
      <p className="tc">Type:{type}</p>
      <a className= "tl" target= "blank" href={`https://pokemondb.net/pokedex/${name}`} >know more!</a>
    </div>
  );
};
export default Card;
