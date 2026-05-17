import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
      setScrollY(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navOpacity = Math.min(scrollY / 300, 1);
  const isAtTop = scrollY < 50;

  return (
    <div className="bg-background font-body-md text-on-surface selection:bg-secondary/30 antialiased overflow-x-hidden">
      <TopNavBar scrollY={scrollY} visible={visible} navOpacity={navOpacity} isAtTop={isAtTop} theme="dark" />
      
      {/* SECTION 1: Dark Header */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 px-6 md:px-margin-desktop">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-secondary"></div>
            <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Where Recovery Begins</span>
            <div className="w-8 h-[1px] bg-secondary"></div>
          </div>
          <h1 className="font-display-lg text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            The Turning Point for <br className="hidden md:block" /> Your Peace of Mind
          </h1>
          <p className="font-body-lg text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed">
            We move away from the aggressive, fear-based marketing of traditional insurance. Instead, we provide a destination for absolute security—the exact point where worry ends and restoration begins.
          </p>
        </div>
      </section>

      {/* SECTION 2: Brand Philosophy (The Lighthouse) */}
      <section className="py-24 md:py-40 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal direction="right" distance="40px">
              <div className="relative">
                <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    alt="A modern architectural lighthouse overlooking a calm sea at twilight"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1200&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-primary/20 backdrop-brightness-90"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-secondary/10 max-w-sm hidden md:block">
                  <p className="font-display-lg text-xl font-bold text-on-surface leading-snug">
                    "A beacon of reliability when the world feels unstable."
                  </p>
                  <div className="w-12 h-[1px] bg-tertiary my-6"></div>
                  <p className="text-tertiary font-bold tracking-[0.5em] uppercase text-[10px]">The Solace Promise</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" distance="40px">
              <div className="space-y-12 lg:pl-12">
                <div>
                  <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 text-sm">The Philosophy</p>
                  <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight font-bold mb-8">More Than a Policy. <br/> The Arrival of Help.</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                    <strong>Solace</strong> is the comfort we provide in distress, acting as your shelter against non-life risks. <strong>Point</strong> is our precision—the exact moment things begin to get better.
                  </p>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    We don't just sell you a contract; we provide the solid ground you can lean on, ensuring you never navigate the dark alone.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-outline/10">
                  <div>
                    <h4 className="font-body-lg text-xl mb-2 text-on-surface font-bold">The Solace</h4>
                    <p className="text-on-surface-variant text-base">Prioritizing the human experience behind every claim with true empathy.</p>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-xl mb-2 text-on-surface font-bold">The Point</h4>
                    <p className="text-on-surface-variant text-base">Offering clear, direct, and reliable guidance as your compass.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Mission, Vision, Core Values (Dark Section) */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          
          <div className="flex flex-col gap-20 md:gap-24 mb-24 relative">
            <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-secondary/50 via-secondary/10 to-transparent hidden md:block"></div>
            
            <ScrollReveal direction="up">
              <div className="md:pl-12 relative">
                <div className="hidden md:block absolute -left-[5px] top-2 w-[11px] h-[11px] bg-secondary rounded-full"></div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Our Vision</span>
                  <div className="w-12 h-[1px] bg-secondary/30"></div>
                </div>
                <h3 className="font-display-lg text-3xl md:text-5xl leading-snug font-bold text-white max-w-4xl">
                  To be the premier beacon of reliability, transforming moments of distress into milestones of recovery through unwavering stability.
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="md:pl-12 relative">
                <div className="hidden md:block absolute -left-[5px] top-2 w-[11px] h-[11px] bg-white/30 rounded-full"></div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="text-white/50 text-[11px] font-bold uppercase tracking-[0.3em]">Our Mission</span>
                  <div className="w-12 h-[1px] bg-white/20"></div>
                </div>
                <h3 className="font-display-lg text-3xl md:text-5xl leading-snug font-bold text-white max-w-4xl">
                  To deliver precise, non-life insurance solutions with the warmth of a partner and the strength of a guardian. We are the exact point where worry ends.
                </h3>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16 border-t border-white/10">
            <ScrollReveal direction="up" delay={100} className="h-full">
              <div className="h-full bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block" data-icon="favorite">favorite</span>
                <h4 className="font-body-lg text-xl font-bold mb-4">Empathy</h4>
                <p className="text-white/80 leading-relaxed text-base">We prioritize the human experience behind every claim, offering profound consolation and comfort during times of loss.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200} className="h-full">
              <div className="h-full bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block" data-icon="explore">explore</span>
                <h4 className="font-body-lg text-xl font-bold mb-4">Precision</h4>
                <p className="text-white/80 leading-relaxed text-base">We offer clear, direct, and reliable guidance, acting as an infallible compass for our clients navigating non-life risks.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300} className="h-full">
              <div className="h-full bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block" data-icon="anchor">anchor</span>
                <h4 className="font-body-lg text-xl font-bold mb-4">Integrity</h4>
                <p className="text-white/80 leading-relaxed text-base">Like an anchor in a storm, we provide the solid ground and absolute professional trust our clients can lean on unconditionally.</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* SECTION 4: Product Philosophy (Grid) */}
      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 text-sm">Strategic Protection</p>
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface font-bold">The Architecture of Your Security</h2>
          </div>

          <div className="flex flex-col gap-16 md:gap-32 relative pt-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-outline-variant/30 via-outline-variant/50 to-transparent hidden md:block -translate-x-1/2"></div>
            
            <ScrollReveal direction="up" delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-16 md:text-right relative">
                  <div className="hidden md:block absolute -right-[24.5px] top-1/2 w-3 h-3 rounded-full bg-secondary -translate-y-1/2 z-10"></div>
                  <h3 className="font-body-lg text-2xl font-bold text-primary mb-3">Home & Property</h3>
                  <p className="font-bold text-xs uppercase tracking-widest text-tertiary mb-6">Fire Insurance & Real Estate</p>
                  <p className="text-on-surface-variant leading-relaxed text-lg">Protecting the heart of your home against the unexpected. We ensure that your most valuable structural assets remain standing through any adversity.</p>
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-surface group relative">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" alt="Modern Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2 md:pl-16 relative">
                  <div className="hidden md:block absolute -left-[24.5px] top-1/2 w-3 h-3 rounded-full bg-secondary -translate-y-1/2 z-10"></div>
                  <h3 className="font-body-lg text-2xl font-bold text-primary mb-3">Mobility & Travel</h3>
                  <p className="font-bold text-xs uppercase tracking-widest text-tertiary mb-6">Motor Car, Marine, TNVS, Travel</p>
                  <p className="text-on-surface-variant leading-relaxed text-lg">Guiding you safely across every journey, by land or sea. We engineer stability for the modern driver and the global traveler.</p>
                </div>
                <div className="md:order-1 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-surface group relative">
                  <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop" alt="Luxury Vehicle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-16 md:text-right relative">
                  <div className="hidden md:block absolute -right-[24.5px] top-1/2 w-3 h-3 rounded-full bg-secondary -translate-y-1/2 z-10"></div>
                  <h3 className="font-body-lg text-2xl font-bold text-primary mb-3">Life & Leisure</h3>
                  <p className="font-bold text-xs uppercase tracking-widest text-tertiary mb-6">Personal Accident & Pet Secure</p>
                  <p className="text-on-surface-variant leading-relaxed text-lg">Profound consolation and care for you and those who depend on you. Warmth and protection when life's unpredictabilities strike.</p>
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-surface group relative">
                  <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop" alt="Peaceful Life" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2 md:pl-16 relative">
                  <div className="hidden md:block absolute -left-[24.5px] top-1/2 w-3 h-3 rounded-full bg-secondary -translate-y-1/2 z-10"></div>
                  <h3 className="font-body-lg text-2xl font-bold text-primary mb-3">Business & Safety</h3>
                  <p className="font-bold text-xs uppercase tracking-widest text-tertiary mb-6">Casualty, Engineering, Bonds</p>
                  <p className="text-on-surface-variant leading-relaxed text-lg">The solid ground and anchor for your professional ventures. Complex risk mitigation built on foundational architectural stability.</p>
                </div>
                <div className="md:order-1 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-surface group relative">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" alt="Commercial Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: The Team & Academy */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" distance="40px">
                <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 text-sm">Our People</p>
                <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight font-bold mb-8">Young, Dynamic & <br/> Continuously Trained</h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Our team is composed of elite, insurance-trained personnel who bring energy, innovation, and unwavering dedication to every client interaction. We don't just process claims; we act as your personal crisis architects.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-12">
                  Solace Point boasts an internal <strong>Insurance Academy</strong>—a continuous rigorous training program that develops and sharpens the skills of our associates, ensuring you always interact with a master of their craft.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-secondary" data-icon="check">check</span>
                    </div>
                    <span className="font-bold text-primary">Continuous Industry Certification</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-secondary" data-icon="check">check</span>
                    </div>
                    <span className="font-bold text-primary">Best Practices Mentorship</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-secondary" data-icon="check">check</span>
                    </div>
                    <span className="font-bold text-primary">Crisis Resolution Development</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" distance="40px" delay={200}>
                <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    alt="A modern, architectural office space reflecting professionalism and training"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
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

      <Footer />
    </div>
  );
};

export default About;
