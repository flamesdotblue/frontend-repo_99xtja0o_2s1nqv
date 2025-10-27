import { Mail, Phone, MapPin, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const reasons = [
    'Scope a new build or critical re-platform',
    'Audit security, performance, or developer experience',
    'Upskill your team with targeted workshops',
  ];

  const faqs = [
    { q: 'How soon can you start?', a: 'Typically within 1–2 weeks. For urgent engagements we can mobilize a small pod faster.' },
    { q: 'Do you work with startups or only enterprises?', a: 'Both. We adapt scope and processes to your stage while keeping quality high.' },
    { q: 'Is the academy beginner friendly?', a: 'Yes. We have foundational tracks and a screening call to place you correctly.' },
  ];

  return (
    <main className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s talk</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">Tell us a bit about your goals and we’ll reach out within one business day.</p>
            <div className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2"><Mail size={16} /> hello@thamira.tech</div>
              <div className="flex items-center gap-2"><Phone size={16} /> +1 (555) 012-3456</div>
              <div className="flex items-center gap-2"><MapPin size={16} /> Remote-first • Global clients</div>
            </div>

            <div className="mt-8">
              <div className="font-semibold">Common reasons to reach out</div>
              <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-green-600" size={16} />{r}</li>
                ))}
              </ul>
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

            {/* FAQ */}
            <div className="mt-8">
              <div className="flex items-center gap-2 font-semibold"><HelpCircle size={18} /> Frequently asked questions</div>
              <div className="mt-3 divide-y divide-neutral-200 dark:divide-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-800">
                {faqs.map((f) => (
                  <details key={f.q} className="p-4 group">
                    <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                      {f.q}
                      <span className="ml-4 text-neutral-400 group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
