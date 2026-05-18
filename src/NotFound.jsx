import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white font-sans overflow-hidden relative selection:bg-secondary/30">
      
      {/* Blended Background Image (Same as website standard) */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" 
          alt="Ocean background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Soft Golden & White Auras (Matching website brand styles) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none z-0"></div>
      
      {/* Core Center Content Stack */}
      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        <ScrollReveal direction="up">
          
          {/* Giant Creative Gold 404 */}
          <h1 className="font-display-lg text-[9rem] md:text-[14rem] lg:text-[16rem] font-bold text-secondary leading-none tracking-tight mb-4 select-none drop-shadow-[0_15px_30px_rgba(224,180,95,0.3)]">
            404
          </h1>

          {/* Tagline Divider */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-secondary/50"></div>
            <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em] translate-x-[0.15em]">
              Coordinates Lost
            </span>
            <div className="w-8 h-[1px] bg-secondary/50"></div>
          </div>

          {/* Title */}
          <h2 className="font-display-lg text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Beyond Safe Waters
          </h2>

          {/* Narrative Description */}
          <p className="font-body-lg text-white/80 max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-12">
            It appears you have drifted past the reach of our lighthouse. The page you entered does not exist within our secure harbor. Let our advisors guide you back to steady ground.
          </p>

          {/* Main CTA Button */}
          <button 
            onClick={() => navigate('/Home')} 
            className="bg-secondary text-on-secondary-fixed px-12 py-5 font-bold text-xs rounded-full uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
          >
            Back to Home
          </button>

        </ScrollReveal>
      </div>

    </div>
  );
};

export default NotFound;
