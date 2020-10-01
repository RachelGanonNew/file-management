
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import NavRepos from '../navRepos';
import AddFolder from '../../components/AddFolder';
import './folder.css';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText ,
  Avatar,
  IconButton,
  ListItemSecondaryAction,
  FolderIcon,
  MoreIcon,
  Menu,
  MenuItem,
  AddIcon,
  Checkbox,
  Divider,
  Fab,
  Tooltip
}  from '../../materialUi.moduls';

import { makeStyles, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(3),
    },
  }));
function Folder({ onLoadChildren, path, name, childrenList,createFolder, chooseDetails}) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [isChoose,setIsChoose]=useState(false);
  const onChoose = () =>{
    if(!isChoose)
      setIsChoose(true);
    else setIsChoose(false);
    chooseDetails(path);
  };
function openAddFolder()
{
  <AddFolder  createFolder={createFolder} path={path}></AddFolder>
}
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
  }, [isFolderOpen]);
  const openFolder = ( event,path) => {
    if (!isFolderOpen) { 
      onLoadChildren(path);
      setIsFolderOpen(true);
    }
    else {
      setIsFolderOpen(false);
    }
  };

  return (<>
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon onClick={(f) => { openFolder(f, path) }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name}></ListItemText>
        <ListItemSecondaryAction>
          <IconButton onClick={handleClick}>
            <MoreIcon variant="contained" className="menu-blue" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={openAddFolder}>
              <Tooltip title="Add Folder">
              <Fab className={classes.fab}>
                <AddIcon />
              </Fab>
              </Tooltip>
            </MenuItem>
            <Divider className="menu-blue" />
            <MenuItem onClick={handleClose}>
             <Tooltip title="Mark It For Delete">
              <Checkbox className="menu-blue" onClick={(e)=>{onChoose(e,path)}}></Checkbox>
              </Tooltip>
            </MenuItem>
          </Menu>
        </ListItemSecondaryAction>
      </ListItem>
    </List>

    {
      isFolderOpen ? <NavRepos
        key={path}
        path={path}
        name={name}
        childrenList={childrenList}
        onLoadChildren={onLoadChildren}
        
        /> : null
    }
  </>);
}

Folder.propTypes = {
  onLoadChildren: propTypes.func,
  path: propTypes.string,
  name: propTypes.string,
  childrenList: propTypes.array,
  chooseDetails:propTypes.func,
};

export default Folder;
