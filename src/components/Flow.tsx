import { Reveal } from "@/components/Reveal";

type Step = { stage: string; note: string };

/**
 * A vertical pipeline diagram. Each stage is a labelled node; a hairline
 * connector runs between them. Styling lives in globals.css (.flow).
 */
export function Flow({ steps }: { steps: Step[] }) {
  return (
    <ol className="flow">
      {steps.map((s, i) => (
        <Reveal as="li" className="flow__step" key={s.stage} delay={i * 60}>
          <span className="flow__num">{String(i + 1).padStart(2, "0")}</span>
          <span className="flow__stage">{s.stage}</span>
          <span className="flow__note">{s.note}</span>
        </Reveal>
      ))}
    </ol>
  );
}
