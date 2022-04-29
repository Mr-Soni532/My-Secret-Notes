import React from 'react'
import styles from './addNote.module.css'
import AddNoteForm from './AddNoteForm'
import Navigation from '../NavBar/Navigation'
import { Link } from "react-router-dom"
import { ExitToAppOutlined } from '@material-ui/icons'

const AddNoteLayout = ({ showAlert }) => {
  return (

    <div className={styles.mainContainer}>
      <Navigation />
      <div className={styles.innerContainer}>
        <div className={styles.leftPannel}>
          <AddNoteForm showAlert={showAlert} />
          <Link to='/' className={styles.exitPage}>
            <ExitToAppOutlined fontSize='inherit' />
          </Link>
        </div>
        <div className={styles.rightPannel}>
        </div>
      </div>
    </div>

  )
}

export default AddNoteLayout