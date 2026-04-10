export function Footer() {
  return (
    <footer className="border-t border-ghost-100 py-10">
      <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-12 flex flex-col md:flex-row items-start justify-between gap-10">
        <span className="text-xs tracking-widest uppercase text-muted">
          © 2026 The Digital Archivist. Engineered with precision.
        </span>

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Connect column */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
              Connect
            </span>
            {[
              { label: "GitHub", href: "https://github.com/marcellopz" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/marcellopz/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact column */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
              Contact
            </span>
            <a
              href="mailto:marcellopz8@gmail.com"
              className="text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors"
            >
              marcellopz8@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
