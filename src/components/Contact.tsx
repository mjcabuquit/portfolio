import { greeting, socialLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-line/60 py-20">
      <div className="container-shell">
        <p className="eyebrow">contact.sh</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">Let&apos;s talk</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
          Open to Android, full-stack, and mobile-focused roles. Fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-col gap-3 font-mono text-sm sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={socialLinks.email}
            className="rounded-sm bg-stable px-5 py-2.5 text-center font-medium text-ink transition-opacity hover:opacity-90"
          >
            $ mail --to {greeting.displayName.toLowerCase()}
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-ink-line px-5 py-2.5 text-center text-text transition-colors hover:border-stable/50"
          >
            linkedin
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-ink-line px-5 py-2.5 text-center text-text transition-colors hover:border-stable/50"
          >
            github
          </a>
        </div>
      </div>

      <div className="container-shell mt-16 flex flex-col gap-2 border-t border-ink-line/60 pt-6 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <span>
          {greeting.name} · {greeting.location}
        </span>
        <span>built with react + typescript · exit 0</span>
      </div>
    </section>
  );
}
