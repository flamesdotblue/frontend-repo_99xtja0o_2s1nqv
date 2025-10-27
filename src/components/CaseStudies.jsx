import { ArrowRight, Tags, Clock, BarChart3 } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    { title: 'Payments Platform Re-architecture', sector: 'FinTech', result: '6x throughput, PCI-ready, zero downtime releases' },
    { title: 'Patient Data Interoperability Layer', sector: 'HealthTech', result: 'HIPAA-aware APIs, FHIR adapters, audit trails' },
    { title: 'Unified Commerce OMS', sector: 'Retail', result: '30% faster fulfillment, reliable inventory sync' },
    { title: 'IoT Fleet Telemetry Lake', sector: 'Mobility', result: '99.9% ingestion uptime, real-time analytics' },
    { title: 'Risk Scoring Engine', sector: 'InsurTech', result: 'Model governance, explainability, and monitoring' },
    { title: 'CRM to Data Warehouse', sector: 'SaaS', result: 'ELT pipelines, dimensional models, BI self-serve' },
  ];

  const highlights = [
    { icon: <Clock size={16} />, title: 'Faster time to value', text: 'Ship weekly with CI/CD and trunk-based development.' },
    { icon: <BarChart3 size={16} />, title: 'Measurable outcomes', text: 'Define KPIs and track improvements with dashboards.' },
    { icon: <Tags size={16} />, title: 'Domain expertise', text: 'FinTech, Health, Retail, Mobility, and SaaS patterns.' },
  ];

  return (
    <main className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Case Studies</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">A snapshot of outcomes we delivered with our partners.</p>
          </div>
        </div>

        {/* Filters (non-functional UI) */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {['All', 'FinTech', 'HealthTech', 'Retail', 'Mobility', 'SaaS'].map((f, i) => (
            <button key={f} className={`rounded-full border px-3 py-1 ${i === 0 ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900'}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
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

        {/* How we work */}
        <section className="mt-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
          <h2 className="text-xl font-semibold">How we deliver impact</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">{h.icon}</div>
                <div className="mt-2 font-medium">{h.title}</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{h.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
