import { useId } from 'react';
import type { EditorKeymap, ThemePreference, UserPreferences } from '../../../lib/types';
import { ALL_LANGUAGES, ALL_THEMES, THEME_LABEL, THEME_DESCRIPTION, LANGUAGE_LABEL, LANGUAGE_DESCRIPTION } from '../../../lib/types';
import { SectionCard } from './SectionCard';
import { FormField } from './FormField';

interface EditorSectionProps {
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

const INDENT_OPTIONS: ReadonlyArray<{ value: 2 | 4; label: string }> = [
  { value: 2, label: '2 spaces' },
  { value: 4, label: '4 spaces' },
];

const LANGUAGE_OPTIONS = ALL_LANGUAGES.map((lang) => ({
  value: lang,
  label: LANGUAGE_LABEL[lang],
  description: LANGUAGE_DESCRIPTION[lang],
}));

const KEYMAP_OPTIONS: { value: EditorKeymap; label: string; description: string }[] = [
  { value: 'default', label: 'Default', description: 'Standard browser key bindings.' },
  {
    value: 'vim',
    label: 'Vim',
    description: 'Full modal vim bindings via @replit/codemirror-vim.',
  },
  {
    value: 'emacs',
    label: 'Emacs',
    description: 'Emacs bindings (Ctrl-A/E, M-f/b, Ctrl-K, etc.) via @replit/codemirror-emacs.',
  },
];

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
  paper:         ['#f5f0e8', '#3a352e'],
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

export function EditorSection({ prefs, onChange }: EditorSectionProps) {
  const uid = useId();
  const fontSizeId = `${uid}-font-size`;
  const languageId = `${uid}-language`;
  const keymapId = `${uid}-keymap`;
  const indentId = `${uid}-indent`;
  const themeId = `${uid}-theme`;

  return (
    <SectionCard
      label="Editor"
      description="Appearance, key bindings, and language defaults. Changes apply immediately."
      id="section-editor"
    >
      <div className="space-y-5">
        {/* Theme */}
        <FormField
          label="Theme"
          htmlFor={themeId}
          help="Controls the colour scheme across all LeetLock pages."
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
                  <div className="min-w-0">
                    <span className="block truncate font-mono text-xs text-text">{label}</span>
                    {selected && (
                      <span className="block truncate font-mono text-[9px] text-faint">{description}</span>
                    )}
                  </div>
                </label>
              );
            })}
          </div>
        </FormField>

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

        {/* Default language */}
        <FormField
          label="Default language"
          htmlFor={languageId}
          help="Language pre-selected when a new challenge opens. Overridden by switching language in the editor."
        >
          <div
            id={languageId}
            role="radiogroup"
            aria-label="Default coding language"
            className="flex flex-col gap-2"
          >
            {LANGUAGE_OPTIONS.map(({ value, label, description }) => {
              const selected = prefs.preferredLanguage === value;
              const inputId = `${uid}-lang-${value}`;
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
                    name={`${uid}-language`}
                    value={value}
                    checked={selected}
                    onChange={() => onChange({ preferredLanguage: value })}
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

        {/* Indent size */}
        <FormField
          label="Indent size"
          htmlFor={indentId}
          help="Spaces inserted by the Tab key. 2 is the JavaScript community default; Python conventionally uses 4."
        >
          <div id={indentId} role="radiogroup" aria-label="Indent size" className="flex gap-2">
            {INDENT_OPTIONS.map(({ value, label }) => {
              const selected = (prefs.editorIndentSize ?? 2) === value;
              const inputId = `${uid}-indent-${value}`;
              return (
                <label
                  key={value}
                  htmlFor={inputId}
                  className={`flex cursor-pointer items-center gap-2 rounded-sm border px-3 py-2 transition-colors ${
                    selected
                      ? 'border-border-strong bg-surface-2'
                      : 'border-border hover:border-border-strong'
                  }`}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name={`${uid}-indent`}
                    value={String(value)}
                    checked={selected}
                    onChange={() => onChange({ editorIndentSize: value })}
                    className="accent-accent"
                  />
                  <span className="font-mono text-xs text-text">{label}</span>
                </label>
              );
            })}
          </div>
        </FormField>

        {/* Word wrap */}
        <FormField
          label="Word wrap"
          htmlFor={`${uid}-word-wrap`}
          help="Wrap long lines at the editor boundary. Toggle is also available in the editor header."
        >
          <label
            htmlFor={`${uid}-word-wrap`}
            className="inline-flex cursor-pointer items-center gap-2"
          >
            <input
              id={`${uid}-word-wrap`}
              type="checkbox"
              checked={prefs.editorWordWrap ?? true}
              onChange={(e) => onChange({ editorWordWrap: e.target.checked })}
              className="accent-accent"
            />
            <span className="font-mono text-xs text-text">
              {(prefs.editorWordWrap ?? true) ? 'On' : 'Off'}
            </span>
          </label>
        </FormField>

        {/* Autocomplete */}
        <FormField
          label="Autocomplete"
          htmlFor={`${uid}-autocomplete`}
          help="Show code suggestions while typing. Off by default (like LeetCode). Snippets (e.g. 'for' → Tab) work regardless."
        >
          <label
            htmlFor={`${uid}-autocomplete`}
            className="inline-flex cursor-pointer items-center gap-2"
          >
            <input
              id={`${uid}-autocomplete`}
              type="checkbox"
              checked={prefs.editorAutocomplete ?? false}
              onChange={(e) => onChange({ editorAutocomplete: e.target.checked })}
              className="accent-accent"
            />
            <span className="font-mono text-xs text-text">
              {(prefs.editorAutocomplete ?? false) ? 'On' : 'Off'}
            </span>
          </label>
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
