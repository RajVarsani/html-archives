import React, { Component } from "react";
import CardList from "../Components/CardList";
import { robots } from "../robots";
import Search from "../Components/Search";
import "./App.css";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  // componentDidMount() {
  //   const getdata = async function(){
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await response.json();
  //     return data;
  //     };
      
  // };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      //Here we destructured this.state so we can use robots directly instead of this.state,robots
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <Search SearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

// const App = () => {
//   const [robots, setRobots] = useState('robots');
//   const [searchfield, setsearchfield] = useState('');

//   onSearchChange = (event) =>{
//     setsearchfield = useState('event.target.value');
//     const filteredRobots = robots.filter(robots =>{
//     return robots.name.toLowerCase().includes(searchfield.toLowerCase());
//   }

//   return(
//     <div
//     className="tc">
//        <h1>ROBOFRIENDS</h1>
//        <Search SearchChange={onSearchChange} />
//        <CardList robots={filteredRobots}
//        />;
//     </div>
//   );
// }

export default App;
