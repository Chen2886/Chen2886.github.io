import React from 'react';
import styled from 'styled-components';
import { Grid, makeStyles, Paper, TextField, withStyles } from '@material-ui/core';

const StyledContactDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  height: 100%;
  min-height: 65vh;

  // background-color: rgb(35, 37, 39);
`;

const CustomTextField = withStyles(() => ({
  root: {
    margin: '1rem',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 20,
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
    '& .MuiOutlinedInput-input': {
      marginLeft: '4px',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiFormLabel-root': {
      color: 'white',
    },
  },
}))((props) => <TextField {...props} variant='outlined' />);

export default function Contact() {
  return (
    <StyledContactDiv id='contact'>
      <Grid className='contact-grid' container justify='center' alignItems='stretch'>
        <Grid item xs={12} style={{ marginBottom: '2rem', justifyContent: 'center', display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <h2 style={{ margin: 0 }}>Contact Me</h2>
            <hr></hr>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ background: 'rgb(35, 37, 39)' }}>
            <Grid container justify='center' alignItems='stretch' spacing={3}>
              <Grid item xs={12} md={6}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3>Send a Message</h3>
                  <CustomTextField label='Your Name'></CustomTextField>
                  <CustomTextField label='Your Email'></CustomTextField>
                  <CustomTextField label='Subject'></CustomTextField>
                  <CustomTextField multiline rows={4} label='Message'></CustomTextField>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <h3>Let's Connect</h3>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </StyledContactDiv>
  );
}
