import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const ArticleCommercialRisk = () => {
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
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" alt="Commercial Skyscrapers" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Commercial Risk</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60 text-xs">5 Min Read</span>
            </div>
            <h1 className="font-display-lg text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Security in Stability: Navigating Commercial Risks
            </h1>
            <p className="font-body-lg text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl">
              Understanding how casualty and engineering insurance can provide an anchor for your growing enterprise.
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
                    Every growing enterprise operates in a landscape of potential disruption. While growth drives your vision, maintaining architectural stability requires a robust system of risk transfer. In this advisory guide, we explore the anchors of commercial protection—Casualty and Engineering insurance—and why they are vital to securing your balance sheet.
                  </p>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">The Foundations of Casualty Insurance</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    Operational liability is one of the most unpredictable exposures a business can face. Casualty insurance acts as the safeguard against third-party bodily injury, property damage, and product liability. When an accident occurs on your premises or a product line suffers a failure, the resulting litigation and compensation claims can drain liquid assets.
                  </p>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    A comprehensive casualty policy ensures that legal defense costs and settlement liabilities are managed professionally, serving as the point where unexpected operational friction is transformed into structural recovery.
                  </p>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">Engineering Insurance: Securing Your Assets</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    For businesses relying on heavy machinery, ongoing construction, or technology infrastructure, structural asset failure is a looming concern. Engineering insurance provides cover for:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-on-surface-variant text-base md:text-lg mb-8">
                    <li><strong>Contractor’s All Risks (CAR):</strong> Protects civil engineering and building construction works from physical damage or third-party liabilities during the project lifecycle.</li>
                    <li><strong>Machinery Breakdown:</strong> Offsets high capital expenditures caused by sudden internal damage to production and technical equipment.</li>
                    <li><strong>Electronic Equipment Insurance:</strong> Safeguards your data centers, processing hardware, and server towers against electrical and mechanical damage.</li>
                  </ul>

                  <blockquote className="border-l-4 border-secondary pl-6 my-10 italic text-primary font-display-md text-xl md:text-2xl leading-relaxed">
                    "True resilience isn't just about weathering a storm; it is about building structures that are anchored so deeply that the storm cannot move them."
                  </blockquote>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">Structuring a Unified Commercial Portfolio</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    Many enterprises make the mistake of buying disparate, uncoordinated policies. At Solace Point, we advocate for architectural risk design—where your fire, casualty, marine, engineering, and surety bonds are aligned into a singular unified defense. This eliminates coverage gaps, simplifies claim processing, and optimizes premium expenditures.
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
                    <span className="material-symbols-outlined text-2xl">shield</span>
                  </div>
                  <h3 className="font-display-md text-2xl font-bold text-primary mb-4">Enterprise Review</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                    Let our elite corporate advisors conduct a comprehensive review of your business risk profiles. Align your assets under Solace Point security today.
                  </p>
                  <button 
                    onClick={() => navigate('/quote')} 
                    className="w-full bg-primary text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Request Corporate Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
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

export default ArticleCommercialRisk;
