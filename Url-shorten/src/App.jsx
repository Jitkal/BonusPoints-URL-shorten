import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
// import HistoryURL from "./components/HistoryURL.jsx";
import History from "./pages/History.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Navbar/>
          <div id='Home'>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/history" element={<History />} />
              </Routes>
          </div>

      </BrowserRouter>
  )
}

export default App
