import React from 'react';
import { translate } from 'react-i18next';

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
    const { t } = this.props;
    return (
      <div className="app">
        <h1>{t('title')}</h1>
        <List data={this.state.list} />
      </div>
    );
  }
}

export default translate('app')(AppComponent);
