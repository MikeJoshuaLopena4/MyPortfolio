import Link from 'next/link';
import Image from 'next/image';
import embedded, { slugify } from '../../../../projects/embedded';

const slug = 'automated-plant-dispensing-system';
const project = embedded.find(p => slugify(p.title) === slug);

// Centralized design configuration matching your projects page
const projectPageDesign = {
  bg: "bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900",
  cardBg: "bg-slate-800/50 backdrop-blur-sm",
  cardBorder: "border-slate-600/50",
  hoverBorder: "border-blue-400",
  hoverShadow: "shadow-blue-500/25",
  accentGradient: "from-blue-500/25 to-cyan-500/15",
  textPrimary: "text-white",
  textSecondary: "text-slate-300",
  textAccent: "text-blue-300",
  badgeBorder: "border-blue-400/50",
  badgeText: "text-blue-300",
  gridPattern: 'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)',
};

// Project images - replace with your actual image imports
const projectImages = {
  cabinetBlueprint: '/images/projects/stock-feeds/cabinet-blueprint.jpg',
  cabinetRender: '/images/projects/stock-feeds/cabinet-render.jpg',
  temporaryBinss: '/images/projects/stock-feeds/temporary-bins.png',
  calibration: '/images/projects/stock-feeds/calibration.png',
  loadCells: '/images/projects/stock-feeds/load-cells.jpg',
  vfdControl: '/images/projects/stock-feeds/vfd-control.jpg',
  modbusNetwork: '/images/projects/stock-feeds/modbus-network.jpg',
  systemOverview: '/images/projects/stock-feeds/system-overview.jpg',
  controlPanel: '/images/projects/stock-feeds/control-panel.jpg'
};

export default function Page() {
  if (!project) return <div className="p-8">Project not found</div>;

  const config = projectPageDesign;

  return (
    <main className={`min-h-screen p-4 md:p-8 ${config.bg}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Navigation Header */}
        <div className="mb-8 sticky top-0 backdrop-blur-sm py-2 z-10 border-y border-blue-500/30">
          <div className="flex items-center justify-between">
            <Link 
              href="/projects" 
              className="group inline-flex items-center text-sm text-blue-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO PROJECTS
            </Link>
            <div className="text-xs uppercase tracking-widest text-slate-400">
              AUTOMATION • EMBEDDED SYSTEMS
            </div>
          </div>
        </div>

        {/* Main Project Container */}
        <div className={`rounded-xl ${config.cardBg} border-2 ${config.cardBorder} overflow-hidden`}>
          {/* Decorative Background Elements */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-bl ${config.accentGradient}`}></div>
          <div className={`absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr ${config.accentGradient}`}></div>
          
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: config.gridPattern, backgroundSize: '20px 20px'}}></div>

          <div className="relative p-6 md:p-8">
            {/* Project Header */}
            <div className="mb-10">
              <div className="inline-block mb-4 bg-black/90 border border-blue-400/50 px-4 py-2 rounded">
                <span className={`font-mono text-sm font-bold uppercase tracking-wider ${config.badgeText}`}>
                  INDUSTRIAL AUTOMATION
                </span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight leading-tight ${config.textPrimary}`}>
                {project.title}
              </h1>
              
              <p className={`text-lg md:text-xl leading-relaxed max-w-4xl ${config.textSecondary}`}>
                A 12-bin automated stock feed dispensing system with real-time inventory monitoring, 
                precision control via Modbus RTU, and modern industrial cabinet design.
              </p>
            </div>

            {/* Technologies Section */}
            <div className="mb-12">
              <h2 className={`text-2xl font-bold mb-6 uppercase tracking-wide border-b border-slate-700 pb-2 ${config.textPrimary}`}>
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string, i: number) => (
                  <span 
                    key={i} 
                    className={`px-4 py-2 bg-black/60 border ${config.badgeBorder} rounded-lg text-sm uppercase tracking-wider hover:border-blue-400 hover:text-white transition-all duration-200 ${config.badgeText}`}
                  >
                    {tech}
                  </span>
                ))}
                {/* Add automation-specific technologies */}
                <span className="px-4 py-2 bg-black/60 border border-green-500/50 text-green-300 rounded-lg text-sm uppercase tracking-wider">
                  RS485 Modbus RTU
                </span>
                <span className="px-4 py-2 bg-black/60 border border-yellow-500/50 text-yellow-300 rounded-lg text-sm uppercase tracking-wider">
                  RS232 Serial
                </span>
                <span className="px-4 py-2 bg-black/60 border border-purple-500/50 text-purple-300 rounded-lg text-sm uppercase tracking-wider">
                  VFD Control
                </span>
                <span className="px-4 py-2 bg-black/60 border border-red-500/50 text-red-300 rounded-lg text-sm uppercase tracking-wider">
                  Relay Logic
                </span>
              </div>
            </div>

            {/* Main Image Grid - 4 Images */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Image Card 1 */}
                <div className="group">
                  <div
                    className={`relative  h-90 md:h-150 ${config.cardBg} border-2 ${config.cardBorder} 
                    rounded-xl overflow-hidden group-hover:border-blue-400 
                    group-hover:shadow-2xl group-hover:shadow-blue-500/25 
                    transition-all duration-300`}
                  >
                    <Image
                      src={projectImages.cabinetBlueprint}
                      alt="Cabinet Blueprint"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <div className="text-sm flex items-center text-green-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="font-bold">WIRING DIRAGRAM:</span>
                        <span className="text-slate-300 ml-2">PSUs • Breakers • Omada Switch • Control Board</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Card 2 */}
                <div className="group">
                  <div
                    className={`relative h-90 md:h-150 ${config.cardBg} border-2 ${config.cardBorder} 
                    rounded-xl overflow-hidden group-hover:border-blue-400 
                    group-hover:shadow-2xl group-hover:shadow-blue-500/25 
                    transition-all duration-300`}
                  >
                    <Image
                      src={projectImages.cabinetRender}
                      alt="Cabinet Wiring"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <div className="text-sm flex items-center text-green-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="font-bold">3D CABINET RENDER:</span>
                        <span className="text-slate-300 ml-2">Component Visualization</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Card 3 */}
                <div className="group">
                  <div
                    className={`relative h-80 md:h-96 ${config.cardBg} border-2 ${config.cardBorder} 
                    rounded-xl overflow-hidden group-hover:border-blue-400 
                    group-hover:shadow-2xl group-hover:shadow-blue-500/25 
                    transition-all duration-300`}
                  >
                    <Image
                      src={projectImages.calibration}
                      alt="Front View"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <div className="text-sm flex items-center text-green-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="font-bold">CALIBRATION:</span>
                        <span className="text-slate-300 ml-2">Creating software side of the project , MODBUS RTU</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Card 4 */}
                <div className="group">
                  <div
                    className={`relative h-80 md:h-96 ${config.cardBg} border-2 ${config.cardBorder} 
                    rounded-xl overflow-hidden group-hover:border-blue-400 
                    group-hover:shadow-2xl group-hover:shadow-blue-500/25 
                    transition-all duration-300`}
                  >
                    <Image
                      src={projectImages.temporaryBinss}
                      alt="Rear View"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <div className="text-sm flex items-center text-green-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="font-bold">CAD:</span>
                        <span className="text-slate-300 ml-2">SKETCH ACTUAL IMPLEMENTATION</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Automation Control System Details */}
            <section className="mb-16">
              <h2 className={`text-2xl font-bold mb-8 uppercase tracking-wide border-b border-slate-700 pb-2 ${config.textPrimary}`}>
                MY CONTROL SYSTEM ARCHITECTURE CONTRIBUTION
              </h2>                       
              <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-3 mb-2">
                {/* Project Leadership - Bulleted Version */}
                 <div className={`group p-6 ${config.cardBg} border ${config.cardBorder} rounded-xl hover:border-amber-400 transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-900/30 border border-amber-500/50 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {/* Team/Leadership Icon */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Technical Project Leadership</h3>
                      <p className="text-sm text-slate-400">Team Coordination & System Visualization</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium text-slate-200">Problem Resolution:</span> Led technical troubleshooting for mechanical interference, electrical noise, and software timing challenges
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium text-slate-200">CAD System Visualization:</span> Created detailed illustrations of 12-bin automation system for team alignment and mechanical planning
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium text-slate-200">Cross-Functional Leadership:</span> Coordinated mechanical, electrical, and software teams for seamless 12-bin system integration
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                    <span className="text-amber-400 mr-2 mt-0.5">•</span>
                      <div>
                        <h4 className="text-sm font-medium text-white mb-0.5">Industrial Component & Wiring Design</h4>
                        <p className="text-xs text-slate-400">
                          Designed custom industrial components and created detailed wiring schematics (AC/DC circuits, control panels), 
                          using CAD visualizations to guide team implementation and ensure proper component integration
                        </p>
                      </div>
                    </li>
                    

                  </ul>
                  
                  {/* Visual Project Impact */}
                  <div className="mt-4 p-3 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-lg border border-amber-500/20">
                    <div className="flex items-start">
                      <div className="min-w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mr-3">
                        <span className="text-amber-300 text-sm font-bold">12</span>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-300 mb-1">12-Bin Automation System</div>
                        <div className="text-xs text-slate-400">
                          Successfully led visualization and coordination for complex multi-bin storage system with integrated control architecture
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
                {/* Firmware Programming - Bulleted Version */}
                  <div className={`group p-6 ${config.cardBg} border ${config.cardBorder} rounded-xl hover:border-green-400 transition-all duration-300`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-green-900/30 border border-green-500/50 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Embedded Firmware Development</h3>
                        <p className="text-sm text-slate-400">Low-Level Hardware Programming & Protocol Implementation</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <div>
                          <span className="font-medium text-slate-200">RS232 Weight Measurement:</span> Developed firmware for load cell data acquisition with real-time filtering of garbled serial streams
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <div>
                          <span className="font-medium text-slate-200">RS485 Motion Control:</span> Created Modbus RTU firmware with server command listening and dynamic position parameter configuration
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <div>
                          <span className="font-medium text-slate-200">24-Channel Digital I/O:</span> Engineered firmware for server-controlled solenoid operation with precise timing and safety logic
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <div>
                          <span className="font-medium text-slate-200">Multi-Sensor Feedback:</span> Developed firmware for digital trigger monitoring and analog pneumatic level sensing with data processing
                        </div>
                      </li>
                    </ul>
                    
                    {/* Technical Impact */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-500/20">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-xs text-slate-300">
                          <span className="font-medium text-slate-200">Technical Achievements:</span> Implemented 
                          <span className="text-green-300 mx-1">real-time data processing</span>, 
                          <span className="text-green-300 mx-1">multi-protocol communication</span>, and 
                          <span className="text-green-300 mx-1">hardware-level optimization</span> across diverse embedded platforms
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-3 mb-10">
             
                {/* Software Development & Architecture - Bulleted Version */}
                <div className={`group p-6 ${config.cardBg} border ${config.cardBorder} rounded-xl hover:border-purple-400 transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-900/30 border border-purple-500/50 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Full-Stack Architecture</h3>
                      <p className="text-sm text-slate-400">Scalable Software Design & Development</p>
                    </div>
                  </div>                 
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-slate-200">Scalable Structure:</span> Implemented organized folder architecture with separation of concerns for enterprise-ready applications
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-slate-200">Node.js Backend:</span> Built high-performance server applications with modular architecture, REST APIs, and real-time capabilities
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                     <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-slate-200">Data Architecture:</span> Designed MongoDB document storage with Redis caching layer for optimal performance and data delivery
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-slate-200">Modern Frontend:</span> Developed responsive UIs with HTML5, JavaScript (ES6+), and Tailwind CSS focusing on UX/UI principles
                      </div>
                    </li>
                    
                  </ul>
                  
                  {/* Tech Stack Summary */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/20">
                      <div className="flex items-center mb-1">
                        <svg className="w-3 h-3 text-purple-300 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        <span className="text-xs font-medium text-slate-300">Backend Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-purple-900/30 text-purple-200 text-xs rounded">Node.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-900/30 text-blue-200 text-xs rounded">MongoDB</span>
                        <span className="px-1.5 py-0.5 bg-red-900/30 text-red-200 text-xs rounded">Redis</span>
                      </div>
                    </div>
                    
                     <div className="p-3 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/20">
                      <div className="flex items-center mb-1">
                        <svg className="w-3 h-3 text-cyan-300 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs font-medium text-slate-300">Frontend Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-green-900/30 text-green-200 text-xs rounded">HTML5</span>
                        <span className="px-1.5 py-0.5 bg-yellow-900/30 text-yellow-200 text-xs rounded">JavaScript</span>
                        <span className="px-1.5 py-0.5 bg-cyan-900/30 text-cyan-200 text-xs rounded">Tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Servo Drive */}
                  <div className={`group p-5 ${config.cardBg} border ${config.cardBorder} rounded-xl hover:border-blue-400 transition-all duration-300`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-500/50 flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Servo Drive Control</h3>
                          <p className="text-sm text-slate-400">Precision Motion Control via Modbus RTU</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <div>
                            <span className="font-medium text-slate-200">Network Architecture:</span> Designed RS485 daisy-chain network with slave addressing for scalable communication
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <div>
                            <span className="font-medium text-slate-200">Auto-Homing:</span> Implemented automatic return-to-home sequence on power-up with position verification
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <div>
                            <span className="font-medium text-slate-200">Position Control:</span> Configured position mode with CCW/CW limit inhibitions for safe mechanical boundary protection
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <div>
                            <span className="font-medium text-slate-200">Dual Control:</span> Developed both virtual (HMI) and physical (I/O) control interfaces with fail-safe handover
                          </div>
                        </li>
                        
                        
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <div>
                            <span className="font-medium text-slate-200">Parameter Tuning:</span> Optimized drive parameters tailored to plant operational requirements and performance targets
                          </div>
                        </li>
                      </ul>            
                  </div>
              </div>

              {/* Network Architecture Diagram */}
            <div className={`p-8 ${config.cardBg} border ${config.cardBorder} rounded-xl`}>
              <h3 className={`text-xl font-bold mb-8 ${config.textPrimary}`}>INDUSTRIAL CONTROL SYSTEM ARCHITECTURE</h3>
              
                {/* Top Row - Multiple RS232 Boards */}
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap- justify-center">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`p-4 ${config.cardBg} border-2 border-cyan-500/50 rounded-xl text-center`}>
                      <div className="text-sm font-bold text-cyan-300">RS232 Board</div>
                      <div className="text-xs text-slate-400">UDP</div>
                      <div className="text-xs text-slate-500 mt-1">Weight{i+1}</div>
                    </div>
                  ))}
                </div>

                {/* Connection Lines */}
                <div className="flex justify-center gap-12">
                  {[...Array(12)].map((_, i) => (
                      <div key={i} className={`h-9 w-0.5 bg-cyan-500/30 ml-6 mr-6`}></div>
                    ))}
                </div>

                <div className="hidden md:block absolute  left-1/2 transform -translate-x-1/2 w-270 h-0.5 bg-cyan-500/30"></div>
                <div className="flex justify-center">
                  <div className="h-15 w-0.5 top-1/2 bg-blue-500/30"></div>
                </div>
             
                {/* Middle Row - Input Sources */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                
                {/* HMI Interface */}
                
                <div className={`p-5 ${config.cardBg} border-2 border-green-500/50 rounded-xl text-center relative`}>
                  <div className="text-lg font-bold text-green-300 mb-2">HMI INTERFACE</div>
                  <div className="text-sm text-slate-400 mb-3">Virtual Control Panel</div>
                  <div className="text-xs text-slate-500">Graphical operator interface</div>
                  <div className="mt-3 text-xs text-green-400">→ Virtual Input to Server</div>
                  
                  {/* Right connection line */}
                  <div className="hidden  md:block absolute top-1/2 -right-6.5 w-6 h-0.5 bg-green-500/30 transform -translate-y-1/2"></div>
                </div>
                
                {/* Server System */}
                <div className={`p-5 ${config.cardBg} border-2 border-purple-500/50 rounded-xl text-center relative`}>
                  <div className="text-lg font-bold text-purple-300 mb-2">SERVER SYSTEM</div>
                  <div className="text-sm text-slate-400 mb-3">Control & Feedback Processing</div>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-purple-900/30 text-purple-200 text-xs rounded">Control Logic</span>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-200 text-xs rounded">Feedback Proc</span>
                    <span className="px-2 py-1 bg-red-900/30 text-red-200 text-xs rounded">Data Logging</span>
                  </div>
                </div>
                
                
                
                {/* Manual Input */}
                <div className={`p-5 ${config.cardBg} border-2 border-orange-500/50 rounded-xl text-center relative`}>
                  <div className="text-lg font-bold text-orange-300 mb-2">MANUAL INPUT</div>
                  <div className="text-sm text-slate-400 mb-3">Physical Control Panel</div>
                  <div className="text-xs text-slate-500">Emergency & manual override</div>
                  <div className="mt-3 text-xs text-orange-400">→ Physical Input to Relays</div>

                </div>
                
              </div>
              

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
                
                {/* HMI Interface */}
                
              {/* Feedback System */}
                <div className={`p-5 ${config.cardBg} border-2 border-pink-500/50 rounded-xl text-center relative mt-10`}>
                  <div className="text-lg font-bold text-pink-300 mb-2">FEEDBACK SYSTEM</div>
                  <div className="text-sm text-slate-400 mb-3">Sensor & Data Acquisition</div>
                  <div className="text-xs text-slate-500">Real-time monitoring & analysis</div>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    <span className="px-2 py-1 bg-pink-900/30 text-pink-200 text-xs rounded">Sensor Data</span>
                    <span className="px-2 py-1 bg-red-900/30 text-pink-500-200 text-xs rounded">Status Reports</span>
                    <span className="px-2 py-1 bg-orange-900/30 text-pink-200 text-xs rounded">Feedback Loop</span>
                  </div>
                  <div className="mt-3 text-xs text-pink-400">← Data to Server →</div>
                  
                  {/* Connection lines */}
                 <div className="hidden  md:block absolute top-1/2 -right-30 w-30 h-0.5 bg-pink-500/30 transform -translate-y-1/2"></div>
                </div>
              
                {/* Connection Lines to RS485 */}
                <div className="flex justify-center gap-21">
                  <div className="h-35 w-0.5  bg-pink-500/30"></div>
                  <div className="h-60 w-0.5  bg-blue-500/30"></div>
                  <div className="h-35 w-0.5  bg-yellow-500/30"></div>
                </div>
              
                  {/* Control System */}
                  <div className={`p-5 ${config.cardBg} border-2 border-yellow-500/50 rounded-xl text-center relative mt-10`}>
                    <div className="text-lg font-bold text-yellow-300 mb-2">CONTROL SYSTEM</div>
                    <div className="text-sm text-slate-400 mb-3">Command & Automation</div>
                    <div className="text-xs text-slate-500">Process control & execution</div>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                      <span className="px-2 py-1 bg-yellow-50-900/30  text-yellow-200 text-xs rounded">Logic Control</span>
                      <span className="px-2 py-1 bg-amber-900/30 text-amber-200 text-xs rounded">Automation</span>
                      <span className="px-2 py-1 bg-orange-900/30 text-orange-200  text-xs rounded">Command Exec</span>
                    </div>
                    <div className="mt-3 text-xs text-yellow-400">← Listen from Server Port →</div>
                    
                    {/* Connection lines */}
                   <div className="hidden md:block absolute top-1/2 -left-30 w-30 h-0.5 bg-yellow-500/30  transform -translate-y-1/2"></div>
                  </div>
              </div>

                {/* Connection Lines to RS485 */}
                <div className="flex justify-center">
                  <div className="h-10 w-0.5 top-1/2 bg-blue-500/30"></div>
                </div>

                {/* Bottom Row - RS485 Board with 12 Slaves */}
                <div className={`p-6 ${config.cardBg} border-2 border-blue-500/50 rounded-2xl shadow-xl shadow-blue-900/30`}>
                  <div className="text-center mb-6">
                    <div className="text-xl font-bold text-blue-300 mb-2">RS485 NETWORK BUS</div>
                    <div className="text-sm text-slate-400">Master-Slave Communication Protocol</div>
                  </div>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`p-4 ${config.cardBg} border border-blue-500/40 rounded-xl text-center group hover:border-blue-400 transition-all duration-300`}>
                        <div className="text-sm font-bold text-blue-300">Slave {i + 1}</div>
                        <div className="text-xs text-slate-400">Servo Drive</div>
                        <div className="text-xs text-slate-500 mt-1">Address: {i+1}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-4 text-sm text-slate-400">
                    <span className="text-blue-300">RS485 Board</span> manages communication with all 12 slave devices
                  </div>
                </div>

                {/* Data Flow Indicators */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <div className="text-center text-sm text-slate-400">
                    <span className="text-slate-300 font-medium">Data Flow:</span> 
                    <span className="mx-3 text-green-400">HMI → Server</span> • 
                    <span className="mx-3 text-orange-400">Manual → Relays</span> • 
                    <span className="mx-3 text-cyan-400">RS232 → Server</span> • 
                    <span className="mx-3 text-blue-400">Server → RS485 → Slaves</span>
                  </div>
                </div>
   
            </div>
            </section>

            {/* Power Distribution Details */}
            <section className="mb-16">
              <h2 className={`text-2xl font-bold mb-8 uppercase tracking-wide border-b border-slate-700 pb-2 ${config.textPrimary}`}>
                POWER DISTRIBUTION & SAFETY
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Power Distribution */}
                <div className={`p-6 ${config.cardBg} border ${config.cardBorder} rounded-xl`}>
                  <h3 className="text-xl font-bold text-white mb-4">POWER SYSTEM</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-slate-300">Main Supply</span>
                      <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm">400V 3-Phase</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-slate-300">Control Voltage</span>
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">24V DC</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-slate-300">Breaker Protection</span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm">MCB & RCD</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-slate-300">Network Switch</span>
                      <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">Omada Managed</span>
                    </div>
                  </div>
                </div>

                {/* Safety & Control */}
                <div className={`p-6 ${config.cardBg} border ${config.cardBorder} rounded-xl`}>
                  <h3 className="text-xl font-bold text-white mb-4">SAFETY SYSTEMS</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">Emergency Stop Circuit</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">Safety Relay Monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">Overload Protection</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">Ground Fault Detection</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* System Features */}
            <section className="mb-12">
              <h2 className={`text-2xl font-bold mb-8 uppercase tracking-wide border-b border-slate-700 pb-2 ${config.textPrimary}`}>
                KEY FEATURES
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {title: "Real-time Inventory", desc: "Continuous weight monitoring with RS232 load cells", color: "green"},
                  {title: "Precision Dispensing", desc: "Servo-controlled bins with Modbus RTU accuracy", color: "blue"},
                  {title: "Automated Refill", desc: "Automatic reordering when stock reaches threshold", color: "purple"},
                  {title: "Network Integration", desc: "Omada switch for remote monitoring & control", color: "cyan"},
                  {title: "Fault Diagnostics", desc: "Comprehensive error reporting and logging", color: "yellow"},
                  {title: "Scalable Design", desc: "Modular architecture for easy expansion", color: "pink"}
                ].map((feature, index) => (
                  <div key={index} className={`group p-5 ${config.cardBg} border ${config.cardBorder} rounded-xl hover:scale-[1.02] transition-all duration-300`}>
                    <div className="flex items-center mb-3">
                      <div className={`w-3 h-3 bg-${feature.color}-500 rounded-full mr-3 group-hover:animate-pulse`}></div>
                      <h4 className={`text-lg font-bold text-${feature.color}-300`}>{feature.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications Table */}
            <section className={`mb-12 ${config.cardBg} border ${config.cardBorder} rounded-xl overflow-hidden`}>
              <div className="p-6 border-b border-slate-700">
                <h3 className={`text-xl font-bold ${config.textPrimary}`}>TECHNICAL SPECIFICATIONS</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-300 mb-3">HARDWARE SPECS</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Number of Bins</span>
                        <span className="text-white">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Control Voltage</span>
                        <span className="text-white">24V DC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Power Supply</span>
                        <span className="text-white">3× 400W SMPS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Communication</span>
                        <span className="text-white">RS485 + RS232</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-300 mb-3">PERFORMANCE</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Weighing Accuracy</span>
                        <span className="text-white">±0.1% FS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Response Time</span>
                        <span className="text-white">&lt; 100ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Baud Rate</span>
                        <span className="text-white">115200 bps</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Operating Temp</span>
                        <span className="text-white">0°C to 50°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}