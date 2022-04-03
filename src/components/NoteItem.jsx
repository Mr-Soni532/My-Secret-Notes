import React, { useContext } from 'react'
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../config/Style';
import NoteContext from '../context/notes/NoteContext';
const NoteItem = ({note, updateNote, showAlert}) => {
  const classes = useStyles(note);
  const context = useContext(NoteContext);
  const { deleteNote } = context

  const handleDelete = ()=>{
    deleteNote(note._id)
    showAlert('Your Note is deleted!','success')
  }
  return (
    <>
      <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {note.tag[0]}
            </Avatar>
          }
          action={
            <div>
              <IconButton onClick={() => { updateNote(note)}}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          }
          title={note.title}
          subheader={note.tag}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {note.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default NoteItem