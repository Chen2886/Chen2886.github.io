import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Card, Typography, Paper, Hidden, GridList, Tab, Tabs, withStyles } from '@material-ui/core';
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
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

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
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px 2px;
  border: none;
  border-left: 2px solid #233554;
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? '#64ffda' : '#8892b0')};
  font-size: 13px;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid #233554;
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: #233554;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
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
    company: 'Purdue University - Researcher',
    title: 'Undergraduate Researcher ',
    years: 'April 2020 - Current',
    description:
      'I worked with the Slipchenko Lab Group at Purdue University to develop a user-friendly program -- iSpiEFP -- that performs LibEFP calculation for chemists. This is a unique experience because once iSpiEFP is finished, the entire chemistry community can benefit from this. Most of the chemists are unfamiliar with terminals, which is where LibEFP calculation is traditionally performed. Upon completing this project, numerous chemists will be able to use this robust calculation, which will save their time compared to their standard method.',
  },
  {
    company: 'Purdue University - TA',
    title: 'Teaching Assistant ',
    years: 'August 2019 - Current',
    description:
      'I have been a Teaching Assistant since my sophomore year. It is my favorite time and always the highlight of my week. I was a TA for 2 semesters for CS 240 (Programming in C) and have been a TA for CS 251 (Data Structures and Algorithms) since then. I led two labs each week to help students further their understanding by practicing what they learned in class or explain concepts in more detail for students who struggled in class. I also hold office hours which allows more one-on-one interaction with students who need guidance on homework and projects.',
  },
];

function TabPanel(props) {
  return (
    <div hidden={props.value !== props.index} style={{ width: '50%' }}>
      {experience[props.value].company}
    </div>
  );
}

const CustomTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    // marginRight: theme.spacing(1),
    marginLeft: '0px',
    marginRight: 'auto',
    '&:focus': {
      opacity: 1,
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
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTabId(newValue);
  };

  return (
    <StyledExperienceDiv id='experience'>
      <CustomTabs orientation='vertical' variant='scrollable' value={activeTabId} onChange={handleChange}>
        {experience.map(function (item, i) {
          return <CustomTab label={item.company}></CustomTab>;
        })}
      </CustomTabs>
      {experience.map(function (item, i) {
        return (
          <TabPanel value={activeTabId} index={i}>
            Item One
          </TabPanel>
        );
      })}
    </StyledExperienceDiv>
  );
}
