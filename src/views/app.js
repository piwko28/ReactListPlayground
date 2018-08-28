import React from "react";
import List from "../components/list";
import "./app.css";

class AppComponent extends React.Component {
  state = {
    list: []
  };

  async componentDidMount() {
    this.setState({
      list: await this.getItems()
    });
  }

  async getItems() {
    return Promise.resolve([
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com"
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@doe.com"
      }
    ]);
  }

  render() {
    return (
      <div className="app">
        <h1>People list</h1>
        <List data={this.state.list} />
      </div>
    );
  }
}

export default AppComponent;
