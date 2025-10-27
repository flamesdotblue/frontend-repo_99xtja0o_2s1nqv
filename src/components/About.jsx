import { Briefcase, CheckCircle2, Shield, Target, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield size={18} />, title: 'Security first', desc: 'Threat modeling, least‑privilege, and compliance baked into the lifecycle.'
    },
    {
      icon: <Target size={18} />, title: 'Outcomes over output', desc: 'Ship value in slices, measure impact, iterate with feedback.'
    },
    {
      icon: <Users size={18} />, title: 'Knowledge transfer', desc: 'We enable your teams through pairing, docs, and workshops.'
    },
  ];

  const milestones = [
    { year: '2013', text: 'Founded with a focus on reliable platforms and pragmatic training.' },
    { year: '2017', text: 'Scaled to multi‑region delivery; launched first academy tracks.' },
    { year: '2021', text: 'Expanded security practice and data engineering guild.' },
    { year: '2024', text: '2000+ alumni; 40+ launches across FinTech, Health, and Retail.' },
  ];

  return (
    <main className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Thamira Technologies</h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We are a product-first engineering partner helping companies design, build, and scale secure platforms. In parallel,
              our academy equips aspiring engineers with the practical skills and mentorship to thrive in modern product teams.
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

        {/* Values */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Our values</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
                <div className="h-10 w-10 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center">{v.icon}</div>
                <div className="mt-3 font-semibold">{v.title}</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Milestones</h2>
          <ol className="mt-4 space-y-3">
            {milestones.map((m) => (
              <li key={m.year} className="flex gap-4 items-start">
                <div className="mt-0.5 h-6 min-w-[3rem] rounded-md bg-indigo-600 text-white text-xs font-semibold inline-flex items-center justify-center">{m.year}</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{m.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
