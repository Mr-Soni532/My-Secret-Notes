
import React from 'react'
import styles from './navBar.module.css'
import Clock from 'react-live-clock';
import svg from '../../logo-light.svg'
import { Box } from '@material-ui/core'
import useStyles from '../../config/Style';
import { format } from 'date-fns';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';

const Navigation = () => {
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
          <div className={styles.clockIcon}>
            <QueryBuilderRoundedIcon />
          </div>
          <div className={styles.clockTimer}>
            <div className={classes.clock}>
              {<Clock format={'h:mm:ss'} ticking={true} />}
            </div>
          </div>
        </Box>
      </Box>

    </>
  )
}

export default Navigation

