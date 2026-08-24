import { Gem, Code2, Terminal, Cpu, AppWindow, Sparkles } from 'lucide-react';

export default function Skills() {
  const languagesStudied = [
    {
      name: 'Python',
      icon: <Terminal className="h-6 w-6 text-indigo-600" />,
      description: 'Used heavily for data structures, algorithm problem solving, and starting machine learning scripts.',
      tag: 'Currently Studying',
    },
    {
      name: 'C Programming',
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      description: 'Strengthening coding fundamentals, direct memory management concepts, and low-level architecture study.',
      tag: 'Currently Studying',
    },
    {
      name: 'Ruby',
      icon: <Gem className="h-6 w-6 text-rose-600" />,
      description: 'Exploring object-oriented scripting paradigms, backend conventions, and clean syntax principles.',
      tag: 'Currently Studying',
    },
  ];

  const areasOfInterest = [
    {
      name: 'Programming',
      icon: <Code2 className="h-5 w-5 text-indigo-500" />,
      description: 'Building clean, logic-driven scripts and solving computational challenges.',
    },
    {
      name: 'AI & Data Science',
      icon: <Cpu className="h-5 w-5 text-purple-500" />,
      description: 'Exploring statistical models, data analysis patterns, and neural network foundations.',
    },
    {
      name: 'Application Development',
      icon: <AppWindow className="h-5 w-5 text-cyan-500" />,
      description: 'Learning front-end layout structures, state management, and user interfaces.',
    },
    {
      name: 'Creative Technology',
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      description: 'Integrating hardware, software, and physical components to build responsive items.',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Skills & Interests</h2>
          <div className="mt-2 h-1 w-12 bg-brand rounded-full mx-auto"></div>
          <p className="mt-4 text-zinc-650 max-w-xl mx-auto text-sm sm:text-base">
            An overview of the programming languages I am actively learning and the technology areas I enjoy exploring.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch">
          
          {/* Languages Section (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="text-left mb-2">
              <h3 className="text-lg font-bold uppercase tracking-wider text-zinc-400">
                Programming Languages
              </h3>
              <p className="text-xs text-zinc-500 mt-1">Core languages currently being studied in my coursework</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 flex-1">
              {languagesStudied.map((lang, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xs hover:shadow-xs transition-all hover:border-zinc-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-3 bg-zinc-50 rounded-xl border border-zinc-150/40">
                      {lang.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-zinc-900">{lang.name}</h4>
                      <p className="text-sm text-zinc-600 mt-1 max-w-md">{lang.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 flex-shrink-0 self-start sm:self-center">
                    <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand ring-1 ring-inset ring-brand/20">
                      {lang.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Section (Right 5 Columns) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="text-left mb-2">
              <h3 className="text-lg font-bold uppercase tracking-wider text-zinc-400">
                Academic Areas of Interest
              </h3>
              <p className="text-xs text-zinc-500 mt-1">Fields of study and practice that captivate my curiosity</p>
            </div>

            <div className="grid grid-cols-1 gap-4 flex-1">
              {areasOfInterest.map((interest, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 rounded-2xl border border-zinc-200/60 bg-white p-4 shadow-2xs"
                >
                  <div className="flex-shrink-0 p-2.5 bg-zinc-50 rounded-lg border border-zinc-200/50 mt-0.5">
                    {interest.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-zinc-800">{interest.name}</h4>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                      {interest.description}
                    </p>
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
