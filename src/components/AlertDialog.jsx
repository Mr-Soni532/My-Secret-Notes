import React from 'react'

import { Alert } from '@material-ui/lab'
import useStyles from '../config/Style'
const AlertDialog = ({ alert }) => {
    const classes = useStyles()
   
    return (
        alert && <div className={classes.alert}>
            <Alert variant="filled" severity={alert.type}>
                {alert.message}
            </Alert>
        </div>
    )
}
export default AlertDialog