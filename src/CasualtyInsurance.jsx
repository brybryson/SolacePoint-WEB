import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const casualtyProducts = [
  {
    title: 'Comprehensive General Liability (CGL) Insurance',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Office business setting',
    desc: 'Comprehensive General Liability (CGL) insurance protects businesses against financial loss from third-party claims of bodily injury, property damage, and advertising injuries occurring on-site or through operations. Often required for business permits, it covers legal fees, medical expenses, and settlements.',
    covers: [
      'Third-party bodily injury claims',
      'Property damage liability',
      'Advertising & personal injury',
      'Legal defense costs & fees',
      'Medical expense coverage',
      'Settlement & judgment payments',
      'On-premises liability',
      'Operations liability',
      'Business permit compliance'
    ],
    idealFor: [
      'Retail stores & commercial establishments',
      'Restaurants & food businesses',
      'Office-based businesses',
      'Manufacturing companies',
      'Service providers',
      'Businesses requiring permits & licenses'
    ]
  },
  {
    title: 'Property Floater Insurance',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    alt: 'Construction equipment on site',
    desc: 'Property floater insurance provides all-risk, specialized coverage for movable, high-value assets that are not fixed to one location, such as construction equipment, machinery, or valuable personal items. It covers damage or loss from theft, fire, collisions, or accidents while in transit or on-site.',
    covers: [
      'All-risk coverage for movable assets',
      'Construction equipment & machinery',
      'Theft & burglary protection',
      'Fire & explosion damage',
      'Collision & accident coverage',
      'In-transit protection',
      'On-site equipment coverage',
      'Tools & specialized instruments',
      'Valuable personal property'
    ],
    idealFor: [
      'Construction companies & contractors',
      'Heavy equipment operators',
      'Engineering & infrastructure firms',
      'Logistics & transport companies',
      'Businesses with movable high-value assets',
      'Professionals with specialized tools'
    ]
  }
];

const whyChoose = [
  { name: 'Business Permit Compliance', desc: 'CGL insurance often required for business permits and licenses', icon: 'description' },
  { name: 'Legal Defense Coverage', desc: 'Full coverage for legal fees, court costs, and attorney expenses', icon: 'gavel' },
  { name: 'All-Risk Protection', desc: 'Property floater covers theft, fire, collision, and accidents', icon: 'shield' },
  { name: 'In-Transit Coverage', desc: 'Equipment and assets protected while being moved between locations', icon: 'local_shipping' },
  { name: 'Affordable Premiums', desc: 'Competitive rates from multiple top insurance providers', icon: 'payments' },
  { name: 'Fast Claims Processing', desc: 'Streamlined claims with dedicated support from Solace Point', icon: 'speed' }
];

const CasualtyInsurance = () => {
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
              Casualty Insurance
            </h1>
            <p className="font-body-lg text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
              Protect your business operations and valuable assets from unexpected liabilities. Solace Point Casualty Insurance covers general liability, property damage, and movable high-value equipment — giving you peace of mind to focus on growing your business.
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

      {/* SECTION 2: Our Products */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Tailored Solutions</p>
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold">Our Casualty Products</h2>
              <p className="text-on-surface-variant mt-6 text-lg max-w-2xl mx-auto">Comprehensive liability and asset protection for businesses of all sizes.</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-24 md:gap-32">
            {casualtyProducts.map((product, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal key={idx} direction={isEven ? "left" : "right"}>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 group`}>
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-5/12 relative shrink-0">
                      <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        <img src={product.image} alt={product.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/0 transition-colors duration-1000"></div>
                      </div>
                      {/* Decorative Elements */}
                      <div className={`absolute -bottom-8 ${isEven ? '-right-8' : '-left-8'} w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none`}></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-7/12 flex flex-col relative z-10 lg:px-6">
                      <h3 className="font-display-lg text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary mb-6 leading-tight">{product.title}</h3>
                      <p className="font-body-md text-on-surface-variant text-lg leading-relaxed mb-10">{product.desc}</p>
                      
                      <div className="bg-surface p-8 md:p-10 rounded-[2rem] border border-outline-variant/30 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[4rem] pointer-events-none"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                          <div>
                            <p className="font-bold text-xs uppercase tracking-[0.2em] text-primary mb-6">Key Coverage</p>
                            <ul className="space-y-3 relative z-10">
                              {product.covers.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5 border border-secondary/20">
                                    <span className="material-symbols-outlined text-secondary text-[12px]">check</span>
                                  </div>
                                  <span className="text-on-surface-variant font-medium text-sm leading-snug">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="font-bold text-xs uppercase tracking-[0.2em] text-tertiary mb-6">Ideal For</p>
                            <ul className="space-y-3 relative z-10">
                              {product.idealFor.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 mt-0.5 border border-tertiary/20">
                                    <span className="material-symbols-outlined text-tertiary text-[12px]">business</span>
                                  </div>
                                  <span className="text-on-surface-variant font-medium text-sm leading-snug">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                      </div>

                      <button 
                        onClick={() => navigate('/quote')}
                        className="mt-12 flex items-center gap-4 text-primary font-bold text-sm uppercase tracking-[0.3em] group/btn self-start"
                      >
                        <span className="border-b-2 border-primary/30 pb-1 group-hover/btn:border-secondary group-hover/btn:text-secondary transition-colors">Get a Quote</span>
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

      {/* SECTION 3: Why Choose */}
      <section className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-6">Why Choose Solace Point Casualty Insurance?</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Reliable protection backed by trusted insurance providers. We safeguard your operations so you can build the future.
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
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" alt="Modern business building" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Protect Your <br className="hidden md:block"/> Business Today</h2>
            <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Whether you need liability protection for your business operations or coverage for your valuable equipment, Solace Point Casualty Insurance has you covered.
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

export default CasualtyInsurance;
