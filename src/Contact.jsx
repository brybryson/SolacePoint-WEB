import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const navigate = useNavigate();
  const [navOpacity, setNavOpacity] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 300;
      const newOpacity = Math.min(scrollPosition / heroHeight, 1);
      setNavOpacity(newOpacity);
      setIsAtTop(scrollPosition < 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5005';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsSubmitting(false);
        setShowSuccess(true);
      } else {
        alert(data.error || 'Failed to send message. Please try again later.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Network error. Please make sure the backend API is running.');
      setIsSubmitting(false);
    }
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="font-sans antialiased text-on-surface bg-surface-container-lowest min-h-screen">
      <TopNavBar visible={true} isAtTop={isAtTop} navOpacity={navOpacity} theme="dark" />

      {/* SECTION 1: Hero */}
      <section className="bg-primary pt-32 pb-12 md:pt-36 md:pb-16 px-6 md:px-margin-desktop">
        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-secondary"></div>
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Advisory Services</span>
              <div className="w-8 h-[1px] bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              Speak With <br className="hidden md:block" /> An Advisor
            </h1>
            <p className="font-body-lg text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed">
              The exact point where your questions meet absolute clarity. Our team is ready to help you find the perfect insurance solution.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: Contact Grid (Info & Form) */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal direction="up" delay={100}>
                <div>
                  <h3 className="font-display-lg text-3xl font-bold text-primary mb-12">Get in Touch</h3>
                  
                  <div className="space-y-10">
                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary" data-icon="location_on">location_on</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Our Office</h4>
                        <p className="text-on-surface-variant leading-relaxed text-lg">
                          28th Floor, The Stability Tower<br />
                          Makati Financial District<br />
                          Metro Manila, Philippines
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary" data-icon="call">call</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Direct Line</h4>
                        <p className="text-on-surface-variant leading-relaxed text-lg mb-1">(02) 8800 1234</p>
                        <p className="text-sm text-tertiary font-medium">Mon-Fri, 8AM-5PM</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary" data-icon="mail">mail</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Email Advisory</h4>
                        <p className="text-on-surface-variant leading-relaxed text-lg mb-1">advisory@solacepoint.com</p>
                        <p className="text-sm text-tertiary font-medium">Priority response within 12 hours</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary" data-icon="thumb_up">thumb_up</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Connect</h4>
                        <p className="text-on-surface-variant leading-relaxed text-lg mb-1">@solacepoint</p>
                        <p className="text-sm text-tertiary font-medium">Insights and Architectural News</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={200} direction="up" distance="40px">
                <div className="bg-white rounded-xl shadow-[0_16px_40px_-12px_rgba(4,21,37,0.08)] border border-outline-variant/20 p-8 md:p-12">
                  <div className="mb-10">
                    <h2 className="font-body-lg text-2xl md:text-3xl text-primary font-bold tracking-tight mb-2">Send Us a Message</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">Fill out the form below and we will respond within 24 hours.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="floating-label-group">
                      <input 
                        className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" 
                        id="name" 
                        placeholder=" " 
                        required 
                        type="text"
                        pattern="[A-Za-z\s]+" 
                        title="Only letters and spaces are allowed"
                        value={name}
                        onChange={(e) => setName(e.target.value.replace(/[^A-Za-z\s]/g, ''))}
                      />
                      <label className="font-label-md text-label-md" htmlFor="name">Your Name*</label>
                    </div>

                    <div className="floating-label-group">
                      <input 
                        className="w-full h-14 border border-outline px-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent" 
                        id="email" 
                        placeholder=" " 
                        required 
                        type="email"
                        pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.com$" 
                        title="Must be a valid .com email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="font-label-md text-label-md" htmlFor="email">Email Address*</label>
                    </div>

                    <div className="floating-label-group">
                      <textarea 
                        className="w-full min-h-[160px] border border-outline p-4 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none bg-transparent resize-none" 
                        id="message" 
                        placeholder=" " 
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <label className="font-label-md text-label-md" htmlFor="message">How can we help you?</label>
                    </div>

                    <button 
                      className={`group w-full bg-secondary text-on-secondary h-16 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-lg shadow-secondary/20 mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Guarantees */}
      <section className="py-20 md:py-24 bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <ScrollReveal direction="up" delay={100} className="h-full">
              <div className="h-full bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 inline-block group-hover:scale-110 transition-transform" data-icon="chat">chat</span>
                <h4 className="font-body-lg text-xl font-bold mb-4 text-primary">Get a Free Quote</h4>
                <p className="text-on-surface-variant leading-relaxed text-base">Compare options from multiple top insurance providers to find the perfect fit for your precise needs.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200} className="h-full">
              <div className="h-full bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 inline-block group-hover:scale-110 transition-transform" data-icon="admin_panel_settings">admin_panel_settings</span>
                <h4 className="font-body-lg text-xl font-bold mb-4 text-primary">Expert Guidance</h4>
                <p className="text-on-surface-variant leading-relaxed text-base">Our licensed agents will help you navigate and fully understand your options with absolute professional trust.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300} className="h-full">
              <div className="h-full bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 inline-block group-hover:scale-110 transition-transform" data-icon="bolt">bolt</span>
                <h4 className="font-body-lg text-xl font-bold mb-4 text-primary">Fast Response</h4>
                <p className="text-on-surface-variant leading-relaxed text-base">We prioritize the human experience, guaranteeing a response to all inquiries within 24 hours.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: Office Visit */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Office Building" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10 text-center">
          <ScrollReveal direction="up">
            <h2 className="font-display-lg text-4xl md:text-5xl mb-8 font-bold leading-tight">Visit Our Office</h2>
            <p className="font-body-lg text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Drop by our office in the Makati Financial District. We'd love to meet you in person and discuss your architectural protection over coffee!
            </p>
            
            <a 
              href="https://maps.google.com/?q=2/F+The+Genesis+Block+Bahay+Pare+Road+Meycauayan+City" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white hover:bg-white hover:text-primary px-12 py-5 font-bold text-sm rounded-full uppercase tracking-[0.2em] transition-all backdrop-blur-sm inline-flex items-center gap-4"
            >
              Get Directions
              <span className="material-symbols-outlined text-xl" data-icon="directions">directions</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/60 transition-all duration-500">
          <div className="bg-primary max-w-lg w-full p-8 sm:p-12 md:p-16 flex flex-col relative shadow-2xl animate-[ken-burns_0.4s_ease-out_forwards]">
            {/* Subtle Architectural Grid Lines */}
            <div className="absolute top-0 left-8 sm:left-12 w-[1px] h-full bg-white/5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-secondary"></div>
                <span className="text-secondary text-[9px] font-bold uppercase tracking-[0.4em]">Message Received</span>
              </div>
              
              <h3 className="font-display-lg text-4xl md:text-5xl text-white font-bold leading-[1.1] mb-6">
                Message <br/> Sent.
              </h3>
              
              <p className="font-body-md text-white/70 leading-relaxed text-sm md:text-base max-w-sm mb-16">
                Thank you for reaching out. An elite advisor is now reviewing your message and will get back to you within 24 hours.
              </p>
              
              <button 
                onClick={() => {
                  closeSuccess();
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

export default Contact;
