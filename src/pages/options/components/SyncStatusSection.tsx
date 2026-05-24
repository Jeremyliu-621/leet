/**
 * SyncStatusSection — small indicator showing whether chrome.storage.sync
 * is reachable and when it was last confirmed reachable.
 */

import { useState, useEffect } from 'react';
import { formatSyncTime } from '../options-helpers';
import { SectionCard } from './SectionCard';

type SyncState = 'checking' | 'ok' | 'error';

interface SyncStatusSectionProps {
  /** Epoch ms of the last known successful read from sync storage. */
  lastSyncAt: number | null;
}

export function SyncStatusSection({ lastSyncAt }: SyncStatusSectionProps) {
  const [syncState, setSyncState] = useState<SyncState>('checking');
  const [checkedAt, setCheckedAt] = useState<number | null>(lastSyncAt);

  useEffect(() => {
    let mounted = true;

    async function probe() {
      try {
        // A lightweight read to confirm sync is reachable.
        if (typeof chrome !== 'undefined' && chrome.storage?.sync) {
          await chrome.storage.sync.get(null);
          if (mounted) {
            setSyncState('ok');
            setCheckedAt(Date.now());
          }
        } else {
          // Outside extension context (dev/test)
          if (mounted) setSyncState('ok');
        }
      } catch {
        if (mounted) setSyncState('error');
      }
    }

    void probe();
    return () => {
      mounted = false;
    };
  }, []);

  const stateLabel =
    syncState === 'checking'
      ? 'Checking…'
      : syncState === 'ok'
        ? 'Synced'
        : 'Sync unavailable';

  return (
    <SectionCard
      label="Sync status"
      description="Settings are stored in chrome.storage.sync and kept consistent across your signed-in Chrome profiles."
      id="section-sync"
    >
      <div className="flex items-center gap-3">
        {/* Status dot */}
        <span
          aria-hidden="true"
          className={[
            'h-2 w-2 shrink-0 rounded-full',
            syncState === 'ok'
              ? 'bg-accent'
              : syncState === 'error'
                ? 'bg-faint'
                : 'bg-border-strong',
          ].join(' ')}
        />

        <div>
          <p
            className="font-mono text-xs text-text"
            role="status"
            aria-live="polite"
            aria-label={`Sync status: ${stateLabel}`}
          >
            {stateLabel}
          </p>
          {checkedAt && syncState === 'ok' && (
            <p className="mt-0.5 font-mono text-[10px] text-muted">
              Last confirmed {formatSyncTime(checkedAt)}
            </p>
          )}
          {syncState === 'error' && (
            <p className="mt-0.5 text-[11px] text-muted">
              Could not reach chrome.storage.sync. Settings changes are saved locally and will sync
              when connectivity is restored.
            </p>
          )}
        </div>
      </div>
    </SectionCard>
  );
}
