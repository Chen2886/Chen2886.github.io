import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Grid, CardActionArea } from '@material-ui/core';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';

const Projects = [
  {
    title: 'Personal Website',
    category: 'I designed this website to showcase my resume. Instead of using a template, I decided to build one from scratch using React.',
    image: 'personalwebsite.jpg',
    url: 'https://chen2886.github.io',
  },
  {
    title: 'Ez-Prez: Presentation Generator',
    category:
      'My friends and I build this project for a hackathon, BoilerMake 7. We created an iOS and Web app that converts text or voice to a google slide using ML. This was a unique project with an incredible result!',
    image: 'ezprez.jpg',
    url: 'https://devpost.com/software/ez-prez',
  },
  {
    title: 'Business Management',
    category:
      "I created an application utilizing JavaFx and SQLite3 that track's a company's inventory, formula, and finances. The company was able to see a 25% efficiency increase.",
    image: 'businessmanage.jpg',
    url: 'https://github.com/Chen2886/Business-Management',
  },
  {
    title: 'Circle',
    category:
      'This is a social media platform that my group created for a semester project. We used concepts from Reddit and added some of our twists to it! (The demo link works, but it takes a while to boot up.)',
    image: 'circle.jpg',
    url: 'https://github.com/Chen2886/Circle-Front',
  },
  {
    title: 'Flix',
    category:
      'This is one of the first iOS apps that I created. The app displays the top movies from IMDB. My main focus for this app is to learn REST API calls using Swift and constraints. (this apps looks excellent all on all devices and orientation)',
    image: 'ios.jpg',
    url: 'https://github.com/Chen2886/Flix',
  },
  {
    title: 'Shell',
    category:
      'I created my own bash shell using C++, C, Lex, and Yacc. This was a challenging project since there are a lot of intricate parts to a shell.',
    image: 'bash.jpg',
  },
  {
    title: 'ANN',
    category: 'I created two ANNs to recognize mnist_10 dataset: one using TensorFlow, the other one using basic algebra.',
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
  nonAction: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
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

const CustomCard = ({ styles, cover, title, brand, url }) => {
  return (
    <Card className={styles.root}>
      {url && (
        <CardActionArea href={url} target='_blank' className={styles.action}>
          <img className={styles.cover} src={cover} alt={'image for ' + title} />
          <CardContent>
            <h3>{title}</h3>
            <div>
              <p>{brand}</p>
            </div>
          </CardContent>
        </CardActionArea>
      )}
      {!url && (
        <div className={styles.nonAction}>
          <img className={styles.cover} src={cover} alt={'image for ' + title} />
          <CardContent>
            <h3>{title}</h3>
            <div>
              <p>{brand}</p>
            </div>
          </CardContent>
        </div>
      )}
    </Card>
  );
};

export default function Project() {
  const styles1 = useStyles();
  return (
    <StyledProjectDiv id='second-portfolio' name='second-portfolio'>
      <Grid className='portfolio-grid' container justify='center' alignItems='stretch'>
        <Grid item xs={12} style={{ marginBottom: '1rem', justifyContent: 'center', display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <h2 style={{ margin: 0 }}>Other Projects</h2>
            <hr></hr>
          </div>
        </Grid>
        {Projects.map((item, i) => {
          return (
            <Grid item key={i} md={4} xl={3} style={{ padding: '1rem', boxShadow: 'border-box', display: 'inline-block' }}>
              <CustomCard url={item.url} styles={styles1} brand={item.category} cover={'images/portfolio/' + item.image} title={item.title} />
            </Grid>
          );
        })}
      </Grid>
    </StyledProjectDiv>
  );
}
