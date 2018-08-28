import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import ListHeaders from './headers';
import ListItem from './item';

import './styles.css';

class ListComponent extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    if (!this.props.data) {
      return <p>{t('no-data')}</p>;
    }
    return (
      <table>
        <ListHeaders />
        <tbody>
          {this.props.data.map(item => <ListItem key={item.id} data={item} />)}
        </tbody>
      </table>
    );
  }
}

export default translate('list')(ListComponent);
