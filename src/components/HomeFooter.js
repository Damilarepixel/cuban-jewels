import React from 'react'
import { Link } from 'react-router-dom'
import FooterLinks from '../components/FooterLinks'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const story = {
    color : '#fff',
    fontSize : '20px',
    marginBottom : '40px'
}



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
        width: '35ch',
        background: 'white',
        borderRadius: '3px'
      },
    },
}));
  

const Subscribe = styled.button`
  background: #d88a83;
  padding: 1rem 1.5rem;
  margin-left: 20px;
  color: #000;
  border-radius: 3px;
  display: inline-block;
`

function HomeFooter() {

    const classes = useStyles();

    return (
        <div className='footer-section'>
            <h3 style={story}>Sign up to get deals and updates direct to your inbox.</h3>
                
            <div className='form-handle'>
                
                <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-secondary"
                    label="Email Address"
                    variant="filled"
                    color="secondary"
                />
                </form>
                <Subscribe as={Link} href="/">
                SUBSCRIBE
            </Subscribe>
            </div>

            <FooterLinks />
        </div>
    )
}

export default HomeFooter

