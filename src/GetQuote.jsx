import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const GetQuote = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [insuranceType, setInsuranceType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [amountDisplay, setAmountDisplay] = useState('');

  // FIX: Scroll to top only on initial mount
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const cellphone = e.target.cellphone.value;
    const type = e.target.type.value;
    const otherType = e.target.otherType ? e.target.otherType.value : '';
    const property = e.target.property.value;
    const otherProperty = e.target.otherProperty ? e.target.otherProperty.value : '';
    const amount = e.target.amount.value.replace(/,/g, '');
    const details = e.target.details.value;

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5005';
      const response = await fetch(`${apiUrl}/api/quote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: cellphone,
          insuranceType: type,
          otherInsuranceType: otherType,
          propertyType: property,
          otherPropertyType: otherProperty,
          estimatedAmount: amount,
          details
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsModalOpen(true);
      } else {
        alert(data.error || 'Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Network error. Make sure the backend API is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const navOpacity = Math.min(scrollY / 300, 1);
  const isAtTop = scrollY < 50;

  return (
    <div className="bg-background font-body-md text-on-surface selection:bg-secondary/30 antialiased overflow-x-hidden">
      <TopNavBar scrollY={scrollY} visible={visible} navOpacity={navOpacity} isAtTop={isAtTop} theme="dark" />
      
      {/* SECTION 1: Dark Header for Contrast */}
      <section className="bg-primary pt-28 pb-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto mt-0 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-secondary"></div>
            <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Free Quote In Minutes</span>
            <div className="w-8 h-[1px] bg-secondary"></div>
          </div>
          <h1 className="font-display-lg text-3xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Insurance <br className="hidden md:block" /> Quote Today
          </h1>
          <p className="font-body-lg text-white/80 max-w-xl text-lg">
            Compare rates from multiple top providers and find the perfect coverage for your needs — all in one place.
          </p>
        </div>
      </section>

      {/* SECTION 2: Asymmetric Layout */}
      <section className="py-24 md:py-40 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            
            {/* Left Column: The Features (Styled like Solace Standard) */}
            <ScrollReveal direction="up" distance="40px">
              <div className="space-y-12 lg:-translate-x-12 md:sticky md:top-32 px-6 lg:px-0">
                <div>
                  <p className="text-tertiary font-bold tracking-[0.5em] uppercase mb-6 text-sm">The Value</p>
                  <h2 className="font-display-lg text-5xl text-on-surface leading-tight font-bold mb-16">Why Request A <br/> Portfolio Review?</h2>
                </div>
                
                <div className="space-y-12 md:space-y-16">
                  <div className="flex gap-6 md:gap-10 group">
                    <div className="flex-shrink-0 w-16 md:w-20 flex items-baseline justify-center">
                      <span className="font-display-lg text-5xl md:text-6xl italic text-tertiary/60 leading-none">01</span>
                    </div>
                    <div>
                      <h4 className="font-body-lg text-xl md:text-2xl mb-2 md:mb-3 text-on-surface font-bold tracking-tight">Trusted Provider Network</h4>
                      <p className="text-on-surface-variant leading-relaxed text-base md:text-lg max-w-sm">Access a broad, carefully vetted network of reputable insurance partners.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 md:gap-10 group">
                    <div className="flex-shrink-0 w-16 md:w-20 flex items-baseline justify-center">
                      <span className="font-display-lg text-5xl md:text-6xl italic text-tertiary/60 leading-none">02</span>
                    </div>
                    <div>
                      <h4 className="font-body-lg text-xl md:text-2xl mb-2 md:mb-3 text-on-surface font-bold tracking-tight">Optimized Premium Structures</h4>
                      <p className="text-on-surface-variant leading-relaxed text-base md:text-lg max-w-sm">Highly competitive rates designed to fit your specific budget and protection needs.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 group">
                    <div className="flex-shrink-0 w-16 md:w-20 flex items-baseline justify-center">
                      <span className="font-display-lg text-5xl md:text-6xl italic text-tertiary/60 leading-none">03</span>
                    </div>
                    <div>
                      <h4 className="font-body-lg text-xl md:text-2xl mb-2 md:mb-3 text-on-surface font-bold tracking-tight">Efficient Processing</h4>
                      <p className="text-on-surface-variant leading-relaxed text-base md:text-lg max-w-sm">Prompt and reliable turnaround times to get you covered without unnecessary delays.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: The Original Boxed Form with Floating Labels */}
            <ScrollReveal delay={200} direction="up" distance="40px">
              <div className="bg-white rounded-xl shadow-[0_16px_40px_-12px_rgba(4,21,37,0.08)] border border-outline-variant/20 p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="font-body-lg text-2xl md:text-3xl text-primary font-bold tracking-tight mb-2">Request Your Quote</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Fill out the form and we will get back to you shortly.</p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Form Fields using original floating-label-group CSS logic */}
                  <div className="floating-label-group">
                    <input className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" id="name" placeholder=" " required type="text" pattern="[A-Za-z\s]+" title="Only letters and spaces are allowed"/>
                    <label className="font-label-md text-label-md" htmlFor="name">Name*</label>
                  </div>
                  <div className="floating-label-group">
                    <input className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" id="email" placeholder=" " required type="email" pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.com$" title="Must be a valid .com email address"/>
                    <label className="font-label-md text-label-md" htmlFor="email">Email*</label>
                  </div>
                  <div className="floating-label-group">
                    <input 
                      className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" 
                      id="cellphone" 
                      placeholder=" " 
                      required 
                      type="text" 
                      minLength="11" 
                      maxLength="11" 
                      pattern="[0-9]{11}" 
                      title="Must be exactly 11 digits" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                      onFocus={() => { if (!phone) setPhone('09'); }}
                      onBlur={() => { if (phone === '09') setPhone(''); }}
                    />
                    <label className="font-label-md text-label-md" htmlFor="cellphone">Phone Number*</label>
                  </div>
                  <div className="floating-label-group">
                    <select className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" id="type" required value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)}>
                      <option disabled hidden value=""></option>
                      <option value="motor">Motor Car</option>
                      <option value="fire">Fire</option>
                      <option value="marine">Marine</option>
                      <option value="pa">Personal Accident</option>
                      <option value="travel">Travel Secure</option>
                      <option value="pet">Pet Secure</option>
                      <option value="tnvs">TNVS Secure</option>
                      <option value="casualty">Casualty</option>
                      <option value="eng">Engineering</option>
                      <option value="bonds">Bonds</option>
                      <option value="other">Other</option>
                    </select>
                    <label className="font-label-md text-label-md" htmlFor="type">Insurance Type*</label>
                  </div>
                  {insuranceType === 'other' && (
                    <div className="floating-label-group">
                      <input className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" id="otherType" placeholder=" " required type="text"/>
                      <label className="font-label-md text-label-md" htmlFor="otherType">Please Specify Type*</label>
                    </div>
                  )}
                  
                  {/* Property Dropdown */}
                  <div className="floating-label-group">
                    <select className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" id="property" required value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                      <option disabled hidden value=""></option>
                      <option value="residential">Residential Home</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="vehicle">Vehicle</option>
                      <option value="belongings">Personal Belongings</option>
                      <option value="equipment">Business Equipment</option>
                      <option value="other">Other</option>
                    </select>
                    <label className="font-label-md text-label-md" htmlFor="property">Property to be Insured*</label>
                  </div>
                  {propertyType === 'other' && (
                    <div className="floating-label-group">
                      <input className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" id="otherProperty" placeholder=" " required type="text"/>
                      <label className="font-label-md text-label-md" htmlFor="otherProperty">Please Specify Property*</label>
                    </div>
                  )}

                  <div className="floating-label-group">
                    <input
                      className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent"
                      id="amount"
                      placeholder=" "
                      required
                      type="text"
                      inputMode="numeric"
                      value={amountDisplay}
                      onChange={(e) => {
                        const raw = e.target.value.replace(/[^0-9]/g, '').slice(0, 7);
                        const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        setAmountDisplay(formatted);
                      }}
                    />
                    <label className="font-label-md text-label-md" htmlFor="amount">Estimated Amount (₱)*</label>
                  </div>
                  <div className="floating-label-group">
                    <textarea className="w-full min-h-[120px] border border-outline p-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent resize-none" id="details" placeholder=" "></textarea>
                    <label className="font-label-md text-label-md" htmlFor="details">Additional Details</label>
                  </div>
                   <button className={`w-full bg-secondary text-on-secondary h-16 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-lg shadow-secondary/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Requesting...' : 'Get My Free Quote'}
                    {!isSubmitting && <span className="material-symbols-outlined">arrow_forward</span>}
                  </button>
                  <p className="font-caption text-caption text-center text-on-surface-variant mt-4">
                    By submitting this form, you agree to our <a className="underline text-primary" href="#">Privacy Policy</a> and <a className="underline text-primary" href="#">Terms of Service</a>.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Trust Anchors & Metrics (Dark Museum style) */}
      <section className="py-24 bg-primary text-white border-t border-white/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="px-6 md:px-0">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-secondary"></div>
                <span className="text-secondary text-[13px] font-bold uppercase tracking-[0.4em]">Direct Advisory</span>
              </div>
              <h3 className="font-display-lg text-4xl mb-10 leading-tight">Speak directly with <br/> an architectural advisor</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <span className="material-symbols-outlined text-[24px] text-tertiary" data-icon="call">call</span>
                  <div>
                    <span className="font-body-md text-xl tracking-wider group-hover:text-tertiary transition-colors block">(044) 761 8023</span>
                    <span className="text-white/60 text-xs font-semibold uppercase tracking-wider block mt-1">Mon-Fri, 9AM-6PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <span className="material-symbols-outlined text-[24px] text-tertiary" data-icon="mail">mail</span>
                  <span className="font-body-md text-xl tracking-wider group-hover:text-tertiary transition-colors">solacepoint.insuranceagency@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Metrics lined up in one row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 px-6 md:px-0">
              <div>
                <div className="font-display-lg text-3xl sm:text-4xl md:text-6xl text-white mb-2 md:mb-4">10+</div>
                <div className="text-secondary font-bold text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest md:tracking-[0.2em] leading-tight">Insurance Partners</div>
              </div>
              <div>
                <div className="font-display-lg text-3xl sm:text-4xl md:text-6xl text-white mb-2 md:mb-4">5k+</div>
                <div className="text-secondary font-bold text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest md:tracking-[0.2em] leading-tight">Happy Clients</div>
              </div>
              <div>
                <div className="font-display-lg text-3xl sm:text-4xl md:text-6xl text-white mb-2 md:mb-4">100%</div>
                <div className="text-secondary font-bold text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest md:tracking-[0.2em] leading-tight">Licensed Agents</div>
              </div>
            </div>
          </div>
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
                Quote <br/> Requested.
              </h3>
              
              <p className="font-body-md text-white/70 leading-relaxed text-sm md:text-base max-w-sm mb-16">
                Your request has been securely received. An elite advisor is now reviewing your requirements and will contact you shortly to construct your custom insurance portfolio.
              </p>
              
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  navigate('/Home');
                }} 
                className="group inline-flex items-center gap-5 font-bold text-xs uppercase tracking-[0.3em] transition-all text-white hover:text-secondary self-start"
              >
                <span className="pb-1 border-b border-white/20 group-hover:border-secondary transition-colors">Return to Homepage</span>
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetQuote;
