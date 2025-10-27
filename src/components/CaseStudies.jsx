import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
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
      </div>
    </main>
  );
}
