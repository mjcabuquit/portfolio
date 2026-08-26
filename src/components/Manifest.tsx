import { skillGroups, tools, education, feedback } from "@/data/portfolio";

export default function Manifest() {
  return (
    <section id="manifest" className="container-shell py-20">
      <div className="mb-10">
        <p className="eyebrow">manifest.json</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">Stack &amp; background</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-sm border border-ink-line bg-ink-raised p-6 font-mono text-sm">
          <p className="text-muted">{"{"}</p>
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="pl-4">
              <p>
                <span className="text-signal">&quot;{group.category}&quot;</span>
                <span className="text-muted">: [</span>
              </p>
              {group.items.map((item, i) => (
                <p key={item} className="pl-4 text-text/90">
                  &quot;{item}&quot;
                  {i < group.items.length - 1 ? "," : ""}
                </p>
              ))}
              <p className="text-muted">]{gi < skillGroups.length - 1 ? "," : ""}</p>
            </div>
          ))}
          <p className="text-muted">{"}"}</p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="eyebrow mb-3">devDependencies (tools)</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.name} className="flex justify-between gap-4 text-sm">
                  <span className="text-text">{tool.name}</span>
                  <span className="text-right text-muted">{tool.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-3">education</h3>
            {education.map((e) => (
              <div key={e.school} className="text-sm">
                <p className="text-text">{e.school}</p>
                <p className="mt-1 text-muted">{e.credential}</p>
                <p className="mt-1 font-mono text-xs text-muted">{e.duration}</p>
              </div>
            ))}
          </div>

          {feedback.length > 0 && (
            <div>
              <h3 className="eyebrow mb-3">// review</h3>
              {feedback.map((f) => (
                <figure key={f.name} className="border-l-2 border-stable/40 pl-4">
                  <blockquote className="text-sm italic leading-6 text-text/90">
                    &ldquo;{f.feedback}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 font-mono text-xs text-muted">
                    {f.name} — {f.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
