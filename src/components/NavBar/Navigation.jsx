
import React from 'react'
import styles from './navBar.module.css'
import svg from '../../logo-light.svg'
import { Box, Button } from '@material-ui/core'
import useStyles from '../../config/Style';
import { format } from 'date-fns';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  const classes = useStyles();
  return (
    <>
      <Box className={styles.navContainer}>
        <Box className={styles.column1}>
          <div className={styles.dateIcon}>
            <DateRangeRoundedIcon />
          </div>
          <div className={styles.dataContent}>
            <div className={classes.clock}>
              {format(new Date(), 'do MMMM Y')}
            </div>
          </div>
        </Box>
        <Box className={styles.column2}>
          <img src={svg} alt="" className={styles.img} />
        </Box>
        <Box className={styles.column3}>
          <Button variant="contained" onClick={handleLogout} >
            Logout
          </Button>
        </Box>
      </Box>

    </>
  )
}

export default Navigation

