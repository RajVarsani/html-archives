import React from "react";

const Search = ({Searchfield,SearchChange}) => {
  return (
    <div>
      <input
        className="pa3 mb2 bw1 b--purple br3 bg-lightest-blue f5"
        type="search"
        placeholder="Search Pokemons"
        onChange={SearchChange}
      />
    </div>
  );
};

export default Search;
