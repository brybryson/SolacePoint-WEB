import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './LandingPage'
import GetQuote from './GetQuote'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import FireInsurance from './FireInsurance'
import MarineInsurance from './MarineInsurance'
import PersonalAccident from './PersonalAccident'
import TravelInsurance from './TravelInsurance'
import PetSecure from './PetSecure'
import CasualtyInsurance from './CasualtyInsurance'
import EngineeringInsurance from './EngineeringInsurance'
import BondsInsurance from './BondsInsurance'
import MotorCarInsurance from './MotorCarInsurance'
import TNVSInsurance from './TNVSInsurance'
import PromiseComponent from './Promise'
import Advisory from './Advisory'
import ArticleCommercialRisk from './ArticleCommercialRisk'
import ArticleHomeProperty from './ArticleHomeProperty'
import ArticleMobility from './ArticleMobility'
import NotFound from './NotFound'
import PrivacyPolicy from './PrivacyPolicy'
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

        {/* Product Details Pages */}
        <Route path="/products/fire" element={<FireInsurance />} />
        <Route path="/products/marine" element={<MarineInsurance />} />
        <Route path="/products/personalaccident" element={<PersonalAccident />} />
        <Route path="/products/travel" element={<TravelInsurance />} />
        <Route path="/products/petsecure" element={<PetSecure />} />
        <Route path="/products/casualty" element={<CasualtyInsurance />} />
        <Route path="/products/engineering" element={<EngineeringInsurance />} />
        <Route path="/products/bonds" element={<BondsInsurance />} />
        <Route path="/products/motorcars" element={<MotorCarInsurance />} />
        <Route path="/products/tnvs" element={<TNVSInsurance />} />
        <Route path="/promise" element={<PromiseComponent />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/advisory/commercial-risk" element={<ArticleCommercialRisk />} />
        <Route path="/advisory/home-property" element={<ArticleHomeProperty />} />
        <Route path="/advisory/mobility" element={<ArticleMobility />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
