import React, { Component, useState } from 'react';
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';
import styled, { css } from 'styled-components';

// import Nav from './Nav'

function networks() {}

function Description() {
  var arr = ['Software Engineer', 'Researcher', 'Gamer'];
  arr = arr.sort(() => Math.random() - 0.5);
  // var element = [];
  // arr.forEach((str) => {
  //   // element.push(<Typing.Backspace count={1}></Typing.Backspace>);
  //   element.push(<span>{str}</span>);
  //   element.push(<Typing.Backspace count={str.length + 1} delay={1000}></Typing.Backspace>);
  // });
  return (
    <div style={{ width: '100%' }}>
      <h3>
        <Typing loop>
          <div>
            {arr.map((item) => (
              <>
                <span>{item}</span>
                <Typing.Speed ms={35} />
                <Typing.Backspace count={item.length + 1} delay={2000} />
                <Typing.Speed ms={50} />
              </>
            ))}
          </div>
        </Typing>
      </h3>
    </div>
  );
}

const NavBar = styled.header`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100px;
  padding: 0px 50px;
  background-color: rgba(10, 25, 47, 0.85);

  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: #ccd6f6;
  counter-reset: item 0;
  z-index: 12;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: 13px;
      float: left;

      a {
        padding: 10px;

        &:before {
          margin-right: 5px;
          color: #64ffda;
          font-size: 12px;
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    margin-left: 15px;
    font-size: 13px;
  }
`;

const social = [
  {
    name: 'mail',
    url: 'mailto: chen2886@purdue.edu',
    icon: 'fas envelope',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/tonychen47/',
    icon: 'fab linkedin',
  },
  {
    name: 'github',
    url: 'http://github.com/Chen2886',
    icon: 'fab github-square',
  },
];

export default function Header() {
  return (
    <>
      {/* Header */}
      <NavBar>
        <Nav>
          {/* Pending Logo */}
          <div>Logo Replacement</div>
          <Links>
            <ol>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a className='smoothscroll' href='#resume'>
                  Experience
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#portfolio'>
                  Projects
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#contact'>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='https://drive.google.com/file/d/14Nupb9SvA5LyGL-Xim8aMUYpDO2EsH5_/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Resume
                </a>
              </li>
            </ol>
          </Links>
        </Nav>
      </NavBar>
      <div id='home'>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>Hi, I'm Tony!</h1>
            <Description></Description>
            <ul className='social'>
              {social.map(function (network) {
                return (
                  <li key={network.name}>
                    <a href={network.url}>
                      <FontAwesomeIcon icon={[network.icon.split(' ')[0], network.icon.split(' ')[1]]} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </div>
    </>
  );
}
