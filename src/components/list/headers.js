import React from 'react';
import ListHeader from './header';

const ListHeaders = () => (
  <thead>
    <tr>
      <ListHeader text="First name" />
      <ListHeader text="Last name" />
      <ListHeader text="E-mail address" />
    </tr>
  </thead>
);

export default ListHeaders;
