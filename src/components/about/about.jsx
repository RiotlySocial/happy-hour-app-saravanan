// @flow
import React from "react";
// import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  }
});
type Props = {};
class About extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div>About page</div>
      </div>
    );
  }
}

export default About; // withStyles(styles, { withTheme: true })(About);
