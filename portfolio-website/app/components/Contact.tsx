'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--accent)' }}>
            Interested in collaborating or have a project in mind? 
            I&apos;d love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:mikejoshua.lopena44@gmail.com"
              className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110" style={{ backgroundColor: 'var(--primary)' }}>
                <span className="text-2xl">📧</span>
              </div>
              <div className="font-semibold mb-2">Email</div>
              <div className="text-sm opacity-80">mikejoshua.lopena44@gmail.com</div>
            </a>
            
            <a
              href="tel:+639053640929"
              className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110" style={{ backgroundColor: 'var(--primary)' }}>
                <span className="text-2xl">📱</span>
              </div>
              <div className="font-semibold mb-2">Phone</div>
              <div className="text-sm opacity-80">+63 905 364 0929</div>
            </a>
            
            <a
              href="https://linkedin.com/in/mikejoshualopena44"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110" style={{ backgroundColor: 'var(--primary)' }}>
                <span className="text-2xl">💼</span>
              </div>
              <div className="font-semibold mb-2">LinkedIn</div>
              <div className="text-sm opacity-80">mikejoshualopena44</div>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm" style={{ color: 'var(--accent)' }}>
              Based in the Philippines • Open to remote opportunities
            </p>
            <p className="text-xs mt-2 opacity-70">
              © 2024 Mike Joshua Lopena. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}