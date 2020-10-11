import React, { memo ,useState} from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img';
import PDF from '../../../images/pdf.png';

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
} from '../../../materialUi.moduls';

function Pdf(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [isChoose, setIsChoose] = useState(false);

  const onChoose = (event, childPath) => {
    if (!isChoose)
      setIsChoose(true);
    else setIsChoose(false);
    props.chooseDetails(childPath);
  }
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IconButton>
              <Img src={PDF}></Img>
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
  );
}

Pdf.propTypes = {
  props:PropTypes.object,
};

export default memo(Pdf);
