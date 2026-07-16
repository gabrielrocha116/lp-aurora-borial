import { footerLinks } from "@/data/mock";
import { socialIcons } from "@/components/icons";

const columns: { title: string; key: keyof typeof footerLinks }[] = [
  { title: "Product", key: "product" },
  { title: "Company", key: "company" },
  { title: "Legal", key: "legal" },
];

const socials: { label: string; key: keyof typeof socialIcons; href: string }[] = [
  { label: "X", key: "X", href: "#" },
  { label: "Instagram", key: "IG", href: "#" },
  { label: "YouTube", key: "YT", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-void px-4 pt-20 pb-10 sm:px-6">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-aurora opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-xl -translate-x-1/2 rounded-full bg-aurora-violet/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,0.9fr)]">
          <div>
            <a href="#hero" className="focus-ring flex items-center gap-2 rounded-full">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2.5l1.8 5.4 5.7.1-4.6 3.5 1.7 5.5L12 13.7l-4.6 3.3 1.7-5.5-4.6-3.5 5.7-.1L12 2.5Z"
                  fill="url(#footer-star)"
                />
                <defs>
                  <linearGradient id="footer-star" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0" stopColor="#4ADE80" />
                    <stop offset="0.5" stopColor="#A855F7" />
                    <stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display text-xl font-semibold text-text-primary">Nordr</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-text-secondary">
              Live aurora tracking for people who chase the sky.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.key];
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    className="focus-ring glass-panel card-hover flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text-primary"
                    aria-label={s.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.key}>
              <h3 className="text-xs font-medium tracking-wide text-text-secondary uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks[col.key].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="focus-ring rounded text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-glass-border pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Nordr. All rights reserved.</span>
          <span>Made for the midnight sky.</span>
          <a
            href="#hero"
            className="focus-ring flex items-center gap-1.5 self-start rounded-full text-text-secondary transition-colors hover:text-text-primary sm:self-auto"
          >
            Back to top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
