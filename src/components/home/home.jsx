// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
      <div style={{ textAlign: 'center', paddingTop: 30 }}>
        <Card style={{ display: 'inline-block' }}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Welcome to Happy Hour
            </Typography>
            <Button onClick={loginUser} color="primary" variant="contained">Login with Google</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Home;
