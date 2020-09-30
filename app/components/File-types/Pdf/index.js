import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img';
import PDF from '../../../images/pdf.png';

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText ,
  Avatar,
  IconButton
}  from '../../../materialUi.moduls';

function Pdf(props) {
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
      </ListItem>
    </List>
  );
}

Pdf.propTypes = {
  props:PropTypes.string,
};

export default memo(Pdf);
