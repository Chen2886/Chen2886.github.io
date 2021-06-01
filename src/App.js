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

function App() {
  library.add(fab, faUser, faAddressCard, faEnvelope, faPhoneSquare);
  return (
    <div className='App'>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>News</Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Header></Header>
      <About></About>
    </div>
  );
}

export default App;
