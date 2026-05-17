import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './LandingPage'
import GetQuote from './GetQuote'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import './index.css'

function App() {
  return (
    <Router basename="/SolacePoint">
      <Routes>
        {/* Redirects */}
        <Route path="/" element={<Navigate to="/Home" replace />} />
        
        {/* The Landing Page at /Home */}
        <Route path="/Home" element={<LandingPage />} />
        
        {/* The About / Experience Page */}
        <Route path="/about" element={<About />} />
        
        {/* The Get a Quote Page */}
        <Route path="/quote" element={<GetQuote />} />

        {/* The Contact / Advisory Page */}
        <Route path="/contact" element={<Contact />} />
        
        {/* The Products Page */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
