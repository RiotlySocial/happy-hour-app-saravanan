// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';

type Props = {
  hasAuth: Object,
  loginUser: () => void,
  location?: any
};
/**
 * Home Page component
 * @class Home
 * @extends {React.Component<Props>}
   */
class Home extends React.Component<Props, State> {
  /**
   * Creates an instance of Home
   * @param {object} props props for this component.
   */
  constructor(props: Props) {
    super(props);
    const isLoading = this.checkLogin();
    this.state = { isLoading };
  }

  checkLogin = () => {
    const { location, loginUser } = this.props;
    const token = queryString.parse(location.search).token || window.localStorage.getItem('jwt');
    if (token) {
      loginUser(token);
      return true;
    }
    return false;
  }

  /**
   * Called whenever props is changed
   * @returns {void}
   */
  componentDidUpdate() {
    const { hasAuth } = this.props;
    if (hasAuth) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isLoading: false });
    }
  }

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { hasAuth } = this.props;
    const { isLoading } = this.state;
    if (hasAuth && hasAuth.status === 1) {
      return <Redirect to="/lobby" />;
    }
    return (
      <div className="r-home center">
        <Card className="r-home-card">
          <CardContent>
            <Typography style={{width: '13em', margin: '0 auto'}}>
              { hasAuth.status === 0
                ? <span>Welcome to Happy Hour <span style={{ fontSize: "1.5em", verticalAlign: "middle" }} role="img" aria-label="Happy hour beer icon">🍻</span></span>
                : <span>You successfully logged out. Want to go back to Happy Hour <span style={{ fontSize: "1.5em", verticalAlign: "text-top" }} role="img" aria-label="Happy hour beer icon">🍻</span>?</span>
              }
            </Typography>
            {
              isLoading
                ? <CircularProgress />
                : <Button href={`${window.API_URL}/api/auth/google`} color="primary" variant="contained" className="r-home-google">
                  Log in with Google
                  <Icon className="r-home-googleIcon" />
                  </Button>
            }
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Home;
