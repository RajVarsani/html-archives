import React from "react";

const search = ({searchfield,SearchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 bw1 b--purple br3 bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={SearchChange}
      />
    </div>
  );
};

export default search;
