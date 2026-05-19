import React, { useState, useEffect } from 'react';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const PrivacyPolicy = () => {
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

      {/* Hero Section - Utilizing full width */}
      <section className="bg-primary pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-margin-desktop overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <ScrollReveal direction="up" className="relative z-10">
          <div className="max-w-container-max mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-secondary"></div>
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">
                Legal & Security Architecture
              </span>
              <div className="w-8 h-[1px] bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Data Privacy Policy
            </h1>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/10 pt-8 mt-8">
              <p className="font-body-lg text-white/70 max-w-2xl text-lg">
                We are dedicated to safeguarding your trust and protecting the personal information you place with us.
              </p>
              <p className="text-secondary text-xs font-bold uppercase tracking-widest shrink-0">
                Last Updated: February 17, 2026
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Main Content Section - Two-Column Architectural Split Grid Layout */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-20 border border-outline-variant/30 shadow-sm space-y-16">
            
            {/* Introduction Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <span className="text-tertiary font-bold tracking-[0.3em] uppercase text-xs">Overview</span>
                <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-primary mt-2">Privacy Commitment</h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-on-surface-variant leading-relaxed text-lg italic border-l-3 border-secondary pl-6">
                  As your chosen insurance agency provider, we are committed to protecting any personal information that you may provide us through our website, our branch network, and our intermediaries. Protecting the privacy of your personal information is a major priority throughout all of our business practices and procedures.
                </p>
              </div>
            </div>

            {/* Clause I: Who We Are */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  I. Who We Are
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  We are <strong>Solace Point Insurance Agency</strong>, one of the leading independent insurance agencies in the Philippines. We provide a wide range of non-life and life insurance products as well as HMO and allied insurance for individuals, small and medium enterprises, and local and global corporations. Solace Point Insurance Agency operates a website where customers can also procure their insurance policies online. We also use AI technology to power our operations.
                </p>
              </div>
            </div>

            {/* Clause II: Our Privacy Statement */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  II. Our Privacy Statement
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  As your chosen insurance agency provider, we are committed to protecting any personal information that you may provide us through our website; through our branch network; and through our intermediaries. Protecting the privacy of your personal information is a major priority throughout all of our business practices and procedures. This privacy policy describes our policies in using, gathering, communicating and protecting information about you. It is recommended that this Privacy Policy be read carefully.
                </p>
              </div>
            </div>

            {/* Clause III: Personal Information We Collect */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  III. Personal Information We Collect
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  We receive only the personal information that you directly provide to us. This information may include, among other things, your name, address, government ID details, date of birth, marital status and e-mail address.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  If you provide us personal information about others, it will be your responsibility to inform them that you are providing us their information and we will only use that information for the specific reason for which it was provided to us.
                </p>
              </div>
            </div>

            {/* Clause IV: How We Use the Information */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  IV. How We Use the Information
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg mb-6">
                  We will use the information only to the extent necessary to accomplish the following purposes:
                </p>
                {/* Fills space using a robust 2-column grid layout */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    'Responding to your inquiries',
                    'Fulfilling requests for underwriting, policy issuance, changes, and renewals',
                    'Collection of receivables and premium balances',
                    'Investigation and settlement of claims',
                    'Submission to banks, financial institutions, and Notary Public for vehicle transfers',
                    'Providing and communicating with you about our advisory services',
                    'Sending updates about programs, activities, or products of interest',
                    'Preventing fraud and potentially illegal or unlawful activities',
                    'Conducting marketing, underwriting research, and data modeling',
                    'Reporting to government and non-life insurance regulatory agencies',
                    'Acting as required or authorized by law or by court orders'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5 border border-secondary/20">
                        <span className="material-symbols-outlined text-secondary text-[11px]">check</span>
                      </div>
                      <span className="text-on-surface-variant text-sm md:text-base leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clause V: Other Non-Personal Information We Collect */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  V. Other Non-Personal Information We Collect
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-6 text-on-surface-variant leading-relaxed text-base md:text-lg">
                <p>
                  When you visit our website, our web servers collect the name of the domain you used to access the Internet, which pages you visited on our site and when you visited those pages, your Internet browser type and platform, the link that brought you to our site and any links clicked on within our site. This information may be used by us, our service providers, and affiliates to measure the number of visits, the average time spent on our site, the web pages viewed and other statistics about visitors to our site. We also use these data to monitor site performance and make our website easier and more convenient to use.
                </p>
                <p>
                  As with many websites, we use cookies and other technology to help us track visits to our website. A "cookie" is a piece of information transferred to your computer hard drive for record keeping purposes. Only the website that sends the cookie can read that information. Cookies enable the site to identify you as a particular user of our website but does not associate this information with your name or address unless you voluntarily provide this information and provide authorization to use your information. Ways you may provide this information to us include, but may not be limited to, a request for an insurance quote, filing in information on this website, or by the browser preferences you control. You may opt out of accepting cookies through the settings on your web browser, but this may prevent you from using certain functions on this site.
                </p>
              </div>
            </div>

            {/* Clause VI: Information Sharing and Disclosure */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  VI. Information Sharing and Disclosure
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-6 text-on-surface-variant leading-relaxed text-base md:text-lg">
                <p>
                  We will not use your information for any purpose that you have not expressly authorized. Your information is not sold, rented, or shared with other entities or organizations for commercial purposes or in ways different than what is disclosed in this Privacy Policy.
                </p>
                <p>
                  We may share your personal information to external third parties for outsourced operations within the extent necessary to accomplish the purpose of use to enable us to deliver the products and services you required from us.
                </p>
                <p>
                  From time to time, we may disclose information to fulfill certain legal and regulatory requirements or if we believe, in good faith, that such disclosure is legally required or necessary to protect others' rights or to prevent physical harm or financial loss or in connection with an investigation of suspected or actual illegal activity. We may also provide information to a court, government agency, or other third parties when subpoenaed or as otherwise required by law. Disclosure may also be required for authorized company audits or to investigate a complaint relating to fraud or an illegal/unlawful activity or security threat.
                </p>
              </div>
            </div>

            {/* Clause VII: Our Privacy and Security Procedures */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  VII. Our Privacy and Security Procedures
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  In <strong>Solace Point Insurance Agency</strong>, our goal is to secure and protect the personal information that you provide us through our website, our branches network, our call center and through the intermediaries. We maintain reasonable physical, electronic and procedural safeguards designed to prevent loss, misuse or unauthorized access, alteration or destruction of these information. We limit access to personal and account information to authorized employees and third parties who need to know that information in order to assist us in providing products and services to you. Employees who misuse customer information are dealt with according to the penalties provided under Company rules. In addition to their obligations enumerated in Non-Disclosure and Data Privacy Agreements, third parties to whom we disclose your personal information are required to adhere to this Privacy Policy and to have established information security procedures.
                </p>
              </div>
            </div>

            {/* Clause VIII: Your Data Privacy Rights - Grid that beautifully fills space */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  VIII. Your Data Privacy Rights
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg mb-8">
                  Under the Philippine Data Privacy laws and regulations, you are accorded the following rights as our customer:
                </p>
                
                {/* Occupies the space beautifully with a 2-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'The Right to be Informed', text: 'You have the right to be informed that your personal data will be, are being, or were, collected and processed.' },
                    { title: 'The Right to Access', text: 'You have the right to find out whether our company holds any personal data about you and, upon a written request, gain reasonable access to them.' },
                    { title: 'The Right to Object', text: 'When you object or withhold your consent, we should no longer process your personal data, unless pursuant to a subpoena or legal obligation.' },
                    { title: 'The Right to Erasure or Blocking', text: 'You have the right to suspend, withdraw or order the blocking, removal, or destruction of your personal data from our filing system.' },
                    { title: 'The Right to Damages', text: 'You may claim compensation if you suffered damages due to inaccurate, incomplete, false, unlawfully obtained, or unauthorized use of your data.' },
                    { title: 'The Right to File a Complaint', text: 'If you feel that your privacy rights have been violated, you have a right to file a complaint with the National Privacy Commission (NPC).' },
                    { title: 'The Right to Rectify', text: 'You have the right to correct any error in your personal data and request immediate rectification.' },
                    { title: 'The Right to Data Portability', text: 'You have the right to obtain and electronically move, copy or transfer your personal data in a secure manner.' }
                  ].map((right, idx) => (
                    <div key={idx} className="bg-surface p-6 rounded-2xl border border-outline-variant/25 hover:border-secondary/30 transition-all duration-300">
                      <h4 className="font-bold text-primary text-base mb-2 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        {right.title}
                      </h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{right.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Clause IX: Changes to this Policy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-16 border-b border-outline-variant/20">
              <div className="lg:col-span-4">
                <h3 className="font-display-md text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  IX. Changes to this Policy
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  We reserve the right to modify or supplement this Privacy Policy at any time. If we make any material change, we will update our website to include such changes. We recommend that you review this Privacy Policy regularly for changes.
                </p>
              </div>
            </div>

            {/* Contact Information - Simplified and occupies the whole space */}
            <div className="pt-12 border-t border-outline-variant/20 w-full">
              <h3 className="font-display-md text-2xl font-bold text-primary mb-4 uppercase tracking-wider">
                The Data Protection Officer
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-base md:text-lg mb-8">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact our Data Protection Officer:
              </p>
              
              <div className="bg-surface p-8 rounded-3xl border border-outline-variant/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full">
                <div className="space-y-3">
                  <p className="text-primary font-bold text-lg">Solace Point Insurance Agency</p>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    28th Floor, The Stability Tower, Makati Financial District, Metro Manila, Philippines
                  </p>
                  <p className="text-on-surface-variant text-sm md:text-base">
                    Email: <span className="font-semibold text-primary">advisory@solacepoint.com</span>
                  </p>
                </div>
                <a 
                  href="mailto:advisory@solacepoint.com" 
                  className="bg-primary text-white hover:bg-secondary hover:text-on-secondary px-8 py-5 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-3 shrink-0 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  Email Advisory
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
