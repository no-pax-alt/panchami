import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Smartphone, Lightbulb, Grid, X, Info } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  type: string;
  category: string;
  tagline: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  svgBg: React.ReactNode;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'thynkbyte',
      title: 'ThynkByte',
      type: 'Mobile Application',
      category: 'Mobile App',
      tagline: 'An engineered mobile application project.',
      description: 'A mobile-first solution designed to address specific software utility requirements. Full project assets and details will be updated here.',
      details: [
        'Development Stage: Initial Prototype',
        'Target Platform: Mobile OS (iOS/Android UI)',
        'Technologies: Mobile Development Frameworks (React Native/Kotlin study)',
      ],
      icon: <Smartphone className="h-6 w-6 text-brand" />,
      svgBg: (
        <svg className="w-full h-full text-[#f5ebe6]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="currentColor" fillOpacity="0.4" />
          <rect x="75" y="40" width="50" height="120" rx="8" stroke="#6f4e37" strokeWidth="3" fill="white" />
          <circle cx="100" cy="148" r="4" fill="#c69c6d" />
          <line x1="90" y1="48" x2="110" y2="48" stroke="#f5ebe6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="80" r="16" fill="#f5ebe6" fillOpacity="0.8" />
          <path d="M92 105 H108 M92 115 H108" stroke="#6f4e37" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'lumisense',
      title: 'LumiSense',
      type: 'Smart Lamp',
      category: 'Smart/Creative Technology',
      tagline: 'An interactive physical computing/hardware concept.',
      description: 'A smart hardware project that integrates responsive controls with environment sensors. Source code and assembly guides will be posted below.',
      details: [
        'Development Stage: Hardware Testing',
        'Sensors: Ambient light intensity detectors',
        'Core Objective: Intelligent energy-efficient lighting adaptation',
      ],
      icon: <Lightbulb className="h-6 w-6 text-amber-650" />,
      svgBg: (
        <svg className="w-full h-full text-amber-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="currentColor" fillOpacity="0.3" />
          <path d="M100 45 C80 45 70 65 70 85 C70 100 82 110 90 120 V135 H110 V120 C118 110 130 100 130 85 C130 65 120 45 100 45 Z" fill="white" stroke="#c69c6d" strokeWidth="3" />
          <rect x="92" y="135" width="16" height="15" fill="#6f4e37" rx="2" />
          <line x1="100" y1="20" x2="100" y2="35" stroke="#c69c6d" strokeWidth="3" strokeLinecap="round" />
          <line x1="140" y1="45" x2="128" y2="55" stroke="#c69c6d" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="45" x2="72" y2="55" stroke="#c69c6d" strokeWidth="3" strokeLinecap="round" />
          <line x1="90" y1="142" x2="110" y2="142" stroke="#6f4e37" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'graphicseditor',
      title: '2D Graphics Editor',
      type: 'Graphics / Creative Software',
      category: 'Creative Software',
      tagline: 'A lightweight 2D graphics manipulation program.',
      description: 'A desktop/web-based utility engineered to display vector coordinates, edit simple canvas shapes, and export visual elements.',
      details: [
        'Development Stage: Core Logic Built',
        'Features: Shape drawing (circles, rectangles), clear, and canvas refreshing',
        'Core Principles: Computer Graphics rendering math and memory buffers',
      ],
      icon: <Grid className="h-6 w-6 text-brand" />,
      svgBg: (
        <svg className="w-full h-full text-[#f5ebe6]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="currentColor" fillOpacity="0.4" />
          <rect x="40" y="40" width="120" height="120" rx="4" stroke="#6f4e37" strokeWidth="2" fill="white" strokeDasharray="4 4" />
          <circle cx="70" cy="70" r="20" stroke="#6f4e37" strokeWidth="3" fill="#faf6f0" />
          <rect x="100" y="90" width="40" height="40" stroke="#533827" strokeWidth="3" fill="#faf6f0" fillOpacity="0.5" />
          <line x1="40" y1="40" x2="160" y2="160" stroke="#f5ebe6" strokeWidth="1.5" />
          <circle cx="100" cy="90" r="4" fill="#c69c6d" />
          <circle cx="140" cy="130" r="4" fill="#c69c6d" />
        </svg>
      ),
    },
  ];

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-20 bg-zinc-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Featured Projects</h2>
          <div className="mt-2 h-1 w-12 bg-brand rounded-full mx-auto"></div>
          <p className="mt-4 text-zinc-650 max-w-xl mx-auto text-sm sm:text-base">
            Academic and creative development projects displaying practical software, systems, and engineering fundamentals.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* SVG Graphic / Image Placeholder */}
              <div className="relative aspect-video w-full border-b border-zinc-150 overflow-hidden bg-zinc-50 flex items-center justify-center">
                {proj.svgBg}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-md bg-white border border-zinc-250/50 px-2 py-1 text-xs font-semibold text-zinc-700 shadow-2xs">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {proj.icon}
                    <h3 className="text-lg font-bold text-zinc-900">{proj.title}</h3>
                  </div>
                  <p className="text-xs text-brand font-medium tracking-wide uppercase">
                    {proj.type}
                  </p>
                  <p className="text-sm text-zinc-650 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-2xs transition-all hover:bg-zinc-800 focus:outline-hidden focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
                    aria-label={`Open details for ${proj.title}`}
                  >
                    <Info className="h-4 w-4" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs">
            <div
              className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-zinc-100 animate-in fade-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 focus:outline-hidden focus:ring-2 focus:ring-brand"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Body */}
              <div className="space-y-6 text-left">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    {selectedProject.icon}
                    <h3 id="modal-title" className="text-2xl font-bold text-zinc-900">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <p className="text-sm text-brand font-semibold uppercase tracking-wider">
                    {selectedProject.type}
                  </p>
                </div>

                {/* SVG Visual Mini Placeholder */}
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-200/60 bg-zinc-50 flex items-center justify-center">
                  {selectedProject.svgBg}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">About the Project</h4>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Project Highlights</h4>
                    <ul className="mt-2 space-y-1.5">
                      {selectedProject.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-zinc-650">
                          <span className="text-brand mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Placeholders Actions */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-150">
                  <div className="relative group">
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center space-x-2 rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-xs font-semibold text-zinc-400 cursor-not-allowed"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code coming soon</span>
                    </button>
                  </div>
                  <div className="relative group">
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center space-x-2 rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-xs font-semibold text-zinc-400 cursor-not-allowed"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo coming soon</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
