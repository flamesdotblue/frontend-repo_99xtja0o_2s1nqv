import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import { Briefcase, CheckCircle2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* About section */}
        <section id="about" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Thamira Technologies</h2>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We are a product-first engineering partner helping companies design, build, and scale
                  secure platforms. In parallel, our academy equips aspiring engineers with the practical
                  skills and mentorship to thrive in modern product teams.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Cloud-native architectures and API-first systems',
                    'Security-by-design with governance and compliance',
                    'Rapid iteration with CI/CD and strong observability',
                    'Mentor-led programs with real-world projects',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 text-green-600" size={18} />
                      <span className="text-neutral-700 dark:text-neutral-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 rounded-2xl bg-gradient-to-tr from-indigo-300/30 via-purple-300/30 to-pink-300/30 dark:from-indigo-800/30 dark:via-purple-800/30 dark:to-pink-800/30 blur-2xl" />
                <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center"><Briefcase size={18} /></div>
                    <div>
                      <div className="font-semibold">Our Approach</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">Outcome-driven delivery with knowledge transfer embedded.</div>
                    </div>
                  </div>
                  <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
                    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3"><div className="font-semibold">12+ years</div><div className="text-neutral-500">Domain expertise</div></div>
                    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3"><div className="font-semibold">40+ launches</div><div className="text-neutral-500">Across sectors</div></div>
                    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3"><div className="font-semibold">2k+ alumni</div><div className="text-neutral-500">Career shifts</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section id="cases" className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected Case Studies</h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">A snapshot of outcomes we delivered with our partners.</p>
              </div>
              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Start your project <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Payments Platform Re-architecture',
                  sector: 'FinTech',
                  result: '6x throughput, PCI-ready, zero downtime releases',
                },
                {
                  title: 'Patient Data Interoperability Layer',
                  sector: 'HealthTech',
                  result: 'HIPAA-aware APIs, FHIR adapters, audit trails',
                },
                {
                  title: 'Unified Commerce OMS',
                  sector: 'Retail',
                  result: '30% faster fulfillment, reliable inventory sync',
                },
              ].map((c) => (
                <div key={c.title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                  <div className="text-xs uppercase tracking-wide text-neutral-500">{c.sector}</div>
                  <div className="mt-1 font-semibold text-lg">{c.title}</div>
                  <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{c.result}</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-600 group-hover:gap-3 transition-all">
                    Read more <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s talk</h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Tell us a bit about your goals and we’ll reach out within one business day.</p>
                <div className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="flex items-center gap-2"><Mail size={16} /> hello@thamira.tech</div>
                  <div className="flex items-center gap-2"><Phone size={16} /> +1 (555) 012-3456</div>
                  <div className="flex items-center gap-2"><MapPin size={16} /> Remote-first • Global clients</div>
                </div>
              </div>
              <div>
                <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/60">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium" htmlFor="name">Name</label>
                      <input id="name" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>
                    <div>
                      <label className="text-sm font-medium" htmlFor="email">Email</label>
                      <input id="email" type="email" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium" htmlFor="subject">Subject</label>
                      <input id="subject" className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium" htmlFor="message">Message</label>
                      <textarea id="message" rows={5} required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>
                  </div>
                  <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-500 active:bg-indigo-700">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-indigo-300/50 dark:border-indigo-800/40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8 sm:p-10">
              <div className="absolute right-0 top-0 -mr-10 -mt-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold">Let’s accelerate your roadmap</h3>
                  <p className="mt-2 text-white/90">Speak to our team to scope your next release or get guidance on the right learning path.</p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-white/90">Talk to an expert</a>
                  <a href="#academy" className="inline-flex items-center justify-center rounded-md border border-white/30 text-white px-5 py-3 text-sm font-medium hover:bg-white/10">View programs</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
