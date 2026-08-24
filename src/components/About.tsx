import { User, Calendar, MapPin, GraduationCap, School } from 'lucide-react';

export default function About() {
  const profileDetails = [
    { icon: <User className="h-5 w-5 text-brand" />, label: 'Name', value: 'Panchami V C' },
    { icon: <Calendar className="h-5 w-5 text-brand" />, label: 'Age', value: '19 Years Old' },
    { icon: <MapPin className="h-5 w-5 text-brand" />, label: 'Location', value: 'Bangalore, India' },
    { icon: <GraduationCap className="h-5 w-5 text-brand" />, label: 'Education', value: 'B.Tech CSE — AI & Data Science' },
    { icon: <School className="h-5 w-5 text-brand" />, label: 'University', value: 'REVA University' },
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">About Me</h2>
          <div className="mt-2 h-1 w-12 bg-brand rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Bio text block (left side) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xl font-semibold text-zinc-900">
              Curious Learner & Aspiring Engineer
            </h3>
            <p className="text-zinc-650 leading-relaxed text-base sm:text-lg">
              As a Computer Science Engineering student specializing in Artificial Intelligence and Data Science at REVA University, I am driven by an intense curiosity about how modern data-driven systems shape our world. My academic journey focuses on understanding computational theories and applying programming frameworks to solve real-world problems.
            </p>
            <p className="text-zinc-650 leading-relaxed text-base sm:text-lg">
              I believe in the power of continuous learning and hands-on experimentation. Whether it is coding in Python, studying cybersecurity concepts, or exploring hardware and smart technologies, I approach learning with discipline and enthusiasm. I seek to build an engineering foundation that prepares me for impact-focused technology internships and future professional endeavors.
            </p>
          </div>

          {/* Quick Info Grid (right side) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50/50 p-6 sm:p-8 shadow-2xs">
              <h4 className="text-sm font-bold tracking-wider text-zinc-400 uppercase text-left mb-6">
                Profile Details
              </h4>
              <div className="space-y-4">
                {profileDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 border-b border-zinc-250/40 pb-3 last:border-0 last:pb-0 text-left"
                  >
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg border border-zinc-200/50 shadow-2xs">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        {detail.label}
                      </span>
                      <span className="text-base font-semibold text-zinc-800">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
