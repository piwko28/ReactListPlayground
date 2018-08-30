import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import PeopleListView from './people/list';
import PeopleAddView from './people/add';

export default () => (
  <div>
    <Redirect to="/people/list" />
    <Route path="/people/list" component={PeopleListView} />
    <Route path="/people/add" component={PeopleAddView} />
  </div>
);
