import React from 'react'
import styles from './addNote.module.css'
import { Grid } from '@material-ui/core'
import AddNoteForm from './AddNoteForm'
import Navigation from '../NavBar/Navigation'

const AddNoteLayout = ({ showAlert}) => {
  return (
    <Grid container className={styles.mainContainer}>
        <Grid item xs={9}>
        <Navigation/>
        <div className={styles.leftPannel}>
          <AddNoteForm showAlert={showAlert}/>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div className={styles.rightPannel}></div>
        </Grid>
    </Grid>
  )
}

export default AddNoteLayout