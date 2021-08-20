import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { Grid, Paper, TextField, withStyles, Button, Divider } from '@material-ui/core';
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

const CustomButton = withStyles(() => ({
  root: {
    boxShadow: 'none',
    margin: '1rem',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '0 0 1px 0 solid',
    lineHeight: 1.5,
    borderColor: 'white',
    color: 'white',
    borderRadius: 20,
    '&:hover': {
      borderColor: '#BFEFFF',
      boxShadow: 'none',
    },
  },
}))((props) => <Button {...props} disableRipple variant='outlined' color='primary' />);

export default function Contact() {
  const [formName, setName] = useState('');
  const [formEmail, setEmail] = useState('');
  const [formSubject, setSubject] = useState('');
  const [formMessage, setMessage] = useState('');

  const sendEmail = (template) => {
    // console.log(template);
    emailjs
      .send('service_qd7f7li', 'template_l76p0ih', template, 'user_UJdsRqUdPt6gVajZYAFwN')
      .then((res) => {
        if (res.status === 200) {
          alert('Your message has been sent, thank you!');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        }
      })
      // Handle errors here however you like
      .catch((err) => {
        alert('Failed to send. Someone probably spamed my email, sorry for the inconvenience. Please see my email on the right.');
        console.error('Failed to send feedback. Error: ', err);
      });
  };

  var handleChange = (e) => {
    if (e.target.id === 'contactName') setName(e.target.value);
    else if (e.target.id === 'contactEmail') setEmail(e.target.value);
    else if (e.target.id === 'contactSubject') setSubject(e.target.value);
    else if (e.target.id === 'contactMessage') setMessage(e.target.value);
  };

  var submitClicked = () => {
    if (formName.length === 0) {
      alert('Name is required.');
      return;
    }
    if (formEmail.length === 0) {
      alert('Email is required.');
      return;
    }
    if (/\S+@\S+\.\S+/.test(formEmail) === false) {
      alert('Email is invalid.');
      return;
    }
    if (formMessage.length === 0) {
      alert('Message is required.');
      return;
    }

    let templateParams = {
      name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage,
    };

    sendEmail(templateParams);
  };

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
                  <CustomTextField label='Your Name' id='contactName' value={formName} onChange={handleChange}></CustomTextField>
                  <CustomTextField label='Your Email' id='contactEmail' value={formEmail} onChange={handleChange}></CustomTextField>
                  <CustomTextField label='Subject' id='contactSubject' value={formSubject} onChange={handleChange}></CustomTextField>
                  <CustomTextField multiline rows={4} label='Message' id='contactMessage' value={formMessage} onChange={handleChange}></CustomTextField>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CustomButton onClick={submitClicked}>Send</CustomButton>
                  </div>
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
