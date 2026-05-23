import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/SolacePointLogo.png';

const Footer = () => {
  const navigate = useNavigate();
  
  // Newsletter Form State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5005';
      const response = await fetch(`${apiUrl}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatusMessage(data.message || 'Welcome to the Circle!');
        setNewsletterEmail('');
      } else {
        setStatusMessage(data.error || 'Failed to join. Please try again.');
      }
    } catch (error) {
      console.error('Error joining newsletter:', error);
      setStatusMessage('Network error. Make sure the API server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-surface pt-32 pb-16 px-6 md:px-margin-desktop border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <img 
              alt="Solace Point Logo" 
              className="h-28 w-auto mb-10 object-contain cursor-pointer" 
              src={logo}
              onClick={() => navigate('/Home')}
            />
            <p className="font-body-md text-on-surface-variant mb-12 leading-relaxed max-w-sm text-lg">
              A premium insurance agency dedicated to the architecture of security. We provide the foundation upon which your future is built.
            </p>
            <div className="flex gap-6">
              <a className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300 shadow-sm" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300 shadow-sm" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300 shadow-sm" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-2">
            <h5 className="font-bold uppercase tracking-[0.4em] text-tertiary text-xs mb-10">Products</h5>
            <ul className="space-y-6">
              <li>
                <button onClick={() => navigate('/products/fire')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  Fire & Property
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/products/motorcars')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  Motor Cars
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/products/tnvs')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  TNVS Secure
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/products')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  All Products
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-bold uppercase tracking-[0.4em] text-tertiary text-xs mb-10">Company</h5>
            <ul className="space-y-6">
              <li>
                <button onClick={() => navigate('/Home')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/promise')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  Our Promise
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/advisory')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  Advisory Hub
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h5 className="font-bold uppercase tracking-[0.4em] text-tertiary text-xs mb-10">Newsletter</h5>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
              Receive curated insights on risk management and financial peace.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input 
                className="bg-surface-container-low border border-outline-variant/40 rounded-full px-6 py-4 w-full text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary outline-none transition-all" 
                placeholder="Email Address" 
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-primary text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-on-surface transition-all shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Joining...' : 'Join the Circle'}
              </button>
              {statusMessage && (
                <p className="text-xs font-semibold tracking-wider text-primary mt-2">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-body-md text-xs text-on-surface-variant/70 uppercase tracking-widest">
            © 2026 Solace Point Insurance Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-10 text-[10px] uppercase tracking-[0.3em]">
            <button onClick={() => navigate('/privacy-policy')} className="text-on-surface-variant/60 hover:text-primary transition-colors whitespace-nowrap text-left font-semibold">PRIVACY POLICY</button>
            <span className="text-secondary font-bold whitespace-nowrap">POWERED BY SOLACE POINT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
