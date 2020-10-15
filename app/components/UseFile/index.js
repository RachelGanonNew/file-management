import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import Img from '../Img';
import './useFile.css';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Checkbox,
  MoreIcon
} from '../../materialUi.moduls';

function UseFile(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isChoose, setIsChoose] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onChoose = (event, childPath) => {
    if (!isChoose)
      setIsChoose(true);
    else setIsChoose(false);
    props.chooseDetails(childPath);
  }

  // const onChoose = (event, childPath) => {
  //   setIsChoose(!isChoose);
  //   props.chooseDetails(childPath);
  // }
  return <List>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <IconButton>
            <Img src={props.icon}></Img>
          </IconButton></Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.name}></ListItemText>
      <IconButton onClick={handleClick}>
        <MoreIcon variant="contained" className="menu-gray" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Tooltip title="Mark It For Delete">
            <Checkbox className="menu-gray" onClick={(e) => { onChoose(e, props.path) }}></Checkbox>
          </Tooltip>
        </MenuItem></Menu>
    </ListItem>
  </List>
}


UseFile.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  chooseDetails: PropTypes.func,
  icon: PropTypes.string,
};

export default UseFile;
