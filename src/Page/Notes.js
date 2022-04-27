import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import NoteItem from '../components/NoteItem'
import useStyles from '../config/Style'
import { Container, Tooltip } from '@material-ui/core'
import Navigation from '../components/NavBar/Navigation'
import NoteContext from '../context/notes/NoteContext'
import { useNavigate } from 'react-router-dom'
import EditDialogBox from '../components/EditDialogBox'
import AddIcon from '@material-ui/icons/Add';
import Masonry from 'react-masonry-css' // This is an layout class for aligning components
import AlertDialog from '../components/AlertDialog'
import EmptyNoteMessage from '../components/WelcomeNote/EmptyNoteMessage'


const Notes = ({ alert, showAlert }) => {
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

  //! Breakpoints 
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  }


  return (
    <>
      <Container maxWidth={false} className={classes.notes}>
        <Navigation />
        <AlertDialog alert={alert} />
        <Container className={classes.noteLayout}>
          <EditDialogBox showDialoag={showDialoag} setShowDialog={setShowDialog} note={note} setNote={setNote} showAlert={showAlert} />
          {!userNotes.length && <EmptyNoteMessage />}
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {userNotes.map(note => (
              // eslint-disable-next-line
              <div key={note._id}>
                <NoteItem note={note} updateNote={updateNote} showAlert={showAlert} />
              </div>
            ))}
          </Masonry>

        </Container>
      </Container>
     
        <Link to='/addnote' className={classes.createNoteButton}>
          <AddIcon fontSize='inherit' />
        </Link>
     
    </>
  )
}

export default Notes