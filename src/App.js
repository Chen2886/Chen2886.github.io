import './App.css';
import Header from './Header';
import About from './About';
import { faUser, faAddressCard, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled, { css } from 'styled-components';

function App() {
  const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;
  library.add(fab, faUser, faAddressCard, faEnvelope, faPhoneSquare);
  return (
    <div className='App'>
      <StyledContent>
        <Header></Header>
        <About></About>
      </StyledContent>
    </div>
  );
}

export default App;
