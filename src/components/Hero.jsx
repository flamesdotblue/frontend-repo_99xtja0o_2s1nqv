import { Rocket, Building2, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/30 dark:via-neutral-950 dark:to-neutral-950" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 dark:border-indigo-500/20 bg-white/70 dark:bg-indigo-950/20 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
              <Rocket size={14} /> Enterprise Software + Tech Academy
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Build. Scale. Transform.
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
              Thamira Technologies partners with ambitious companies to deliver resilient software platforms
              while empowering talent through industry-ready training programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#solutions" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-500 active:bg-indigo-700">
                Explore Solutions
              </a>
              <a href="#academy" className="inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 px-5 py-3 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">
                Join the Academy
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="font-semibold">99.9% uptime</div>
                <div className="text-neutral-500 dark:text-neutral-400">Enterprise delivery</div>
              </div>
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="font-semibold">2000+ alumni</div>
                <div className="text-neutral-500 dark:text-neutral-400">Career transitions</div>
              </div>
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="font-semibold">ISO practices</div>
                <div className="text-neutral-500 dark:text-neutral-400">Secure by design</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 opacity-60 blur-3xl bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 rounded-full" />
            <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-6 shadow-xl">
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center"><Building2 size={18} /></div>
                  <div>
                    <div className="font-semibold">Custom Platforms</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Cloud-native apps, microservices, and integrations for scale.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-600 text-white flex items-center justify-center"><GraduationCap size={18} /></div>
                  <div>
                    <div className="font-semibold">Career Tracks</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Full-stack, data engineering, DevOps and QA with mentorship.</div>
                  </div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200/60 dark:border-indigo-800/40 p-4">
                  <div className="text-sm text-neutral-700 dark:text-neutral-300">
                    "Thamira accelerated our roadmap by 6 months while training our internal team to own the platform."
                  </div>
                  <div className="mt-2 text-xs text-neutral-500">CTO, FinTech Scale-up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
