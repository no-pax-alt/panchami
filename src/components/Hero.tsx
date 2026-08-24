import { motion } from 'framer-motion';
import { MapPin, GraduationCap, ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // Node configuration for the AI graphic representation
  const nodes = [
    { x: 100, y: 120, size: 6, delay: 0 },
    { x: 220, y: 80, size: 8, delay: 0.5 },
    { x: 300, y: 220, size: 10, delay: 0.2 },
    { x: 160, y: 300, size: 7, delay: 0.8 },
    { x: 80, y: 260, size: 5, delay: 1.1 },
    { x: 260, y: 360, size: 9, delay: 0.4 },
    { x: 380, y: 300, size: 6, delay: 0.7 },
    { x: 360, y: 110, size: 8, delay: 0.9 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
    { from: 5, to: 6 },
    { from: 2, to: 7 },
    { from: 7, to: 6 },
    { from: 1, to: 7 },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-radial from-white via-[#faf6f0] to-[#f5ebd9]/30 py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Opportunities</span>
            </motion.div>

            {/* Title & Headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
              >
                Panchami V C
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl font-medium text-brand"
              >
                B.Tech CSE (AI & Data Science) Student
              </motion.p>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-base sm:text-lg text-zinc-600 leading-relaxed"
            >
              I'm a Computer Science Engineering student specializing in Artificial Intelligence & Data Science, passionate about technology, programming, and building creative digital solutions.
            </motion.p>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 text-sm text-zinc-600 font-medium"
            >
              <div className="flex items-center space-x-2 bg-white border border-zinc-200/60 rounded-lg px-3 py-1.5 shadow-2xs">
                <GraduationCap className="h-4 w-4 text-brand" />
                <span>REVA University</span>
              </div>
              <div className="flex items-center space-x-2 bg-white border border-zinc-200/60 rounded-lg px-3 py-1.5 shadow-2xs">
                <MapPin className="h-4 w-4 text-brand" />
                <span>Bangalore, India</span>
              </div>
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center space-x-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/35 hover:-translate-y-0.5"
                aria-label="View portfolio projects"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center space-x-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-700 shadow-2xs transition-all hover:bg-zinc-50 hover:border-zinc-400 hover:-translate-y-0.5"
                aria-label="Scroll to contact information"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Visual SVG Neural/AI Graph Side */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-[420px] aspect-square rounded-2xl border border-zinc-200/60 bg-white/40 backdrop-blur-2xs p-6 shadow-xl shadow-zinc-200/40 relative overflow-hidden"
            >
              <svg className="w-full h-full" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting paths */}
                {connections.map((conn, idx) => {
                  const fromNode = nodes[conn.from];
                  const toNode = nodes[conn.to];
                  return (
                    <motion.line
                      key={`line-${idx}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="url(#lineGradient)"
                      strokeWidth="1.5"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 + idx * 0.1 }}
                    />
                  );
                })}

                 {/* Animated flowing data packets */}
                {connections.slice(0, 5).map((conn, idx) => {
                  const fromNode = nodes[conn.from];
                  const toNode = nodes[conn.to];
                  return (
                    <motion.circle
                      key={`packet-${idx}`}
                      r="3"
                      fill="#6f4e37"
                      animate={{
                        cx: [fromNode.x, toNode.x],
                        cy: [fromNode.y, toNode.y],
                      }}
                      transition={{
                        duration: 3 + idx * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.3,
                      }}
                    />
                  );
                })}

                {/* Nodes rendering */}
                {nodes.map((node, idx) => (
                  <g key={`node-${idx}`}>
                    {/* Glowing outer ring */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size + 6}
                      fill="#d4a373"
                      fillOpacity="0.15"
                      animate={{
                        scale: [1, 1.25, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: node.delay,
                      }}
                    />
                    {/* Node point */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size}
                      fill="#6f4e37"
                      className="cursor-pointer"
                      whileHover={{ scale: 1.4, fill: '#533827' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    />
                  </g>
                ))}

                {/* Gradients */}
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="450" y2="450" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6f4e37" />
                    <stop offset="1" stopColor="#d4a373" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Subtitle / tech details overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-2xs text-zinc-400 font-mono">
                <span>AI & DS EXPERIMENTAL SPACE</span>
                <span className="animate-pulse">● ACTIVE_STREAM</span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          onClick={() => scrollToSection('about')}
          className="cursor-pointer p-2 rounded-full border border-zinc-200 bg-white shadow-2xs hover:bg-zinc-50"
        >
          <svg className="h-4 w-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
