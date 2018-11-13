// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { GoogleLogin } from 'react-google-login';

type Props = {
  hasAuth: boolean,
  loginUser: () => void
};
/**
 * Home Page component
 * @class Home
 * @extends {React.Component<Props>}
   */
class Home extends React.PureComponent<Props> {
  onLoginResponse = (response) => {
    console.log(response);
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default',
    };
    fetch('/api/auth', options).then((r) => {
      const token = r.headers.get('x-auth-token');
      r.json().then((user) => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token });
        }
      });
    });
  }

  onLoginFailure = (error) => {
    console.log(error);
  }

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { loginUser, hasAuth } = this.props;

    if (hasAuth) {
      return <Redirect to="/lobby" />;
    }
    return (
      <div className="r-home center">
        <Card className="r-home-card">
          <CardContent>
            <Typography>Welcome to Happy Hour</Typography>
            <Button onClick={loginUser} color="primary" variant="contained" className="r-home-google">Log in with Google</Button>
            <GoogleLogin
              clientId="962349895975-qlf2jdmdsl9n4m1mmta8b9i40f0igrnp.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={this.onLoginResponse}
              onFailure={this.onLoginFailure}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Home;
