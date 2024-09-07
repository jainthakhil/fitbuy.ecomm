import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/homepage/Home';
import Contact from './components/contactpage/Contact';
import Shopping from './components/shoppingpage/Shopping';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
        
          <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
