import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img';
import DOCS from '../../../images/docs.png';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText ,
  Avatar,
  IconButton
}  from '../../../materialUi.moduls';


function Docs(props) {
  return (
    <List>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <IconButton>
          <Img src={DOCS}></Img>
          </IconButton></Avatar>
      </ListItemAvatar>
      <ListItemText primary= {props.name}></ListItemText>
    </ListItem>
  </List>
  );
}

Docs.propTypes = {
  props: PropTypes.string,
};

export default memo(Docs);
