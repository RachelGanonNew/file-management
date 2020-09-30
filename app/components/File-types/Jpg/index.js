import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img';
import JPG from '../../../images/jpg.png';
import '../../../global-styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText ,
  Avatar,
  IconButton
}  from '../../../materialUi.moduls';

function Jpg(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IconButton>
              <Img src={JPG}></Img>
            </IconButton></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name}></ListItemText>
      </ListItem>
    </List>

  );
}

Jpg.propTypes = {
  props: PropTypes.string,
};

export default memo(Jpg);
