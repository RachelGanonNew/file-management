import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img'; 
import PNG from '../../../images/png.png';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText ,
  Avatar,
  IconButton
}  from '../../../materialUi.moduls';

function Png(props) {
<List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IconButton>
            <Img src={PNG}></Img>
            </IconButton></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name}></ListItemText>
      </ListItem>
    </List>
}

Png.propTypes = {
  props: PropTypes.string,
};

export default memo(Png);
