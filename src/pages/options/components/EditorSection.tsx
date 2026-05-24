import { useId } from 'react';
import type { EditorKeymap, UserPreferences } from '../../../lib/types';
import { SectionCard } from './SectionCard';
import { FormField } from './FormField';

interface EditorSectionProps {
  prefs: UserPreferences;
  onChange: (patch: Partial<UserPreferences>) => void;
}

const FONT_MIN = 11;
const FONT_MAX = 20;
const KEYMAP_OPTIONS: { value: EditorKeymap; label: string; description: string }[] = [
  { value: 'default', label: 'Default', description: 'Standard browser key bindings.' },
  { value: 'vim', label: 'Vim', description: 'Full modal vim bindings via @replit/codemirror-vim.' },
];

export function EditorSection({ prefs, onChange }: EditorSectionProps) {
  const uid = useId();
  const fontSizeId = `${uid}-font-size`;
  const keymapId = `${uid}-keymap`;

  return (
    <SectionCard
      label="Editor"
      description="CodeMirror editor appearance and key bindings. Changes apply immediately on the next challenge."
      id="section-editor"
    >
      <div className="space-y-5">
        {/* Font size */}
        <FormField
          label="Font size (px)"
          htmlFor={fontSizeId}
          help={`${FONT_MIN}–${FONT_MAX} px. Larger is easier to read; smaller shows more code at once.`}
        >
          <div className="flex items-center gap-3">
            <input
              id={fontSizeId}
              type="range"
              min={FONT_MIN}
              max={FONT_MAX}
              step={1}
              value={prefs.editorFontSize}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val) && val >= FONT_MIN && val <= FONT_MAX) {
                  onChange({ editorFontSize: val });
                }
              }}
              className="w-32 accent-accent"
              aria-valuemin={FONT_MIN}
              aria-valuemax={FONT_MAX}
              aria-valuenow={prefs.editorFontSize}
            />
            <span
              className="w-10 text-right font-mono text-xs text-muted tabular-nums"
              aria-live="polite"
              aria-atomic="true"
            >
              {prefs.editorFontSize}px
            </span>
          </div>
        </FormField>

        {/* Keymap */}
        <FormField
          label="Key bindings"
          htmlFor={keymapId}
          help="Vim mode enables full modal editing. Reload the challenge page after switching."
        >
          <div
            id={keymapId}
            role="radiogroup"
            aria-label="Editor key bindings"
            className="flex flex-col gap-2"
          >
            {KEYMAP_OPTIONS.map(({ value, label, description }) => {
              const selected = prefs.editorKeymap === value;
              const inputId = `${uid}-keymap-${value}`;
              return (
                <label
                  key={value}
                  htmlFor={inputId}
                  className={`flex cursor-pointer items-start gap-3 rounded-sm border px-3 py-2.5 transition-colors ${
                    selected
                      ? 'border-border-strong bg-surface-2'
                      : 'border-border hover:border-border-strong'
                  }`}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name={`${uid}-keymap`}
                    value={value}
                    checked={selected}
                    onChange={() => onChange({ editorKeymap: value })}
                    className="mt-0.5 accent-accent"
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
      </div>
    </SectionCard>
  );
}
