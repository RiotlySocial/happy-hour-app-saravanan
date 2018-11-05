// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

type Props = {
  hasAuth: boolean,
  loginUser: () => void,
  logoutUser: () => void,
};
/**
 * @class Header
 * @param {Props} props props for header class
 */
const Header = (props: Props) => {
  const { hasAuth, loginUser, logoutUser } = props;
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
            React Redux MUI Flow starter
          </Typography>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/about">About</Link>
          &nbsp;
          {hasAuth
            ? <Button variant="outlined" size="small" color="secondary" style={{ backgroundColor: '#4caf50' }} onClick={logoutUser}>Logout</Button>
            : <Button variant="outlined" size="small" color="secondary" style={{ backgroundColor: '#4caf50' }} onClick={loginUser}>Login</Button>}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
