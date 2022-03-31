
import React from 'react'
import { Link } from "react-router-dom"
import Clock from 'react-live-clock';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import NotesIcon from '@material-ui/icons/Notes';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import useStyles from '../config/Style';
const Navigation = () => {
    const classes = useStyles();
    return (
        <>
            <Box paddingX='20px'>
                <Box className={classes.clock}>
                    <h3 className='clock'>
                        {<Clock format={'h:mm:ss'} ticking={true} />}
                    </h3>
                </Box>
                <Divider/>
                <Box sx={{ width: '100%' }}>
                    <List fontSize={20}>
                        <Link className={classes.link} to='/'>
                            <ListItem >
                                <ListItemIcon className={classes.icon}>
                                    <NotesIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Notes" />
                            </ListItem>
                        </Link>
                        <Link className={classes.link} to='/create'>
                            <ListItem >
                                <ListItemIcon className={classes.icon}>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Create Note" />
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default Navigation