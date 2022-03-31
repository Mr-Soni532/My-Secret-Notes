import { Box, Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './addNote.module.css'
import { TextField } from '@material-ui/core'
import useStyles from '../../config/Style'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const AddNoteForm = () => {

    //! ----| UseState for Note|
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    //! ----| |
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('yes')
        // addNote(note.title, note.description, note.tag)

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    console.log(note)
    const classes = useStyles();

    // Tag optio object
    const tagList = [
        { value: null},
        { value: 'ToDo' },
        { value: 'Work' },
        { value: 'Love' },
        { value: 'Money' },
        { value: 'Personal' },
        { value: 'Shopping' },
        { value: 'Other' }
    ]

    return (
        <>
            <Box className={styles.formContainer}>
                <form action="" className={classes.formStyle} autoComplete="off" onSubmit={handleSubmit}>
                    <Typography
                        align='center'
                        variant='h3'
                        color="secondary"

                    >
                        Create Note
                    </Typography>
                    <TextField
                        id="outlined-full-width"
                        label="Title"
                        fullWidth
                        onChange={onChange}
                        name="title"
                        value={note.title}
                        placeholder='Add suitable title'
                        margin="normal"
                        variant="outlined"
                        color='secondary'
                        required

                    />
                    <TextField
                        id="outlined-select-currency-native"
                        label="Tag"
                        fullWidth
                        onChange={onChange}
                        placeholder="Select a tag"
                        name="tag"
                        value={note.tag}
                        margin="normal"
                        variant="outlined"
                        color='secondary'
                        required
                        select
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {
                            tagList.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))
                        }
                    </TextField>
                    <TextField
                        id="outlined-full-width"
                        label="Description"
                        fullWidth
                        onChange={onChange}
                        name="description"
                        value={note.description}
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={6}
                        color='secondary'
                        required

                    />
                    <Button
                        type='submit'
                        variant="outlined"
                        color="default"
                        fullWidth
                        className={classes.AddNoteBtn}
                    >
                        Add Note
                    </Button>
                </form>
            </Box>
            <div className={styles.showNote}>
                <ExitToAppIcon fontSize='inherit' />
            </div>
        </>
    )
}

export default AddNoteForm