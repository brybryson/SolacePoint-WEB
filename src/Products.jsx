import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return [domRef, isVisible];
};

const ScrollReveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();
  
  const getTransform = () => {
    switch(direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(-40px)';
      case 'right': return 'translateX(40px)';
      default: return 'translateY(40px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const products = [
  { id: 'fire', title: 'Fire Insurance', icon: 'local_fire_department', short: 'Comprehensive protection against fire and allied perils.', desc: 'Our Fire Insurance provides absolute architectural protection for your properties. It covers damage from fire, lightning, and specialized perils including earthquakes, typhoons, and floods. We ensure that in the event of a catastrophic loss, your capital and physical assets can be fully restored without disrupting your legacy.' },
  { id: 'marine', title: 'Marine Insurance', icon: 'directions_boat', short: 'Secure your cargo across all international and domestic waters.', desc: 'Whether you are shipping domestically or across global waters, our Marine Insurance guarantees that your cargo, hull, and freight are protected against the unpredictable elements of the sea. We provide robust end-to-end transit coverage designed for the modern innovator.' },
  { id: 'pa', title: 'Personal Accident', icon: 'personal_injury', short: 'Financial stability in the event of unforeseen personal injuries.', desc: 'Life is unpredictable, but your financial stability shouldn\'t be. Our Personal Accident coverage offers comprehensive medical reimbursement, disability benefits, and lump-sum payouts in the event of an accident, ensuring you and your family are fully supported during recovery.' },
  { id: 'travel', title: 'Travel Secure', icon: 'flight_takeoff', short: 'Uninterrupted peace of mind for your global journeys.', desc: 'Travel Secure is designed to handle the unexpected while you are away from home. From flight cancellations and lost baggage to emergency medical assistance abroad, we bridge the gap between uncertainty and absolute resolution wherever you are in the world.' },
  { id: 'pet', title: 'Pet Secure', icon: 'pets', short: 'Bespoke wellness and medical architecture for your loyal companions.', desc: 'Because they are part of the family, Pet Secure offers specialized coverage for veterinary expenses, accidental injuries, and illnesses. We provide peace of mind so you can focus entirely on the recovery and well-being of your beloved pets.' },
  { id: 'casualty', title: 'Casualty Insurance', icon: 'healing', short: 'Strategic liability protection for businesses and professionals.', desc: 'Our Casualty Insurance is engineered to protect you against complex liability claims. From general public liability to professional indemnity, we shield your business operations from third-party claims involving bodily injury or property damage.' },
  { id: 'engineering', title: 'Engineering Insurance', icon: 'construction', short: 'Coverage for complex construction, machinery, and electronic risks.', desc: 'Designed specifically for contractors and heavy industries. We cover the risks associated with the erection of machinery, contractors\' all risks (CAR), and electronic equipment, ensuring your massive infrastructural projects are secured from day one until completion.' },
  { id: 'motor', title: 'Motor Car Insurance', icon: 'directions_car', short: 'Premium mobility coverage ensuring your journey remains secure.', desc: 'Our Motor Car Insurance goes beyond standard compliance. It offers comprehensive protection against theft, accidental damage, and third-party liabilities, ensuring that your daily transit and valuable automotive assets are completely safeguarded.' },
  { id: 'bonds', title: 'Bonds', icon: 'assured_workload', short: 'Surety and guarantee bonds designed for commercial integrity.', desc: 'We provide the financial backing you need to secure critical contracts. Our Bonds—including performance, surety, and bid bonds—act as a resolute guarantee of your commitment, enhancing your credibility and ensuring mutual trust in massive commercial undertakings.' }
];

const Products = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navOpacity = Math.min(scrollY / 300, 1);
  const isAtTop = scrollY < 50;

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProduct]);

  return (
    <div className="font-sans antialiased text-on-surface bg-surface-container-lowest min-h-screen selection:bg-secondary/30">
      <TopNavBar visible={true} isAtTop={isAtTop} navOpacity={navOpacity} theme="dark" />

      {/* SECTION 1: Hero */}
      <section className="bg-primary pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-margin-desktop overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <ScrollReveal direction="up" className="relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-secondary"></div>
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Non-Life Insurance Portfolio</span>
              <div className="w-8 h-[1px] bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Protection Architected <br className="hidden md:block" /> for Your Legacy
            </h1>
            <p className="font-body-lg text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed">
              Explore our curated selection of premium insurance products. We bridge the gap between uncertainty and absolute resolution.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: 3x3 Product Grid */}
      <section className="py-24 md:py-32 bg-surface relative">
        {/* Architectural Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        </div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx % 3) * 100} direction="up" className="h-full">
                <div 
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white p-10 md:p-12 rounded-[2rem] border border-outline-variant/30 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div className="mb-8 text-primary group-hover:scale-110 group-hover:text-tertiary transition-transform duration-500 origin-left">
                    <span className="material-symbols-outlined text-5xl" data-icon={product.icon}>{product.icon}</span>
                  </div>
                  
                  <h3 className="font-display-md text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed flex-grow">{product.short}</p>
                  
                  <div className="mt-10 flex items-center gap-3 text-secondary font-bold text-xs uppercase tracking-widest group-hover:text-tertiary transition-colors">
                    Explore Details
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2" data-icon="arrow_right_alt">arrow_right_alt</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Bottom CTA */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10 text-center flex flex-col items-center">
          <ScrollReveal direction="up">
            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl mb-8 font-bold leading-[1.1] max-w-3xl">
              Ready to Secure <br/>Your Peace?
            </h2>
            <p className="font-body-lg text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
              Our elite advisors are ready to architect a bespoke insurance portfolio designed precisely for your life's complexities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate('/quote')}
                className="bg-secondary text-on-secondary-fixed px-12 py-5 font-bold text-sm rounded-full uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-300 shadow-xl shadow-secondary/20 w-full sm:w-auto"
              >
                Get a Quote
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-white/40 text-white hover:bg-white hover:text-primary px-12 py-5 font-bold text-sm rounded-full uppercase tracking-[0.2em] transition-all backdrop-blur-sm w-full sm:w-auto"
              >
                Speak with an Advisor
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* Interactive Specifics Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-background/60 backdrop-blur-sm transition-all duration-500">
          <div className="bg-primary max-w-2xl w-full p-8 md:p-12 lg:p-16 flex flex-col relative shadow-2xl animate-[ken-burns_0.4s_ease-out_forwards] rounded-[2rem] overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Architectural Lines */}
            <div className="absolute top-0 left-8 md:left-12 w-[1px] h-full bg-white/5 pointer-events-none"></div>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all z-20"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="relative z-10 pt-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-4xl text-secondary" data-icon={selectedProduct.icon}>{selectedProduct.icon}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-secondary"></div>
                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em]">Product Specifics</span>
              </div>
              
              <h3 className="font-display-lg text-4xl md:text-5xl text-white font-bold leading-[1.1] mb-6">
                {selectedProduct.title}
              </h3>
              
              <p className="font-body-lg text-white/80 leading-relaxed text-lg md:text-xl mb-12">
                {selectedProduct.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-8 mt-auto">
                <button 
                  onClick={() => { setSelectedProduct(null); navigate('/quote'); }}
                  className="group w-full bg-secondary text-on-secondary h-16 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-colors shadow-lg"
                >
                  Request a Quote
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
                </button>
                <button 
                  onClick={() => { setSelectedProduct(null); navigate('/contact'); }}
                  className="group w-full border border-white/20 text-white h-16 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
                >
                  Ask an Advisor
                  <span className="material-symbols-outlined" data-icon="chat">chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
