import React from 'react';
import logo from './assets/SolacePointLogo.png';

const Footer = () => {
  return (
    <footer className="bg-surface pt-32 pb-16 px-margin-desktop border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <img 
              alt="Solace Point Logo" 
              className="h-28 w-auto mb-10 object-contain" 
              src={logo}
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
          <div className="lg:col-span-2">
            <h5 className="font-bold uppercase tracking-[0.4em] text-tertiary text-xs mb-10">Quick Links</h5>
            <ul className="space-y-6">
              <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide" href="#">Residential</a></li>
              <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide" href="#">Commercial</a></li>
              <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide" href="#">Vitality</a></li>
              <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide" href="#">Innovation</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="font-bold uppercase tracking-[0.4em] text-tertiary text-xs mb-10">Company</h5>
            <ul className="space-y-6">
              <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide" href="#">Methodology</a></li>
              <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide" href="#">Advisory</a></li>
              <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide" href="#">Insights</a></li>
              <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h5 className="font-bold uppercase tracking-[0.4em] text-tertiary text-xs mb-10">Newsletter</h5>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Receive curated insights on risk management and financial peace.</p>
            <div className="flex flex-col gap-4">
              <input 
                className="bg-surface-container-low border border-outline-variant/40 rounded-full px-6 py-4 w-full text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary outline-none transition-all" 
                placeholder="Email Address" 
                type="email"
              />
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-on-surface transition-all shadow-lg">Join the Circle</button>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-body-md text-xs text-on-surface-variant/70 uppercase tracking-widest">
            © 2026 Solace Point Insurance Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-10 text-[10px] text-on-surface-variant/60 uppercase tracking-[0.3em]">
            <a className="hover:text-primary transition-colors whitespace-nowrap" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors whitespace-nowrap" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
