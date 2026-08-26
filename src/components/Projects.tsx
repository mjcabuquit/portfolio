import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="builds" className="border-t border-ink-line/60 bg-ink-raised/40 py-20">
      <div className="container-shell">
        <div className="mb-10">
          <p className="eyebrow">dist/ — release builds</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Shipped work</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.build}
              className="group flex flex-col rounded-sm border border-ink-line bg-ink p-5 transition-colors hover:border-stable/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-xs text-muted">{p.build}</span>
                <span className="font-mono text-[11px] text-signal">{p.tag}</span>
              </div>
              <h3 className="font-display text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{p.desc}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-stable hover:underline"
                >
                  open build &#8599;
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
