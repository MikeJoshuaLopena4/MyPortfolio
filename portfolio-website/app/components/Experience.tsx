'use client';

import { useEffect, useState } from 'react';

const experiences = [
  {
    company: "USFI Inc.",
    position: "Embedded System Engineer",
    period: "Jan 2025 - Jul 2025",
    location: "Mandaue City, Cebu",
    highlights: [
      "Worked with Raspberry Pi, ESP32, and microcontrollers programming in C/C++",
      "Designed custom PCB boards using EasyEDA with PoE, ESP32, RS232/RS485",
      "Applied communication protocols: UART, SPI, I2C, CAN, Modbus RTU",
      "Developed real-time data transmission systems using WebSockets"
    ]
  },
  {
    company: "Geckotech Inc.",
    position: "Junior Software Engineer",
    period: "Jul 2024 - Jul 2025",
    location: "Cebu City, Philippines",
    highlights: [
      "Maintained legacy system with QCGI, MySQL, Apache, and CGI",
      "Developed IoT-based energy monitoring system with hardware integration",
      "Worked with Linux environments (Debian, Slackware), cron jobs, Vim",
      "Supported hardware/network troubleshooting and Proxmox virtualization"
    ]
  },
  {
    company: "Alphaus Inc.",
    position: "Cloud Developer Intern",
    period: "Jan 2024 - Mar 2024",
    location: "Tokyo, Japan (Remote)",
    highlights: [
      "Developed data ingestion system using Google Cloud Platform",
      "Created Pub/Sub topics and subscriptions for real-time processing",
      "Gained experience in big data handling and cloud-native environments"
    ]
  }
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{ color: 'var(--accent)' }}>
          My professional journey in technology and engineering
        </p>
        
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div 
                  className="absolute left-6 top-20 w-0.5 h-full opacity-30"
                  style={{ backgroundColor: 'var(--primary)' }}
                ></div>
              )}
              
              <div className="card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border-opacity-30">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)' }}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: 'var(--primary)' }}>
                        {exp.position}
                      </h3>
                      <p className="text-lg font-medium" style={{ color: 'var(--text)' }}>{exp.company}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="font-medium text-sm" style={{ color: 'var(--text)' }}>{exp.period}</p>
                    <p className="text-sm" style={{ color: 'var(--accent)' }}>{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <span className="mr-3 mt-1 text-sm" style={{ color: 'var(--primary)' }}>▸</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}