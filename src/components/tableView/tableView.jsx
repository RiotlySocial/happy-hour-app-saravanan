// @flow
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import queryString from 'query-string';
import ListItem from '@material-ui/core/ListItem';
import VolumeIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import SpeedDial from '@material-ui/lab/SpeedDial';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CloseIcon from '@material-ui/icons/Close';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Dialog from '@material-ui/core/Dialog';
import { Button, Tooltip } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withSnackbar } from 'notistack';
import type { User } from '../../utils/types';
import './tableView.css';

type Action = {
  icon: any,
  name: string,
  tooltipTitle: string,
  isOff?: boolean,
}
type Props = {
  user: User,
  history?: any,
};
type State = {
  openActions: boolean,
  allActionsOff: boolean,
  actions: [Action]
};

/**
 * Table View Component
 * @class TableView
 * @extends {React.Component<Props, State>}
 */
class TableView extends React.Component<Props, State> {
  /**
   * Creates an instance of TableView
   * @param {object} props props for this component.
   */
  constructor(props) {
    super(props);
    const timer = setInterval(() => this.getData(), 3000);
    this.state = {
      timer,
      tableId: null,
      members: [],
      openActions: false,
      allActionsOff: false,
      actions: [
        { icon: <VideocamIcon fontSize="large" />, name: 'camera', tooltipTitle: 'Turn off camera' },
        { icon: <MicIcon fontSize="large" />, name: 'microphone', tooltipTitle: 'Turn off microphone' },
        { icon: <VolumeIcon fontSize="large" />, name: 'audio', tooltipTitle: 'Turn off audio' },
      ],
    };
  }

  /**
   * On clicking Turn off everything button
   * @returns {void}
   */
  handleSpeedDialClick = () => {
    const { actions, allActionsOff } = this.state;
    this.setState({
      actions: actions.map(action => this.modifyAction({ ...action }, allActionsOff)),
      allActionsOff: !allActionsOff,
    });
  }

  /**
   * On hover out of speed dial button
   * @returns {void}
   */
  handleClose = () => {
    this.setState({ openActions: false });
  }

  /**
   * On hover of speed dial button
   * @returns {void}
   */
  handleOpen = () => {
    this.setState({ openActions: true });
  }

  /**
   * Called on chat action button click
   * @param  {number} index index to identify action button
   * @returns {void}
   */
  handleActionClick = (index) => {
    let { actions, allActionsOff } = this.state;
    actions = [...actions];
    if (actions[index].isOff) {
      allActionsOff = false;
    }
    actions[index] = this.modifyAction(actions[index], actions[index].isOff);
    this.setState({ actions, allActionsOff });
  }

  /**
   * Toggle action button based on boolean passed
   * @param  {Action} action action button object
   * @param  {boolean} isOff toggle buttons
   * @returns {Action}
   */
  modifyAction = (action, isOff) => {
    const newAction = { ...action };
    newAction.isOff = !isOff;
    newAction.tooltipTitle = `Turn ${newAction.isOff ? 'on ' : 'off '}${newAction.name}`;
    switch (action.name) {
      case 'camera':
        newAction.icon = newAction.isOff ? <VideocamOffIcon fontSize="large" /> : <VideocamIcon fontSize="large" />;
        break;
      case 'microphone':
        newAction.icon = newAction.isOff ? <MicOffIcon fontSize="large" /> : <MicIcon fontSize="large" />;
        break;
      case 'audio':
        newAction.icon = newAction.isOff ? <VolumeOffIcon fontSize="large" /> : <VolumeIcon fontSize="large" />;
        break;
      default:
        break;
    }
    return newAction;
  }

  /**
   * Redirect to lobby page on leave table
   * @returns {void}
   */
  handleLeaveTable = () => {
    const { history } = this.props;
    // const { tableId } = this.state;
    const tableId = this.state.tableId || this.props.match.params.tableId;
    fetch(`/api/table/leave/${tableId}`, { method: 'POST', headers: new Headers({ 'Content-Type': 'application/json' }), body: JSON.stringify({}) })
      .then(response => response.json())
      .then((data) => {
        if (history) {
          history.push('/lobby');
        }
      });
  }

  getData = () => {
    const tableId = this.state.tableId || this.props.match.params.tableId;
    fetch(`/api/table/${tableId}`)
      .then(response => response.json())
      .then((data) => {
        this.checkUserActivity(data.members);
        this.setState({ members: data.members, isLoading: false });
      });
  }

  checkUserActivity = (newStateMembers = []) => {
    const { enqueueSnackbar } = this.props;
    let prevStateMembers = [...this.state.members] || [];

    prevStateMembers = prevStateMembers.map(member => member.first_name);
    newStateMembers = newStateMembers.map(member => member.first_name);

    const newMembers = (newStateMembers.filter(mem => !prevStateMembers.some(prevMem => prevMem === mem)));
    const leftMembers = (prevStateMembers.filter(mem => !newStateMembers.some(prevMem => prevMem === mem)));
    if (newMembers.length) {
      enqueueSnackbar(`${newMembers.join(',')} has joined the table.`);
    }
    if (leftMembers.length) {
      enqueueSnackbar(`${leftMembers.join(',')} has left the table.`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  /**
   * Called after component is mounted
   * @returns {void}
   */
  componentDidMount() {
    const { tableId} = this.props.match.params;
    const position = queryString.parse(window.location.search).position;
    if (tableId === 'new') {
      fetch('/api/table/create', { method: 'POST', headers: new Headers({ 'Content-Type': 'application/json' }), body: JSON.stringify({ position }) })
        .then(response => response.json())
        .then(data => this.setState({ tableId: data._id, members: data.members, isLoading: false }));
    } else {
      this.getData();
    }
  }

  getSpeeddialTip = () => this.state.allActionsOff ? 'Turn on everything': 'Turn off everything'

  updateTable = (table) => {
    this.setState({ tableId: table._id, members: table.members });
  }

  renderChatView = () => {
    const { members, openActions, actions } = this.state;
    return (<React.Fragment>
<List className={`r-tv-screens r-tvs-${members.length}`}>
    {members.map((member, index) => (
      <ListItem className="r-tv-screen" key={index}>
        <ListItemAvatar>
          <Tooltip title={member.first_name}><Avatar src={member.avatar + '0'} alt={member.first_name} /></Tooltip>
        </ListItemAvatar>
      </ListItem>
    ))}
  </List>
      <div className="r-tv-actions">
    <Button className="r-tv-leave" onClick={this.handleLeaveTable} color="primary" variant="contained">Leave table</Button>
    <Tooltip title={this.getSpeeddialTip()} placement="left-end">
      <SpeedDial
        ButtonProps={{ color: 'secondary' }}
        ariaLabel="Chat options"
        className="r-tv-speeddial"
        icon={<SpeedDialIcon icon={<DoneAllIcon fontSize="large" />} openIcon={<CloseIcon fontSize="large" />} />}
        openIcon={<CloseIcon fontSize="large" />}
        onBlur={this.handleClose}
        onClick={this.handleSpeedDialClick}
        onClose={this.handleClose}
        onFocus={this.handleOpen}
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        open={openActions}
        direction="up"
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.tooltipTitle}
            onClick={() => this.handleActionClick(index)}
          />
        ))}
      </SpeedDial>
    </Tooltip>
  </div>
    </React.Fragment>);
  }

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { user } = this.props;
    const { members, openActions, actions, isLoading } = this.state;
    return (
      <Dialog
        PaperProps={{ style: { background: 'rgba(0, 0, 0, 0.95)' } }}
        fullScreen
        className="r-table-view"
        open
        aria-labelledby="View members of the table"
      >
        <div className="r-tv-bg">
          { isLoading && <CircularProgress />}
          { !isLoading && this.renderChatView() }
        </div>
      </Dialog>
    );
  }
}

export default withSnackbar(TableView);
