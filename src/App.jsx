import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/aboutus' Component={AboutUs} />
          <Route path='/products' Component={Products} />
          <Route path='/sign-up' Component={SignUp} />
        </Routes>
        <Footer />
      </Router >
    </>
  )
}

export default App
