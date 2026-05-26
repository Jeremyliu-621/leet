/**
 * ImportExportSection — export settings to JSON or import from a file.
 *
 * Export: serialises blockedRules, keywordRules, and userPreferences into a
 * versioned JSON file and triggers a browser download.
 *
 * Import: reads a JSON file, validates its shape, and writes the values to
 * storage. Unknown fields are stripped; missing fields fall back to the current
 * stored value so a partial export file still works.
 */

import { useRef, useState } from 'react';
import type { BlockRule, KeywordRule, UserPreferences } from '../../../lib/types';
import { getValue, setValue } from '../../../lib/storage';
import { DEFAULT_PREFERENCES } from '../../../lib/storage/defaults';
import { SectionCard } from './SectionCard';

/** Schema for the exported JSON file. */
interface ExportPayload {
  version: 1;
  exportedAt: string;
  blockedRules: BlockRule[];
  keywordRules: KeywordRule[];
  userPreferences: UserPreferences;
}

/** Minimal field-presence check — we don't need a full deep validator. */
function isExportPayload(v: unknown): v is ExportPayload {
  if (typeof v !== 'object' || v === null) return false;
  const obj = v as Record<string, unknown>;
  return (
    obj['version'] === 1 &&
    Array.isArray(obj['blockedRules']) &&
    Array.isArray(obj['keywordRules']) &&
    typeof obj['userPreferences'] === 'object' &&
    obj['userPreferences'] !== null
  );
}

/** Sanitise user-preferences — keep only known keys, fall back to defaults. */
function sanitisePreferences(raw: Record<string, unknown>): UserPreferences {
  const d = DEFAULT_PREFERENCES;
  return {
    challengeTimeLimitSec:
      typeof raw['challengeTimeLimitSec'] === 'number' ? raw['challengeTimeLimitSec'] : d.challengeTimeLimitSec,
    unlockDurationMin:
      typeof raw['unlockDurationMin'] === 'number' ? raw['unlockDurationMin'] : d.unlockDurationMin,
    difficulties: Array.isArray(raw['difficulties']) ? (raw['difficulties'] as UserPreferences['difficulties']) : d.difficulties,
    tags: Array.isArray(raw['tags']) ? (raw['tags'] as UserPreferences['tags']) : d.tags,
    failureAction:
      raw['failureAction'] === 'close' || raw['failureAction'] === 'redirect'
        ? raw['failureAction']
        : d.failureAction,
    redirectUrl: typeof raw['redirectUrl'] === 'string' ? raw['redirectUrl'] : d.redirectUrl,
    maxSubmissionAttempts:
      typeof raw['maxSubmissionAttempts'] === 'number' ? raw['maxSubmissionAttempts'] : d.maxSubmissionAttempts,
    strictMode: typeof raw['strictMode'] === 'boolean' ? raw['strictMode'] : d.strictMode,
    settingsCooldownMs:
      typeof raw['settingsCooldownMs'] === 'number' ? raw['settingsCooldownMs'] : d.settingsCooldownMs,
    allowGiveUp: typeof raw['allowGiveUp'] === 'boolean' ? raw['allowGiveUp'] : d.allowGiveUp,
    theme:
      raw['theme'] === 'dark' || raw['theme'] === 'light' || raw['theme'] === 'system'
        ? raw['theme']
        : d.theme,
    editorFontSize:
      typeof raw['editorFontSize'] === 'number' ? raw['editorFontSize'] : d.editorFontSize,
    preferredLanguage:
      raw['preferredLanguage'] === 'javascript' || raw['preferredLanguage'] === 'python'
        ? raw['preferredLanguage']
        : d.preferredLanguage,
    editorKeymap:
      raw['editorKeymap'] === 'default' || raw['editorKeymap'] === 'vim'
        ? raw['editorKeymap']
        : d.editorKeymap,
    editorTabSize: raw['editorTabSize'] === 2 || raw['editorTabSize'] === 4 ? raw['editorTabSize'] : d.editorTabSize,
    splitRatio: typeof raw['splitRatio'] === 'number' ? raw['splitRatio'] : d.splitRatio,
  };
}

/** Sanitise a BlockRule array — drop entries missing required fields. */
function sanitiseBlockRules(arr: unknown[]): BlockRule[] {
  return arr.filter((r): r is BlockRule => {
    if (typeof r !== 'object' || r === null) return false;
    const obj = r as Record<string, unknown>;
    return (
      typeof obj['id'] === 'string' &&
      (obj['kind'] === 'domain' || obj['kind'] === 'url') &&
      typeof obj['pattern'] === 'string' &&
      typeof obj['enabled'] === 'boolean' &&
      typeof obj['createdAt'] === 'number'
    );
  });
}

/** Sanitise a KeywordRule array — drop entries missing required fields. */
function sanitiseKeywordRules(arr: unknown[]): KeywordRule[] {
  return arr.filter((r): r is KeywordRule => {
    if (typeof r !== 'object' || r === null) return false;
    const obj = r as Record<string, unknown>;
    return (
      typeof obj['id'] === 'string' &&
      typeof obj['keyword'] === 'string' &&
      typeof obj['enabled'] === 'boolean' &&
      typeof obj['createdAt'] === 'number'
    );
  });
}

export function ImportExportSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<{ kind: 'idle' | 'ok' | 'error'; message: string }>({
    kind: 'idle',
    message: '',
  });
  const [isImporting, setIsImporting] = useState(false);

  // --- Export ---

  async function handleExport() {
    const [blockedRules, keywordRules, userPreferences] = await Promise.all([
      getValue('blockedRules'),
      getValue('keywordRules'),
      getValue('userPreferences'),
    ]);
    const payload: ExportPayload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      blockedRules,
      keywordRules,
      userPreferences,
    };
    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leetlock-settings-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setStatus({ kind: 'ok', message: 'Settings exported.' });
    setTimeout(() => setStatus({ kind: 'idle', message: '' }), 3000);
  }

  // --- Import ---

  function handleImportClick() {
    fileInputRef.current?.click();
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    // Reset so the same file can be re-selected.
    e.target.value = '';

    setIsImporting(true);
    try {
      const text = await file.text();
      let parsed: unknown;
      try {
        parsed = JSON.parse(text) as unknown;
      } catch {
        setStatus({ kind: 'error', message: 'Invalid file — could not parse JSON.' });
        return;
      }

      if (!isExportPayload(parsed)) {
        setStatus({
          kind: 'error',
          message: 'Unrecognised format — expected a LeetLock v1 export file.',
        });
        return;
      }

      const blockedRules = sanitiseBlockRules(parsed.blockedRules);
      const keywordRules = sanitiseKeywordRules(parsed.keywordRules);
      const userPreferences = sanitisePreferences(
        parsed.userPreferences as unknown as Record<string, unknown>,
      );

      await Promise.all([
        setValue('blockedRules', blockedRules),
        setValue('keywordRules', keywordRules),
        setValue('userPreferences', userPreferences),
      ]);

      setStatus({
        kind: 'ok',
        message: `Imported: ${blockedRules.length} blocked site${blockedRules.length === 1 ? '' : 's'}, ${keywordRules.length} keyword${keywordRules.length === 1 ? '' : 's'}. Reload to see all changes.`,
      });
    } catch (err) {
      setStatus({
        kind: 'error',
        message: err instanceof Error ? err.message : 'Import failed.',
      });
    } finally {
      setIsImporting(false);
    }
  }

  return (
    <SectionCard
      label="Import / Export"
      description="Back up your settings to a JSON file or restore them on another device."
      id="section-import-export"
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
        onChange={(e) => void handleFileChange(e)}
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void handleExport()}
            className="rounded-sm border border-border-strong px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Export settings
          </button>
          <button
            type="button"
            onClick={handleImportClick}
            disabled={isImporting}
            className="rounded-sm border border-border-strong px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isImporting ? 'Importing…' : 'Import settings'}
          </button>
        </div>

        {status.kind !== 'idle' && (
          <p
            role="status"
            aria-live="polite"
            className={`font-mono text-[11px] ${status.kind === 'ok' ? 'text-text' : 'text-faint'}`}
          >
            {status.message}
          </p>
        )}
      </div>
    </SectionCard>
  );
}
