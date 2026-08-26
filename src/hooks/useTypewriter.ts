import { useEffect, useRef, useState } from "react";

export interface TypewriterLine {
  prompt: string;
  output: string;
}

interface TypewriterState {
  lines: { prompt: string; typed: string; output: string; outputVisible: boolean }[];
  done: boolean;
}

const PROMPT_SPEED = 32;
const LINE_PAUSE = 220;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useTypewriter(script: TypewriterLine[]): TypewriterState {
  const [state, setState] = useState<TypewriterState>(() => {
    if (prefersReducedMotion()) {
      return {
        lines: script.map((l) => ({ ...l, typed: l.prompt, outputVisible: true })),
        done: true,
      };
    }
    return { lines: [], done: false };
  });

  const started = useRef(false);

  useEffect(() => {
    if (started.current || prefersReducedMotion()) return;
    started.current = true;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    async function run() {
      for (let i = 0; i < script.length; i++) {
        const { prompt, output } = script[i];

        setState((prev) => ({
          lines: [...prev.lines, { prompt, typed: "", output, outputVisible: false }],
          done: false,
        }));

        for (let c = 1; c <= prompt.length; c++) {
          await new Promise<void>((resolve) => {
            const t = setTimeout(() => {
              if (cancelled) return resolve();
              setState((prev) => {
                const lines = [...prev.lines];
                lines[i] = { ...lines[i], typed: prompt.slice(0, c) };
                return { lines, done: false };
              });
              resolve();
            }, PROMPT_SPEED);
            timeouts.push(t);
          });
          if (cancelled) return;
        }

        await new Promise<void>((resolve) => {
          const t = setTimeout(() => {
            if (cancelled) return resolve();
            setState((prev) => {
              const lines = [...prev.lines];
              lines[i] = { ...lines[i], outputVisible: true };
              return { lines, done: false };
            });
            resolve();
          }, LINE_PAUSE);
          timeouts.push(t);
        });
        if (cancelled) return;
      }

      if (!cancelled) {
        setState((prev) => ({ ...prev, done: true }));
      }
    }

    run();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [script]);

  return state;
}
