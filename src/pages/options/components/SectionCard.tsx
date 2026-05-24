/**
 * SectionCard — the base layout container for every settings section.
 *
 * Renders a hairline-bordered card on surface with a micro-label header,
 * matching the design grammar from the challenge page components.
 */

interface SectionCardProps {
  /** Uppercase mono micro-label shown at top-left. */
  label: string;
  /** Optional description rendered below the label. */
  description?: string;
  /** Whether a pending-change notice should appear at the top. */
  pendingNotice?: string | null;
  children: React.ReactNode;
  id?: string;
}

export function SectionCard({ label, description, pendingNotice, children, id }: SectionCardProps) {
  return (
    <section
      id={id}
      className="rounded-card border border-border bg-surface"
      aria-label={label}
    >
      {/* Section header */}
      <div className="border-b border-border px-5 py-4">
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-faint">{label}</h2>
        {description && (
          <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>
        )}
      </div>

      {/* Pending-change notice */}
      {pendingNotice && (
        <div
          className="border-b border-border bg-surface-2 px-5 py-2.5"
          role="status"
          aria-live="polite"
        >
          <p className="font-mono text-[10px] text-muted">
            <span className="font-semibold text-text">Pending:</span> {pendingNotice}
          </p>
        </div>
      )}

      {/* Body */}
      <div className="px-5 py-4">{children}</div>
    </section>
  );
}
