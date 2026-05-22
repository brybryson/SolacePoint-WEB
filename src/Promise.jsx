import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import logo from './assets/SolacePointLogo.png';

const values = [
  { name: 'Empathy', subtitle: 'The Solace', icon: 'favorite', desc: 'We prioritize the human experience behind every claim, offering consolation and comfort during times of loss.' },
  { name: 'Precision', subtitle: 'The Point', icon: 'explore', desc: 'We offer clear, direct, and reliable guidance, acting as a compass for our clients navigating non-life risks.' },
  { name: 'Integrity', subtitle: 'The Anchor', icon: 'anchor', desc: 'We provide the solid ground and professional trust our clients can lean on, exactly when they need it most.' }
];

const timeline = [
  { step: '01', name: 'The Evaluation', title: 'Understanding Your Needs', desc: 'We consult with you to identify exactly what requires protection—from your home and car to your travels and commercial assets.', icon: 'explore' },
  { step: '02', name: 'The Architecture', title: 'Creating Your Plan', desc: 'We design a simple, custom-engineered non-life insurance plan tailored precisely to your budget and key assets.', icon: 'design_services' },
  { step: '03', name: 'The Assistance', title: 'Responsive Claims Guidance', desc: 'Should an unexpected incident occur, our dedicated advisors offer clear, supportive guidance during office hours to make filing straightforward.', icon: 'support_agent' },
  { step: '04', name: 'The Stability', title: 'Peace of Mind', desc: 'Enjoy the true peace of mind that comes with knowing your investments are backed by a reliable partner and professional trust.', icon: 'verified' }
];

const PromiseComponent = () => {
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
        <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2000&auto=format&fit=crop" alt="Lighthouse at twilight" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <ScrollReveal direction="up" className="relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-4 mb-8">
              <img src={logo} alt="Solace Point Logo" className="h-20 w-auto object-contain brightness-0 invert" />
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-[1px] bg-secondary"></div>
                <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Solace Point Insurance Agency</span>
                <div className="w-8 h-[1px] bg-secondary"></div>
              </div>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              The Exact Point Where Worry Ends <br className="hidden md:block"/> and Recovery Begins
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
              Non-life insurance designed with empathy. From your home to your business, we are the anchor that keeps you steady and the light that guides you back.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate('/products')}
                className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-2xl shadow-secondary/20 w-full sm:w-auto"
              >
                Explore Coverage
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: The Philosophy */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" alt="Calm sunset ocean" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
              </div>

              <div>
                <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Brand Philosophy</p>
                <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-8 leading-tight">Why Solace Point?</h2>
                <div className="space-y-6 text-justify">
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    <strong className="text-primary">Most insurance companies talk about disasters. We talk about resolution.</strong> We understand that an accident isn’t just a financial claim—it’s a moment of distress.
                  </p>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    At Solace Point, we move away from fear-based selling. We lean into the emotional restoration of our clients. When the unexpected happens, we aren't just your agency; we are your <strong className="text-primary font-bold">Arrival of Help</strong>.
                  </p>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    With the stability of an anchor and the guidance of a lighthouse, we ensure you never have to navigate a loss alone. We are committed to delivering precise, non-life insurance solutions with the warmth of a partner and the strength of a guardian.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: The Recovery Timeline */}
      <section className="py-24 md:py-40 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="mb-20 md:mb-32 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-secondary"></div>
                <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">The Process</span>
                <div className="w-8 h-[1px] bg-secondary"></div>
              </div>
              <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface font-bold mb-8 leading-tight">The Solace Experience</h2>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
                A streamlined, stress-free path from accident to restoration. We transform moments of distress into milestones of recovery.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto mt-16 md:mt-24">
            {/* Minimal Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant/30 -translate-x-1/2 group-hover:bg-secondary/30 transition-colors"></div>
            
            <div className="space-y-12 md:space-y-20">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <ScrollReveal key={idx} direction={isEven ? "right" : "left"}>
                    <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'} group`}>
                      
                      {/* Center Node */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border border-outline-variant/30 shadow-sm items-center justify-center z-10 text-primary group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                        <span className="font-display-md text-xl font-bold">{item.step}</span>
                      </div>

                      {/* Spacer Side */}
                      <div className="hidden md:block w-1/2"></div>

                      {/* Content Card Side */}
                      <div className={`w-full md:w-1/2 relative z-10 ${isEven ? 'md:pl-12 lg:pl-20' : 'md:pr-12 lg:pr-20'}`}>
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-secondary/30 transition-all duration-500 relative overflow-hidden">
                          {/* Subtle accent in corner */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-surface rounded-bl-full pointer-events-none group-hover:bg-secondary/5 transition-colors duration-500"></div>

                          {/* Mobile Node */}
                          <div className="md:hidden w-12 h-12 rounded-full bg-surface border border-outline-variant/20 flex items-center justify-center mb-6 text-primary">
                            <span className="font-display-md font-bold">{item.step}</span>
                          </div>

                          <div className="flex items-center gap-3 mb-4 relative z-10">
                            <span className="material-symbols-outlined text-secondary text-2xl">{item.icon}</span>
                            <p className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">{item.name}</p>
                          </div>
                          
                          <h3 className="font-display-md text-2xl md:text-3xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                          <p className="text-on-surface-variant leading-relaxed text-base relative z-10">{item.desc}</p>
                        </div>
                      </div>

                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-32 md:py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2000&auto=format&fit=crop" alt="Calm sea" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <ScrollReveal direction="up">
            <p className="text-secondary font-bold tracking-[0.5em] uppercase mb-4 text-sm">Security in Stability</p>
            <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Ready to find your <br className="hidden md:block"/> Solace Point?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Let us be the turning point for your peace of mind. Experience non-life insurance designed with true empathy.
            </p>
            <button 
              onClick={() => navigate('/quote')}
              className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-2xl shadow-secondary/20 w-full sm:w-auto"
            >
              Secure Your Future Today
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromiseComponent;
