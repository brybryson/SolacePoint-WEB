import React, { useState, useEffect } from 'react';
import logo from './assets/SolacePointLogo.png';
import heroBg from './assets/LandingBackgroundPhoto.jpg';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Handle visibility (hide on scroll down, show on scroll up)
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
      setScrollY(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const bgScale = 1 + scrollY * 0.0005;
  const navOpacity = Math.min(scrollY / 300, 1);
  const isAtTop = scrollY < 50;

  return (
    <div className="bg-background font-body-md text-on-surface selection:bg-secondary/30 antialiased overflow-x-hidden">
      {/* TopNavBar */}
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
        <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
          <a className="flex items-center gap-3 group" href="#">
            <img 
              alt="Solace Point Logo" 
              className={`h-14 w-auto object-contain transition-all duration-500 ${
                isAtTop ? 'brightness-0 invert' : ''
              }`} 
              src={logo}
            />
          </a>
          <div className="hidden lg:flex items-center gap-10">
            <a className={`transition-colors duration-500 font-semibold text-[11px] uppercase tracking-[0.2em] ${
              isAtTop ? 'text-white hover:text-secondary' : 'text-on-surface/70 hover:text-primary'
            }`} href="#">Experience</a>
            <a className={`transition-colors duration-500 font-semibold text-[11px] uppercase tracking-[0.2em] ${
              isAtTop ? 'text-white hover:text-secondary' : 'text-on-surface/70 hover:text-primary'
            }`} href="#">Solutions</a>
            <a className={`transition-colors duration-500 font-semibold text-[11px] uppercase tracking-[0.2em] ${
              isAtTop ? 'text-white hover:text-secondary' : 'text-on-surface/70 hover:text-primary'
            }`} href="#">Our Promise</a>
            <a className={`transition-colors duration-500 font-semibold text-[11px] uppercase tracking-[0.2em] ${
              isAtTop ? 'text-white hover:text-secondary' : 'text-on-surface/70 hover:text-primary'
            }`} href="#">Insights</a>
          </div>
          <button className={`px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
            isAtTop 
              ? 'bg-white text-primary hover:bg-secondary hover:text-on-secondary-fixed' 
              : 'bg-primary text-white hover:bg-on-surface'
          }`}>
            Secure Your Peace
          </button>
        </div>
      </nav>

      <section className="relative h-screen min-h-[700px] flex items-center pb-24 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            alt="Luxury background" 
            className="w-full h-full object-cover" 
            style={{ 
              transform: `scale(${bgScale})`,
              transition: 'transform 0.1s ease-out'
            }}
            src={heroBg}
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:pl-0 md:pr-margin-desktop">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-secondary"></div>
              <span className="text-secondary text-[13px] font-bold uppercase tracking-[0.4em]">Architects of Stability</span>
            </div>
            
            <h1 className="font-display-lg text-[clamp(40px,7vw,72px)] mb-8 leading-[1.1] font-bold text-white">
              We Don’t Just <br/>
              Sell Insurance.<br/>
              <span className="text-secondary italic">We Sell Peace of Mind.</span>
            </h1>
            
            <p className="font-body-lg text-lg md:text-xl mb-12 max-w-xl leading-relaxed text-white/90">
              Experience the profound quietude that comes from knowing you're truly protected. We bridge the gap between uncertainty and absolute resolution.
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              <button className="bg-secondary text-on-secondary-fixed px-10 py-4 font-bold text-xs rounded-full uppercase tracking-[0.2em] hover:bg-white transition-all duration-300">
                Secure Your Peace
              </button>
              
              <button className="group flex items-center gap-4 font-bold text-xs uppercase tracking-[0.2em] transition-all text-white hover:text-secondary">
                <span className="pb-1">Our Methodology</span>
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Definition Section */}
      <section className="py-40 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 text-sm">The Solace Standard</p>
                <h2 className="font-display-lg text-5xl md:text-6xl text-on-surface leading-tight font-bold">What Does True Peace <br/>of Mind Feel Like?</h2>
              </div>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-outline-variant/30">
                    <span className="material-symbols-outlined text-4xl" data-icon="visibility">visibility</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-2xl mb-3 text-on-surface font-bold">Absolute Foresight</h4>
                    <p className="text-on-surface-variant leading-relaxed text-lg">Anticipating risks before they emerge, providing a protective layer that operates silently in the background of your life.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-outline-variant/30">
                    <span className="material-symbols-outlined text-4xl" data-icon="handshake">handshake</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-2xl mb-3 text-on-surface font-bold">Unwavering Presence</h4>
                    <p className="text-on-surface-variant leading-relaxed text-lg">A promise that we are the first responders to your recovery. When the world feels unstable, we remain your constant.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-outline-variant/30">
                    <span className="material-symbols-outlined text-4xl" data-icon="done_all">done_all</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-2xl mb-3 text-on-surface font-bold">Resolved Certainty</h4>
                    <p className="text-on-surface-variant leading-relaxed text-lg">The final point where worry ends. A lifestyle defined not by the risks you face, but by the security you possess.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  alt="Minimalist interior with calm lighting" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmyf4Srd22Ejnb5ZrfRRVFxBeWzXddIaDWsD5WbnliXcLYWNara-HEPj1d4rpu13acOfmqqWvvhy0-cOiM1pXanK1q6AVJiW_-_gi88Zx7GwXB6HveoaFafW-78CVYC1DXOntKs4BjqR23ErvHdRv15dtNDHKAj1xQgN-dUQCMAvAenjO66LKxmV9YFihXbANrjx2_bRxZp_GoYRoV8G9NgNgyih14AiXg2NXRKibr6Y7BqnGHiyE9mT8xl5bHIcxLYTQ7xD_Kv4Y"
                />
                <div className="absolute inset-0 bg-primary/5"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-2xl shadow-2xl border border-secondary/20 max-w-sm">
                <span className="material-symbols-outlined text-tertiary text-6xl mb-6" data-icon="verified_user">verified_user</span>
                <p className="font-headline-md text-2xl italic text-on-surface leading-snug">"Security is the freedom to live without hesitation."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers / Social Proof */}
      <section className="py-32 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <p className="text-center font-bold text-xs uppercase tracking-[0.6em] text-tertiary mb-20">Trusted by Discerning Clients Worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="flex justify-center text-on-surface"><span className="font-display-lg text-2xl tracking-tighter uppercase font-bold">STERLING</span></div>
            <div className="flex justify-center text-on-surface"><span className="font-display-lg text-2xl tracking-tighter uppercase font-bold">AZURE</span></div>
            <div className="flex justify-center text-on-surface"><span className="font-display-lg text-2xl tracking-tighter uppercase font-bold">HORIZON</span></div>
            <div className="flex justify-center text-on-surface"><span className="font-display-lg text-2xl tracking-tighter uppercase font-bold">OAK &amp; IRON</span></div>
            <div className="hidden lg:flex justify-center text-on-surface"><span className="font-display-lg text-2xl tracking-tighter uppercase font-bold">MERIDIAN</span></div>
          </div>
          {/* Testimonial */}
          <div className="mt-32 max-w-4xl mx-auto text-center">
            <div className="mb-10 flex justify-center gap-1 text-secondary">
              <span className="material-symbols-outlined fill-1" data-icon="star">star</span>
              <span className="material-symbols-outlined fill-1" data-icon="star">star</span>
              <span className="material-symbols-outlined fill-1" data-icon="star">star</span>
              <span className="material-symbols-outlined fill-1" data-icon="star">star</span>
              <span className="material-symbols-outlined fill-1" data-icon="star">star</span>
            </div>
            <p className="font-headline-md text-3xl md:text-4xl italic text-on-surface leading-relaxed mb-12">
              "Solace Point didn't just give me a policy; they gave me my nights back. Knowing my legacy is architected for stability allows me to focus on creating, not worrying."
            </p>
            <div>
              <p className="font-bold text-tertiary uppercase tracking-[0.3em] text-sm">Julian Vance</p>
              <p className="text-on-surface-variant text-xs mt-2 uppercase tracking-widest">Founding Partner, Vance Global Holdings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Solutions Grid */}
      <section className="py-40 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 text-sm">Curated Solutions</p>
              <h2 className="font-display-lg text-5xl md:text-6xl text-on-surface font-bold">Protection Architected <br/>for Your Legacy</h2>
            </div>
            <a className="group flex items-center gap-4 font-bold text-xs uppercase tracking-[0.3em] text-tertiary pb-3 border-b-2 border-secondary/30 hover:border-tertiary transition-all" href="#">
              View All Solutions
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2" data-icon="arrow_right_alt">arrow_right_alt</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Home & Property */}
            <div className="group bg-surface p-12 border border-outline-variant/40 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="mb-10 text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-6xl" data-icon="home_pin">home_pin</span>
              </div>
              <h3 className="font-headline-md text-2xl text-on-surface mb-6 font-bold">Residential Sanctuary</h3>
              <p className="font-body-md text-on-surface-variant mb-12 leading-relaxed flex-grow">Advanced fire and property protection that safeguards the hearth of your family’s history.</p>
              <button className="text-tertiary font-bold text-xs uppercase tracking-widest flex items-center gap-3 group/btn">
                Explore Solution
                <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover/btn:bg-tertiary group-hover/btn:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
                </span>
              </button>
            </div>
            {/* Mobility */}
            <div className="group bg-surface p-12 border border-outline-variant/40 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="mb-10 text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-6xl" data-icon="explore">explore</span>
              </div>
              <h3 className="font-headline-md text-2xl text-on-surface mb-6 font-bold">Guided Transit</h3>
              <p className="font-body-md text-on-surface-variant mb-12 leading-relaxed flex-grow">Premium mobility coverage for land and sea, ensuring your journey remains uninterrupted.</p>
              <button className="text-tertiary font-bold text-xs uppercase tracking-widest flex items-center gap-3 group/btn">
                Explore Solution
                <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover/btn:bg-tertiary group-hover/btn:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
                </span>
              </button>
            </div>
            {/* Life */}
            <div className="group bg-surface p-12 border border-outline-variant/40 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="mb-10 text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-6xl" data-icon="shield_with_heart">shield_with_heart</span>
              </div>
              <h3 className="font-headline-md text-2xl text-on-surface mb-6 font-bold">Kinred Vitality</h3>
              <p className="font-body-md text-on-surface-variant mb-12 leading-relaxed flex-grow">Bespoke life and wellness architecture for those who mean everything to you.</p>
              <button className="text-tertiary font-bold text-xs uppercase tracking-widest flex items-center gap-3 group/btn">
                Explore Solution
                <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover/btn:bg-tertiary group-hover/btn:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
                </span>
              </button>
            </div>
            {/* Business */}
            <div className="group bg-surface p-12 border border-outline-variant/40 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="mb-10 text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-6xl" data-icon="anchor">anchor</span>
              </div>
              <h3 className="font-headline-md text-2xl text-on-surface mb-6 font-bold">Venture Stability</h3>
              <p className="font-body-md text-on-surface-variant mb-12 leading-relaxed flex-grow">Strategic commercial bonds and casualty insurance designed for the modern innovator.</p>
              <button className="text-tertiary font-bold text-xs uppercase tracking-widest flex items-center gap-3 group/btn">
                Explore Solution
                <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover/btn:bg-tertiary group-hover/btn:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-40 bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 block text-sm">Our Methodology</span>
            <h2 className="font-display-lg text-5xl md:text-6xl text-on-surface mb-8 font-bold">The Architecture of Resolution</h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed text-xl">
              We navigate the transition from distress to total resolution through a systematic, calm, and authoritative process.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mb-24">
            <div className="relative bg-white rounded-[2rem] shadow-xl p-8 md:p-16 overflow-hidden border border-outline-variant/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-50"></div>
              <img 
                alt="Infographic showing transition from distress to Solace Point" 
                className="relative z-10 w-full h-auto" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhaT8k2BVDtGesC32Ep-M8-Za8H3vJTijvwsQe5bsrpNF7BEfxgPDdJGV7tvfnZBQrmp6JOUaAJWNwp1OOP7pNypLDIJcUEgzt3v32ZWcAnXwwZiui7Jl_kpJnIDIxg0LCF3aDrS1ktDlucG5jl_G_9CO_kITUBP6SQCjrEOp5hAsVTXete5P7JGxHUEK0jKEJzrTWTWb1eYZB_rx6r7dDc7Rm4YyUsC0HhIAwvJFQbgHt5p6_ZtW9h7zU"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center px-6 group">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-8 border border-outline-variant/30 group-hover:border-primary transition-colors shadow-sm">
                <span className="text-3xl font-display-lg italic text-primary/60">01</span>
              </div>
              <h4 className="font-headline-md text-2xl mb-4 text-on-surface font-bold">Initial Distress</h4>
              <p className="text-on-surface-variant leading-relaxed">Mapping the chaos of risk into a manageable framework of needs.</p>
            </div>
            <div className="text-center px-6 group">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-8 border border-outline-variant/30 group-hover:border-primary transition-colors shadow-sm">
                <span className="text-3xl font-display-lg italic text-primary/60">02</span>
              </div>
              <h4 className="font-headline-md text-2xl mb-4 text-on-surface font-bold">Strategic Recovery</h4>
              <p className="text-on-surface-variant leading-relaxed">Deploying the bridge of resources that leads back to solid ground.</p>
            </div>
            <div className="text-center px-6 group">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl font-bold" data-icon="auto_awesome">auto_awesome</span>
              </div>
              <h4 className="font-headline-md text-2xl mb-4 text-on-surface font-bold">Solace Point</h4>
              <p className="text-on-surface-variant leading-relaxed">The attainment of absolute security and long-term resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 text-center">
          <h2 className="font-display-lg text-5xl md:text-7xl mb-12 font-bold leading-tight">Ready to Secure Your Peace?</h2>
          <p className="font-body-lg text-xl md:text-2xl text-white/80 mb-20 max-w-2xl mx-auto leading-relaxed">
            Join the collective of individuals and businesses who have chosen to live life at the exact point where worry ends.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <button className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-xl w-full sm:w-auto">
              Get Secured Now
            </button>
            <button className="border-2 border-white/40 text-white hover:bg-white hover:text-primary px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] transition-all backdrop-blur-sm w-full sm:w-auto">
              Speak with an Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface pt-32 pb-16 px-margin-desktop border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5">
              <img 
                alt="Solace Point Logo" 
                className="h-16 w-auto mb-10 object-contain" 
                src={logo}
              />
              <p className="font-body-md text-on-surface-variant mb-12 leading-relaxed max-w-sm text-lg">
                A premium insurance agency dedicated to the architecture of security. We provide the foundation upon which your future is built.
              </p>
              <div className="flex gap-6">
                <a className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm" href="#">
                  <span className="material-symbols-outlined text-2xl" data-icon="public">public</span>
                </a>
                <a className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm" href="#">
                  <span className="material-symbols-outlined text-2xl" data-icon="shield">shield</span>
                </a>
                <a className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm" href="#">
                  <span className="material-symbols-outlined text-2xl" data-icon="verified">verified</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h5 className="font-bold uppercase tracking-[0.4em] text-tertiary text-xs mb-10">Solutions</h5>
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
              © 2024 Solace Point Insurance Agency. All rights reserved. Registered Architectural Insurance Firm.
            </p>
            <div className="flex items-center gap-10 text-[10px] text-on-surface-variant/60 uppercase tracking-[0.3em]">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                Secure Connection
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
