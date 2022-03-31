import React from 'react'
import NoteItem from '../components/NoteItem'
import Grid from '@material-ui/core/Grid'
import useStyles from '../config/Style'
const Notes = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.notes}>
        <Grid item xs={12} md={6} lg={4}>
          <NoteItem />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NoteItem />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NoteItem />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NoteItem />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NoteItem />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NoteItem />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NoteItem />
        </Grid>
      </Grid>
    
    </>
  )
}

export default Notes