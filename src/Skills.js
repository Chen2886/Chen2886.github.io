import React from 'react';
import styled from 'styled-components';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Grid } from '@material-ui/core';

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
    level: '95',
  },
  {
    name: 'SQL',
    level: '80',
  },
  {
    name: 'React Js',
    level: '95',
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
    level: '88',
  },
];

export default function Skill() {
  return (
    <StyledSkillDiv id='skill' name='skill'>
      <Grid className='skill-grid' container justify='center' alignItems='flex-start' spacing={3}>
        <Grid item xs={12} style={{ marginBottom: '1rem', justifyContent: 'center', display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <h2 style={{ margin: 0 }}>Skills</h2>
            <hr></hr>
          </div>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={5}>
          {skill.map((item, i) => {
            return (
              <Grid item xs={5} sm={3} md={2} key={i}>
                <ProgressBarDiv>
                  <CircularProgressbarWithChildren
                    value={item.level}
                    background
                    backgroundPadding={6}
                    strokeWidth={5}
                    styles={buildStyles({
                      backgroundColor: '#bfefff',
                      textColor: 'red',
                      pathColor: 'rgb(35, 37, 39)',
                      trailColor: 'transparent',
                      strokeLinecap: 'butt',
                      // pathColor: '#BFEFFF',
                      // trailColor: 'rgb(35, 37, 39)',
                      // rotation: 0.5 + (1 - item.level / 100) / 2,
                    })}>
                    <ProgressBarDiv style={{ color: 'rgb(35, 37, 39)' }}>
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
