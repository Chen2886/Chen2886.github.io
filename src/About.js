import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

const RightColumnDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const StyledUl = styled.ul`
  margin-top: 3px;

  @media (max-width: 600px) {
    padding-left: 12px;
  } ;
`;

const StyledAboutDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
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

export default function About() {
  return (
    <StyledAboutDiv id='about' name='about'>
      <Grid className='about-grid' container justify='center' alignItems='center' spacing={3}>
        <Grid item xs={12} style={{ marginBottom: '1rem', justifyContent: 'center', display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <h2 style={{ margin: 0 }}>About Me</h2>
            <hr></hr>
          </div>
        </Grid>
        <Grid item md={12} lg={6}>
          <p>
            I'm currently a full time student at Purdue University studying Computer Science with a concentration in Software Engineering. I
            specialize in front-end and iOS development and would love to work for a Formula 1 team or a car manufacturer one day. My passion for CS
            comes from it's versatility and because it provides the opportunity to create platforms to help others and make an impact on the world. I
            also enjoy the problem solving aspect of programming and the ability to express my creativity. Here are some fun facts about me:
          </p>
          <StyledUl>
            <li>In my down time, I like to organize hackathons, play Cities: Skylines, Apex Legends and make tiramisu!</li>
            <li>I've passed the written exam for a private pilot license.</li>
            <li>Skydiving and participating in professional karting are at the top of my bucket list.</li>
            <li>My summer of 2019, I visited the White House and toured the press conference room!</li>
            <li>My newest hobby is going to Topgolf!</li>
          </StyledUl>

          <br />
        </Grid>
        <Hidden mdDown>
          <Grid item md={12} lg={6} style={{ height: '100%', width: '100%' }}>
            <RightColumnDiv>
              <img className='profile-pic' src='images/profilepic.jpg' alt='Profile Pic' />
              <div>
                <table style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem', marginTop: '2rem' }}>
                  <tbody>
                    <tr>
                      <th colSpan='9'>
                        <div style={{ textAlign: 'center' }}>
                          <h3>Detail</h3>
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
            </RightColumnDiv>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item md={12} lg={6} style={{ height: '100%', width: '100%' }}>
            <RightColumnDiv>
              <Grid container style={{ width: '100%' }} justify='center' alignItems='center' spacing={8}>
                <Grid item md={6} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                  <img className='profile-pic' src='images/profilepic.jpg' alt='Profile Pic' />
                </Grid>
                <Grid item md={6} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ display: 'flex' }}>
                    <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                      <tbody>
                        <tr>
                          <th colSpan='9'>
                            <div style={{ textAlign: 'center' }}>
                              <h3>Detail</h3>
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
                </Grid>
              </Grid>
            </RightColumnDiv>
          </Grid>
        </Hidden>
      </Grid>
    </StyledAboutDiv>
  );
}
