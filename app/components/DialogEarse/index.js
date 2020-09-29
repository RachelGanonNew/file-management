import React, { memo } from 'react';
 import PropTypes from 'prop-types';
 import styled from 'styled-components';
 import { FormattedMessage } from 'react-intl';
 import messages from './messages';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DialogEarse() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <FormattedMessage {...messages.header} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
                <FormattedMessage {...messages.cancel} />
            </Button>
            <Button onClick={handleClose} color="primary">
                <FormattedMessage {...messages.ok} />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    
  );
}

DialogEarse.propTypes = {};

export default memo(DialogEarse);
