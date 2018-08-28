import React from 'react';

import List from '../components/list';
import { API_URL } from '../config/api';

import './app.css';

class AppComponent extends React.Component {
  state = {
    list: [],
  };

  async componentDidMount() {
    this.setState({
      list: await this.getItems(),
    });
  }

  async getItems() {
    return fetch(`${API_URL}/people`).then(response => response.json());
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
