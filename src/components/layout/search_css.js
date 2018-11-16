// @flow

/**
 * Styles for search component
 * @param {any} theme theme to be applied to the component
 * @returns {void}
 */
const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  search: {
    padding: '4px 0 1px 15px',
    flexFlow: 'row',
    zIndex: 3,
    '&:before, &:after': {
      display: 'none',
    },
    '& input': {
      height: '1.575em',
    },
  },
  paper: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    top: 0,
    boxShadow: theme.boxShadow,
    'border-radius': 20,
    overflow: 'hidden',
    flexFlow: 'column',
    paddingTop: 44,
    background: 'transparent',
    minWidth: '14em',
    maxWidth: '32em',
  },
  goToButton: {
    padding: '2px 52px',
    minHeight: 16,
    borderRadius: 12,
    fontSize: '0.8rem',
    width: 104,
    marginLeft: 15,
  },
  searchMenu: {
    fontSize: '0.9rem',
    justifyContent: 'space-between',
    background: '#fff',
  },
});

export default styles;
