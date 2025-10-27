import Hero from './Hero';
import Services from './Services';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const steps = [
    {
      title: 'Discover',
      desc: 'We align on goals, constraints, and success metrics with a short discovery sprint.',
    },
    {
      title: 'Design',
      desc: 'Service boundaries, data flows, and security gates are mapped with a pragmatic blueprint.',
    },
    {
      title: 'Deliver',
      desc: 'Ship value in small increments with CI/CD, clear demos, and continuous feedback.',
    },
    {
      title: 'Transfer',
      desc: 'Enable your team through pairing, docs, and training so you can run independently.',
    },
  ];

  const testimonials = [
    {
      quote:
        'They rescued a complex replatform in record time. Velocity went up and incidents went down.',
      author: 'Head of Engineering, FinTech',
    },
    {
      quote:
        'Our data pipelines became reliable and observable. They also mentored our junior devs brilliantly.',
      author: 'Director of Data, Retail',
    },
    {
      quote:
        'The academy track gave me the confidence and portfolio to switch careers into full‑stack.',
      author: 'Alumni, Full‑Stack Program',
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, duration: 0.6, ease: 'easeOut' },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <main>
      <Hero />
      <Services />

      {/* Process */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-neutral-50 dark:to-neutral-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="max-w-2xl"
          >
            <motion.h2 variants={item} className="text-2xl sm:text-3xl font-bold tracking-tight">A simple, proven process</motion.h2>
            <motion.p variants={item} className="mt-2 text-neutral-600 dark:text-neutral-400">
              Designed to minimize risk and maximize learning while shipping business value quickly.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur"
              >
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  <span className="h-6 w-6 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                    {i + 1}
                  </span>
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{s.desc}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-neutral-500">
                  <CheckCircle2 size={14} /> Milestone-based
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="max-w-2xl"
          >
            <motion.h2 variants={item} className="text-2xl sm:text-3xl font-bold tracking-tight">What partners and learners say</motion.h2>
            <motion.p variants={item} className="mt-2 text-neutral-600 dark:text-neutral-400">Outcomes, not buzzwords.</motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.figure key={t.author} variants={item} whileHover={{ y: -4 }} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} />
                </div>
                <blockquote className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">“{t.quote}”</blockquote>
                <figcaption className="mt-2 text-xs text-neutral-500">{t.author}</figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl border border-indigo-300/50 dark:border-indigo-800/40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute right-0 top-0 -mr-10 -mt-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
