import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Case studies / logos strip */}
        <section id="cases" className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 p-6">
              <div className="text-center text-sm text-neutral-600 dark:text-neutral-400">Trusted by teams building the future</div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-80">
                <div className="h-10 flex items-center justify-center font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">FinTechX</div>
                <div className="h-10 flex items-center justify-center font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">HealthSync</div>
                <div className="h-10 flex items-center justify-center font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">RetailPro</div>
                <div className="h-10 flex items-center justify-center font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">EduNova</div>
              </div>
            </div>
          </div>
        </section>

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
