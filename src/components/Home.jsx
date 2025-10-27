import Hero from './Hero';
import Services from './Services';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />

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
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-white/90">
                  Talk to an expert
                </Link>
                <a href="#academy" className="inline-flex items-center justify-center rounded-md border border-white/30 text-white px-5 py-3 text-sm font-medium hover:bg-white/10">
                  View programs <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
