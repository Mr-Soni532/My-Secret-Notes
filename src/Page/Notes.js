import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import NoteItem from '../components/NoteItem'
import Grid from '@material-ui/core/Grid'
import useStyles from '../config/Style'
import { Container } from '@material-ui/core'
import Navigation from '../components/NavBar/Navigation'
import NoteContext from '../context/notes/NoteContext'
import { useNavigate } from 'react-router-dom'
import EditDialogBox from '../components/EditDialogBox'
import AddIcon from '@material-ui/icons/Add';

const Notes = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  //!   fetching context
  const context = useContext(NoteContext);
  const { userNotes, getNotes } = context;

  //!   Fetching saved Notes
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate('/login');
    }
    //eslint-disable-next-line
  }, [])

  //!   UseStates
  const [showDialoag, setShowDialog] = useState(false);
  const [note, setNote] = useState({ id: "", editTitle: "", editDescription: "", editTag: "" })

  //!   Update note function
  const updateNote = (currentNote) => {
    setNote({ id: currentNote._id, editTitle: currentNote.title, editDescription: currentNote.description, editTag: currentNote.tag })
    setShowDialog(showDialoag ? false : true)
  }

  return (
    <>
      <Container maxWidth={false} className={classes.notes}>
        <Navigation />
        <Container className={classes.noteLayout}>
          <EditDialogBox showDialoag={showDialoag} setShowDialog={setShowDialog} note={note} setNote={setNote} />
          <Grid container spacing={3} >
            {userNotes.map(note => (
              // eslint-disable-next-line
              <Grid item xs={6} md={6} lg={4} key={note._id}>
                <NoteItem note={note} updateNote={updateNote} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
      <Link to='/addnote' className={classes.createNoteButton}>
        <AddIcon fontSize='inherit' />
      </Link>
    </>
  )
}

export default Notes