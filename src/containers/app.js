import React, { Component } from "react";
import Listcards from "../components/listcards";
import Searchbox from "../components/searchbox";
import "./app.css";
import Scroll from "../components/scroll";
import ErrorBounty from "../components/errorBounty";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchbox: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchbox: event.target.value });
  };

  render() {
    const { robots, searchbox } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchbox.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Smoky Robots</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBounty>
            <Listcards robots={filterRobots} />
          </ErrorBounty>
        </Scroll>
      </div>
    );
  }
}

export default App;
