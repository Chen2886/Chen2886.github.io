import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';

// import Nav from './Nav'

function networks() {}

function Description() {
  var arr = ['Software Engineer', 'Researcher', 'Gamer'];
  arr = arr.sort(() => Math.random() - 0.5);
  return (
    <Typing loop speed={50}>
      <h3>
        {arr.map((item, i) => (
          <div key={i}>
            {item}
            <Typing.Speed ms={35} />
            <Typing.Backspace count={18} delay={2000} />
            <Typing.Speed ms={50} />
          </div>
        ))}
      </h3>
    </Typing>
  );
}

class Header extends Component {
  handleScroll() {
    let scrollTop = window.pageYOffset;
    const e = document.getElementById('nav-wrap');
    console.log(e.scrollHeight);
    const bottom = e.scrollHeight - e.scrollTop === e.clientHeight;
    console.log(bottom);
    // if (wrappedElement.getBoundingClientRect().bottom <= window.innerHeight) {
    //   console.log('header bottom reached');
    // }

    // this.setState({
    //   transform: itemTranslate
    // });
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  social = [
    {
      name: 'mail',
      url: 'mailto: chen2886@purdue.edu',
      className: 'fas envelope',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tonychen47/',
      className: 'fab linkedin',
    },
    {
      name: 'github',
      url: 'http://github.com/Chen2886',
      className: 'fab github-square',
    },
  ];

  render() {
    return (
      <div id='home'>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>Hi, I'm Tony!</h1>
            <Description></Description>
            <ul className='social'>
              {this.social.map(function (network) {
                return (
                  <li key={network.name}>
                    <a href={network.url}>
                      <FontAwesomeIcon icon={[network.className.split(' ')[0], network.className.split(' ')[1]]} />
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
    );
  }
}

export default Header;
