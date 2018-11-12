// @flow
import { createMuiTheme } from '@material-ui/core/styles';

const boxShadow = '0 2px 12px 0 rgba(210,210,210,0.50)';
const theme = createMuiTheme({
  boxShadow,
  typography: {
    useNextVariants: true,
    fontFamily: "'Helvetica', 'Arial', sans-serif",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiSpeedDial: {
      fab: { boxShadow },
    },
    MuiSpeedDialAction: {
      button: {
        color: 'white',
        backgroundColor: '#69B32A',
        '&:hover': {
          backgroundColor: '#357a38',
        },
        width: 56,
        height: 56,
        marginLeft: 0,
        boxShadow,
      },
    },
  },
  palette: {
    type: 'light',
    primary: { main: '#C72121' },
    secondary: { main: '#69B32A', contrastText: '#ffffff' },

    error: { main: '#ca0909' },

    sand: { main: '#F4DECB' },
    shell: { main: '#F8EEE7' },
    status: {
      danger: '#b71c1c',
    },

    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
export default theme;
