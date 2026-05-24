/**
 * PendingChangesSection — list of queued CooldownPendingChanges with countdown
 * and cancel button.
 */

import { useState, useEffect } from 'react';
import type { CooldownPendingChange } from '../../../lib/types';
import { formatTimeUntil } from '../options-helpers';
import { SectionCard } from './SectionCard';

interface PendingChangesSectionProps {
  pending: CooldownPendingChange[];
  onCancel: (id: string) => void;
}

/** Live countdown that updates every second. */
function Countdown({ appliesAt }: { appliesAt: number }) {
  const [label, setLabel] = useState(() => formatTimeUntil(appliesAt));

  useEffect(() => {
    function tick() {
      setLabel(formatTimeUntil(appliesAt));
    }
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [appliesAt]);

  return (
    <span className="font-mono text-[10px] text-muted tabular-nums" aria-live="off">
      {label}
    </span>
  );
}

export function PendingChangesSection({ pending, onCancel }: PendingChangesSectionProps) {
  if (pending.length === 0) {
    return (
      <SectionCard
        label="Pending changes"
        description="Strictness-reducing changes that are waiting for the cooldown to expire."
        id="section-pending"
      >
        <p className="text-xs text-muted">No pending changes.</p>
      </SectionCard>
    );
  }

  return (
    <SectionCard
      label="Pending changes"
      description="These changes will apply automatically once the cooldown expires. Cancel to discard."
      id="section-pending"
    >
      <ul className="divide-y divide-border overflow-hidden rounded-sm border border-border" role="list">
        {pending.map((change) => (
          <li
            key={change.id}
            className="flex items-start justify-between gap-3 px-3 py-3"
            aria-label={change.description}
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs text-text leading-snug">{change.description}</p>
              <Countdown appliesAt={change.appliesAt} />
            </div>

            <button
              type="button"
              onClick={() => onCancel(change.id)}
              aria-label={`Cancel: ${change.description}`}
              className="shrink-0 rounded-sm border border-border px-2.5 py-1 font-mono text-[10px] text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              cancel
            </button>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
