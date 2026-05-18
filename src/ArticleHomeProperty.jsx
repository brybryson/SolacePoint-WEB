import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const ArticleHomeProperty = () => {
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

      {/* Hero / Header Section */}
      <section className="bg-primary pt-36 pb-20 md:pt-40 md:pb-28 px-6 md:px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" alt="Home Exterior" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Home & Property</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60 text-xs">4 Min Read</span>
            </div>
            <h1 className="font-display-lg text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              The True Cost of Underinsurance for Homeowners
            </h1>
            <p className="font-body-lg text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl">
              Why basic fire insurance might leave your sanctuary exposed, and how to ensure your foundation remains TerraFirm.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Article Body */}
            <div className="lg:w-2/3 max-w-3xl">
              <ScrollReveal direction="up">
                <article className="prose prose-lg prose-slate max-w-none">
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-6 font-medium">
                    Your home is more than a physical asset; it is your ultimate sanctuary, the steady anchor of your family's life. Yet, many homeowners discover too late that their properties are insured far below their real rebuild cost. In this guide, we break down why underinsurance is a silent risk and how to truly secure your property.
                  </p>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">What is Underinsurance?</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    Underinsurance occurs when the declared value of your property is lower than the actual amount required to clear the land and completely rebuild the structure from the ground up at contemporary labor and material costs. Many homeowners base their coverage limits on the original purchase price, or the current market value of the property (which includes the land, which does not burn down), rather than its replacement value.
                  </p>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    Under the standard "Co-Insurance Clause" or "Average Clause" in fire insurance policies, if a property is insured for only 70% of its real rebuild value, the insurer is only liable to pay 70% of any claim—even for minor or partial losses.
                  </p>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">The Real Impact of Acts of Nature</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    Standard basic fire insurance policies only cover fire and lightning damage. They explicitly exclude catastrophes unless you secure specialized add-ons:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-on-surface-variant text-base md:text-lg mb-8">
                    <li><strong>Typhoon & Flood Protection:</strong> Essential in tropical regions prone to severe seasonal storms and flash flooding.</li>
                    <li><strong>Earthquake Shock & Volcanic Eruption:</strong> Safeguards your home against structural failures caused by tremors.</li>
                    <li><strong>Extended Coverage:</strong> Covers physical damage resulting from vehicle impacts, falling trees, explosions, and falling aircraft.</li>
                  </ul>

                  <blockquote className="border-l-4 border-secondary pl-6 my-10 italic text-primary font-display-md text-xl md:text-2xl leading-relaxed">
                    "When disaster strikes, the true value of an insurance advisor is measured by how seamlessly they close the gap between distress and recovery."
                  </blockquote>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">The TerraFirm Solution</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    At Solace Point, we construct property portfolios using our custom TerraFirm philosophy. We carry out detailed rebuild cost assessments, accounting for high-quality finishing, modern structural compliance code costs, debris removal, and alternative living arrangements during the rebuild phase. This guarantees that your sanctuary remains protected and that the stability of your home is never compromised.
                  </p>
                </article>

                {/* Back to Advisory Button */}
                <div className="mt-16 pt-8 border-t border-outline-variant/30">
                  <button 
                    onClick={() => navigate('/advisory')} 
                    className="inline-flex items-center gap-3 text-primary hover:text-secondary font-bold text-sm uppercase tracking-widest transition-colors"
                  >
                    <span className="material-symbols-outlined">arrow_back</span> Back to Advisory Hub
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:w-1/3">
              <ScrollReveal direction="up" delay={200}>
                <div className="bg-surface p-8 md:p-10 rounded-[2rem] border border-outline-variant/30 sticky top-32">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <span className="material-symbols-outlined text-2xl">home</span>
                  </div>
                  <h3 className="font-display-md text-2xl font-bold text-primary mb-4">Property Audit</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                    Is your family's sanctuary fully protected at today's rebuild rates? Request a custom home rebuild cost calculation from our specialists.
                  </p>
                  <button 
                    onClick={() => navigate('/quote')} 
                    className="w-full bg-primary text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Get Property Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleHomeProperty;
