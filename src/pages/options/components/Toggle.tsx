/**
 * Toggle — a simple accessible on/off switch.
 * Renders as a <button role="switch"> for proper keyboard support.
 */

interface ToggleProps {
  id?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export function Toggle({
  id,
  checked,
  onChange,
  disabled = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}: ToggleProps) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={[
        'relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border transition-colors',
        'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
        'disabled:cursor-not-allowed disabled:opacity-40',
        checked
          ? 'border-accent bg-accent'
          : 'border-border-strong bg-surface-2',
      ].join(' ')}
    >
      <span
        className={[
          'inline-block h-3.5 w-3.5 rounded-full transition-transform',
          checked ? 'translate-x-4 bg-on-accent' : 'translate-x-0.5 bg-muted',
        ].join(' ')}
        aria-hidden="true"
      />
    </button>
  );
}
