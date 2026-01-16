"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { embedded, slugify } from '../projects/embedded';

const modules = [
  { id: "embedded" as const, title: "Embedded Systems" },
  { id: "full-stack" as const, title: "Full Stack" },
  { id: "graphic-design" as const, title: "Graphic Design" },
  { id: "home-lab" as const, title: "Home Lab" }
];

// Centralized full-stack design configuration for all modules
const fullStackDesign = {
  bg: "bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900",
  navBorder: "border-blue-500/30",
  navActive: "bg-blue-500 text-white",
  navInactive: "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-blue-300",
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
  emptyIcon: "💻",
  emptyText: "// No projects available for this category yet."
};

const moduleIcons = {
  embedded: "⚙️",
  'full-stack': "💻",
  'graphic-design': "🎨",
  'home-lab': "🖥️"
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeModule, setActiveModule] = useState<'embedded' | 'full-stack' | 'graphic-design' | 'home-lab'>('embedded');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = embedded; // using embedded dataset for now
  const filteredProjects = projects.filter(project =>
    activeModule === 'embedded' ? project.module === 'embedded' : project.module === activeModule
  );

  const config = fullStackDesign; // Use the same design for all modules
  const featuredProject = filteredProjects.find(p => p.featured);
  const minorProjects = filteredProjects.filter(p => !p.featured);
  const moduleIcon = moduleIcons[activeModule];

  return (
    <section id="projects" className={`min-h-screen transition-all duration-500 ${config.bg}`}>
      <div className="container mx-auto px-6">

        {/* NAVIGATION BAR */}
        <div className={`mb-4 sticky top-0 backdrop-blur-sm py-1 z-20 border-y ${config.navBorder}`}>
          <div className="flex gap-1">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`flex-1 py-3 px-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 relative overflow-hidden border-l first:border-l-0 ${
                  activeModule === module.id
                    ? config.navActive
                    : `${config.navInactive} border-slate-700`
                }`}
              >
                <span className="relative z-10">{module.title}</span>
                {activeModule === module.id && (
                  <div className="absolute inset-0 bg-linear-to-r from-current to-current opacity-20"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID - FEATURED LEFT, MINOR RIGHT (3-COL) */}
        <div className={`grid auto-rows-fr lg:grid-cols-5 gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* LEFT - FEATURED PROJECT (wider) */}
          {featuredProject && (
            <div className="group cursor-pointer h-full lg:col-span-2">
              <Link href={`/projects/embedded/${slugify(featuredProject.title)}`}>
                <div className={`${config.cardBg} border-2 ${config.cardBorder} transition-all duration-300 group-hover:${config.hoverBorder} group-hover:shadow-2xl group-hover:${config.hoverShadow} relative overflow-hidden rounded-lg h-full flex flex-col`}>
                
                <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-bl ${config.accentGradient}`}></div>
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr ${config.accentGradient}`}></div>
                
                  <div
                    className={`relative h-56 md:h-64 border-b-2 ${config.cardBorder} group-hover:${config.hoverBorder}/50 overflow-hidden`}
                    style={{ backgroundImage: `url(${featuredProject.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                  <div className="absolute inset-0 bg-linear-to-br from-black/50 to-black/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {moduleIcon}
                  </div>
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: config.gridPattern, backgroundSize: '20px 20px'}}></div>
                  
                  <div className="absolute top-6 right-6 bg-black/90 border-2 px-4 py-2 rounded">
                    <span className={`font-mono text-base font-bold ${config.badgeText}`}>★ FEATURED</span>
                  </div>
                </div>

                <div className="p-6 relative flex flex-col flex-1">
                  <div className="inline-block mb-4 bg-black/80 border px-3 py-1 rounded w-fit">
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${config.badgeText}`}>{featuredProject.category}</span>
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 uppercase tracking-wide leading-tight group-hover:${config.textAccent} transition-colors ${config.textPrimary}`}>
                    {featuredProject.title}
                  </h3>

                  <p className={`text-sm mb-6 leading-relaxed font-light ${config.textSecondary} flex-1`}>
                    {featuredProject.description}
                  </p>

                  <div className="h-px bg-linear-to-r from-transparent via-current to-transparent opacity-20 mb-4"></div>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech: string, idx: number) => (
                      <span key={idx} className={`px-2 py-1 bg-black/50 border text-xs uppercase tracking-wide hover:${config.hoverBorder}/50 hover:${config.textAccent} transition-colors rounded ${config.textSecondary}`} style={{ borderColor: 'inherit' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </Link>
            </div>
          )}

          {/* RIGHT - MINOR PROJECTS (3-COL) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
            {minorProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer h-full">
                <Link href={`/projects/embedded/${slugify(project.title)}`}>
                  <div className={`${config.cardBg} border-2 ${config.cardBorder} transition-all duration-300 group-hover:${config.hoverBorder} group-hover:shadow-xl group-hover:${config.hoverShadow} relative overflow-hidden rounded-lg h-full flex flex-col`}>
                  <div className={`absolute top-0 right-0 w-12 h-12 bg-linear-to-bl ${config.accentGradient}`}></div>
                  <div className={`absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr ${config.accentGradient}`}></div>
                  
                  <div
                    className={`relative h-20 md:h-24 border-b-2 ${config.cardBorder} group-hover:${config.hoverBorder}/50 overflow-hidden`}
                    style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-black/50 to-black/80"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                      {moduleIcon}
                    </div>
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: config.gridPattern, backgroundSize: '20px 20px'}}></div>
                  </div>

                  <div className="p-3 relative flex flex-col flex-1">
                    <div className="inline-block mb-2 bg-black/80 border px-1.5 py-0.5 rounded">
                      <span className={`font-mono text-xs font-bold uppercase tracking-wider ${config.badgeText}`}>{project.category}</span>
                    </div>

                    <h3 className={`text-xs font-bold mb-1 uppercase tracking-wide leading-tight group-hover:${config.textAccent} transition-colors ${config.textPrimary} line-clamp-2`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs mb-2 leading-relaxed font-light ${config.textSecondary} line-clamp-3 flex-1`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech: string, idx: number) => (
                        <span key={idx} className={`px-1 py-0.5 bg-black/50 border text-xs uppercase tracking-wide hover:${config.hoverBorder}/50 hover:${config.textAccent} transition-colors rounded ${config.textSecondary} line-clamp-1`} style={{ borderColor: 'inherit' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className={`text-center py-16 border-2 border-dashed rounded-lg ${config.cardBorder}`}>
            <div className="text-6xl mb-4 opacity-30">{config.emptyIcon}</div>
            <h3 className={`text-xl font-bold mb-2 uppercase tracking-wider ${config.textPrimary}`}>No Projects Found</h3>
            <p className={config.textSecondary}>{config.emptyText}</p>
          </div>
        )}

      </div>
    </section>
  );
}

// Add slugify function if not already there
// slugify is provided by `app/projects/embedded.ts` — no local duplicate needed