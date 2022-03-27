import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

export const NoteDeleteModal = React.forwardRef((props, ref) => {

    const [open, setOpen] = React.useState(false);
    const [note, setNote] = React.useState(null);

    React.useImperativeHandle(ref, () => ({
        OpenModal,
    }));
    
    
    const OpenModal = (note) => {
        setNote(note);
        setOpen(true);
    };

    const deleteNote = (event) => {
        event.preventDefault();
        setOpen(false);
    }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth={true} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Note</DialogTitle>
            <DialogContent >
                <Typography>Do you want to delete this note "{note ? note.title :""}" </Typography>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setOpen(false)} >Cancel</Button>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={(e) => deleteNote(e)} color="error" >Delete Note</Button>
            </DialogActions>
      </Dialog>
  );
});
