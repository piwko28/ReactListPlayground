import React from 'react';
import { translate } from 'react-i18next';

import ListHeader from './header';

const ListHeaders = ({ t }) => (
  <thead>
    <tr>
      <ListHeader text={t('header.first-name')} />
      <ListHeader text={t('header.last-name')} />
      <ListHeader text={t('header.email')} />
    </tr>
  </thead>
);

export default translate('list')(ListHeaders);
