import React from 'react';
import { translate } from 'react-i18next';

export default translate('people')(({ t }) => (
  <div>
    <h1>{t('add.title')}</h1>
  </div>
));
