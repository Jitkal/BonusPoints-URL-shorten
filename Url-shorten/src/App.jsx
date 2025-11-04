import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
// import HistoryURL from "./components/HistoryURL.jsx";
import History from "./pages/History.jsx";
import LinkTo from "./pages/LinkTo.jsx";


function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <div id='App'>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/shortURL/:shortCode/*" element={<LinkTo />} />
              </Routes>
          </div>

      </BrowserRouter>
  )
}

export default App
