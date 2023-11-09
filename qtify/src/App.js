import './App.css';
import HeroImage from './Components/HeroImage/HeroImage';
import Navbar from './Components/Navbar/Navbar';
import Albums from './Components/Albums/Albums';
import Footer from './Components/Footer/Footer';
import MusicPlayer from './Components/MuiscPlayer/MusicPlayer';

function App() {
  return (
   <div>
    <Navbar />
    <HeroImage />
    <Albums />
    <Footer />
    <MusicPlayer/>
   </div>
  );
}

export default App;
