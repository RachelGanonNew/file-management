
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Folder from '../Folder';
import './list.css';
import AddFolder from '../AddFolder';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
 createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    }}));
function NavFolders({ onLoadChildren, path, name, childrenList, createFolder, chooseDetails }) {
  const [isChoose, setIsChoose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  useEffect(() => {
  }, [isOpen]);
  const onOpen = (event, childPath) => {
    if (!isOpen) {
      onLoadChildren(childPath);
      setIsOpen(true);
    }
    else {
      setIsOpen(false);
    }
  };

  const onChoose = (event, childPath) => {
    if (!isChoose)
      setIsChoose(true);
    else setIsChoose(false);
    chooseDetails(childPath);
  }

  return (<>
  <div className={classes.root}>
    {/* <Grid container spacing={2}>
      <Grid item xs={12} md={6}> */}
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon onClick={(e) => { onOpen(e, path) }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name}></ListItemText>
            <ListItemSecondaryAction>
              <IconButton >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      {/* </Grid>
     </Grid> */}
    </div>
    {/* <li className="li_folders"><div className="folder_wrapper">
      {isOpen ? <i className='fas fa-folder-open folder-icon'></i> : 
      <i className='fas fa-folder folder-icon'></i>}
      <button className="folder_button" type="button" onClick={(e) => { onOpen(e, path) }}>{name}</button>
      <div className="custom-control custom-checkbox mb-3" style={{position : "relative",top:"25%" , left:"25%", display:"inline-block",zIndex:"1"}}>
        <input type="checkbox" className="custom-control-input"  id={path} name={path} onClick={(e)=>{onChoose(e,path)}} />
        <label className="custom-control-label" htmlFor={path}> </label>
      </div>
    </div> */}
    <AddFolder createNewFolder={createFolder} path={path} />
    {isOpen ? <Folder
      key={path}
      path={path}
      name={name}
      childrenList={childrenList}
      onLoadChildren={onLoadChildren}
      createFolder={createFolder} /> : null}
    {/* </li> */}
  </>);
}

NavFolders.propTypes = {
  onLoadChildren: propTypes.func,
  path: propTypes.string,
  name: propTypes.string,
  childrenList: propTypes.array,
  createFolder: propTypes.func,
  chooseDetails: propTypes.func,
};

export default NavFolders;
