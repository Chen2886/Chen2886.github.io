import React from 'react';
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';

function networks() {
  var social = [
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
  social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <FontAwesomeIcon icon={[network.className.split(' ')[0], network.className.split(' ')[1]]} />
        </a>
      </li>
    );
  });
}

export default function Header() {
  return <div id='about'>about</div>;
}
