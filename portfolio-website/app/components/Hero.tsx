'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  interface TechSkill {
    title: string;
    icon: React.ReactNode;
    color: string;
    href: string;
  }

  const roles = [
    'Computer Engineer',
    'Embedded System Engineer',
    'Full Stack Developer',
    'Cloud Computing Enthusiast',
    'Graphic & Layout Artist',
  ];

  const techSkills: TechSkill[] = [
    {
      title: 'Embedded Systems',
      icon: (
        <div className="relative w-full border-2 border-slate-700 h-48 bg-slate-800 rounded-lg overflow-hidden">
          <Image
            src="/images/profile/embedded.jpg"
            alt="Graphic Design"
            width={400}
            height={300}
            className="w-full h-full object-cover"
            priority
            onError={(e) => {
              console.error('Image failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      ),
      color: 'from-blue-500 to-cyan-500',
      href: '/projects'
    },
    {
      title: 'Graphic Design',
      icon: (
        <div className="relative w-full h-48 border-2 border-slate-700 bg-slate-800 rounded-lg overflow-hidden">
          <Image
            src="/images/profile/gr.png"
            alt="Graphic Design"
            width={400}
            height={300}
            className="w-full h-full object-cover"
            priority
            onError={(e) => {
              console.error('Image failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 opacity-0 border-2 border-slate-700 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      ),
      color: 'from-blue-500 to-cyan-500',
      href: '/projects'
     
    },
    {
      title: 'Full Stack Developer',
      icon: (
        <div className="relative w-full border-2 border-slate-700 h-48 bg-slate-800 rounded-lg overflow-hidden">
          <Image
            src="/images/profile/web.png"
            alt="Graphic Design"
            width={400}
            height={300}
            className="w-full h-full object-cover"
            priority
            onError={(e) => {
              console.error('Image failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      ),
      color: 'from-blue-500 to-cyan-500',
      href: '/projects'
    },
    {
      title: 'Home Labbing',
      icon: (
        <div className="relative w-full h-48 bg-slate-800 rounded-lg overflow-hidden">
          <Image
            src="/images/profile/lab.png"
            alt="Graphic Design"
            width={400}
            height={300}
            className="w-full h-full object-cover"
            priority
            onError={(e) => {
              console.error('Image failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      ),
      color: 'from-blue-500 to-cyan-500',
      href: '/projects'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentRole.length) {
          setTypewriterText(currentRole.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentIndex]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex">
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Content Section - STICKY */}
        <div className={`w-1/2 p-12 flex flex-col justify-center sticky top-0 h-screen transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-lg">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-slate-300">Available for hire</span>
            </div>

            <h1 className="text-5xl font-bold mb-3 text-white">
              Mike Joshua <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Lopena</span>
            </h1>

            <div className="text-2xl font-semibold mb-6 text-cyan-400 h-10">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              I'm a creative User Interface and User Experience Developer passionate about merging hardware, software, and cloud technologies to create innovative, user-focused solutions.
            </p>

            <div className="flex gap-4">
              <a
                href="/contact" 
                className="px-6 py-3 rounded-lg font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Hire me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel Section - SCROLLABLE */}
        <div className="w-1/2 p-12 space-y-6 overflow-y-auto h-screen">
        
          {/* About Panel */}
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-slate-400 ml-2">About</span>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Mike Joshua Lopena is a multidisciplinary engineer with expertise in embedded systems and extensive experience as a full-stack developer. His journey in technology combines hardware innovation with software craftsmanship, creating user-friendly, responsive, and visually appealing solutions.
            </p>
          </div>
          {/* Tech Skills Section */}
          <div className="mb-8">
            {/* <h2 className="text-3xl font-bold text-white mb-6">Tech Skills</h2> */}
            <div className="grid grid-cols-2 gap-4">
              {techSkills.map((skill, index) => (
                <a
                  key={index}
                  href={skill.href}
                  className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2 hover:border-slate-600 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className={`text-transparent bg-clip-text bg-linear-to-br ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Website Panel */}
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-slate-400 ml-2">Website</span>
            </div>
            
            <div className="space-y-3">
              <div className="bg-slate-900/50 rounded-lg p-3 border border-cyan-500/30">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-slate-300">Handle errors gracefully</span>
                </div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-3 border border-emerald-500/30">
                <span className="text-sm text-slate-300">Fetches data from the server and updates the UI accordingly</span>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-3 border border-blue-500/30">
                <span className="text-sm text-slate-300">Display a friendly error message to the user</span>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-3 border border-purple-500/30">
                <span className="text-sm text-slate-300">Responsive styles for even smaller screens</span>
              </div>
              
              <div className="grid grid-cols-5 gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="aspect-square bg-slate-700/50 rounded border border-slate-600"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Work Experience Panel */}
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-slate-400 ml-2">Work Experience</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-200">Full Stack Developer</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-slate-400">IT Support</span>
                  <span className="text-xs text-slate-500">March 2023 - February 2024</span>
                </div>
              </div>
              
              <div className="opacity-50">
                <h3 className="text-lg font-semibold text-slate-300 line-through">IT Support</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-slate-400">Previous Role</span>
                  <span className="text-xs text-slate-500">March 2022 - September 2022</span>
                </div>
              </div>
              
              <div className="opacity-50">
                <h3 className="text-lg font-semibold text-slate-300 line-through">Computer Technician</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-slate-400">Resort Tech</span>
                  <span className="text-xs text-slate-500">February 2020 - March 2022</span>
                </div>
              </div>
            </div>
          </div>


          {/* Extra space at bottom for better scrolling */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}