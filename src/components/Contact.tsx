import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Github, Linkedin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNum = '+91 96636 82772';
  const emailVal = 'vcpanchami@gmail.com';

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-zinc-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Contact</h2>
          <div className="mt-2 h-1 w-12 bg-brand rounded-full mx-auto"></div>
          <p className="mt-4 text-zinc-650 max-w-xl mx-auto text-sm sm:text-base">
            Get in touch for placements, academic collaboration, or smart technology project discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-bold text-zinc-900">Reach Out Directly</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Feel free to use the phone or email markers below to contact me directly.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4 pt-2">
                
                {/* Location */}
                <div className="flex items-center space-x-4 rounded-xl border border-zinc-200 bg-zinc-50/50 p-4">
                  <div className="p-2.5 bg-white border border-zinc-200 rounded-lg text-brand shadow-2xs">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-2xs font-bold text-zinc-400 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-zinc-800">Bangalore, India</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/50 p-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2.5 bg-white border border-zinc-200 rounded-lg text-brand shadow-2xs">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-2xs font-bold text-zinc-400 uppercase tracking-wider">Phone</span>
                      <a href={`tel:${phoneNum.replace(/\s+/g, '')}`} className="text-sm font-semibold text-zinc-800 hover:text-brand transition-colors">
                        {phoneNum}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(phoneNum, 'phone')}
                    className="p-2 text-zinc-400 hover:text-zinc-700 bg-white border border-zinc-200 rounded-lg shadow-2xs"
                    aria-label="Copy phone number"
                  >
                    {copiedText === 'phone' ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/50 p-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2.5 bg-white border border-zinc-200 rounded-lg text-brand shadow-2xs">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-2xs font-bold text-zinc-400 uppercase tracking-wider">Email</span>
                      <a href={`mailto:${emailVal}`} className="text-sm font-semibold text-zinc-800 hover:text-brand transition-colors">
                        {emailVal}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(emailVal, 'email')}
                    className="p-2 text-zinc-400 hover:text-zinc-700 bg-white border border-zinc-200 rounded-lg shadow-2xs"
                    aria-label="Copy email address"
                  >
                    {copiedText === 'email' ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

              </div>
            </div>

            {/* Social Media Link Placeholders */}
            <div className="text-left space-y-3 pt-4 border-t border-zinc-150">
              <span className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">Social Channels</span>
              <div className="flex space-x-3">
                <div className="relative group">
                  <button
                    disabled
                    className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-400 cursor-not-allowed transition-all"
                    aria-label="GitHub link coming soon"
                  >
                    <Github className="h-5 w-5" />
                  </button>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 rounded-lg bg-zinc-900 px-2 py-1 text-3xs font-semibold text-white transition-all group-hover:scale-100 whitespace-nowrap">
                    GitHub Coming Soon
                  </span>
                </div>
                <div className="relative group">
                  <button
                    disabled
                    className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-400 cursor-not-allowed transition-all"
                    aria-label="LinkedIn link coming soon"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 rounded-lg bg-zinc-900 px-2 py-1 text-3xs font-semibold text-white transition-all group-hover:scale-100 whitespace-nowrap">
                    LinkedIn Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form UI (Right Column) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/20 p-6 sm:p-8 h-full flex flex-col justify-center">
              <h3 className="text-lg font-bold text-zinc-900 text-left mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                  <span className="inline-flex items-center justify-center p-2 bg-emerald-100 text-emerald-800 rounded-full mb-2">
                    <Check className="h-6 w-6" />
                  </span>
                  <h4 className="text-base font-bold text-emerald-950">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-850">
                    Thank you. The mock form demo submission has been captured.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-2xs focus:border-brand focus:ring-1 focus:ring-brand focus:outline-hidden"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-2xs focus:border-brand focus:ring-1 focus:ring-brand focus:outline-hidden"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="form-msg" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      id="form-msg"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message details here..."
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-2xs focus:border-brand focus:ring-1 focus:ring-brand focus:outline-hidden resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center space-x-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-all hover:bg-brand-hover hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-brand focus:ring-offset-2"
                  >
                    <span>Submit Message</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
