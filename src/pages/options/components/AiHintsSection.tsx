import { useId, useState } from 'react';
import type { AiSettings } from '../../../lib/types';
import { GEMINI_MODELS, normalizeModel } from '../../../lib/ai';
import { SectionCard } from './SectionCard';
import { FormField } from './FormField';

interface AiHintsSectionProps {
  settings: AiSettings;
  onChange: (patch: Partial<AiSettings>) => void;
}

export function AiHintsSection({ settings, onChange }: AiHintsSectionProps) {
  const uid = useId();
  const keyId = `${uid}-key`;
  const modelId = `${uid}-model`;
  const [reveal, setReveal] = useState(false);

  const hasKey = !!settings.geminiApiKey;

  return (
    <SectionCard
      label="AI hints (Gemini)"
      description="Connect your own Gemini API key for spoiler-free nudges and an in-editor AI code review. Your key is stored only on this device — never synced, never sent anywhere but Google."
      id="ai"
    >
      <div className="space-y-5">
        {/* Enable toggle */}
        <FormField
          label="Enable AI hints"
          htmlFor={`${uid}-enabled`}
          help="Master switch for the in-editor AI hint assistant."
        >
          <label htmlFor={`${uid}-enabled`} className="inline-flex cursor-pointer items-center gap-2">
            <input
              id={`${uid}-enabled`}
              type="checkbox"
              checked={settings.enabled}
              onChange={(e) => onChange({ enabled: e.target.checked })}
              className="accent-brand"
            />
            <span className="font-mono text-xs text-text">{settings.enabled ? 'On' : 'Off'}</span>
          </label>
        </FormField>

        {/* API key */}
        <FormField
          label="Gemini API key"
          htmlFor={keyId}
          help="Get a free key at aistudio.google.com → 'Get API key'. Pasting it here stores it in this browser's local storage only."
        >
          <div>
            <div className="flex items-center gap-2">
              <input
                id={keyId}
                type={reveal ? 'text' : 'password'}
                value={settings.geminiApiKey ?? ''}
                onChange={(e) => onChange({ geminiApiKey: e.target.value.trim() || null })}
                placeholder="AIza… or AQ.…"
                autoComplete="off"
                spellCheck={false}
                className="w-full rounded-md border border-border bg-surface-2 px-3 py-2 font-mono text-xs text-text placeholder:text-faint focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              />
              <button
                type="button"
                onClick={() => setReveal((v) => !v)}
                className="shrink-0 rounded-md border border-border px-2.5 py-2 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:border-border-strong hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                aria-pressed={reveal}
              >
                {reveal ? 'hide' : 'show'}
              </button>
            </div>
            <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[10px] text-faint">
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${hasKey ? 'bg-success' : 'bg-border-strong'}`}
                aria-hidden="true"
              />
              {hasKey ? 'Key saved on this device.' : 'No key set — the assistant stays disabled.'}
            </p>
          </div>
        </FormField>

        {/* Model */}
        <FormField label="Model" htmlFor={modelId} help="Which Gemini model the assistant calls.">
          <div id={modelId} role="radiogroup" aria-label="Gemini model" className="flex flex-col gap-2">
            {GEMINI_MODELS.map(({ value, label, description }) => {
              const selected = normalizeModel(settings.model) === value;
              const inputId = `${uid}-model-${value}`;
              return (
                <label
                  key={value}
                  htmlFor={inputId}
                  className={`flex cursor-pointer items-start gap-3 rounded-sm border px-3 py-2.5 transition-colors ${
                    selected ? 'border-brand bg-surface-2' : 'border-border hover:border-border-strong'
                  }`}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name={`${uid}-model`}
                    value={value}
                    checked={selected}
                    onChange={() => onChange({ model: value })}
                    className="mt-0.5 accent-brand"
                  />
                  <div>
                    <div className="font-mono text-xs font-semibold text-text">{label}</div>
                    <div className="mt-0.5 font-mono text-[10px] text-faint">{description}</div>
                  </div>
                </label>
              );
            })}
          </div>
        </FormField>

        <p className="rounded-md border border-border bg-surface-2 px-3 py-2 font-mono text-[10px] leading-relaxed text-faint">
          Privacy: requests go directly from your browser to Google's Generative Language API using
          your key. LeetMeow has no server and never sees your key or your code. Usage counts against
          your own Gemini quota.
        </p>
      </div>
    </SectionCard>
  );
}
