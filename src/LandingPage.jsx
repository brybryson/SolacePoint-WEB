import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import logo from './assets/SolacePointLogo.png';
import heroBg from './assets/LandingBackgroundPhoto.jpg';
import ScrollReveal from './ScrollReveal';

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "Solace Point didn't just give me a policy; they gave me my nights back. Knowing my legacy is architected for stability allows me to focus on creating, not worrying.",
      author: "Julian Vance",
      title: "Founding Partner, Vance Global Holdings",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "In the world of high-stakes logistics, certainty is a rare commodity. Solace Point provided the architectural foundation we needed to expand globally with absolute confidence.",
      author: "Elena Rossi",
      title: "CEO, Rossi Maritime Group",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "They don't just manage risk; they anticipate it. Their foresight saved our heritage estate from a complex liability issue before it even manifested.",
      author: "Marcus Thorne",
      title: "Estate Trustee, Thorne & Co.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "The level of quiet authority and personal advisory at Solace Point is unmatched. They are truly the architects of my family's financial peace.",
      author: "Sienna Chen",
      title: "Philanthropist & Tech Investor",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

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
      <TopNavBar scrollY={scrollY} visible={visible} navOpacity={navOpacity} isAtTop={isAtTop} theme="dark" />

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
        <div className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-secondary"></div>
              <span className="text-secondary text-[13px] font-bold uppercase tracking-[0.4em]">Architects of Stability</span>
            </div>

            <h1 className="font-display-lg text-[clamp(44px,8vw,84px)] mb-8 leading-[1.1] font-bold text-white">
              We Don’t Just <br/>
              Sell Insurance.<br/>
              <span className="text-secondary font-black">We Sell Peace <br/> of Mind.</span>
            </h1>

            <p className="font-body-lg text-lg md:text-xl mb-12 max-w-xl leading-relaxed text-white/90">
              Experience the profound quietude that comes from knowing you're truly protected. We bridge the gap between uncertainty and absolute resolution.
            </p>

            <div className="flex flex-wrap items-center gap-10">
              <button onClick={() => navigate('/quote')} className="bg-secondary text-on-secondary-fixed px-12 py-5 font-bold text-sm rounded-full uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-lg">
                Secure Your Peace
              </button>

              <button 
                onClick={() => navigate('/promise')}
                className="group flex items-center gap-5 font-bold text-sm uppercase tracking-[0.2em] transition-all text-white hover:text-secondary"
              >
                <span className="pb-1">Our Promise</span>
                <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Definition Section */}
      <section className="py-40 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="up" distance="40px">
              <div className="space-y-12 lg:-translate-x-12">
                <div>
                  <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 text-sm">The Solace Standard</p>
                  <h2 className="font-display-lg text-5xl md:text-6xl text-on-surface leading-tight font-bold">What Does True Peace of Mind <br className="hidden lg:block"/> Feel Like?</h2>
                </div>
                <div className="space-y-16">
                  <ScrollReveal delay={200} direction="up">
                    <div className="flex gap-10 group">
                      <div className="flex-shrink-0 w-20 flex items-baseline justify-center">
                        <span className="font-display-lg text-6xl italic text-tertiary/60 leading-none">01</span>
                      </div>
                      <div>
                        <h4 className="font-body-lg text-2xl mb-3 text-on-surface font-bold tracking-tight">Absolute Foresight</h4>
                        <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">Anticipating risks before they emerge, providing a protective layer that operates silently in the background of your life.</p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={400} direction="up">
                    <div className="flex gap-10 group">
                      <div className="flex-shrink-0 w-20 flex items-baseline justify-center">
                        <span className="font-display-lg text-6xl italic text-tertiary/60 leading-none">02</span>
                      </div>
                      <div>
                        <h4 className="font-body-lg text-2xl mb-3 text-on-surface font-bold tracking-tight">Unwavering Presence</h4>
                        <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">A promise that we are the first responders to your recovery. When the world feels unstable, we remain your constant.</p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={600} direction="up">
                    <div className="flex gap-10 group">
                      <div className="flex-shrink-0 w-20 flex items-baseline justify-center">
                        <span className="font-display-lg text-6xl italic text-tertiary/60 leading-none">03</span>
                      </div>
                      <div>
                        <h4 className="font-body-lg text-2xl mb-3 text-on-surface font-bold tracking-tight">Resolved Certainty</h4>
                        <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">The final point where worry ends. A lifestyle defined not by the risks you face, but by the security you possess.</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400} direction="left" distance="60px">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    alt="Minimalist interior with calm lighting"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmyf4Srd22Ejnb5ZrfRRVFxBeWzXddIaDWsD5WbnliXcLYWNara-HEPj1d4rpu13acOfmqqWvvhy0-cOiM1pXanK1q6AVJiW_-_gi88Zx7GwXB6HveoaFafW-78CVYC1DXOntKs4BjqR23ErvHdRv15dtNDHKAj1xQgN-dUQCMAvAenjO66LKxmV9YFihXbANrjx2_bRxZp_GoYRoV8G9NgNgyih14AiXg2NXRKibr6Y7BqnGHiyE9mT8xl5bHIcxLYTQ7xD_Kv4Y"
                  />
                  <div className="absolute inset-0 bg-primary/5"></div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-secondary/10 max-w-sm">
                  <p className="font-display-lg text-2xl font-bold text-on-surface leading-snug relative z-10">
                    "Security is the freedom to live without hesitation."
                  </p>
                  <div className="w-12 h-[1px] bg-tertiary my-6"></div>
                  <p className="text-tertiary font-bold tracking-[0.5em] uppercase text-[10px]">The Solace Credo</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Markers / Social Proof */}
      <section className="py-40 bg-surface-container-lowest relative overflow-hidden">
        {/* Architectural Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="font-bold text-xs uppercase tracking-[0.6em] text-tertiary mb-6">Credentialed Trust</p>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface font-bold">Trusted by Discerning Clients</h2>
            </div>
          </ScrollReveal>

          {/* 3-Card Circular Carousel */}
          <ScrollReveal delay={300} direction="up" distance="50px">
            <div className="relative h-[600px] md:h-[580px] max-w-5xl mx-auto">
            <div className="relative w-full h-full flex items-center justify-center">
              {testimonials.map((t, index) => {
                // Circular Logic: Calculate relative position (-1, 0, 1, 2)
                let diff = index - currentTestimonial;
                const len = testimonials.length;

                // Seamless wrap-around logic
                while (diff > len / 2) diff -= len;
                while (diff < -len / 2) diff += len;

                const isActive = diff === 0;
                const isLeft = diff === -1;
                const isRight = diff === 1;
                const isBack = Math.abs(diff) >= 2;

                return (
                  <div
                    key={index}
                    className={`absolute w-full max-w-[320px] md:max-w-[500px] transition-all duration-700 ease-in-out rounded-[2.5rem] shadow-2xl border border-outline-variant/30 bg-white overflow-hidden flex flex-col ${
                      isBack ? 'opacity-0 scale-75 pointer-events-none z-0' : 'opacity-100'
                    } ${
                      isActive ? 'z-30 scale-100 translate-x-0' :
                      isLeft ? 'z-10 scale-90 -translate-x-[65%] md:-translate-x-[80%] opacity-40 blur-[2px]' :
                      isRight ? 'z-10 scale-90 translate-x-[65%] md:translate-x-[80%] opacity-40 blur-[2px]' :
                      'z-0 scale-75 translate-x-0 opacity-0'
                    }`}
                  >
                    {/* Portrait Section */}
                    <div className="relative h-[160px] md:h-[220px] flex-shrink-0">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/10"></div>
                      <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 border border-secondary/20 shadow-sm">
                        <span className="material-symbols-outlined text-secondary text-xs fill-1" data-icon="verified">verified</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Verified</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-7 md:p-10 flex flex-col min-h-[250px]">
                      <div className="mb-5 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`material-symbols-outlined text-base ${i < t.rating ? 'text-secondary' : 'text-on-surface/10'}`}
                            style={{ fontVariationSettings: i < t.rating ? "'FILL' 1" : "'FILL' 0" }}
                          >
                            star
                          </span>
                        ))}
                      </div>

                      <div className="flex-grow">
                        <p className="font-display-lg text-base md:text-xl italic text-on-surface leading-relaxed mb-6">
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="pt-5 border-t border-outline-variant/10">
                        <p className="font-bold text-primary uppercase tracking-[0.2em] text-xs">{t.author}</p>
                        <p className="text-on-surface-variant text-[9px] mt-1 uppercase tracking-widest font-medium leading-relaxed">{t.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between md:-mx-16 pointer-events-none z-40">
              <button
                onClick={() => {
                  setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  setIsAutoPlaying(false);
                }}
                className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all pointer-events-auto group"
              >
                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform text-xl" data-icon="arrow_back">arrow_back</span>
              </button>
              <button
                onClick={() => {
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                  setIsAutoPlaying(false);
                }}
                className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all pointer-events-auto group"
              >
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-xl" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

          {/* Navigation Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentTestimonial ? 'bg-secondary w-16' : 'bg-on-surface/10 hover:bg-on-surface/30 w-4'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sophisticated Architectural Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-px">
          <svg className="relative block w-[calc(100%+1.3px)] h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.32,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,34.19V0Z" className="fill-surface-container-low opacity-40"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.94,10.74,105.77,21,35.74,10.5,71.14,20,108.37,15.11,32.33-4.25,62.39-16.15,93.07-28,34.13-13.14,71.1-25.16,108.68-21.89,35.34,3.08,68,17.47,101.44,28.32,38.55,12.52,78.29,22.13,118.78,19.34,31.6-2.18,62.33-11,92.51-21.19V0Z" className="fill-surface-container-low"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Product Solutions Grid */}
      <section className="py-40 bg-surface-container-low relative overflow-hidden">
        {/* Classy Architectural Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Drafting Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }}></div>

          {/* Elegant Architectural Lines (Gold) */}
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-tertiary/20 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tertiary/20 to-transparent"></div>

          {/* Soft Luxury Glows */}
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-tertiary/5 rounded-full blur-[120px]"></div>

          {/* Faint Drafting Mark */}
          <div className="absolute top-20 left-20 w-32 h-32 border-l border-t border-tertiary/30 opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-r border-b border-tertiary/30 opacity-50"></div>
        </div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 text-sm">Curated Solutions</p>
                <h2 className="font-display-lg text-5xl md:text-6xl text-on-surface font-bold">Protection Architected <br/>for Your Legacy</h2>
              </div>
              <button onClick={() => navigate('/products')} className="group flex items-center gap-4 font-bold text-xs uppercase tracking-[0.3em] text-tertiary pb-3 border-b-2 border-secondary/30 hover:border-tertiary transition-all cursor-pointer">
                View All Products
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2" data-icon="arrow_right_alt">arrow_right_alt</span>
              </button>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'Residential Sanctuary', icon: 'home_pin', desc: 'Advanced fire and property protection that safeguards the hearth of your family’s history.' },
              { id: '02', title: 'Guided Transit', icon: 'explore', desc: 'Premium mobility coverage for land and sea, ensuring your journey remains uninterrupted.' },
              { id: '03', title: 'Kindred Vitality', icon: 'shield_with_heart', desc: 'Bespoke life and wellness architecture for those who mean everything to you.' },
              { id: '04', title: 'Venture Stability', icon: 'anchor', desc: 'Strategic commercial bonds and casualty insurance designed for the modern innovator.' }
            ].map((solution, idx) => (
              <ScrollReveal key={solution.id} delay={idx * 100} direction="up">
                <div className="group relative bg-surface p-12 border border-outline-variant/30 rounded-3xl hover:bg-white hover:shadow-[0_20px_50px_-15px_rgba(30,63,98,0.12)] transition-all duration-500 flex flex-col h-full overflow-hidden">
                  <div className="mb-10 text-primary group-hover:scale-110 transition-transform duration-500 group-hover:text-tertiary">
                    <span className="material-symbols-outlined text-6xl" data-icon={solution.icon}>{solution.icon}</span>
                  </div>

                  <h3 className="font-body-lg text-2xl mb-5 text-on-surface font-bold tracking-tight">
                    {solution.title}
                  </h3>

                  <p className="font-body-md text-on-surface-variant mb-12 leading-relaxed flex-grow">
                    {solution.desc}
                  </p>

                  <div className="mt-auto">
                    <button className="group/btn flex items-center gap-3 text-tertiary font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
                      Explore Solution
                      <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover/btn:translate-x-2" data-icon="arrow_right_alt">arrow_right_alt</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-40 bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal direction="up">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <span className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 block text-sm">Our Methodology</span>
              <h2 className="font-display-lg text-5xl md:text-6xl text-on-surface mb-8 font-bold">The Architecture of Resolution</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed text-xl">
                We navigate the transition from distress to total resolution through a systematic, calm, and authoritative process.
              </p>
            </div>
          </ScrollReveal>
          {/* Revised Methodology: Minimalist Narrative Process Flow */}
          <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
              {/* Step 01: Initial Distress */}
              <ScrollReveal delay={100} direction="up">
                <div className="text-left group border-t border-outline-variant/30 pt-8 hover:border-tertiary transition-colors duration-500">
                  <span className="font-display-lg text-6xl text-tertiary/60 font-light italic mb-6 block group-hover:text-tertiary transition-colors duration-500">01</span>
                  <h4 className="font-body-lg text-2xl mb-4 text-on-surface font-bold tracking-tight">Initial Distress</h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm md:text-base pr-4">
                    Mapping the chaos of risk into a manageable, architected framework of needs.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 02: Strategic Recovery */}
              <ScrollReveal delay={300} direction="up">
                <div className="text-left group border-t border-outline-variant/30 pt-8 hover:border-tertiary transition-colors duration-500">
                  <span className="font-display-lg text-6xl text-tertiary/60 font-light italic mb-6 block group-hover:text-tertiary transition-colors duration-500">02</span>
                  <h4 className="font-body-lg text-2xl mb-4 text-on-surface font-bold tracking-tight">Strategic Recovery</h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm md:text-base pr-4">
                    Deploying the bridge of resources that leads back to stable, solid ground.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 03: Solace Point */}
              <ScrollReveal delay={500} direction="up">
                <div className="text-left group border-t border-outline-variant/30 pt-8 hover:border-tertiary transition-colors duration-500">
                  <span className="font-display-lg text-6xl text-tertiary/60 font-light italic mb-6 block group-hover:text-tertiary transition-colors duration-500">03</span>
                  <h4 className="font-body-lg text-2xl mb-4 text-on-surface font-bold tracking-tight">Solace Point</h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm md:text-base pr-4">
                    The final attainment of absolute security and long-term resolution.
                  </p>
                </div>
              </ScrollReveal>
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
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10 text-center">
          <ScrollReveal direction="up" distance="50px">
            <h2 className="font-display-lg text-5xl md:text-7xl mb-12 font-bold leading-tight">Ready to Secure Your Peace?</h2>
            <p className="font-body-lg text-xl md:text-2xl text-white/80 mb-20 max-w-2xl mx-auto leading-relaxed">
              Join the collective of individuals and businesses who have chosen to live life at the exact point where worry ends.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400} direction="up">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <button onClick={() => navigate('/quote')} className="bg-secondary text-on-secondary-fixed px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] hover:bg-secondary-container transition-all shadow-xl w-full sm:w-auto">
                Get a Quote
              </button>
              <button onClick={() => navigate('/contact')} className="border-2 border-white/40 text-white hover:bg-white hover:text-primary px-16 py-7 font-bold text-sm rounded-full uppercase tracking-[0.3em] transition-all backdrop-blur-sm w-full sm:w-auto">
                Speak with an Advisor
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
