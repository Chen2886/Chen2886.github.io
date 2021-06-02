import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export default function About() {
  return (
    <Grid container id='about' justify='center' alignItems='center'>
      <Grid item xs={12}>
        <img
          className='profile-pic'
          src='images/profilepic.jpg'
          alt='Profile Pic'
          style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem' }}
        />
        <hr></hr>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item md={12} lg={6}>
            <Hidden smUp>
              <div style={{ marginTop: '5rem' }}></div>
              <h2>About Me</h2>
            </Hidden>
            <Hidden smDown>
              <h2>About Me</h2>
            </Hidden>
            <p>
              I'm currently a full time student at Purdue University studying Computer Science with a concentration in Software Engineering. I
              specialize in front-end and iOS development and would love to work for a Formula 1 team or a car manufacturer one day. My passion for CS
              comes from it's versatility and because it provides the opportunity to create platforms to help others and make an impact on the world.
              I also enjoy the problem solving aspect of programming and the ability to express my creativity.
            </p>
          </Grid>
          <Grid item md={12} lg={6}>
            <Hidden smUp>
              <div style={{ marginTop: '5rem' }}></div>
              <h2>Fun Facts</h2>
            </Hidden>
            <Hidden smDown>
              <h2>Fun Facts</h2>
            </Hidden>
            <div>
              <ul>
                <li>In my down time, I like to organize hackathons, play Cities: Skylines, Apex Legends and make tiramisu!</li>
                <li>I've passed the written exam for a private pilot license.</li>
                <li>Skydiving and participating in professional karting are at the top of my bucket list.</li>
                <li>My summer of 2019, I visited the White House and toured the press conference room!</li>
                <li>My newest hobby is going to Topgolf!</li>
              </ul>
            </div>
            <br />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} lg={6}>
        <Grid container>
          <Grid item>
            <table style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem' }}>
              <tbody>
                <tr>
                  <th colSpan='3'>
                    <div style={{ textAlign: 'center' }}>
                      <h2>Contact Details</h2>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td className='white'>
                    <FontAwesomeIcon icon='user' />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>Nuo (Tony) Chen</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon='envelope' />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>chen2886@purdue.edu</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon='phone-square' />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>352-274-1888</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon='address-card' />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>
                    1250 1st Street, Room 190
                    <br />
                    West Lafayette, IN, 47906
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>
          {/* <Grid item>
            <CircularProgressbar
              value={60}
              text={'60%'}
              styles={buildStyles({
                strokeLinecap: 'butt',
              })}
            />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item md={12} lg={6}></Grid>
    </Grid>
  );
}
