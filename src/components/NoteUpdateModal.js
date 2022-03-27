import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";

export const NoteUpdateModal = React.forwardRef((props, ref) => {

    const [open, setOpen] = React.useState(false);
    const [noteTextError, setNoteError] = React.useState(false);
    const [noteText, setNoteText] = React.useState("");

    React.useImperativeHandle(ref, () => ({
        OpenModal,
      }));
    
    const [note, setNote] = React.useState(null);
    const OpenModal = (note) => {
        setNote(note);
        setNoteText(note.text);
        setOpen(true);
    };

    const UpdateNotes = (event) => {
        event.preventDefault();

        if(noteText === "" || noteText == null) setNoteError(true);
        else setNoteError(false);

        if(noteText !== "" && noteText != null){
            setOpen(false);
        }
    }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth={true} onClose={() => setOpen(false)}>
        <DialogTitle>{note ? note.title:""}</DialogTitle>
        <Box
            component="form"
            onSubmit={UpdateNotes}
            noValidate
            sx={{ mt: 1 }}
        >
            <DialogContent >
                <TextField
                   id="outlined-multiline-static"
                   label="Note"
                   helperText="Please enter note"
                   name="noteText"
                   multiline
                   rows={2}
                   type="text"
                   fullWidth
                   variant="standard"
                   sx={{width:"100%"}}
                   margin="normal"
                   required={true}
                   error={noteTextError}
                   value={noteText}
                   onChange={(e) => setNoteText(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setOpen(false)} >Cancel</Button>
            <Button type="submit" >Update Note</Button>
            </DialogActions>
        </Box>
      </Dialog>
  );
});
