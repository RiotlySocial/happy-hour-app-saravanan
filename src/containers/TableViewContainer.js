// @flow
import { connect } from 'react-redux';
import TableView from '../components/tableView/tableView';

const table = [{ name: 'Saravanan', avatar: 'https://blogcdn1.secureserver.net/wp-content/uploads/2014/06/create-a-gravatar-beard.png' }, { name: 'Balachandrika', avatar: 'http://billie-scott.com/wp-content/uploads/2018/03/billie-gravatar.jpg' }, { name: 'Arjun', avatar: 'https://cdn3.tokendaily.co/user-images/4a2359b48887048317100f5e5d28d0d6.jpeg' }, { name: 'Saravanan', avatar: 'https://blogcdn1.secureserver.net/wp-content/uploads/2014/06/create-a-gravatar-beard.png' }];
const user = { name: 'Saravanan', avatar: 'https://i.pinimg.com/236x/79/47/51/79475174c3870e931886bbedc635c64e.jpg' };
/**
   * @param {Object} state Current app state.
   * @return {Object} The props to be transferred to this container.
   */
const mapStateToProps = () => ({ table, user });

/**
   * @param {Redux.dispatch} dispatch Dispatch function to sent an action to the Redux state reducer
   * @return {Object} The props to be transferred to this container.
   */
const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableView);
