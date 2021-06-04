import React from 'react';
import styled from 'styled-components';
import { Grid, Card, Typography, Paper, Hidden } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';

const StyledExperienceDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
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

const StyledTimelineDiv = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 25px;
  padding: 25px;
  text-align: center;
`;

const experience = [
  {
    company: 'Zotec Partners',
    title: 'Software Engineer Intern ',
    years: 'June 2020 - December 2020',
    description:
      'I worked within a team to develop several projects during my 6 months at the company. I thoroughly enjoyed the experience because it allowed me to apply my skills to real-life situations. One of the project I developed was used to combat COVID-19. The project received great feedback and is actively being used. Another side project I worked on required me to integrate two platforms within the company, and this project allowed me to get first-hand experience on an integration problem.',
  },
  {
    company: 'Purdue University',
    title: 'Undergraduate Researcher ',
    years: 'April 2020 - Current',
    description:
      'I worked with the Slipchenko Lab Group at Purdue University to develop a user-friendly program -- iSpiEFP -- that performs LibEFP calculation for chemists. This is a unique experience because once iSpiEFP is finished, the entire chemistry community can benefit from this. Most of the chemists are unfamiliar with terminals, which is where LibEFP calculation is traditionally performed. Upon completing this project, numerous chemists will be able to use this robust calculation, which will save their time compared to their standard method.',
  },
  {
    company: 'Purdue University',
    title: 'Teaching Assistant ',
    years: 'August 2019 - Current',
    description:
      'I have been a Teaching Assistant since my sophomore year. It is my favorite time and always the highlight of my week. I was a TA for 2 semesters for CS 240 (Programming in C) and have been a TA for CS 251 (Data Structures and Algorithms) since then. I led two labs each week to help students further their understanding by practicing what they learned in class or explain concepts in more detail for students who struggled in class. I also hold office hours which allows more one-on-one interaction with students who need guidance on homework and projects.',
  },
];

export default function Experience() {
  return (
    <StyledExperienceDiv id='experience'>
      <Grid className='experience-grid' container justify='center' alignItems='center'>
        <Grid item xs={12}>
          <h2>My Journey</h2>
        </Grid>
        <Hidden smDown>
          <Grid item md={12}>
            <Timeline align='alternate'>
              {experience.map((item, i) => (
                <TimelineItem key={i}>
                  <TimelineOppositeContent
                    style={
                      i % 2 === 0
                        ? { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }
                        : { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }
                    }>
                    <h4>{item.years}</h4>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <StyledTimelineDiv>
                      <h3>{item.title}</h3>
                      <h5>{item.company}</h5>
                      <hr />
                      <h5>{item.description}</h5>
                    </StyledTimelineDiv>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          {experience.map((item, i) => (
            <Grid item md={12} key={i} style={{ margin: '1rem 0px' }}>
              <StyledTimelineDiv>
                <h3>{item.title}</h3>
                <h5>
                  {item.company} &bull; {item.years}
                </h5>
                <hr />
                <h5>{item.description}</h5>
              </StyledTimelineDiv>
            </Grid>
          ))}
        </Hidden>
      </Grid>
    </StyledExperienceDiv>
  );
}
