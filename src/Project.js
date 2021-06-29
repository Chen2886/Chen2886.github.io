import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Tab, Tabs, withStyles, CardContent, Grid, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const StyledProjectDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  height: 100%;
  min-height: 65vh;

  background-color: rgb(35, 37, 39);
`;


export default function Project() {

  return (
    <StyledProjectDiv id='experience'>
      <Grid className='experience-grid' container justify='center' alignItems='flex-start' spacing={3}>
        <Grid item xs={12}>
          <h2 style={{ margin: 0 }}>Projects</h2>
          <hr></hr>
        </Grid>
      </Grid>
    </StyledProjectDiv>
  );
}
