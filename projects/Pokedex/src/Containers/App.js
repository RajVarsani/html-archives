import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import Search from "../Components/Search";
import { pokemons } from "../Components/pokemons";
import "../index.css";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import Buttons from "../Components/Buttons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
      searchfield: "",
      type: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onClickChange = (event) => {
    this.setState({ type: event.target.value });
  };

  render() {
    let filteredcards = this.state.pokemons;
    if (this.state.searchfield) {
      filteredcards = this.state.pokemons.filter((pokemons) => {
        return pokemons.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase());
      });
    } else {
     filteredcards = this.state.pokemons.filter((pokemons) => {
        return pokemons.type
          .toLowerCase()
          .includes(this.state.type.toLowerCase());
      });
    }

    if (this.state.pokemons.length === 0) {
      return <h1>Loading!!</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="tc f1 ma4 mb3">POKEDEX</h1>
          <Search SearchChange={this.onSearchChange} />
          <Scroll>
            <Buttons ClickChange={this.onClickChange} />
            <ErrorBoundary>
              <Cardlist pokemons={filteredcards} />
            </ErrorBoundary>
          </Scroll>
          {/* <Bar />
          <Types ClickChange={this.onClickChange} /> */}
        </div>
      );
    }
  }
}

export default App;
