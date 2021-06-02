import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';
import styled from 'styled-components';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RightColumnDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // padding: 3rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const StyledUl = styled.ul`
  padding-left: 8px;

  @media (max-width: 650px) {
    padding-left: 0;
  } ;
`;

const StyledAboutDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 70px 50px;
  min-height: 100vh;
  height: 100%;

  position: relative;
  width: 100%;
  background-color: rgb(35, 37, 39);
  vertical-align: middle;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  flex-wrap: wrap;
  display: flex;
`;

const ProgressBarDiv = styled.div``;

export default function About() {
  return (
    <StyledAboutDiv id='about'>
      <Grid className='about-grid' container justify='center' alignItems='center'>
        <Hidden mdUp>
          <Grid item sm={12} md={6} style={{ height: '100%', width: '100%' }}>
            <RightColumnDiv>
              <img className='profile-pic' src='images/profilepic.jpg' alt='Profile Pic' />
              <div>
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
              </div>
              <img className='profile-pic' src='images/profilepic.jpg' alt='Profile Pic' />
            </RightColumnDiv>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={5}>
          <Hidden mdUp>
            <div style={{ marginTop: '5rem' }}></div>
            <h2>About Me</h2>
          </Hidden>
          <Hidden smDown>
            <h2>About Me</h2>
          </Hidden>
          <p>
            I'm currently a full time student at Purdue University studying Computer Science with a concentration in Software Engineering. I
            specialize in front-end and iOS development and would love to work for a Formula 1 team or a car manufacturer one day. My passion for CS
            comes from it's versatility and because it provides the opportunity to create platforms to help others and make an impact on the world. I
            also enjoy the problem solving aspect of programming and the ability to express my creativity.
          </p>
          <Hidden mdUp>
            <div style={{ marginTop: '5rem' }}></div>
            <h2>Fun Facts</h2>
          </Hidden>
          <Hidden smDown>
            <div style={{ marginTop: '5rem' }}></div>
            <h2>Fun Facts</h2>
          </Hidden>
          <div>
            <StyledUl>
              <li>In my down time, I like to organize hackathons, play Cities: Skylines, Apex Legends and make tiramisu!</li>
              <li>I've passed the written exam for a private pilot license.</li>
              <li>Skydiving and participating in professional karting are at the top of my bucket list.</li>
              <li>My summer of 2019, I visited the White House and toured the press conference room!</li>
              <li>My newest hobby is going to Topgolf!</li>
            </StyledUl>
          </div>
          <br />
        </Grid>
        <Hidden smDown>
          <Grid item md={2}></Grid>
          <Grid item sm={12} md={5} style={{ height: '100%', width: '100%' }}>
            <RightColumnDiv>
              <img className='profile-pic' src='images/profilepic.jpg' alt='Profile Pic' />
              <div>
                <table style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem', marginTop: '2rem' }}>
                  <tbody>
                    <tr>
                      <th colSpan='9'>
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
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
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
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
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
              </div>
              <Grid container container justify='center' alignItems='center' spacing={5}>
                <Grid item xs={3}>
                  <ProgressBarDiv>
                    <CircularProgressbar
                      value={60}
                      text={'60%'}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </ProgressBarDiv>
                </Grid>
                <Grid item xs={3}>
                  <ProgressBarDiv>
                    <CircularProgressbar
                      value={60}
                      text={'60%'}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </ProgressBarDiv>
                </Grid>
                <Grid item xs={3}>
                  <ProgressBarDiv>
                    <CircularProgressbar
                      value={60}
                      text={'60%'}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </ProgressBarDiv>
                </Grid>
                <Grid item xs={3}>
                  <ProgressBarDiv>
                    <CircularProgressbar
                      value={60}
                      text={'60%'}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </ProgressBarDiv>
                </Grid>
                <Grid item xs={3}>
                  <ProgressBarDiv>
                    <CircularProgressbar
                      value={60}
                      text={'60%'}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </ProgressBarDiv>
                </Grid>
                <Grid item xs={3}>
                  <ProgressBarDiv>
                    <CircularProgressbar
                      value={60}
                      text={'60%'}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </ProgressBarDiv>
                </Grid>
                <Grid item xs={3}>
                  <ProgressBarDiv>
                    <CircularProgressbar
                      value={60}
                      text={'60%'}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </ProgressBarDiv>
                </Grid>
                <Grid item xs={3}>
                  <ProgressBarDiv>
                    <CircularProgressbar
                      value={60}
                      text={'60%'}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </ProgressBarDiv>
                </Grid>
              </Grid>
            </RightColumnDiv>
          </Grid>
        </Hidden>
      </Grid>
      {/* <StyledAboutSection>
        <div className='inner'>
          <StyledText>
            <div>
              <p>
                Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012
                when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML
                &amp; CSS!
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at <a href='https://us.mullenlowe.com/'>an advertising agency</a>,{' '}
                <a href='https://starry.com/'>a start-up</a>, <a href='https://www.apple.com/'>a huge corporation</a>, and{' '}
                <a href='https://scout.camd.northeastern.edu/'>a student-led design studio</a>. My main focus these days is building accessible,
                inclusive products and digital experiences at <a href='https://upstatement.com/'>Upstatement</a> for a variety of clients.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
            </div>

            <ul className='skills-list'>{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
          </StyledText>

          <StyledPic>
          <div className='wrapper'>
            <img src='images/profilepic.jpg' alt='Profile Pic' width={500} quality={95} />
          </div>
          </StyledPic>
        </div>
      </StyledAboutSection> */}

      {/* <Grid container justify='center' alignItems='center' style={{ width: '80%' }}>
        <Grid item xs={4}>
          <img
            className='profile-pic'
            src='images/profilepic.jpg'
            alt='Profile Pic'
            style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem' }}
          />
        </Grid>
        <Grid item xs={4}>
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
      </Grid>
      <Grid container justify='center' alignItems='center' style={{ width: '80%' }}>
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
            comes from it's versatility and because it provides the opportunity to create platforms to help others and make an impact on the world. I
            also enjoy the problem solving aspect of programming and the ability to express my creativity.
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
      </Grid> */}
    </StyledAboutDiv>
  );
}
