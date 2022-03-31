import React from 'react'
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../config/Style';
const NoteItem = () => {
  const classes = useStyles();
  return (
    <>
      <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.Avatar}>
              R
            </Avatar>
          }
          action={
            <div>
              <IconButton onClick={() => { }}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { }}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"

        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic asperiores neque maiores corrupti modi ipsum voluptatem. Commodi facilis magnam in placeat dolorem sit accusantium, nam omnis ea, quibusdam fugiat, dolorum perferendis labore.
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default NoteItem