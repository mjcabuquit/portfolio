import { greeting } from "@/data/portfolio";
import { useTypewriter, type TypewriterLine } from "@/hooks/useTypewriter";

const script: TypewriterLine[] = [
  { prompt: "$ whoami", output: greeting.name },
  { prompt: "$ cat role.txt", output: `${greeting.title} · ${greeting.yearsExperience} yrs` },
  { prompt: "$ cat location.txt", output: greeting.location },
];

export default function Hero() {
  const { lines, done } = useTypewriter(script);

  return (
    <section id="top" className="container-shell flex min-h-[80vh] flex-col justify-center py-24">
      <div className="max-w-2xl">
        <div className="mb-8 rounded-sm border border-ink-line bg-ink-raised px-5 py-4 font-mono text-sm leading-7 shadow-[0_0_0_1px_rgba(95,225,160,0.04)]">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-contract/70" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal/70" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-stable/70" aria-hidden="true" />
          </div>
          {lines.map((line, i) => (
            <div key={i} className="min-h-[1.75rem]">
              <span className="text-stable">{line.typed}</span>
              {line.outputVisible && (
                <div className="pl-4 text-muted">&gt; {line.output}</div>
              )}
            </div>
          ))}
          {done && (
            <div className="mt-1 flex items-center gap-2 text-stable">
              <span>$</span>
              <span className="h-4 w-2 animate-pulse bg-stable" aria-hidden="true" />
            </div>
          )}
        </div>

        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Building software that ships,
          <br />
          <span className="text-muted">not software that sounds good.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted">{greeting.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={greeting.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-stable px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            view resume
          </a>
          <a
            href="#log"
            className="rounded-sm border border-ink-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-stable/50"
          >
            $ scroll --changelog
          </a>
        </div>
      </div>
    </section>
  );
}
