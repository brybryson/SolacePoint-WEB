import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const travelProducts = [
  {
    title: 'Travel Secure International - Outbound',
    line1: 'Travel Secure',
    line2: 'International - Outbound',
    icon: 'flight_takeoff',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    desc: 'Travel Secure International Outbound provides comprehensive travel insurance for Filipinos leaving the Philippines. Whether for vacation, business, or visiting family abroad, get protected against trip cancellations, medical emergencies, lost baggage, and more.',
    covers: [
      'Trip cancellation & interruption',
      'Emergency medical expenses abroad',
      'Lost or delayed baggage',
      'Flight delays & missed connections',
      'Emergency evacuation & repatriation',
      '24/7 travel assistance'
    ]
  },
  {
    title: 'Travel Secure International - Inbound',
    line1: 'Travel Secure',
    line2: 'International - Inbound',
    icon: 'flight_land',
    image: 'https://images.unsplash.com/photo-1546274527-9327167dc1f5?q=80&w=1200&auto=format&fit=crop',
    desc: 'Travel Secure International Inbound offers protection for travelers coming to the Philippines from abroad. Perfect for foreign visitors, returning OFWs, and balikbayans, ensuring peace of mind during your stay in the Philippines.',
    covers: [
      'Medical coverage in the Philippines',
      'Trip delays & cancellations',
      'Baggage protection',
      'Personal accident coverage',
      'Emergency assistance services',
      'Coverage for tourists & visitors'
    ]
  },
  {
    title: 'Travel Secure Local',
    icon: 'map',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop',
    desc: "Travel Secure Local provides comprehensive insurance for domestic travel within the Philippines. Explore Boracay, Palawan, Cebu, and other beautiful destinations with confidence, knowing you're protected against unexpected events.",
    covers: [
      'Domestic trip cancellation',
      'Medical emergencies while traveling',
      'Lost or stolen belongings',
      'Accommodation issues',
      'Transportation delays',
      'Personal accident coverage'
    ]
  }
];

const whatsCovered = [
  { name: 'Trip Cancellation', icon: 'event_busy' },
  { name: 'Medical Emergencies', icon: 'local_hospital' },
  { name: 'Lost Baggage', icon: 'luggage' },
  { name: 'Flight Delays', icon: 'schedule' },
  { name: 'Emergency Evacuation', icon: 'flight_takeoff' },
  { name: 'Travel Documents Loss', icon: 'description' },
  { name: 'Personal Accident', icon: 'healing' },
  { name: '24/7 Assistance', icon: 'support_agent' },
  { name: 'Worldwide Coverage', icon: 'public' }
];

const TravelInsurance = () => {
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
              Travel Secure
            </h1>
            <p className="font-body-lg text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
              Travel the world without worries. Solace Point Travel Secure, powered by Standard Insurance, protects you against trip cancellations, medical emergencies, lost baggage, and more — whether you're traveling abroad or exploring the Philippines.
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
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold">Our Travel Secure Products</h2>
              <p className="text-on-surface-variant mt-6 text-lg max-w-2xl mx-auto">Comprehensive travel protection for every journey — whether you're flying abroad, returning home, or exploring the Philippines.</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-24 md:gap-32">
            {travelProducts.map((product, idx) => {
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
                    <div className="w-full lg:w-1/2 flex flex-col relative z-10 lg:pl-4">
                      <h3 className="font-display-lg text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary mb-6 leading-tight">
                        {product.line1 ? (
                          <>
                            {product.line1}<br />
                            <span className="whitespace-nowrap">{product.line2}</span>
                          </>
                        ) : (
                          product.title
                        )}
                      </h3>
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

      {/* SECTION 3: Why Choose */}
      <section className="py-24 md:py-32 bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface font-bold mb-6">Why Choose Solace Point Travel Secure?</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Powered by Standard Insurance — trusted protection for every journey.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: 'International & Domestic Coverage', icon: 'public' },
                { name: 'Trip Cancellation Protection', icon: 'event_busy' },
                { name: 'Emergency Medical Expenses', icon: 'medical_services' },
                { name: 'Lost or Delayed Baggage', icon: 'luggage' },
                { name: 'Flight Delays & Interruptions', icon: 'flight_takeoff' },
                { name: '24/7 Travel Assistance', icon: 'support_agent' },
                { name: 'Emergency Evacuation', icon: 'helicopter' },
                { name: 'Personal Accident Coverage', icon: 'personal_injury' },
                { name: 'Affordable Premiums', icon: 'payments' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white px-6 py-8 rounded-2xl border border-outline-variant/30 flex flex-col items-center justify-center text-center hover:border-secondary/30 hover:shadow-md transition-all group">
                  <span className="material-symbols-outlined text-3xl text-secondary/70 mb-4 group-hover:text-secondary group-hover:-translate-y-1 transition-all">{item.icon}</span>
                  <span className="font-bold text-sm text-primary">{item.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: What's Covered */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-secondary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Coverages</p>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-6">Comprehensive Travel Protection</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Our Travel Secure insurance policies provide complete peace of mind for your trips. Whether you're flying internationally or traveling within the Philippines, you're protected against unexpected events that could disrupt your journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-12 lg:pb-20 pt-8">
            {whatsCovered.map((peril, idx) => {
              const staggerClass = idx % 3 === 1 ? 'lg:translate-y-12' : '';
              return (
                <ScrollReveal key={idx} delay={(idx % 3) * 100} direction="up" className="h-full">
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

      {/* SECTION 5: Travel Services Integration */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2">
                <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Travel Services</p>
                <h2 className="font-display-lg text-4xl md:text-5xl font-bold text-primary mb-8">Complete Travel Solutions</h2>
                <p className="font-body-md text-on-surface-variant text-lg leading-relaxed mb-10">
                  Solace Point combines travel booking services with comprehensive insurance protection. Book your flights, hotels, and tours while securing Travel Secure insurance — all in one place.
                </p>
                <ul className="space-y-4 mb-12">
                  {[
                    'Flight & hotel booking assistance',
                    'Tour packages & travel planning',
                    'Travel Secure insurance bundled with bookings',
                    'Visa assistance & documentation',
                    '24/7 travel support'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5 border border-secondary/20">
                        <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                      </div>
                      <span className="text-on-surface-variant font-medium text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Cards */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <a href="https://www.onenetworxtravel.net" target="_blank" rel="noopener noreferrer" className="group bg-primary text-white p-10 rounded-[2rem] hover:bg-primary/90 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-[60px] pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="font-display-md text-2xl font-bold mb-2">Solace Point Travel</h3>
                      <p className="text-white/70">One-stop solution for all your travel needs</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                  <p className="mt-8 text-sm font-mono text-secondary tracking-widest">www.onenetworxtravel.net</p>
                </a>

                <a href="https://www.visitthephilippines.net" target="_blank" rel="noopener noreferrer" className="group bg-surface-container-lowest border border-outline-variant/40 text-primary p-10 rounded-[2rem] hover:border-secondary/40 hover:shadow-xl transition-all relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="font-display-md text-2xl font-bold mb-2 flex items-center gap-3">Visit the Philippines <span className="material-symbols-outlined text-secondary">public</span></h3>
                      <p className="text-on-surface-variant">Explore the beauty of the islands</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-outline-variant/50 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:border-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                  <p className="mt-8 text-sm font-mono text-tertiary tracking-widest">www.visitthephilippines.net</p>
                </a>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-32 md:py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop" alt="Airplane" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Travel with <br className="hidden md:block"/> Confidence</h2>
            <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Get comprehensive Travel Secure insurance for your next adventure. Whether you're flying abroad or exploring the Philippines, we've got you covered.
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

export default TravelInsurance;
