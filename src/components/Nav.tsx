import { greeting, socialLinks } from "@/data/portfolio";

const links = [
  { href: "#log", label: "log" },
  { href: "#builds", label: "builds" },
  { href: "#manifest", label: "manifest" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/60 bg-ink/85 backdrop-blur">
      <nav className="container-shell flex h-14 items-center justify-between">
        <a href="#top" className="font-mono text-sm text-text">
          <span className="text-stable">~</span>/{greeting.displayName.toLowerCase()}
        </a>
        <ul className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wide text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-muted transition-colors hover:text-text"
        >
          github &#8599;
        </a>
      </nav>
    </header>
  );
}
