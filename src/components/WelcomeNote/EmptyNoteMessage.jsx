import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './welcomeNote.module.css'
const EmptyNoteMessage = () => {

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.messageContainer}>
          <div className={styles.emojiContainer}>
            <iframe src="https://giphy.com/embed/kfS15Gnvf9UhkwafJn" title='Welcome Message' width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen>
            </iframe>
          </div>
         <Typography variant='h5'>
            No saved Notes yet...
         </Typography>
         <Typography>
          Add note by clicking ADD Icon down below.
         </Typography>
        </div>
      </div>
    </>
  )
}

export default EmptyNoteMessage

