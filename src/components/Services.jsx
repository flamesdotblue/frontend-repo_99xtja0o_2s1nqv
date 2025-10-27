import { Code, Shield, Users, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const enterprise = [
    {
      icon: <Code size={18} />,
      title: 'Product Engineering',
      desc: 'Greenfield builds, re-platforming, and API-first architectures with CI/CD.',
    },
    {
      icon: <Shield size={18} />,
      title: 'Security & Compliance',
      desc: 'Secure SDLC, audits, SSO/SAML, SOC2 alignment and governance by design.',
    },
    {
      icon: <Users size={18} />,
      title: 'Team Augmentation',
      desc: 'Elastic pods of senior engineers embedded with your product teams.',
    },
  ];

  const programs = [
    {
      icon: <GraduationCap size={18} />,
      title: 'Full-Stack Developer',
      desc: 'React, Node, databases and system design with production projects.',
    },
    {
      icon: <GraduationCap size={18} />,
      title: 'Data Engineering',
      desc: 'Pipelines, warehousing, and analytics with Python & cloud stacks.',
    },
    {
      icon: <GraduationCap size={18} />,
      title: 'DevOps & Cloud',
      desc: 'Containers, IaC, observability and reliability engineering workflows.',
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, duration: 0.5 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="solutions" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold tracking-tight">Enterprise Solutions</motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="mt-2 text-neutral-600 dark:text-neutral-400">
              From idea to impact, we architect secure, scalable platforms tailored to your domain.
            </motion.p>
            <motion.div
              className="mt-8 grid sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              {enterprise.map((itemData) => (
                <motion.div
                  key={itemData.title}
                  variants={item}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                    {itemData.icon}
                  </div>
                  <div className="mt-3 font-semibold">{itemData.title}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{itemData.desc}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              Book a discovery call
            </motion.a>
          </div>
          <div id="academy">
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold tracking-tight">Thamira Academy</motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="mt-2 text-neutral-600 dark:text-neutral-400">
              Industry-backed programs designed to transition you into high-growth tech roles.
            </motion.p>
            <motion.div
              className="mt-8 grid sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              {programs.map((itemData) => (
                <motion.div
                  key={itemData.title}
                  variants={item}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                    {itemData.icon}
                  </div>
                  <div className="mt-3 font-semibold">{itemData.title}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{itemData.desc}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 px-5 py-3 text-sm font-medium bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              Get program brochure
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
