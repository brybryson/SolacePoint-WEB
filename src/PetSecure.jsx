import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const whatsCovered = [
  { name: 'Veterinary Expenses', icon: 'local_hospital', desc: 'Coverage for accidents and illnesses requiring veterinary treatment' },
  { name: 'Medications', icon: 'medication', desc: 'Prescribed medicines and treatments for covered conditions' },
  { name: 'Diagnostic Tests', icon: 'science', desc: 'Laboratory tests, X-rays, and other diagnostic procedures' },
  { name: 'Hospitalization', icon: 'bed', desc: 'Confinement costs at veterinary clinics and animal hospitals' },
  { name: 'Surgery', icon: 'healing', desc: 'Surgical procedures due to accidents or covered illnesses' },
  { name: 'Emergency Care', icon: 'emergency', desc: '24/7 emergency veterinary services and urgent care' }
];

const petProducts = [
  {
    title: 'For Dogs',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop',
    alt: 'Dog at veterinary clinic',
    covers: [
      'Coverage for all dog breeds',
      'Accidents and illnesses covered',
      'Flexible coverage limits',
      'Veterinary consultation fees included',
      'Emergency and surgical coverage'
    ]
  },
  {
    title: 'For Cats',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cat at veterinary clinic',
    covers: [
      'All cat breeds protected',
      'Indoor and outdoor cats',
      'Comprehensive health coverage',
      'Diagnostic and lab test coverage',
      'Hospitalization and confinement'
    ]
  }
];

const PetSecure = () => {
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
              Protect Your Fur Babies
            </h1>
            <p className="font-body-lg text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
              Comprehensive health insurance for your beloved dogs and cats. Because they're family too.
            </p>
            <button 
              onClick={() => navigate('/quote')}
              className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-xl w-full sm:w-auto"
            >
              Get Pet Secure Quote
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: Why Pet Secure */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Tailored Solutions</p>
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold">Why Pet Secure?</h2>
              <p className="text-on-surface-variant mt-6 text-lg max-w-2xl mx-auto">Specialized protection plans explicitly designed for the unique health needs of your dogs and cats.</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-24 md:gap-32">
            {petProducts.map((product, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal key={idx} direction={isEven ? "left" : "right"}>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 group`}>
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                      <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        <img src={product.image} alt={product.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/0 transition-colors duration-1000"></div>
                      </div>
                      {/* Decorative Elements */}
                      <div className={`absolute -bottom-8 ${isEven ? '-right-8' : '-left-8'} w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none`}></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col relative z-10">
                      <h3 className="font-display-lg text-3xl md:text-5xl font-bold text-primary mb-6">{product.title}</h3>
                      
                      <div className="bg-surface p-8 md:p-10 rounded-[2rem] border border-outline-variant/30 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 mt-6">
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

      {/* SECTION 3: What's Covered */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-secondary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Coverages</p>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-6">What's Covered</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Our Pet Secure insurance policies provide complete peace of mind for your pets. Give them the best medical care possible when they need it most.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12 pt-8">
            {whatsCovered.map((peril, idx) => {
              const staggerClass = idx % 3 === 1 ? 'lg:translate-y-8' : idx % 3 === 2 ? 'lg:translate-y-16' : '';
              return (
                <ScrollReveal key={idx} delay={(idx % 3) * 100} direction="up" className="h-full">
                  <div className={`bg-primary-container/20 border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-secondary/15 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full group relative overflow-hidden backdrop-blur-sm ${staggerClass}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none group-hover:scale-[2] transition-transform duration-1000 origin-top-right"></div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500 shadow-lg shrink-0">
                      <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary transition-colors duration-500 text-3xl">{peril.icon}</span>
                    </div>
                    
                    <div className="mt-auto relative z-10 flex flex-col gap-3">
                      <h3 className="font-display-md text-2xl font-bold text-white leading-tight">{peril.name}</h3>
                      <p className="text-white/70 leading-relaxed font-body-md text-sm">{peril.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-32 md:py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop" alt="Happy dogs and cats" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Ready to Protect <br className="hidden md:block"/> Your Pet?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Join thousands of Filipino fur parents who trust Solace Point for their pets' health and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate('/quote')}
                className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-2xl shadow-secondary/20 w-full sm:w-auto"
              >
                Get Your Free Quote Now
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

export default PetSecure;
