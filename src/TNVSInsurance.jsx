import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const coverages = [
  { name: 'Comprehensive Vehicle Coverage', icon: 'directions_car', desc: 'Full protection for your TNVS vehicle against collision, theft, fire, and natural disasters — whether you\'re on a trip or parked.' },
  { name: 'Third-Party Liability', icon: 'shield', desc: 'Coverage for bodily injury and property damage claims from third parties involved in an accident while you\'re operating as TNVS.' },
  { name: 'Passenger Personal Accident', icon: 'group', desc: 'Protection for your passengers in case of accidental injury or death while riding in your TNVS vehicle.' },
  { name: 'Acts of Nature', icon: 'tsunami', desc: 'Coverage against flood, typhoon, earthquake, and other natural calamities — critical for Philippine weather conditions.' },
  { name: 'Roadside Assistance', icon: 'build', desc: '24/7 emergency roadside assistance including towing, battery jump-start, flat tire change, and emergency fuel delivery.' },
  { name: 'Loss of Income Benefit', icon: 'payments', desc: 'Financial support when your vehicle is under repair due to a covered incident, helping you manage while off the road.' }
];

const warnings = [
  { text: "Regular insurance won't cover you during ride-hailing operations", type: "warning", icon: "warning" },
  { text: "LTFRB requires specific insurance for TNVS accreditation", type: "warning", icon: "assignment_late" },
  { text: "Passenger liability is not included in standard policies", type: "warning", icon: "gavel" },
  { text: "TNVS Secure covers all of this — and more", type: "success", icon: "check_circle" }
];

const features = [
  "LTFRB-compliant insurance coverage",
  "Accepted by Grab, JoyRide, and other TNVS platforms",
  "Quick claims processing — get back on the road faster",
  "Affordable premiums designed for TNVS operators",
  "Coverage while on-trip AND off-trip",
  "Multiple top insurance providers to choose from",
  "Dedicated support team for TNVS operators",
  "Easy renewal process"
];

const faqs = [
  {
    question: "Is TNVS Secure accepted by Grab and other platforms?",
    answer: "Yes! TNVS Secure meets all LTFRB requirements and is accepted by major TNVS platforms including Grab, JoyRide, and others operating in the Philippines."
  },
  {
    question: "What's the difference between TNVS insurance and regular car insurance?",
    answer: "Regular car insurance typically excludes coverage when your vehicle is used for commercial purposes like ride-hailing. TNVS Secure is specifically designed to cover you while operating as a TNVS driver, including passenger liability."
  },
  {
    question: "How fast is the claims process?",
    answer: "We prioritize fast claims processing for TNVS operators because we understand that time off the road means lost income. Most claims are processed within 3-5 business days."
  },
  {
    question: "Can I bundle TNVS Secure with my personal car insurance?",
    answer: "Yes! We can help you find the best combination of personal and TNVS coverage to maximize your protection while keeping premiums affordable."
  }
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant/30 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <h3 className="font-display-md text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors pr-8">{question}</h3>
        <div className={`w-10 h-10 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:border-secondary transition-colors`}>
          <span className={`material-symbols-outlined text-primary group-hover:text-on-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-on-surface-variant leading-relaxed text-base md:text-lg pr-12">{answer}</p>
      </div>
    </div>
  );
};

const TNVSInsurance = () => {
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <ScrollReveal direction="up" className="relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-secondary"></div>
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">
                Products
              </span>
              <div className="w-8 h-[1px] bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              TNVS Secure
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
              Comprehensive insurance protection designed specifically for TNVS drivers and operators. Drive with confidence — we've got you covered.
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

      {/* SECTION 2: Why TNVS Specialized Insurance */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <div>
                <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Critical Protection</p>
                <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-8 leading-tight">Why TNVS Drivers Need Specialized Insurance</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  As a TNVS operator, your vehicle is more than just transportation — it's your livelihood. Standard car insurance policies often exclude coverage during commercial use, leaving you exposed when you need protection the most.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  TNVS Secure bridges this gap with coverage specifically designed for ride-hailing drivers, ensuring you're protected whether you're on a trip, waiting for a booking, or driving home.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {warnings.map((item, idx) => (
                  <div key={idx} className={`p-8 rounded-[2rem] border flex flex-col h-full ${item.type === 'success' ? 'bg-secondary/10 border-secondary/30' : 'bg-surface-container-lowest border-outline-variant/30'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${item.type === 'success' ? 'bg-secondary text-on-secondary' : 'bg-error/10 text-error'}`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <p className={`font-bold text-base leading-snug ${item.type === 'success' ? 'text-primary' : 'text-on-surface'}`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: Coverages (Bento Box) */}
      <section id="coverages" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-secondary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Coverages</p>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-6">What TNVS Secure Covers</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Complete protection tailored for the unique risks of TNVS operations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12 pt-8">
            {coverages.map((peril, idx) => {
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

      {/* SECTION 4: Why Choose & FAQ */}
      <section className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
            {/* Left Col: Checklist */}
            <ScrollReveal direction="left">
              <div>
                <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">The Advantage</p>
                <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-6">Why Choose TNVS Secure from Solace Point?</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  Everything you need to drive with peace of mind.
                </p>
                
                <ul className="space-y-6 bg-white p-10 rounded-[2.5rem] border border-outline-variant/30 shadow-xl">
                  {features.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
                      </div>
                      <span className="text-primary font-bold text-base md:text-lg leading-snug mt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Right Col: FAQ */}
            <ScrollReveal direction="right">
              <div className="lg:mt-8">
                <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Support</p>
                <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-10">Frequently Asked Questions</h2>
                
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-outline-variant/30 shadow-lg">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-32 md:py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop" alt="Driving wheel" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Ready to Protect Your <br className="hidden md:block"/> TNVS Business?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Get a free quote today and drive with confidence. Our team will help you find the best TNVS coverage at the most competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate('/quote')}
                className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-2xl shadow-secondary/20 w-full sm:w-auto flex items-center justify-center gap-3 group"
              >
                Get a Free Quote <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
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

export default TNVSInsurance;
