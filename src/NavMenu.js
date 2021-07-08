// credit: https://github.com/bchiang7/v4

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import useOnClickOutside from './UseOnClickOutside';
import GetAppIcon from '@material-ui/icons/GetApp';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: #fcdb81;
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(${(props) => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)});
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: #fcdb81;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
      top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${(props) => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) => (menuOpen ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s' : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in')};
    }
    &:after {
      width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) =>
        menuOpen
          ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
          : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
    }
  }
`;

const StyledSidebar = styled.aside`
  display: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: #112240;
    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
    z-index: 9;
    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: #a8b2d1;
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      font-size: clamp(14px, 4vw, 18px);

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        display: block;
        margin-bottom: 5px;
        color: #64ffda;
        font-size: 14px;
      }
    }

    a {
      width: 100%;
      padding: 3px 20px 20px;
    }
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

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
`;

const StyledResumeButton = styled.a`
  background-color: transparent;
  border: 1px solid #eee;
  border-radius: 10px;
  color: #eee;
  font-size: 12px;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <StyledMenu>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef} aria-label='Menu'>
          <div className='ham-box'>
            <div className='ham-box-inner' />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <Nav>
            {/* Pending Logo */}
            <div>Logo Replacement</div>
            <Links>
              <ol>
                <li>
                  <a href='#home' onClick={() => setMenuOpen(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#about' onClick={() => setMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href='#experience' onClick={() => setMenuOpen(false)}>
                    Experience
                  </a>
                </li>
                <li>
                  <a href='#portfolio' onClick={() => setMenuOpen(false)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href='#contact' onClick={() => setMenuOpen(false)}>
                    Contact
                  </a>
                </li>
                <li>
                  <StyledResumeButton
                    onClick={() => setMenuOpen(false)}
                    style={{ padding: '8px' }}
                    href='https://drive.google.com/file/d/14Nupb9SvA5LyGL-Xim8aMUYpDO2EsH5_/view?usp=sharing'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <GetAppIcon></GetAppIcon>
                    <div style={{ marginLeft: '8px' }}>Resume</div>
                  </StyledResumeButton>
                </li>
              </ol>
            </Links>
          </Nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Menu;
