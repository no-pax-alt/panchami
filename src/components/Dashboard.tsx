import { useEffect, useRef, useState } from 'react';
import { BookOpen, Layers, Award, Milestone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  shouldStart: boolean;
}

function CountUp({ end, duration = 1.2, shouldStart }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const endVal = end;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad formula
      const currentCount = Math.round(endVal * (progress * (2 - progress)));

      if (frame < totalFrames) {
        setCount(currentCount);
        requestAnimationFrame(counter);
      } else {
        setCount(endVal);
      }
    };

    requestAnimationFrame(counter);
  }, [end, duration, shouldStart]);

  return <span>{count}</span>;
}

export default function Dashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      label: 'Certification',
      value: 1,
      icon: <Award className="h-6 w-6 text-brand" />,
      prefix: '0',
      description: 'Deloitte Cyber Security',
    },
    {
      label: 'Programming Languages',
      value: 3,
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      prefix: '0',
      description: 'Python, C, Ruby studies',
    },
    {
      label: 'Featured Projects',
      value: 3,
      icon: <Layers className="h-6 w-6 text-teal-600" />,
      prefix: '0',
      description: 'Application & Smart Tech',
    },
    {
      label: 'Degree in Progress',
      value: 1,
      icon: <Milestone className="h-6 w-6 text-indigo-600" />,
      prefix: '0',
      description: 'B.Tech CSE (AI & DS)',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-zinc-50/50 border-b border-zinc-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Personal Statistics</h2>
          <div className="mt-2 h-1 w-12 bg-brand rounded-full mx-auto"></div>
          <p className="mt-4 text-zinc-650 max-w-xl mx-auto text-sm sm:text-base">
            A metric overview summarizing my academic credentials, current languages, and engineering project files.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs text-center hover:border-zinc-300 hover:shadow-xs transition-all"
            >
              {/* Stat Icon Wrapper */}
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 mb-4 shadow-2xs">
                {stat.icon}
              </div>

              {/* Stat Number */}
              <div className="text-4xl font-extrabold text-zinc-900 tracking-tight">
                {stat.prefix}
                <CountUp end={stat.value} shouldStart={isInView} />
              </div>

              {/* Stat Labels */}
              <h3 className="mt-2 text-sm font-bold text-zinc-800 uppercase tracking-wider">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-2xs text-zinc-400 font-mono">
          * VALUES ACCORDING TO CURRENTLY VERIFIED SOURCE REPOSITORY DATA.
        </div>

      </div>
    </section>
  );
}
