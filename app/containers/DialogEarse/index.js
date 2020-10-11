import React , {useState} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import './dialog.css';
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
  DialogContent,
  Button,
} from '../../materialUi.moduls';
import { deleteRepos } from '../App/actions';

function DialogEarse({folders, deleteRep, choosePathes }) {
  const [open, setOpen] = useState(true);

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
         
          <Button 
            onClick={() => { deleteRep(choosePathes); handleClose();}}
            color="primary" >           
            <FormattedMessage {...messages.ok} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}

DialogEarse.propTypes = {
  folders: PropTypes.object,
  deleteRep: PropTypes.func,
  choosePathes: PropTypes.array,
};
const mapStateToProps = (state) => ({ folders: state.global.rootFolder })

const mapDispatchToProps = (dispatch) => ({
  deleteRep: (choosePathes) => dispatch(deleteRepos(choosePathes))
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(DialogEarse);
