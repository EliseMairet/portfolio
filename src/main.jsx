import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projet from './pages/projets/Projets'  
import Accueil from './pages/accueil/Accueil'
import './main.scss'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projects/:id" element={<Projet />} />
      </Routes>
    </Router>
  )
}

export default App
