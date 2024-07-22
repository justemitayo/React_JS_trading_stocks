import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<LandingPage />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
