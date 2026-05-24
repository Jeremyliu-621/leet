/**
 * KeywordTriggersSection — table of KeywordRules with inline add/delete/toggle.
 */

import { useState, useId } from 'react';
import type { KeywordRule } from '../../../lib/types';
import { validateKeyword } from '../options-helpers';
import { SectionCard } from './SectionCard';
import { Toggle } from './Toggle';

interface KeywordTriggersSectionProps {
  rules: KeywordRule[];
  strictMode: boolean;
  pendingRuleIds: Set<string>;
  pendingNotice: string | null;
  onAdd: (keyword: string) => void;
  onToggle: (rule: KeywordRule, enabled: boolean) => void;
  onDelete: (rule: KeywordRule) => void;
}

export function KeywordTriggersSection({
  rules,
  strictMode,
  pendingRuleIds,
  pendingNotice,
  onAdd,
  onToggle,
  onDelete,
}: KeywordTriggersSectionProps) {
  const uid = useId();
  const inputId = `${uid}-keyword`;

  const [keyword, setKeyword] = useState('');
  const [addError, setAddError] = useState<string | null>(null);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const err = validateKeyword(keyword);
    if (err) {
      setAddError(err);
      return;
    }
    setAddError(null);
    onAdd(keyword.trim().toLowerCase());
    setKeyword('');
  }

  return (
    <SectionCard
      label="Keyword triggers"
      description="Any URL containing one of these keywords (case-insensitive) is blocked, regardless of domain."
      pendingNotice={pendingNotice}
      id="section-keyword-triggers"
    >
      {/* Rules table */}
      {rules.length === 0 ? (
        <p className="mb-4 text-xs text-muted">No keyword triggers yet. Add one below.</p>
      ) : (
        <div
          className="mb-4 divide-y divide-border overflow-hidden rounded-sm border border-border"
          role="table"
          aria-label="Keyword trigger rules"
        >
          {rules.map((rule) => {
            const isPending = pendingRuleIds.has(rule.id);
            return (
              <div
                key={rule.id}
                role="row"
                className={[
                  'flex items-center gap-3 px-3 py-2.5',
                  isPending ? 'opacity-50' : '',
                ].join(' ')}
                aria-label={`Keyword: ${rule.keyword}`}
              >
                <div className="flex-1 min-w-0">
                  <span
                    className="block truncate font-mono text-xs text-text"
                    title={rule.keyword}
                  >
                    {rule.keyword}
                  </span>
                  {isPending && (
                    <span className="block font-mono text-[9px] text-muted">pending removal</span>
                  )}
                </div>

                <Toggle
                  checked={rule.enabled}
                  onChange={(val) => onToggle(rule, val)}
                  disabled={isPending}
                  aria-label={`${rule.enabled ? 'Disable' : 'Enable'} keyword "${rule.keyword}"`}
                />

                <button
                  type="button"
                  onClick={() => onDelete(rule)}
                  disabled={isPending}
                  aria-label={`Delete keyword "${rule.keyword}"${strictMode ? ' (will be deferred)' : ''}`}
                  title={strictMode ? 'Removal deferred by cooldown' : 'Delete keyword'}
                  className="flex h-7 w-7 items-center justify-center rounded-sm border border-border text-faint transition-colors hover:border-border-strong hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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

      {/* Add keyword form */}
      <form onSubmit={handleAdd} aria-label="Add keyword trigger" noValidate>
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-1">
            <label
              htmlFor={inputId}
              className="font-mono text-[9px] uppercase tracking-widest text-faint"
            >
              Keyword
            </label>
            <input
              id={inputId}
              type="text"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                setAddError(null);
              }}
              placeholder="e.g. shorts"
              aria-describedby={addError ? `${uid}-add-error` : undefined}
              className="w-full rounded-sm border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text placeholder-faint focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            />
          </div>

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
