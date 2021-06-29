import React, { useState } from 'react';
import styled from 'styled-components';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Card, Tab, Tabs, withStyles, CardContent, Grid, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const StyledSkillDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  height: 100%;
  min-height: 65vh;

  background-color: rgb(35, 37, 39);
`;

const ProgressBarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #eee;
  width: 100%;
  height: 100%;
`;

const skill = [
  {
    name: 'Java',
    level: '85',
  },
  {
    name: 'C',
    level: '90',
  },
  {
    name: 'SQL',
    level: '80',
  },
  {
    name: 'React Js',
    level: '92',
  },
  {
    name: 'Python',
    level: '83',
  },
  {
    name: 'Swift',
    level: '77',
  },
  {
    name: 'AngularJs',
    level: '60',
  },
  {
    name: 'JS',
    level: '75',
  },
];

export default function Skill() {
  return (
    <StyledSkillDiv id='experience'>
      <Grid className='experience-grid' container justify='center' alignItems='flex-start' spacing={3}>
        <Grid item xs={12}>
          <h2 style={{ margin: 0 }}>Skills</h2>
          <hr></hr>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={5}>
          {skill.map((item, i) => {
            return (
              <Grid item xs={3} sm={2} key={i}>
                <ProgressBarDiv>
                  <CircularProgressbarWithChildren
                    value={item.level}
                    styles={buildStyles({
                      strokeLinecap: 'butt',
                      pathColor: '#fcdb81',
                    })}>
                    <ProgressBarDiv>
                      {item.name}
                      <br />
                      {item.level}%
                    </ProgressBarDiv>
                  </CircularProgressbarWithChildren>
                </ProgressBarDiv>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </StyledSkillDiv>
  );
}
