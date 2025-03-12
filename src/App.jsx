import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import GyanManthan from './pages/GyanManthan'
import Spardha from './pages/Spardha'
import Prayas from './pages/Prayas'
import Donation from './pages/Donation'
import Contact from './pages/Contact'
import HelpingHand from './pages/HelpingHand'
import Sponsors from './pages/Sponsors'
import Teams from './pages/Teams'
import Support from './pages/Support'
// import FloatingShapes from './components/FloatingShapes'


const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* <FloatingShapes /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gyanmanthan" element={<GyanManthan />} />
          <Route path="/spardha" element={<Spardha />} />
          <Route path="/prayas" element={<Prayas />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/helping-hands" element={<HelpingHand />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
