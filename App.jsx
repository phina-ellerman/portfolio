import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Linkedin, 
  Phone, 
  CheckCircle, 
  Layers, 
  Target, 
  Users, 
  ChevronDown 
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SectionTitle = ({ children, subtitle }) => (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">{children}</h2>
      <div className="w-20 h-px bg-stone-400 mb-4"></div>
      <p className="text-stone-500 uppercase tracking-widest text-xs">{subtitle}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-stone-800 font-sans selection:bg-stone-200">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${scrolled ? 'bg-[#FDFCF0]/90 backdrop-blur-md py-4 border-b border-stone-200' : 'bg-transparent'}`}>
        <span className="font-serif text-xl tracking-tighter uppercase italic">P. Ellerman</span>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
          <a href="#about" className="hover:text-stone-400 transition-colors">Philosophy</a>
          <a href="#work" className="hover:text-stone-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-stone-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <h1 className="text-[20vw] font-serif whitespace-nowrap">PHINA ELLERMAN</h1>
        </div>
        
        <div className="max-w-4xl w-full z-10 text-center">
          <p className="text-stone-500 uppercase tracking-[0.3em] text-sm mb-8 animate-fade-in">Experience Designer & Event Strategist</p>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">
            The Architecture of <br />
            <span className="italic">Human Connection</span>
          </h1>
          <div className="flex flex-col items-center gap-6">
            <p className="max-w-xl text-stone-600 leading-relaxed text-lg italic">
              "I focus on creating thoughtful, well-run experiences that support the team and feel seamless to the people in the room."
            </p>
            <div className="animate-bounce mt-12">
              <ChevronDown className="text-stone-300" size={32} />
            </div>
          </div>
        </div>
        
        {/* Decorative Vertical Line */}
        <div className="absolute left-1/2 bottom-0 w-px h-24 bg-stone-300"></div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden">
            {/* Minimalist SVG Placeholder representing "Interior space/Atmosphere" */}
            <svg viewBox="0 0 400 533" className="w-full h-full object-cover">
              <rect width="400" height="533" fill="#E5E7EB" />
              <rect x="50" y="50" width="300" height="433" fill="none" stroke="#D1D5DB" strokeWidth="1" />
              <path d="M100 400 L300 100" stroke="#9CA3AF" strokeWidth="0.5" />
              <circle cx="250" cy="200" r="40" fill="#FDFCF0" opacity="0.5" />
            </svg>
            <div className="absolute bottom-8 -right-8 bg-stone-800 text-white p-8 max-w-xs hidden md:block">
              <p className="text-sm font-serif italic mb-2">Philosophy No. 1</p>
              <p className="text-xs tracking-wide leading-relaxed opacity-80 uppercase">
                Strategy is the skeleton; hospitality is the soul. One cannot exist without the other.
              </p>
            </div>
          </div>
          
          <div>
            <SectionTitle subtitle="Vision & Values">Thoughtful Intent</SectionTitle>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Over the past decade, I've planned and executed events ranging from 50-person internal summits to 2,500+ attendee conferences. My approach is rooted in the "behind-the-scenes" logistics—putting time and care into the small details so the experience feels effortless for everyone else.
            </p>
            <ul className="space-y-6">
              {[
                { title: 'Seamless Logistics', desc: 'Removing friction so mission can take the lead.' },
                { title: 'Brand Alignment', desc: 'Translating culture into physical experiences.' },
                { title: 'Scale & Systems', desc: 'Playbooks that reduce planning time by 30-50%.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1 h-5 w-5 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-800 group-hover:border-stone-800 transition-all duration-300">
                    <div className="h-1 w-1 bg-stone-800 group-hover:bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Stats Section - Earthy Palette */}
      <section className="bg-stone-800 text-stone-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Events Executed', val: '150+' },
            { label: 'Max Capacity', val: '2,500+' },
            { label: 'Time Saved', val: '50%' },
            { label: 'Satisfaction', val: '90%+' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-serif mb-2">{stat.val}</p>
              <p className="text-stone-400 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="work" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
        <SectionTitle subtitle="Professional History">Career Narrative</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* VOA */}
          <div className="group border border-stone-200 p-8 hover:bg-[#F8F7F0] transition-all duration-500 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs text-stone-400 mb-4 font-medium uppercase tracking-widest">2024 — Present</p>
              <h3 className="text-2xl font-serif mb-2">Volunteers of America</h3>
              <p className="text-stone-500 text-xs uppercase mb-6 font-bold tracking-tighter">Executive Assistant to CEO, Culture & Engagement</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Coordinating 35+ annual events while reducing planning time by 50% through organization-wide playbook design.
              </p>
            </div>
            <div className="mt-8 flex gap-2 flex-wrap">
              <span className="text-[10px] bg-stone-100 px-2 py-1 text-stone-500 uppercase">Strategy</span>
              <span className="text-[10px] bg-stone-100 px-2 py-1 text-stone-500 uppercase">Logistics</span>
            </div>
          </div>

          {/* Webconnex */}
          <div className="group border border-stone-200 p-8 hover:bg-[#F8F7F0] transition-all duration-500 flex flex-col justify-between h-full bg-[#F5F4EA]">
            <div>
              <p className="text-xs text-stone-400 mb-4 font-medium uppercase tracking-widest">2021 — 2024</p>
              <h3 className="text-2xl font-serif mb-2">Webconnex</h3>
              <p className="text-stone-500 text-xs uppercase mb-6 font-bold tracking-tighter">Employee Experience Coordinator</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Managed $100K budgets for tech summits. Improved satisfaction by 25% through data-driven feedback integration.
              </p>
            </div>
            <div className="mt-8 flex gap-2 flex-wrap">
              <span className="text-[10px] bg-stone-800 px-2 py-1 text-white uppercase">Event Tech</span>
              <span className="text-[10px] bg-stone-800 px-2 py-1 text-white uppercase">UX Design</span>
            </div>
          </div>

          {/* Capital Christian */}
          <div className="group border border-stone-200 p-8 hover:bg-[#F8F7F0] transition-all duration-500 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs text-stone-400 mb-4 font-medium uppercase tracking-widest">2015 — 2018</p>
              <h3 className="text-2xl font-serif mb-2">Capital Christian Center</h3>
              <p className="text-stone-500 text-xs uppercase mb-6 font-bold tracking-tighter">Event Coordinator</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Scaled multi-day conferences for 2,500+ attendees. Built foundational event management systems still in use today.
              </p>
            </div>
            <div className="mt-8 flex gap-2 flex-wrap">
              <span className="text-[10px] bg-stone-100 px-2 py-1 text-stone-500 uppercase">Large Scale</span>
              <span className="text-[10px] bg-stone-100 px-2 py-1 text-stone-500 uppercase">Vendor MGMT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Tools */}
      <section className="py-24 px-6 md:px-24 bg-[#EAE8DB]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-serif mb-6 italic">The Toolkit</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              True efficiency comes from leveraging the right tools. I specialize in automation and registration software to create high-touch experiences with low-touch administration.
            </p>
            <div className="bg-stone-800 text-white p-6 inline-block">
              <p className="text-xs uppercase tracking-widest font-bold mb-1">CAPM Certification</p>
              <p className="text-[10px] text-stone-400 uppercase">In Progress — Expected 2026</p>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-stone-400">Event & Registration</h4>
              <ul className="space-y-2 text-sm">
                <li className="font-medium">TicketSpice (Expert)</li>
                <li className="font-medium">RegFox (Expert)</li>
                <li>Mailchimp</li>
                <li>Cvent</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-stone-400">Collaboration</h4>
              <ul className="space-y-2 text-sm">
                <li>Slack / Trello / Notion</li>
                <li>ClickUp / Asana</li>
                <li className="font-medium">Jira (Proficient)</li>
                <li>Microsoft 365</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-stone-400">Creative & Data</h4>
              <ul className="space-y-2 text-sm">
                <li className="font-medium text-stone-800">Zapier (Automation)</li>
                <li>Canva / Adobe Suite</li>
                <li>HubSpot / Salesforce</li>
                <li>Wistia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle="Get in touch">Let's build something thoughtful together</SectionTitle>
          <div className="flex flex-col md:flex-row justify-center gap-12 mt-12 text-sm tracking-widest uppercase font-medium">
            <a href="mailto:phinaellerman@gmail.com" className="flex items-center gap-3 hover:text-stone-400 transition-colors">
              <Mail size={16} className="text-stone-400" /> phinaellerman@gmail.com
            </a>
            <a href="tel:5033670846" className="flex items-center gap-3 hover:text-stone-400 transition-colors">
              <Phone size={16} className="text-stone-400" /> (503) 367-0846
            </a>
            <a href="https://linkedin.com/in/phina-ellerman" className="flex items-center gap-3 hover:text-stone-400 transition-colors">
              <Linkedin size={16} className="text-stone-400" /> LinkedIn
            </a>
          </div>
          
          <div className="mt-24 pt-12 border-t border-stone-200 text-[10px] text-stone-400 uppercase tracking-[0.4em]">
            Phina Ellerman — Portfolio 2026
          </div>
        </div>
      </section>
      
      {/* Aesthetic Overlays */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-[100] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
    </div>
  );
};

export default App;
