import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";

export const NoteAddModal = React.forwardRef((props, ref) => {

    const [open, setOpen] = React.useState(false);
    const [titleError, setTitleError] = React.useState(false);
    const [noteTextError, setNoteError] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
        OpenModal,
      }));

    const OpenModal = () => {
        setOpen(true);
    };

    const AddNotes = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let title = data.get('title');
        let noteText = data.get('noteText');
        console.log(title,noteText);

        if(title === "" || title == null) setTitleError(true);
        else setTitleError(false);
        if(noteText === "" || noteText == null) setNoteError(true);
        else setNoteError(false);

        if((title !== "" && title != null) && (noteText !== "" && noteText != null)){
            setOpen(false);
        }
    }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Note</DialogTitle>
        <Box
            component="form"
            onSubmit={AddNotes}
            noValidate
            sx={{ mt: 1 }}
        >
            <DialogContent >
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    helperText="Please enter title"
                    label="Title"
                    name="title"
                    type="text"
                    fullWidth
                    variant="standard"
                    required={true}
                    error={titleError}
                />
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
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setOpen(false)} >Cancel</Button>
            <Button type="submit" >Add Note</Button>
            </DialogActions>
        </Box>
      </Dialog>
  );
});
