import { useRef, useState } from 'react';
import { getValue, setValue } from '../../../lib/storage';
import { SectionCard } from './SectionCard';

type ExportState = 'idle' | 'exporting' | 'done' | 'error';
type ImportState = 'idle' | 'importing' | 'done' | 'error';

/** Keys included in the settings export. Volatile/large data is excluded. */
const EXPORT_KEYS = [
  'blockedRules',
  'keywordRules',
  'userPreferences',
] as const;

export function ImportExportSection() {
  const [exportState, setExportState] = useState<ExportState>('idle');
  const [importState, setImportState] = useState<ImportState>('idle');
  const [importError, setImportError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleExport() {
    setExportState('exporting');
    try {
      const [blockedRules, keywordRules, userPreferences] = await Promise.all([
        getValue('blockedRules'),
        getValue('keywordRules'),
        getValue('userPreferences'),
      ]);
      const payload = {
        _leetlock_export: true,
        exportedAt: new Date().toISOString(),
        blockedRules,
        keywordRules,
        userPreferences,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `leetlock-settings-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setExportState('done');
      setTimeout(() => setExportState('idle'), 2000);
    } catch {
      setExportState('error');
      setTimeout(() => setExportState('idle'), 3000);
    }
  }

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportState('importing');
    setImportError('');

    try {
      const text = await file.text();
      const data: unknown = JSON.parse(text);

      if (
        typeof data !== 'object' ||
        data === null ||
        !(data as Record<string, unknown>)._leetlock_export
      ) {
        throw new Error('Not a valid LeetLock settings file.');
      }

      const parsed = data as Record<string, unknown>;
      // Restore only the exported keys that are present.
      await Promise.all(
        EXPORT_KEYS.map(async (key) => {
          if (key in parsed) {
            // Type-cast is intentional: we trust the export was written by this same code.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            await setValue(key, parsed[key] as any);
          }
        }),
      );
      setImportState('done');
      setTimeout(() => {
        setImportState('idle');
        // Reset the file input so the same file can be re-selected.
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 2000);
    } catch (err) {
      setImportError(err instanceof Error ? err.message : 'Failed to read the file.');
      setImportState('error');
      setTimeout(() => {
        setImportState('idle');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 4000);
    }
  }

  return (
    <SectionCard
      label="Import / Export"
      description="Back up and restore your blocked sites, keyword rules, and preferences. Unlock tokens and streak data are not exported."
      id="section-import-export"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Export */}
        <button
          type="button"
          onClick={() => void handleExport()}
          disabled={exportState === 'exporting'}
          aria-live="polite"
          className="rounded-sm border border-border px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          {exportState === 'exporting'
            ? 'Exporting…'
            : exportState === 'done'
              ? '✓ Exported'
              : exportState === 'error'
                ? 'Export failed'
                : 'Export settings'}
        </button>

        {/* Import */}
        <label
          className="cursor-pointer rounded-sm border border-border px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent"
          aria-live="polite"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={(e) => void handleImport(e)}
            className="sr-only"
            aria-label="Import settings from JSON file"
          />
          {importState === 'importing'
            ? 'Importing…'
            : importState === 'done'
              ? '✓ Imported — reload to apply'
              : importState === 'error'
                ? importError || 'Import failed'
                : 'Import settings'}
        </label>
      </div>

      {importState === 'done' && (
        <p className="mt-2 font-mono text-[10px] text-muted" role="status" aria-live="polite">
          Settings restored. Reload the options page to see all changes.
        </p>
      )}
    </SectionCard>
  );
}
