/**
 * AppearanceSection — purely aesthetic preferences: colour theme and editor
 * font size. Kept separate from EditorSection (which holds coding-behaviour
 * settings) so the "how it looks" knobs live apart from the "how it works" ones.
 */

import { useId } from 'react';
import type { ThemePreference, UserPreferences } from '../../../lib/types';
import { ALL_THEMES, THEME_LABEL, THEME_DESCRIPTION } from '../../../lib/types';
import { SectionCard } from './SectionCard';
import { FormField } from './FormField';

interface AppearanceSectionProps {
  prefs: UserPreferences;
  onChange: (patch: Partial<UserPreferences>) => void;
}

const FONT_MIN = 11;
const FONT_MAX = 20;

const THEME_OPTIONS = ALL_THEMES.map((t) => ({
  value: t,
  label: THEME_LABEL[t],
  description: THEME_DESCRIPTION[t],
}));

/** A pair of colored dots representing a theme's bg and accent. */
const SWATCH_COLORS: Record<ThemePreference, [bg: string, accent: string]> = {
  dark:          ['#141414', '#ffffff'],
  light:         ['#f0f0f0', '#0a0a0a'],
  'serika-dark': ['#2c2e31', '#e2b714'],
  nord:          ['#2e3440', '#88c0d0'],
  botanical:     ['#1a2117', '#7db85a'],
  carbon:        ['#0a0a0a', '#ffffff'],
  moonlight:     ['#1e2030', '#82aaff'],
  'muted-ink':   ['#23201c', '#c8a874'],
  terminal:      ['#0c0c0c', '#33ff33'],
  dracula:       ['#282a36', '#bd93f9'],
  paper:         ['#f5f0e8', '#3a352e'],
  leetmeow:      ['#fbfaf6', '#3d3d3d'],
  system:        ['#888888', '#888888'],
};

function ThemeSwatch({ theme }: { theme: ThemePreference }) {
  const [bg, accent] = SWATCH_COLORS[theme];
  if (theme === 'system') {
    return (
      <span className="inline-flex h-4 w-4 shrink-0 overflow-hidden rounded-full border border-border">
        <span className="h-full w-1/2" style={{ background: '#141414' }} />
        <span className="h-full w-1/2" style={{ background: '#f0f0f0' }} />
      </span>
    );
  }
  return (
    <span
      className="inline-block h-4 w-4 shrink-0 rounded-full border border-border"
      style={{ background: bg, boxShadow: `inset 0 0 0 2px ${bg}, inset 0 0 0 4px ${accent}` }}
    />
  );
}

export function AppearanceSection({ prefs, onChange }: AppearanceSectionProps) {
  const uid = useId();
  const fontSizeId = `${uid}-font-size`;
  const themeId = `${uid}-theme`;

  return (
    <SectionCard
      label="Theme & display"
      description="Colour scheme and editor text size across all LeetMeow pages. Changes apply immediately."
      id="section-appearance"
    >
      <div className="space-y-5">
        {/* Theme */}
        <FormField
          label="Theme"
          htmlFor={themeId}
          help="Controls the colour scheme across all LeetMeow pages."
        >
          <div
            id={themeId}
            role="radiogroup"
            aria-label="UI theme"
            className="grid grid-cols-2 gap-2 sm:grid-cols-3"
          >
            {THEME_OPTIONS.map(({ value, label, description }) => {
              const selected = (prefs.theme ?? 'dark') === value;
              const inputId = `${uid}-theme-${value}`;
              return (
                <label
                  key={value}
                  htmlFor={inputId}
                  title={description}
                  className={`flex cursor-pointer items-center gap-2 rounded-sm border px-3 py-2 transition-colors ${
                    selected
                      ? 'border-accent bg-surface-2'
                      : 'border-border hover:border-border-strong'
                  }`}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name={`${uid}-theme`}
                    value={value}
                    checked={selected}
                    onChange={() => onChange({ theme: value })}
                    className="sr-only"
                  />
                  <ThemeSwatch theme={value} />
                  <span className="truncate font-mono text-xs text-text">{label}</span>
                </label>
              );
            })}
          </div>
        </FormField>

        {/* Font size */}
        <FormField
          label="Editor font size (px)"
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
                if (!Number.isNaN(val) && val >= FONT_MIN && val <= FONT_MAX) {
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
      </div>
    </SectionCard>
  );
}
