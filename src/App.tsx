import { useState } from 'react';
import './App.scss';
import AppRouter from './components/Main Page/AppRouter';
import NavBar from './components/Main Page/NavBar';
import GitHubModal from './components/UI/GitHubModal';
import GitModalContent from './components/UI/GitModalContent';




function App() {

  const [visible, setVisible] = useState(false);


  return (
    <>
      <GitHubModal
        visible = {visible}
        setVisible = {setVisible}
        >
          <GitModalContent
            setVisible = {setVisible}
          />
      </GitHubModal>
      <NavBar
        setVisible = {setVisible}
        />
      <AppRouter/>
    </>
  )
}

export default App;
