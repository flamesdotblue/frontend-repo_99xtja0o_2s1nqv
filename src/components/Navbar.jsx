import { useState } from 'react';
import { Menu, X, Rocket, GraduationCap } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Case Studies', to: '/cases' },
    { label: 'Contact', to: '/contact' },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-indigo-600 dark:text-indigo-400'
        : 'text-neutral-700 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">Thamira Technologies</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <a
              href="#academy"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500 active:bg-indigo-700 transition-colors"
            >
              <GraduationCap size={16} />
              Explore Academy
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2 rounded-lg border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10'
                    }`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="#academy"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500 active:bg-indigo-700"
              >
                <GraduationCap size={16} />
                Explore Academy
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
