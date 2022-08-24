import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/services';
import Testimonials from './components/testimonials/Testimonials';
import './styles/app.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useEffect } from 'react';
import ChatHome from './components/chat/ChatHome';
import Login from './components/Login/Login';
import CreateAccount from './components/create/CreateAccount';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/chat' element={<ChatHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;

const IndexPage = () => {
  useEffect(() => {
    document.title = document.title + " | Home"
  })
  return (
    <div className='portfolioBody'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
