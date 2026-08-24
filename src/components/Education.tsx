import { GraduationCap, School, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white border-b border-zinc-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Education</h2>
          <div className="mt-2 h-1 w-12 bg-brand rounded-full mx-auto"></div>
        </div>

        {/* Education Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl text-left border border-zinc-200/80 bg-zinc-50/30 rounded-2xl p-6 sm:p-8 shadow-2xs relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <School className="h-40 w-40 text-brand" />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              
              {/* Institution Icon */}
              <div className="flex-shrink-0 p-3 bg-white border border-zinc-200 rounded-xl shadow-2xs self-start">
                <School className="h-8 w-8 text-brand" />
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  <div className="inline-flex items-center space-x-1.5 rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-2xs font-semibold text-brand">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>Degree In Progress</span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-zinc-900 mt-2">
                    REVA University
                  </h3>
                  
                  <p className="text-sm font-semibold text-zinc-650 mt-1">
                    B.Tech — Computer Science Engineering (Artificial Intelligence & Data Science)
                  </p>
                </div>
                
                <div className="space-y-2 border-t border-zinc-200/60 pt-4 text-sm text-zinc-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-zinc-400" />
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                  <p>
                    <span className="font-semibold text-zinc-500">Academic Status:</span> Enrolled as a full-time engineering undergraduate.
                  </p>
                </div>

                <div className="text-2xs text-zinc-400 italic pt-2">
                  Academic metrics and graduation details will be updated as coursework progresses.
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
