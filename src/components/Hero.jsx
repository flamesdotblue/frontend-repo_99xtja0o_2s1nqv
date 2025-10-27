import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Building2, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 3D Spline background */}
      <div className="relative h-[80vh] w-full">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to ensure text contrast; does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950/80" />
        {/* Headline content centered over Spline */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 dark:border-indigo-500/20 bg-white/70 dark:bg-indigo-950/20 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 backdrop-blur">
                <Rocket size={14} /> Enterprise Software + Tech Academy
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Build. Scale. Transform.
              </h1>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                Thamira Technologies partners with ambitious companies to deliver resilient software platforms
                while empowering talent through industry-ready training programs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-500 active:bg-indigo-700"
                >
                  Explore Solutions
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#academy"
                  className="inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 px-5 py-3 text-sm font-medium bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:bg-neutral-50 dark:hover:bg-neutral-900"
                >
                  Join the Academy
                </motion.a>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm"
              >
                <StatCard title="99.9% uptime" subtitle="Enterprise delivery" />
                <StatCard title="2000+ alumni" subtitle="Career transitions" />
                <StatCard title="ISO practices" subtitle="Secure by design" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right-side feature callouts under hero for extra depth */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 -mt-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-6 shadow-xl backdrop-blur"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-10 opacity-60 blur-3xl bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 rounded-full" />
            <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-6 shadow-xl backdrop-blur">
              <div className="grid gap-4">
                <FeatureLine title="Rapid delivery" subtitle="Ship value in small increments with CI/CD and continuous feedback." />
                <FeatureLine title="Secure by design" subtitle="Security gates, SSO/SAML, and governance aligned with ISO practices." />
                <FeatureLine title="Mentorship culture" subtitle="We transfer knowledge as we build so your team can run independently." />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 bg-white/70 dark:bg-neutral-900/60 backdrop-blur"
    >
      <div className="font-semibold">{title}</div>
      <div className="text-neutral-500 dark:text-neutral-400 text-sm">{subtitle}</div>
    </motion.div>
  );
}

function FeatureLine({ title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600" />
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</div>
      </div>
    </div>
  );
}
