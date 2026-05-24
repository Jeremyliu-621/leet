/**
 * BlockedSitesSection — table of BlockRules with inline add/delete/toggle.
 *
 * Strictness-reducing actions (delete or disable a rule) are deferred via
 * schedulePending when strictMode is on. The parent resolves any necessary
 * password verification before calling the action callbacks.
 */

import { useState, useId } from 'react';
import type { BlockRule, BlockRuleKind } from '../../../lib/types';
import { validateBlockPattern } from '../options-helpers';
import { SectionCard } from './SectionCard';
import { Toggle } from './Toggle';

interface BlockedSitesSectionProps {
  rules: BlockRule[];
  strictMode: boolean;
  pendingRuleIds: Set<string>;
  pendingNotice: string | null;
  onAdd: (kind: BlockRuleKind, pattern: string) => void;
  onToggle: (rule: BlockRule, enabled: boolean) => void;
  onDelete: (rule: BlockRule) => void;
}

export function BlockedSitesSection({
  rules,
  strictMode,
  pendingRuleIds,
  pendingNotice,
  onAdd,
  onToggle,
  onDelete,
}: BlockedSitesSectionProps) {
  const uid = useId();
  const kindId = `${uid}-kind`;
  const patternId = `${uid}-pattern`;

  const [kind, setKind] = useState<BlockRuleKind>('domain');
  const [pattern, setPattern] = useState('');
  const [addError, setAddError] = useState<string | null>(null);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const err = validateBlockPattern(pattern, kind);
    if (err) {
      setAddError(err);
      return;
    }
    setAddError(null);
    onAdd(kind, pattern.trim());
    setPattern('');
  }

  return (
    <SectionCard
      label="Blocked sites"
      description="Navigating to a blocked site starts a challenge. Domain rules match all subpaths; URL rules match a specific prefix."
      pendingNotice={pendingNotice}
      id="section-blocked-sites"
    >
      {/* Rules table */}
      {rules.length === 0 ? (
        <p className="mb-4 text-xs text-muted">No blocked sites yet. Add one below.</p>
      ) : (
        <div
          className="mb-4 divide-y divide-border overflow-hidden rounded-sm border border-border"
          role="table"
          aria-label="Blocked site rules"
        >
          {/* Table header */}
          <div
            role="row"
            className="hidden grid-cols-[60px_1fr_80px_32px] gap-3 bg-surface-2 px-3 py-2 sm:grid"
            aria-hidden="true"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-faint">Kind</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-faint">Pattern</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-faint">Enabled</span>
            <span className="sr-only">Actions</span>
          </div>

          {rules.map((rule) => {
            const isPending = pendingRuleIds.has(rule.id);
            return (
              <div
                key={rule.id}
                role="row"
                className={[
                  'grid grid-cols-[1fr_80px_32px] items-center gap-2 px-3 py-2.5',
                  'sm:grid-cols-[60px_1fr_80px_32px]',
                  isPending ? 'opacity-50' : '',
                ].join(' ')}
                aria-label={`${rule.kind}: ${rule.pattern}`}
              >
                {/* Kind pill */}
                <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-widest text-faint sm:block">
                  {rule.kind}
                </span>

                {/* Pattern */}
                <div className="min-w-0">
                  <span className="block truncate font-mono text-xs text-text" title={rule.pattern}>
                    {rule.pattern}
                  </span>
                  {/* Kind shown inline on small screens */}
                  <span className="font-mono text-[9px] uppercase tracking-widest text-faint sm:hidden">
                    {rule.kind}
                  </span>
                  {isPending && (
                    <span className="block font-mono text-[9px] text-muted">pending removal</span>
                  )}
                </div>

                {/* Toggle */}
                <div className="flex items-center justify-start sm:justify-center">
                  <Toggle
                    checked={rule.enabled}
                    onChange={(val) => onToggle(rule, val)}
                    disabled={isPending}
                    aria-label={`${rule.enabled ? 'Disable' : 'Enable'} rule for ${rule.pattern}`}
                  />
                </div>

                {/* Delete */}
                <button
                  type="button"
                  onClick={() => onDelete(rule)}
                  disabled={isPending}
                  aria-label={`Delete rule for ${rule.pattern}${strictMode ? ' (will be deferred)' : ''}`}
                  title={strictMode ? 'Removal deferred by cooldown' : 'Delete rule'}
                  className="flex h-7 w-7 items-center justify-center rounded-sm border border-border text-faint transition-colors hover:border-border-strong hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L11 11M11 1L1 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Add rule form */}
      <form onSubmit={handleAdd} aria-label="Add blocked site rule" noValidate>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
          {/* Kind selector */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor={kindId}
              className="font-mono text-[9px] uppercase tracking-widest text-faint"
            >
              Kind
            </label>
            <select
              id={kindId}
              value={kind}
              onChange={(e) => {
                setKind(e.target.value as BlockRuleKind);
                setAddError(null);
              }}
              className="rounded-sm border border-border bg-surface-2 px-2 py-1.5 font-mono text-xs text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              <option value="domain">domain</option>
              <option value="url">url</option>
            </select>
          </div>

          {/* Pattern input */}
          <div className="flex flex-1 flex-col gap-1">
            <label
              htmlFor={patternId}
              className="font-mono text-[9px] uppercase tracking-widest text-faint"
            >
              Pattern
            </label>
            <input
              id={patternId}
              type="text"
              value={pattern}
              onChange={(e) => {
                setPattern(e.target.value);
                setAddError(null);
              }}
              placeholder={
                kind === 'domain' ? 'e.g. youtube.com' : 'e.g. https://reddit.com/r/all'
              }
              aria-describedby={addError ? `${uid}-add-error` : undefined}
              className="w-full rounded-sm border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text placeholder-faint focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-faint opacity-0 select-none">
              &nbsp;
            </span>
            <button
              type="submit"
              className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              add
            </button>
          </div>
        </div>

        {addError && (
          <p
            id={`${uid}-add-error`}
            role="alert"
            className="mt-2 font-mono text-[11px] text-text"
          >
            {addError}
          </p>
        )}
      </form>
    </SectionCard>
  );
}
