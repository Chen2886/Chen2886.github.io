import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';

export default function About() {
  return (
    <Grid container id='about' justify='center' alignItems='center'>
      <Grid item xs={12}>
        <img
          className='profile-pic'
          src={profilepic}
          alt='Profile Pic'
          style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        b
      </Grid>
      <Grid item xs={12} sm={6}>
        c
      </Grid>
    </Grid>
  );
}
