import React from "react";
import './Bar.css'

const Bar = ({ClickChange}) => {
  return (
    <div className="Bar">
      <a className = "G" href="#grass" >Grass</a>
      <a className = "F" href="#fire" >Fire</a>
      <a  href="#water" className = "W" >Water</a>
    </div>
  );
};

export default Bar;
