import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import MainMenu from './main-menu';
import PeopleView from '../views/people';
import '../styles/main.css';

export default () => (
  <BrowserRouter>
    <section>
      <aside>
        <MainMenu />
      </aside>
      <main>
        <Redirect to="/people" />
        <Route path="/people" component={PeopleView} />
      </main>
    </section>
  </BrowserRouter>
);
