import { useState } from 'react';
import './App.scss';
import AppRouter from './components/Main Page/AppRouter';
import NavBar from './components/Main Page/NavBar';
import GitHubModal from './components/UI/GitHubModal';
import GitModalContent from './components/UI/GitModalContent';
import logo1 from './assets/chessOverlay.jpg'
import logo2 from './assets/tablegame1.jpg'
import useImagePreloader from "./hooks/imagePreloader";




function App() {

  const [visible, setVisible] = useState(false);

  const {imagesPreloaded} = useImagePreloader([logo1, logo2])


  return (
    <>
      {imagesPreloaded 
      &&
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
      }
    </>
  )
}

export default App;
