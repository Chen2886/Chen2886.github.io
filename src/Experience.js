import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Tab, Tabs, withStyles, CardContent, Grid, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const StyledExperienceDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  height: 100%;
  min-height: 65vh;

  background-color: rgb(35, 37, 39);
`;

const experience = [
  {
    listTitle: 'Zotec Partners',
    company: 'Zotec Partners',
    title: 'Software Engineer Intern ',
    years: 'June 2020 - December 2020',
    description:
      'I worked within a team to develop several projects during my 6 months at the company. I thoroughly enjoyed the experience because it allowed me to apply my skills to real-life situations. One of the project I developed was used to combat COVID-19. The project received great feedback and is actively being used. Another side project I worked on required me to integrate two platforms within the company, and this project allowed me to get first-hand experience on an integration problem.',
  },
  {
    listTitle: 'Purdue University - Researcher',
    company: 'Purdue University',
    title: 'Undergraduate Researcher ',
    years: 'April 2020 - Current',
    description:
      'I worked with the Slipchenko Lab Group at Purdue University to develop a user-friendly program -- iSpiEFP -- that performs LibEFP calculation for chemists. This is a unique experience because once iSpiEFP is finished, the entire chemistry community can benefit from this. Most of the chemists are unfamiliar with terminals, which is where LibEFP calculation is traditionally performed. Upon completing this project, numerous chemists will be able to use this robust calculation, which will save their time compared to their standard method.',
  },
  {
    listTitle: 'Purdue University - TA',
    company: 'Purdue University',
    title: 'Teaching Assistant ',
    years: 'August 2019 - Current',
    description:
      'I have been a Teaching Assistant since my sophomore year. It is my favorite time and always the highlight of my week. I was a TA for 2 semesters for CS 240 (Programming in C) and have been a TA for CS 251 (Data Structures and Algorithms) since then. I led two labs each week to help students further their understanding by practicing what they learned in class or explain concepts in more detail for students who struggled in class. I also hold office hours which allows more one-on-one interaction with students who need guidance on homework and projects.',
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
        <h4>{experience[props.index].years}</h4>
        <p>{experience[props.index].description}</p>
      </CardContent>
    </CustomCard>
  );
}

const CustomTab = withStyles((props) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    alignItems: 'center',
    fontSize: '15px',
    '&:focus': {
      opacity: 1,
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
    color: '#64ffda',
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
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs centered {...props} TabIndicatorProps={{ children: <span /> }} />);

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setActiveTabId(newValue);
  };

  return (
    <StyledExperienceDiv id='experience'>
      <Grid className='experience-grid' container justify='center' alignItems='flex-start' spacing={3}>
        <Grid item xs={12}>
          {/* <StyledTitleDiv> */}
          <h2 style={{ margin: 0 }}>Experience</h2>
          <hr></hr>
          {/* </StyledTitleDiv> */}
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: 'flex', flexGrow: '1', width: '100%', justifyContent: 'center', flexDirection: isMd ? 'column' : 'row' }}>
            <div style={{ display: 'flex' }}>
              <CustomTabs
                variant={isMd ? 'scrollable' : 'standard'}
                orientation={isMd ? 'horizontal' : 'vertical'}
                value={activeTabId}
                scrollButtons='off'
                fullWidth
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
