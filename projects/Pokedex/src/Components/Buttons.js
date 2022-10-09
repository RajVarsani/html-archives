import React from "react";
import './Buttons.css'

const Buttons = ({ ClickChange }) => {
  return (
    <div>
    <header className="btn">
      <button className="All" onClick={ClickChange} type="button">
        Show All
      </button>
      <button className="Grass" onClick={ClickChange} type="button" value="Grass">
        Grass
      </button>
      <button className="Fire" onClick={ClickChange} type="button" value="Fire">
        Fire
      </button>
      <button className="Water" onClick={ClickChange} type="button" value="Water">
        Water
      </button>
      <button className="Bug" onClick={ClickChange} type="button" value="Bug">
        Bug
      </button>
      <button className="Poison" onClick={ClickChange} type="button" value="Poison">
        Poison
      </button>
      <button className="Psychic" onClick={ClickChange} type="button" value="Psychic">
        Psychic
      </button>
      <button className="Normal" onClick={ClickChange} type="button" value="Normal">
        Normal
      </button>
      <button className="Flying" onClick={ClickChange} type="button" value="Flying">
        Flying
      </button>
      <button className="Electric" onClick={ClickChange} type="button" value="Electric">
        Electric
      </button>
    </header>
    </div>
  );
};
export default Buttons;
