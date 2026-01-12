import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import Episodes from './components/Episodes'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar isOpen={isOpen} toggle={toggleSidebar} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero isOpen={isOpen} toggle={toggleSidebar} />
            <Slider />
            <Episodes />
            <About />
          </>
        } />
        <Route path="/login" element={<Login isOpen={isOpen} />} />
        <Route path="/signup" element={<Signup isOpen={isOpen} />} />
      </Routes>
    </Router>
  )
}

export default App
