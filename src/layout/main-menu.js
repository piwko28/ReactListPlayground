import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <ul>
    <li>
      <Link to="/people/list">People list</Link>
    </li>
    <li>
      <Link to="/people/add">Add person</Link>
    </li>
  </ul>
);
