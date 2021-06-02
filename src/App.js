import './App.css';
import Header from './Header';
import { faUser, faAddressCard, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

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
        {/* <About></About> */}
      </StyledContent>
    </div>
  );
}

export default App;
