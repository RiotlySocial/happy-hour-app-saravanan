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
class AddRecipe extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div>Topic page</div>
      </div>
    );
  }
}

export default AddRecipe; // withStyles(styles, { withTheme: true })(AddRecipe);
