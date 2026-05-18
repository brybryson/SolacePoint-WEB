import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const ArticleMobility = () => {
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
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop" alt="Steering Wheel Drive" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Mobility</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60 text-xs">6 Min Read</span>
            </div>
            <h1 className="font-display-lg text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              A Driver's Guide to TNVS Liability & Compliance
            </h1>
            <p className="font-body-lg text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl">
              Navigating LTFRB requirements and protecting your livelihood while on the road with specialized coverage.
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
                    Operating a vehicle for Transportation Network Vehicle Services (TNVS) is an excellent way to secure financial independence. However, transporting passengers commercially exposes you and your vehicle to severe liability risks. Standard private car policies absolutely exclude commercial passenger conveyance. In this guide, we clarify public transit compliance and how to drive with absolute peace of mind.
                  </p>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">Why Private Insurance Isn't Enough</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    A common mistake made by TNVS operators is relying on a standard private motor car policy. These policies contain strict commercial exclusion clauses. If an accident occurs while you are carrying a paying passenger, or even if the ride-sharing application is active while you are cruising for bookings, your private insurer will legally deny any physical damage or third-party liability claims.
                  </p>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    This leaves the vehicle owner personally liable for vehicle replacement, third-party property damage, and the passenger's medical expenses—a risk that could instantly devastate a driver's livelihood.
                  </p>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">Understanding LTFRB Liability Requirements</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    The Land Transportation Franchising and Regulatory Board (LTFRB) strictly mandates public passenger liability coverage for commercial operators:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-on-surface-variant text-base md:text-lg mb-8">
                    <li><strong>Passenger Personal Accident Insurance (PPAI):</strong> Provides mandatory direct medical coverage and death benefits for all passengers inside the registered vehicle, regardless of who is at fault for the accident.</li>
                    <li><strong>Excess Third-Party Liability (VTPL):</strong> Safeguards the owner against civil damages brought by injured pedestrians or owners of other vehicles damaged during transit.</li>
                    <li><strong>Own Damage & Theft for TNVS:</strong> Specialized commercial vehicle physical coverages that recognize the heavy wear, high mileage, and theft exposures of passenger vehicles.</li>
                  </ul>

                  <blockquote className="border-l-4 border-secondary pl-6 my-10 italic text-primary font-display-md text-xl md:text-2xl leading-relaxed">
                    "Compliance isn't merely about checking a regulatory box; it is the ultimate shield that turns a vehicle of livelihood into a vehicle of security."
                  </blockquote>

                  <h2 className="font-display-md text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">The Solace Point TNVS Advantage</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
                    At Solace Point, we specialize in bridging compliance gaps for grab, ride-share, and TNVS fleets. Our tailored TNVS Secure package incorporates LTFRB-certified Passenger Personal Accident Insurance and full commercial Own Damage coverage. Furthermore, in the event of an incident, we provide rapid claims processing, minimizing your downtime so you can get back on the road safely and quickly.
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
                    <span className="material-symbols-outlined text-2xl">drive_eta</span>
                  </div>
                  <h3 className="font-display-md text-2xl font-bold text-primary mb-4">TNVS Protection</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                    Secure your passenger business with LTFRB-compliant public passenger accident and commercial vehicle security.
                  </p>
                  <button 
                    onClick={() => navigate('/quote')} 
                    className="w-full bg-primary text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Get TNVS Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
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

export default ArticleMobility;
