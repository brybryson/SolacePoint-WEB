import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/SolacePointLogo.png';

const TopNavBar = ({ scrollY, visible, navOpacity, isAtTop, theme = 'dark' }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const useLightColors = theme === 'light' || !isAtTop;

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-500 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${navOpacity * 0.9})`,
        backdropFilter: isAtTop ? 'none' : 'blur(12px)',
        borderBottom: `1px solid rgba(0, 0, 0, ${navOpacity * 0.1})`
      }}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-margin-desktop max-w-container-max mx-auto h-20">
        <a className="flex items-center gap-3 group" href="#" onClick={(e) => { e.preventDefault(); navigate('/Home'); }}>
          <img
            alt="Solace Point Logo"
            className={`h-14 w-auto object-contain transition-all duration-500 ${
              !useLightColors ? 'brightness-0 invert group-hover:brightness-100 group-hover:invert-0' : ''
            }`}
            src={logo}
          />
        </a>
        <div className="hidden lg:flex items-center gap-10">
          <a className={`transition-colors duration-500 font-semibold text-[11px] uppercase tracking-[0.2em] ${
            !useLightColors ? 'text-white hover:text-secondary' : 'text-on-surface/70 hover:text-primary'
          }`} href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); setIsMobileMenuOpen(false); }}>About</a>
          <a className={`transition-colors duration-500 font-semibold text-[11px] uppercase tracking-[0.2em] ${
            !useLightColors ? 'text-white hover:text-secondary' : 'text-on-surface/70 hover:text-primary'
          }`} href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); setIsMobileMenuOpen(false); }}>Products</a>
          <a className={`transition-colors duration-500 font-semibold text-[11px] uppercase tracking-[0.2em] ${
            !useLightColors ? 'text-white hover:text-secondary' : 'text-on-surface/70 hover:text-primary'
          }`} href="#" onClick={(e) => { e.preventDefault(); navigate('/promise'); setIsMobileMenuOpen(false); }}>Our Promise</a>
          <a className={`transition-colors duration-500 font-semibold text-[11px] uppercase tracking-[0.2em] ${
            !useLightColors ? 'text-white hover:text-secondary' : 'text-on-surface/70 hover:text-primary'
          }`} href="#" onClick={(e) => { e.preventDefault(); navigate('/advisory'); setIsMobileMenuOpen(false); }}>Advisory</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors ${!useLightColors ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-primary/5'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full shadow-xl flex flex-col transition-all duration-300 origin-top overflow-hidden ${
        isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
      } ${
        !useLightColors
          ? 'bg-black/20 backdrop-blur-md border-t border-white/10'
          : 'bg-white border-t border-outline/10'
      }`}>
        <a className={`py-5 px-8 font-semibold text-xs uppercase tracking-widest transition-colors ${!useLightColors ? 'text-white border-b border-white/10 hover:bg-white/10' : 'text-on-surface border-b border-outline/10 hover:bg-surface'}`} href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); setIsMobileMenuOpen(false); }}>About</a>
        <a className={`py-5 px-8 font-semibold text-xs uppercase tracking-widest transition-colors ${!useLightColors ? 'text-white border-b border-white/10 hover:bg-white/10' : 'text-on-surface border-b border-outline/10 hover:bg-surface'}`} href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); setIsMobileMenuOpen(false); }}>Products</a>
        <a className={`py-5 px-8 font-semibold text-xs uppercase tracking-widest transition-colors ${!useLightColors ? 'text-white border-b border-white/10 hover:bg-white/10' : 'text-on-surface border-b border-outline/10 hover:bg-surface'}`} href="#" onClick={(e) => { e.preventDefault(); navigate('/promise'); setIsMobileMenuOpen(false); }}>Our Promise</a>
        <a className={`py-5 px-8 font-semibold text-xs uppercase tracking-widest transition-colors ${!useLightColors ? 'text-white hover:bg-white/10' : 'text-on-surface hover:bg-surface'}`} href="#" onClick={(e) => { e.preventDefault(); navigate('/advisory'); setIsMobileMenuOpen(false); }}>Advisory</a>
      </div>
    </nav>
  );
};

export default TopNavBar;
