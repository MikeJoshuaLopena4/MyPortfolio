'use client';

import { useEffect, useState } from 'react';

const skills = [
  { name: 'Cloud Development', level: 90 },
  { name: 'IoT Systems', level: 85 },
  { name: 'Embedded Programming', level: 88 },
  { name: 'Web Development', level: 82 },
  { name: 'Linux Administration', level: 80 },
  { name: 'PCB Design', level: 75 }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                I&apos;m a passionate <span style={{ color: 'var(--primary)' }}>Computer Engineer</span> with expertise in 
                bridging the gap between hardware and software. My journey involves creating innovative 
                solutions from cloud-native applications to embedded systems.
              </p>
              
              <p>
                Recently graduated from <span style={{ color: 'var(--primary)' }}>Bohol Island State University</span>, 
                I&apos;ve gained hands-on experience through internships and professional roles in 
                cloud development, IoT systems, and full-stack web development.
              </p>
              
              <p>
                When I&apos;m not coding, you&apos;ll find me experimenting with homelab setups, 
                exploring emerging technologies, or building smart devices with microcontrollers.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary)' }}>
              Technical Expertise
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm" style={{ color: 'var(--text)' }}>
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--primary)' }}>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'var(--secondary)' }}>
                    <div 
                      className="h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        backgroundColor: 'var(--primary)',
                        width: isVisible ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}