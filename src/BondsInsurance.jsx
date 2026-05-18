import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const bondTypes = [
  {
    title: 'Performance Bond',
    icon: 'construction',
    desc: 'Guarantees the completion of a project or contract according to specifications, commonly used in construction to ensure contractors meet obligations.'
  },
  {
    title: "Bidder's Bond",
    icon: 'assignment',
    desc: 'Ensures that a bidder, if awarded a contract, will enter into the contract and provide the required performance bond.'
  },
  {
    title: 'Surety Bond',
    icon: 'handshake',
    desc: 'A general term for bonds that guarantee the fulfillment of obligations, protecting the obligee against default.'
  },
  {
    title: 'Fidelity Bond',
    icon: 'security',
    desc: 'Protects employers against financial losses caused by dishonest or fraudulent acts of employees.'
  },
  {
    title: 'Customs Bond',
    icon: 'directions_boat',
    desc: 'Required for importing goods, ensuring compliance with customs regulations and payment of duties.'
  },
  {
    title: 'Judicial Bonds',
    icon: 'balance',
    desc: 'Required by courts to guarantee the performance of an undertaking by litigants (e.g., injunction bonds).'
  },
  {
    title: 'Heirs Bond',
    icon: 'family_restroom',
    desc: 'Required for estate settlement and inheritance claims, guaranteeing that heirs will fulfill their legal obligations and protect the interests of other beneficiaries.'
  },
  {
    title: 'License and Permit Bonds',
    icon: 'workspace_premium',
    desc: 'Guarantees that professionals or businesses comply with laws and regulations, such as real estate broker bonds.'
  }
];

const whyChoose = [
  { name: 'Fast Processing', desc: 'Quick bond issuance to meet your deadlines', icon: 'timer' },
  { name: 'Competitive Rates', desc: 'Affordable premiums from trusted providers', icon: 'payments' },
  { name: 'Expert Guidance', desc: 'Professional support for all bond requirements', icon: 'support_agent' },
  { name: 'Wide Coverage', desc: 'All types of bonds for every industry', icon: 'public' },
  { name: 'Trusted Partners', desc: 'Backed by top insurance companies', icon: 'verified' },
  { name: 'Compliance Assurance', desc: 'Meet legal and regulatory requirements', icon: 'gavel' }
];

const BondsInsurance = () => {
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
              Bonds Insurance
            </h1>
            <p className="font-body-lg text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
              Secure your contracts, projects, and business obligations with Solace Point Bond Insurance. From construction performance bonds to customs and judicial bonds — we guarantee your commitments are protected.
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

      {/* SECTION 2: Types of Bonds */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Tailored Solutions</p>
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold">Types of Bond Insurance</h2>
              <p className="text-on-surface-variant mt-6 text-lg max-w-2xl mx-auto">
                Comprehensive bond solutions for contractors, importers, businesses, professionals, and families.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bondTypes.map((bond, idx) => (
              <ScrollReveal key={idx} delay={(idx % 4) * 100} direction="up" className="h-full">
                <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/30 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[4rem] pointer-events-none group-hover:scale-[2] transition-transform duration-1000 origin-top-right"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-outline-variant/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-colors duration-500 shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors duration-500 text-2xl">{bond.icon}</span>
                  </div>
                  
                  <h3 className="font-display-md text-xl font-bold text-primary mb-4 relative z-10 leading-snug">{bond.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm mb-10 flex-grow relative z-10">{bond.desc}</p>
                  
                  <button 
                    onClick={() => navigate('/quote')}
                    className="mt-auto text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn relative z-10 w-fit"
                  >
                    <span className="border-b border-primary/30 pb-0.5 group-hover/btn:border-secondary group-hover/btn:text-secondary transition-colors">Get a Quote</span>
                    <span className="material-symbols-outlined text-sm group-hover/btn:text-secondary group-hover/btn:translate-x-1 transition-all">arrow_forward</span>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose */}
      <section className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
              <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Our Advantage</p>
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-6">Why Choose Solace Point Bonds?</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Reliable guarantee services backed by trusted providers. We secure your commitments efficiently and professionally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-outline-variant/30 flex flex-col items-start hover:border-secondary/40 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-outline-variant/20 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-primary group-hover:text-on-secondary text-2xl transition-colors duration-300">{item.icon}</span>
                  </div>
                  <h3 className="font-display-md text-xl font-bold text-primary mb-3">{item.name}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-32 md:py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop" alt="Business contract handshake" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Secure Your <br className="hidden md:block"/> Obligations Today</h2>
            <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Whether you need performance bonds for construction, heirs bonds for estate settlement, customs bonds for imports, or judicial bonds for legal proceedings — Solace Point has you covered.
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

export default BondsInsurance;
