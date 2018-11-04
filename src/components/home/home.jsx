// @flow
import React from "react";
// import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  }
});
type Props = {};
class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div>Home page</div>
      </div>
    );
  }
}

export default Home; // withStyles(styles, { withTheme: true })(Home);
