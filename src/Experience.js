import React, { useState } from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Card, Tab, Tabs, withStyles, CardContent, Grid, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const StyledExperienceDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  height: 100%;
  min-height: 70vh;

  background-color: rgb(35, 37, 39);
`;

const experience = [
  {
    listTitle: 'Zotec Partners',
    company: 'Zotec Partners',
    title: 'Software Engineer Intern ',
    years: 'June 2020 - December 2020',
    description:
      'I worked within a team to develop several projects during my 6 months at the company. I thoroughly enjoyed the experience because it allowed me to apply my skills to real-life situations. One of the projects I developed was used to combat COVID-19, which received great feedback and is actively being used. Another side project I worked on required me to integrate two platforms within the company. This project allowed me to get the first-hand experience on an integration problem.',
  },
  {
    listTitle: 'Purdue University - Researcher',
    company: 'Purdue University',
    title: 'Undergraduate Researcher ',
    years: 'April 2020 - Current',
    description:
      'I worked with the Slipchenko Lab Group at Purdue University to develop a user-friendly program -- iSpiEFP -- that helps chemists perform EFP calculations. This is an unique experience because once iSpiEFP is finished, the entire scientific community can benefit from this. This program significantly lowers the barrier for scientists to use the EFP calculation. Most of the scientists are unfamiliar with terminals, which is where EFP calculation is traditionally performed. Upon completing this project, numerous scientists will be able to use this robust calculation, saving them time compared to the traditional method.',
  },
  {
    listTitle: 'Purdue University - TA',
    company: 'Purdue University',
    title: 'Teaching Assistant ',
    years: 'August 2019 - Current',
    description:
      'Since my sophomore year, I have been an Undergraduate Teaching Assistant for CS 240 (Programming in C) and CS 251 (Data Structures and Algorithms). I lead two labs each week to help students further understand the course material by practicing what they learned or explaining concepts in more detail. I also hold office hours which allows for more one-on-one interaction with students who need more guidance on homework and projects. Working as a TA is always the highlight of my week.',
  },
];

const CustomCard = withStyles(() => ({
  root: {
    backgroundColor: 'transparent',
  },
}))((props) => <Card {...props} />);

function TabPanel(props) {
  return (
    <CustomCard
      hidden={props.value !== props.index}
      style={{ width: '100%', marginLeft: props.isMd ? '0px' : '16px', marginTop: props.isMd ? '16px' : '0px' }}
      elevation={0}>
      <CardContent style={{ padding: '0' }}>
        <h3 style={{ marginTop: '0', textAlign: 'left' }}>
          {experience[props.index].title} @ {experience[props.index].company}
        </h3>
        <p>{experience[props.index].years}</p>
        <p>{experience[props.index].description}</p>
      </CardContent>
    </CustomCard>
  );
}

const CustomTab = withStyles((props) => ({
  root: {
    textTransform: 'none',
    color: '#BFEFFF',
    alignItems: 'center',
    fontSize: '15px',
    '&:focus': {
      opacity: 1,
    },
    '&:hover': {
      '&:not($selected)': {
        color: '#bfefff',
        backgroundColor: Color('#bfefff').fade(0.87).toString(),
      },
      '&:($selected)': {
        color: 'black',
        backgroundColor: 'black',
      },
      // '&::before': {
      //   opacity: 0,
      // },
      // '& + $root:before': {
      //   opacity: 0,
      // },
    },
  },
  wrapper: {
    alignItems: 'flex-start',
    fontFamily: "'Raleway', sans-serif",
  },
  '@media (max-width: 1280px)': {
    wrapper: {
      alignItems: 'center',
    },
  },
  selected: {
    color: '#BFEFFF',
    backgroundColor: Color('#bfefff').fade(0.87).toString(),
    '& + $root': {
      zIndex: 1,
    },
    '& + $root:before': {
      opacity: 0,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const CustomTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    left: '0px',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'grey',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setActiveTabId(newValue);
  };

  return (
    <StyledExperienceDiv id='experience' name='experience'>
      <Grid className='experience-grid' container justify='center' alignItems='flex-start' spacing={3}>
        <Grid item xs={12} style={{ marginBottom: '1rem', justifyContent: 'center', display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <h2 style={{ margin: 0 }}>Experience</h2>
            <hr></hr>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: 'flex', flexGrow: '1', width: '100%', justifyContent: 'center', flexDirection: isMd ? 'column' : 'row' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CustomTabs
                variant={isMd ? 'scrollable' : 'standard'}
                orientation={isMd ? 'horizontal' : 'vertical'}
                value={activeTabId}
                scrollButtons='off'
                onChange={handleChange}>
                {experience.map(function (item, i) {
                  return <CustomTab label={item.listTitle} key={i}></CustomTab>;
                })}
              </CustomTabs>
            </div>
            <div style={{ width: isMd ? '100%' : '50%', marginTop: isMd ? '1rem' : '0' }}>
              {experience.map(function (item, i) {
                return <TabPanel key={i} value={activeTabId} index={i} />;
              })}
            </div>
          </div>
        </Grid>
      </Grid>
      {/* </StyledInnerDiv> */}
    </StyledExperienceDiv>
  );
}
