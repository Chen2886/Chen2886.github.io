import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Tab, Tabs, withStyles, CardContent, Grid, useTheme, CardMedia, CardActionArea, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import cx from 'clsx';
import Color from 'color';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Row, Item } from '@mui-treasury/components/flex';

const Projects = [
  {
    title: 'Personal Website',
    category: 'I designed this website for showcasing some projects and skills.',
    image: 'personalwebsite.jpg',
    url: 'https://chen2886.github.io',
  },
  {
    title: 'Ez-Prez: Presentation Generator',
    category: 'BoilerMake 7 Project. iOS and Web app that converts text to a presentation using ML.',
    image: 'ezprez.jpg',
    url: 'https://devpost.com/software/ez-prez',
  },
  {
    title: 'Business Management',
    category: "A JavaFX with Sqlite3 application that track's a company's inventory.",
    image: 'businessmanage.jpg',
    url: 'https://github.com/Chen2886/Business-Management',
  },
  {
    title: 'Circle',
    category: "A social media platform. The demo link works but it's a little slow, since it has to boot up.",
    image: 'circle.jpg',
    url: 'https://github.com/Chen2886/Circle-Front',
  },
  {
    title: 'Flix',
    category: 'An iOS app that displays the top movies from IMDB.',
    image: 'ios.jpg',
    url: 'https://github.com/Chen2886/Flix',
  },
  {
    title: 'Shell',
    category: 'I created my own shell. Private repository, so no link.',
    image: 'bash.jpg',
  },
  {
    title: 'ANN',
    category: 'I created an ANN network using tensorflow and basic algebra to recognize mnist_10 dataset.',
    image: 'mnist.jpg',
    url: 'https://github.com/Chen2886/CS390-lab0',
  },
];

const StyledProjectDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  height: 100%;
  min-height: 65vh;

  background-color: rgb(35, 37, 39);
`;

const useStyles = makeStyles(({ palette }) => ({
  root: {
    borderRadius: '1rem',
    backgroundColor: '#000000',
    height: '100%',
    '&:before': {
      transition: '0.2s',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      '&:before': {
        bottom: -6,
      },
    },
  },
  cover: {
    width: '100%',
  },
  action: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    borderRadius: '1rem',
    boxShadow: `0 6px 16px 0 ${Color('#fc7944').fade(0.5)}`,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
      clipPath: 'polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)',
      borderRadius: '1rem',
      background: `linear-gradient(to top, #fc7944, ${Color('#fc7944').rotate(24).lighten(0.12)})`,
    },
  },
  title: {
    color: '#fff',
    margin: 0,
    textAlign: 'end',
  },
  team: {
    fontSize: '0.75rem',
    color: palette.text.hint,
  },
  date: {
    color: '#fff',
    backgroundColor: palette.text.hint,
    opacity: 0.72,
    fontSize: '0.75rem',
    padding: '0 0.5rem',
    borderRadius: 12,
  },
}));

const CustomCard = ({ styles, cover, title, brand, date }) => {
  const mediaStyles = useCoverCardMediaStyles();
  return (
    // <Box className={cx(styles.root, styles.color)} pt={20}>
    //   <CardMedia image={cover} className={styles.cover} classes={mediaStyles} />
    //   <Box className={styles.content} p={2}>
    //     <Box position={'relative'} zIndex={1}>
    //       <Grid container justify='flex-end' spacing={2} style={{ marginTop: '3rem' }}>
    //         <Grid item xs={12}>
    //           <h2 className={styles.title}>{title}</h2>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <div style={{ wordWrap: 'break-word' }}>{brand}</div>
    //         </Grid>
    //       </Grid>

    //       <Row p={0} gap={2}>
    //         <Item position={'right'}>
    //           <h2 className={styles.title}>{title}</h2>
    //         </Item>
    //       </Row>
    //       <Row mt={4} alignItems={'center'}>
    //         <Item>
    //           <div className={styles.team}>a</div>
    //         </Item>
    //         <Item position={'right'}>
    //           <div className={styles.date}>{date}</div>
    //         </Item>
    //       </Row>
    //     </Box>
    //   </Box>
    // </Box>
    <Card className={styles.root}>
      <CardActionArea className={styles.action}>
        <img className={styles.cover} src={cover} />
        <CardContent>
          {/* <Typography gutterBottom variant='h5' component='h2'> */}
          {title}
          {/* </Typography> */}
          <Typography variant='body2' color='textSecondary' component='p'>
            {brand}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default function Project() {
  const styles1 = useStyles();
  return (
    <StyledProjectDiv id='second-portfolio'>
      <Grid className='portfolio-grid' container justify='center' alignItems='stretch'>
        <Grid item xs={12} style={{ marginBottom: '1rem', justifyContent: 'center', display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <h2 style={{ margin: 0 }}>Other Projects</h2>
            <hr></hr>
          </div>
        </Grid>
        {Projects.map((item, i) => {
          return (
            <Grid item key={i} md={4} style={{ padding: '1rem', boxShadow: 'border-box', display: 'inline-block' }}>
              <CustomCard styles={styles1} brand={<p>{item.category}</p>} cover={'images/portfolio/' + item.image} title={<h3>{item.title}</h3>} />
            </Grid>
          );
        })}
      </Grid>
    </StyledProjectDiv>
  );
}
