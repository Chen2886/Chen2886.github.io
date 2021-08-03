import React from 'react';
import styled from 'styled-components';
import { Grid, Paper, TextField, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledContactDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  height: 100%;
  min-height: 65vh;

  // background-color: rgb(35, 37, 39);
`;

const ContactDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  // background-color: rgb(35, 37, 39);
`;

const social = [
  {
    name: 'mail',
    url: 'mailto: chen2886@purdue.edu',
    icon: 'fas envelope',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/tonychen47/',
    icon: 'fab linkedin',
  },
  {
    name: 'github',
    url: 'http://github.com/Chen2886',
    icon: 'fab github-square',
  },
];

const CustomTextField = withStyles(() => ({
  root: {
    margin: '1rem',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 20,
        borderColor: '#eee',
      },
      '&:hover fieldset': {
        borderColor: '#BFEFFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#BFEFFF',
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
    <StyledContactDiv id='contact' name='contact'>
      <Grid className='contact-grid' container justify='center' alignItems='stretch'>
        <Grid item xs={12} style={{ marginBottom: '2rem', justifyContent: 'center', display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <h2 style={{ margin: 0 }}>Contact Me</h2>
            <hr></hr>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ background: 'rgb(35, 37, 39)', borderRadius: '1rem' }} elevation={0}>
            <Grid container justify='center' alignItems='stretch' spacing={3}>
              <Grid item xs={12} md={6}>
                <ContactDiv>
                  <h3>Send a Message</h3>
                  <CustomTextField label='Your Name'></CustomTextField>
                  <CustomTextField label='Your Email'></CustomTextField>
                  <CustomTextField label='Subject'></CustomTextField>
                  <CustomTextField multiline rows={4} label='Message'></CustomTextField>
                </ContactDiv>
              </Grid>
              <Grid item xs={12} md={6}>
                <ContactDiv>
                  <h3>Let's Connect</h3>
                  <p>
                    Feel free to send me an email or connect with my on LinkedIn! I would love to discuss job opporunities, project collobration or
                    anything in general!
                  </p>
                  <ul className='social'>
                    {social.map(function (network) {
                      return (
                        <li key={network.name}>
                          <a href={network.url} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={[network.icon.split(' ')[0], network.icon.split(' ')[1]]} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </ContactDiv>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </StyledContactDiv>
  );
}
