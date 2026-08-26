import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="log" className="container-shell py-20">
      <div className="mb-10">
        <p className="eyebrow">CHANGELOG.md</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">Experience</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          Read newest first, like any changelog. Version numbers climb with time — v1.0.0 is the
          decade that built everything else.
        </p>
      </div>

      <ol className="relative border-l border-ink-line pl-8">
        {experience.map((entry) => (
          <li key={entry.version} className="mb-12 last:mb-0">
            <span
              className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-ink"
              style={{
                backgroundColor: entry.status === "stable" ? "#5FE1A0" : "#F2A93B",
              }}
              aria-hidden="true"
            />
            <div className="mb-1 flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm text-stable">{entry.version}</span>
              <span
                className={`status-pill ${
                  entry.status === "stable" ? "status-pill--stable" : "status-pill--contract"
                }`}
              >
                {entry.statusLabel}
              </span>
              <span className="font-mono text-xs text-muted">{entry.date}</span>
            </div>

            <h3 className="font-display text-xl font-semibold">{entry.role}</h3>
            <a
              href={entry.companyLink}
              target={entry.companyLink ? "_blank" : undefined}
              rel={entry.companyLink ? "noreferrer" : undefined}
              className={`font-mono text-sm ${
                entry.companyLink ? "text-signal hover:underline" : "text-muted"
              }`}
            >
              {entry.company}
            </a>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{entry.summary}</p>

            <ul className="mt-3 space-y-1.5">
              {entry.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-sm leading-6 text-text/90">
                  <span className="font-mono text-stable" aria-hidden="true">
                    +
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
