import React, { useContext } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import NoteContext from '../context/notes/NoteContext';
const EditDialogBox = ({ showDialoag, setShowDialog, note, setNote }) => {

    //!   fetching context
    const context = useContext(NoteContext);
    // eslint-disable-next-line
    const { editNote } = context;

    //! ---| Onclick | Save
    const handleSave = (e) => {
        e.preventDefault();
        editNote(note.id, note.editTitle, note.editDescription, note.editTag)
        setShowDialog(false);
        // showAlert('Updated successfully', 'success')
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleClose = () => {
        setShowDialog(false)
    }

    // Tag optio list
    const tagList = [
        { value: null },
        { value: 'ToDo' },
        { value: 'Work' },
        { value: 'Love' },
        { value: 'Money' },
        { value: 'Personal' },
        { value: 'Shopping' },
        { value: 'Reminder' }
    ]
    return (
        <Dialog open={showDialoag} onClose={handleClose} aria-labelledby="">
            <DialogTitle id="">Edit Note</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Title"
                    type="text"
                    fullWidth
                    required
                    color='secondary'
                    name="editTitle"
                    value={note.editTitle}
                    onChange={onChange}
                />
                <TextField
                    id="standard-select-currency-native"
                    name="editTag"
                    label="Tag"
                    type="text"
                    value={note.editTag}
                    margin="dense"
                    color='secondary'
                    onChange={onChange}
                    fullWidth
                    required
                    select
                    SelectProps={{
                        native: true,
                    }}
                >
                    {tagList.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.value}
                        </option>
                    ))}
                </TextField>
                <TextField
                    margin="dense"
                    label="Description"
                    type="text"
                    fullWidth
                    required
                    color='secondary'
                    name="editDescription"
                    value={note.editDescription}
                    onChange={onChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="secondary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditDialogBox