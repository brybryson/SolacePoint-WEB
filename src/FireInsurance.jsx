import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const fireProducts = [
  {
    title: 'Home Secure',
    icon: 'house',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    desc: 'Home Secure provides comprehensive fire insurance for residential properties. Whether you own a house, condominium unit, or residential apartment, Home Secure has you covered.',
    covers: [
      'Single-family homes',
      'Condominiums & townhouses',
      'Residential apartments',
      'Vacation homes & rest houses'
    ]
  },
  {
    title: 'Office Secure',
    icon: 'domain',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Office Secure is designed to protect office spaces and corporate environments from fire-related damages. Keep your workplace, equipment, and important documents safe.',
    covers: [
      'Corporate offices & co-working spaces',
      'BPO & call center facilities',
      'Government offices',
      'Professional service offices'
    ]
  },
  {
    title: 'Warehouse Secure',
    icon: 'warehouse',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Warehouse Secure offers specialized fire insurance for warehouse and storage facilities. Protect your inventory, goods, and storage infrastructure from fire damage.',
    covers: [
      'Storage warehouses & distribution centers',
      'Cold storage facilities',
      'Logistics hubs & fulfillment centers',
      'Agricultural storage & silos'
    ]
  },
  {
    title: 'Business Secure',
    icon: 'storefront',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop',
    desc: 'Business Secure provides fire insurance tailored for commercial businesses. From retail shops to restaurants, protect your business assets and livelihood.',
    covers: [
      'Retail stores & shopping centers',
      'Restaurants & food establishments',
      'Hotels & resorts',
      'Manufacturing & industrial businesses'
    ]
  }
];

const alliedPerils = [
  { name: 'Earthquake', icon: 'terrain' },
  { name: 'Flood', icon: 'water' },
  { name: 'Typhoon', icon: 'cyclone' },
  { name: 'Eruption, Tidal Wave & Tsunami', icon: 'volcano' },
  { name: 'Riot, Strike & Malicious Damage', icon: 'warning' },
  { name: 'Broad Water Damage', icon: 'water_drop' },
  { name: 'Sprinkler Leakage', icon: 'fire_extinguisher' },
  { name: 'Landslide & Subsistence', icon: 'landscape' },
  { name: 'Spontaneous Combustion', icon: 'local_fire_department' },
  { name: 'Civil Commotion', icon: 'groups' },
  { name: 'Burglary & Robbery', icon: 'lock' },
  { name: 'Electrical Derangement', icon: 'bolt' }
];

const FireInsurance = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navOpacity = Math.min(scrollY / 300, 1);
  const isAtTop = scrollY < 50;

  return (
    <div className="font-sans antialiased text-on-surface bg-surface-container-lowest min-h-screen selection:bg-secondary/30">
      <TopNavBar visible={true} isAtTop={isAtTop} navOpacity={navOpacity} theme="dark" />

      {/* SECTION 1: Hero */}
      <section className="bg-primary pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-margin-desktop overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <ScrollReveal direction="up" className="relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-secondary"></div>
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Products</span>
              <div className="w-8 h-[1px] bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Fire Insurance
            </h1>
            <p className="font-body-lg text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
              Protect your property and assets from fire-related losses and damages. Solace Point offers comprehensive fire insurance solutions for residential, commercial, and industrial properties.
            </p>
            <button 
              onClick={() => navigate('/quote')}
              className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-xl w-full sm:w-auto"
            >
              Get a Free Quote
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: Our Fire Insurance Products */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Tailored Solutions</p>
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold">Our Fire Insurance Products</h2>
              <p className="text-on-surface-variant mt-6 text-lg max-w-2xl mx-auto">Tailored fire insurance solutions for every type of property.</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-24 md:gap-32">
            {fireProducts.map((product, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal key={idx} direction={isEven ? "left" : "right"}>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 group`}>
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                      <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/0 transition-colors duration-1000"></div>
                      </div>
                      {/* Decorative Elements */}
                      <div className={`absolute -bottom-8 ${isEven ? '-right-8' : '-left-8'} w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none`}></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col relative z-10">
                      <h3 className="font-display-lg text-3xl md:text-5xl font-bold text-primary mb-6">{product.title}</h3>
                      <p className="font-body-md text-on-surface-variant text-lg leading-relaxed mb-10">{product.desc}</p>
                      
                      <div className="bg-surface p-8 md:p-10 rounded-[2rem] border border-outline-variant/30 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[4rem] pointer-events-none"></div>
                        <p className="font-bold text-xs uppercase tracking-[0.2em] text-primary mb-6">What it covers</p>
                        <ul className="space-y-4 relative z-10">
                          {product.covers.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5 border border-secondary/20">
                                <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                              </div>
                              <span className="text-on-surface-variant font-medium text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button 
                        onClick={() => navigate('/quote')}
                        className="mt-12 flex items-center gap-4 text-primary font-bold text-sm uppercase tracking-[0.3em] group/btn self-start"
                      >
                        <span className="border-b-2 border-primary/30 pb-1 group-hover/btn:border-secondary group-hover/btn:text-secondary transition-colors">Request a Quote</span>
                        <div className="w-10 h-10 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:border-secondary transition-colors">
                          <span className="material-symbols-outlined text-primary group-hover/btn:text-on-secondary transition-colors text-lg">arrow_forward</span>
                        </div>
                      </button>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Other Properties */}
      <section className="py-24 md:py-32 bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface font-bold mb-6">Fire Insurance for Other Properties</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  We also provide fire insurance coverage for a wide range of property types. Whether it's a house, building, shop, or warehouse, we have tailored solutions.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {['Commercial Buildings', 'Warehouse', 'Offices', 'Industrial Properties', 'Condominium', 'High-Rise Buildings'].map((prop, idx) => (
                <div key={idx} className="bg-white px-6 py-8 rounded-2xl border border-outline-variant/30 flex flex-col items-center justify-center text-center hover:border-secondary/30 hover:shadow-md transition-all group">
                  <span className="material-symbols-outlined text-3xl text-secondary/70 mb-4 group-hover:text-secondary group-hover:-translate-y-1 transition-all">location_city</span>
                  <span className="font-bold text-sm text-primary">{prop}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: Coverages & Allied Perils */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-secondary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Coverages</p>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-6">Fire and Allied Perils</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Protects individual homeowners, building owners, and tenants against loss of or damage to property against fire and lightning. Coverage can also be extended to include protection against the following perils:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-12 lg:pb-20 pt-8">
            {alliedPerils.map((peril, idx) => {
              const staggerClass = idx % 4 === 1 || idx % 4 === 3 ? 'lg:translate-y-12' : '';
              return (
                <ScrollReveal key={idx} delay={(idx % 4) * 100} direction="up" className="h-full">
                  <div className={`bg-primary-container/20 border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-secondary/15 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full group relative overflow-hidden backdrop-blur-sm ${staggerClass}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none group-hover:scale-[2] transition-transform duration-1000 origin-top-right"></div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500 shadow-lg">
                      <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary transition-colors duration-500 text-3xl">{peril.icon}</span>
                    </div>
                    
                    <span className="font-display-md text-xl md:text-2xl font-bold text-white leading-tight mt-auto relative z-10">{peril.name}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-32 md:py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Protect Your <br className="hidden md:block"/> Property Today</h2>
            <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Get a free, no-obligation quote from multiple top insurance providers. Secure your peace of mind with Solace Point.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate('/quote')}
                className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-2xl shadow-secondary/20 w-full sm:w-auto"
              >
                Get a Free Quote
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-white/40 text-white hover:bg-white hover:text-primary px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] transition-all backdrop-blur-sm w-full sm:w-auto"
              >
                Contact Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FireInsurance;
