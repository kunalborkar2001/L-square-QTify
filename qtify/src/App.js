import './App.css';
import HeroImage from './Components/HeroImage/HeroImage';
import Navbar from './Components/Navbar/Navbar';
import Albums from './Components/Albums/Albums';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <div>
    <Navbar />
    <HeroImage />
    <Albums />
    <Footer />
   </div>
  );
}

export default App;
