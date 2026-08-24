import { ShieldCheck, Award, Lock } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white border-b border-zinc-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Certifications</h2>
          <div className="mt-2 h-1 w-12 bg-brand rounded-full mx-auto"></div>
        </div>

        {/* Card Layout */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-linear-to-b from-white to-zinc-50/50 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              
              {/* Certificate Badge Icon */}
              <div className="flex-shrink-0 p-4 bg-brand/10 rounded-2xl border border-brand/20 relative">
                <ShieldCheck className="h-10 w-10 text-brand" />
                <Award className="h-4 w-4 text-[#c69c6d] absolute -top-1 -right-1 bg-white rounded-full shadow-xs" />
              </div>

              {/* Certificate Details */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="inline-flex items-center space-x-1 rounded-full bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 text-2xs font-semibold text-zinc-650">
                  <Lock className="h-3 w-3 text-zinc-400" />
                  <span>Verified Credential</span>
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900">
                  Deloitte — Cyber Security Certificate
                </h3>
                
                <div className="space-y-1 text-sm text-zinc-600">
                  <p>
                    <span className="font-semibold text-zinc-500">Issuer:</span> Deloitte
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-500">Focus Area:</span> Cyber Security Core Principles
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-500">Credential Type:</span> Professional Certificate
                  </p>
                </div>
                
                <div className="pt-2 text-2xs text-zinc-400 italic">
                  Credential ID and URLs are omitted in accordance with security disclosure settings.
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
