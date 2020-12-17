import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

function HomeFooter() {

    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-secondary"
                    label="Outlined secondary"
                    variant="outlined"
                    color="secondary"
                />
            </form>
        </div>
    )
}

export default HomeFooter
