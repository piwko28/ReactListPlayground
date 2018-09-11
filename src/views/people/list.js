import React, { Component } from 'react';
import { translate } from 'react-i18next';

import List from '../../components/list';
import { API_URL } from '../../config/api';

class PeopleComponent extends Component {
  state = {
    list: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({
      list: await this.getItems()
    });
  }

  async getItems() {
    this.setLoading(true);
    return fetch(`${API_URL}/people`).then(response => {
      this.setLoading(false);
      return response.json();
    });
  }

  setLoading(loading) {
    this.setState({
      loading
    });
  }

  render() {
    const { t } = this.props;
    return (
      <div className='app'>
        <h1>{t('title')}</h1>
        {this.state.loading ? (
          <span>{t('loading')}</span>
        ) : (
          <List data={this.state.list} />
        )}
      </div>
    );
  }
}

export default translate('people')(PeopleComponent);
