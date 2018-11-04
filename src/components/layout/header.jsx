// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * @class Header
 */
const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <hr />
  </header>
);

export default Header;
