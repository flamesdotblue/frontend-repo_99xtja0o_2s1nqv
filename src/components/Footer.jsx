export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-lg font-semibold">Thamira Technologies</div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Building resilient software and transforming careers.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-1 text-neutral-600 dark:text-neutral-400">
              <li><a href="#solutions" className="hover:text-neutral-900 dark:hover:text-white">Solutions</a></li>
              <li><a href="#academy" className="hover:text-neutral-900 dark:hover:text-white">Academy</a></li>
              <li><a href="#cases" className="hover:text-neutral-900 dark:hover:text-white">Case Studies</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>Email: hello@thamira.tech</li>
              <li>Phone: +1 (555) 012-3456</li>
              <li>Hours: Mon–Fri, 9am–6pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} Thamira Technologies. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
