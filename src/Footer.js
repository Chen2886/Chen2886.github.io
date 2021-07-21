import React from 'react';
import styled from 'styled-components';
import { Grid, makeStyles, Paper, TextField, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledFooterDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  height: 100%;

  background-color: rgb(35, 37, 39);
`;

export default function Footer() {
  return (
    <StyledFooterDiv id='footer'>
      <Grid className='footer-grid' container justify='center' alignItems='stretch'>
        <Grid item xs={12} style={{ justifyContent: 'center', display: 'flex' }}>
          {/* <div style={{ display: 'inline-block' }}> */}
          <p style={{ margin: 0, color: 'grey' }}>Designed and Built by Tony Chen</p>
          {/* </div> */}
        </Grid>
      </Grid>
    </StyledFooterDiv>
  );
}
