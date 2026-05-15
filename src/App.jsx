import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './LandingPage'
import './index.css'

function App() {
  return (
    <Router basename="/SolacePoint">
      <Routes>
        {/* Redirect the root to /Home */}
        <Route path="/" element={<Navigate to="/Home" replace />} />
        
        {/* The Landing Page at /Home */}
        <Route path="/Home" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
