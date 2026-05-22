import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import logo from './assets/SolacePointLogo.png';

const articles = [
  {
    category: 'Commercial Risk',
    title: 'Security in Stability: Navigating Commercial Risks',
    desc: 'Understanding how casualty and engineering insurance can provide an anchor for your growing enterprise.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    readTime: '5 min read',
    link: '/advisory/commercial-risk'
  },
  {
    category: 'Home & Property',
    title: 'The True Cost of Underinsurance for Homeowners',
    desc: 'Why basic fire insurance might leave your sanctuary exposed, and how to ensure your foundation remains TerraFirm.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    readTime: '4 min read',
    link: '/advisory/home-property'
  },
  {
    category: 'Mobility',
    title: "A Driver's Guide to TNVS Liability & Compliance",
    desc: 'Navigating LTFRB requirements and protecting your livelihood while on the road with specialized coverage.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
    readTime: '6 min read',
    link: '/advisory/mobility'
  }
];

const Advisory = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

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
      <section className="bg-primary pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-margin-desktop overflow-hidden relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" alt="Consulting and advisory" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <ScrollReveal direction="up" className="relative z-10 w-full">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-4 mb-8">
              <img src={logo} alt="Solace Point Logo" className="h-20 w-auto object-contain brightness-0 invert" />
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-[1px] bg-secondary"></div>
                <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Solace Point Insurance Agency</span>
                <div className="w-8 h-[1px] bg-secondary"></div>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Expert Guidance</span>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Advisory & Insights
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
              Empowering you with knowledge and support before, during, and after an incident. We provide the compass to navigate your non-life risks.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: The Guardian Blog */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
              <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">The Guardian</p>
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-6">Educational Resources</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Insights and guides explaining why Security in Stability matters for your home, business, and livelihood.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full">
                <div 
                  onClick={() => navigate(article.link)}
                  className="bg-white rounded-[2rem] border border-outline-variant/30 flex flex-col h-full hover:shadow-xl hover:-translate-y-2 hover:border-secondary/30 transition-all duration-500 overflow-hidden group cursor-pointer"
                >
                  
                  <div className="h-56 w-full overflow-hidden relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                      <span className="text-primary font-bold text-xs uppercase tracking-widest">{article.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow relative">
                    <h3 className="font-display-md text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-snug">{article.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm mb-8 flex-grow">{article.desc}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/30">
                      <span className="text-on-surface-variant/70 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px]">schedule</span> {article.readTime}
                      </span>
                      <span className="material-symbols-outlined text-primary group-hover:text-secondary group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                  </div>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Convenient Digital Claims Submission */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <ScrollReveal direction="left">
              <div>
                <p className="text-secondary font-bold tracking-[0.5em] uppercase mb-4 text-sm">
                  Digital Convenience
                </p>
                <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-8 leading-tight">The Lighthouse: Digital Claims Portal</h2>
                <div className="space-y-6">
                  <p className="text-white/80 text-lg leading-relaxed">
                    Our advisory doesn't stop at the sale. Acting as your lighthouse, we provide reliable guidance when an accident happens.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Filing a claim shouldn't be a daunting task. Through our digital submission portal, it is the exact point where your stress ends and the guided recovery process begins.
                  </p>
                </div>
                
                <ul className="mt-10 space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 border border-secondary/30">
                      <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                    </div>
                    <span className="font-medium text-white/90">Convenient incident reporting online</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 border border-secondary/30">
                      <span className="material-symbols-outlined text-secondary text-[16px]">map</span>
                    </div>
                    <span className="font-medium text-white/90">Guided claim progress tracking</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 border border-secondary/30">
                      <span className="material-symbols-outlined text-secondary text-[16px]">forum</span>
                    </div>
                    <span className="font-medium text-white/90">Direct communication with claim specialists</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
 
            <ScrollReveal direction="right" className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/10">
                <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=1200&auto=format&fit=crop" alt="Lighthouse guiding the way" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant/20 animate-float">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <div>
                  <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">Response Time</p>
                  <p className="text-primary font-display-md font-bold text-lg leading-none">Within 1 Business Hour</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 4: Contact/Consultation Form */}
      <section className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Consultation</p>
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-6">Speak to a Solace Point Advisor</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Whether you need a quick quote or a comprehensive risk analysis for your enterprise, our experts are here to guide you.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] border border-outline-variant/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[4rem] pointer-events-none"></div>
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Full Name*</label>
                    <input required onInput={(e) => { e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ''); }} pattern="[A-Za-z\s]+" title="Only letters and spaces are allowed" type="text" className="w-full bg-surface border border-outline-variant/40 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Email Address*</label>
                    <input required pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.com$" title="Must be a valid .com email address" type="email" className="w-full bg-surface border border-outline-variant/40 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Area of Interest*</label>
                  <select required className="w-full bg-surface border border-outline-variant/40 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected hidden>Select a coverage area...</option>
                    <option value="home">Home & Property (Fire)</option>
                    <option value="mobility">Mobility & Transit (Motor, TNVS, Travel)</option>
                    <option value="enterprise">Enterprise & Growth (Casualty, Engineering, Bonds)</option>
                    <option value="living">Living Protection (Pet Secure, Personal Accident)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">How can we help?*</label>
                  <textarea required rows="4" className="w-full bg-surface border border-outline-variant/40 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-bold text-sm uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-4 flex items-center justify-center gap-3">
                  Request Consultation <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/60 transition-all duration-500">
          <div className="bg-primary max-w-lg w-full p-8 sm:p-12 md:p-16 flex flex-col relative shadow-2xl animate-[ken-burns_0.4s_ease-out_forwards]">
            {/* Subtle Architectural Grid Lines */}
            <div className="absolute top-0 left-8 sm:left-12 w-[1px] h-full bg-white/5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-secondary"></div>
                <span className="text-secondary text-[9px] font-bold uppercase tracking-[0.4em]">Request Received</span>
              </div>
              
              <h3 className="font-display-lg text-4xl md:text-5xl text-white font-bold leading-[1.1] mb-6">
                Consultation <br/> Requested.
              </h3>
              
              <p className="font-body-md text-white/70 leading-relaxed text-sm md:text-base max-w-sm mb-16">
                Your request has been securely received. A Solace Point advisor will contact you shortly to provide the expert guidance you need.
              </p>
              
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  navigate('/Home');
                }} 
                className="group inline-flex items-center gap-5 font-bold text-xs uppercase tracking-[0.3em] transition-all text-white hover:text-secondary self-start"
              >
                <span className="pb-1 border-b border-white/20 group-hover:border-secondary transition-colors">Done</span>
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advisory;
