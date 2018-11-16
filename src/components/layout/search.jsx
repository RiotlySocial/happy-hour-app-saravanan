// @flow
import React from 'react';
import Downshift from 'downshift';
import { Paper, MenuItem, withStyles, Input, InputAdornment, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import debounce from '../../utils/utils';
import styles from './search_css';

/**
 * Search Component
 * @class Search
 * @extends {React.Component<Props, State>}
 */
class Search extends React.Component<Props, State> {
  handleSearchDebounced: () => void;

  /**
   * Creates an instance of Search
   * @param {object} props props for this component.
   */
  constructor(props) {
    super(props);
    this.state = { results: [], query: '' };
  }

  /**
   * Called after component is mounted
   * @returns {void}
   */
  componentDidMount() {
    const { query } = this.state;
    this.handleSearchDebounced = debounce(() => {
      this.handleSearch.apply(this, [query]);
    }, 250);
  }

  /**
   * Called after component is unmounted
   * @returns {void}
   */
  componentWillUnmount() {
    this.setState({ open: false, results: [] });
  }

  /**
   * Handle when user types in search input
   * @param  {MouseEvent} e event object
   * @returns {void}
   */
  handleChange = (e) => {
    this.setState({ query: e.target.value });
    this.handleSearchDebounced();
  }

  /**
   * Trigger search API after debouncing
   * @returns {void}
   */
  handleSearch = async () => {
    const { query } = this.state;
    const inputValue = query.trim().toLowerCase();
    const inputLength = inputValue.length;
    if (inputLength > 1) {
      const data = await fetch(`/api/table/search/${inputValue}`).then(res => res.json());
      this.setState({ open: true, results: data });
    } else {
      this.setState({ open: false, results: [] });
    }
  };

  /**
   * Called when user clicks outside of suggestions/search
   * @returns {void}
   */
  onOuterClick = () => {
    this.setState({ open: false, results: [] });
  }

  /**
   * Builds content for search result menu
   * @param  {object} item current member data
   * @param  {object} result result object with members and results
   * @returns {string}
   */
  getResultContent = (item, result) => {
    let others = result.members && result.members.map(member => member.first_name) || null;
    // If more than 1 match, append those users as well
    if (result.results.length > 1) {
      others = [...others, ...result.results.filter(member => (member._id !== item._id)).map(member => member.first_name)];
    }
    const othersString = (others && others.length) ? ` is talking with ${others.join(',')}` : '';
    return item.first_name + othersString;
  }

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { classes } = this.props;
    const { open, query, results } = this.state;
    return (
      <div className={classes.root}>
        <Downshift
          itemToString={item => (item ? item.value : '')}
          isOpen={open}
          onOuterClick={this.onOuterClick}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            <div className={classes.container}>
              <Input
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                className={classes.search}
                placeholder="Search your team..."
                {...getInputProps({ onChange: this.handleChange })}
                value={query}
              />
              <ul {...getMenuProps()} style={{ margin: 0 }}>
                <Paper className={classes.paper} square>
                  {(results && results.length && isOpen) ? (
                    results.map((result) => {
                      if (result.results) {
                        const tableId = result._id;
                        return result.results
                          .map((item, index) => <MenuItem
                            {...getItemProps({
                              key: item.pageid,
                              index,
                              item,
                            })}
                            key={item.first_name}
                            selected={(highlightedIndex === index)}
                            component="div"
                            className={classes.searchMenu}
                          >
                            {this.getResultContent(item, result)}
                            <Button component={Link} to={`/table-view/${tableId}`} className={classes.goToButton} size="small" variant="contained" color="secondary">Go to the room</Button>
                          </MenuItem>);
                      }
                      return null;
                    })
                  ) : null}
                </Paper>
              </ul>
            </div>
          )}
        </Downshift>
      </div>
    );
  }
}
export default withStyles(styles)(Search);
