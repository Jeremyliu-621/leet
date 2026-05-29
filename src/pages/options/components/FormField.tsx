/**
 * FormField — labelled wrapper for a single form control.
 * Wires up aria-describedby for help and error text automatically.
 */

import React from 'react';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  help?: string;
  error?: string | null;
  children: React.ReactElement<{ 'aria-describedby'?: string }>;
  /** Extra class on the outer wrapper. */
  className?: string;
}

export function FormField({ label, htmlFor, help, error, children, className = '' }: FormFieldProps) {
  const helpId = help ? `${htmlFor}-help` : undefined;
  const errorId = error ? `${htmlFor}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(' ') || undefined;

  const control = describedBy
    ? React.cloneElement(children, { 'aria-describedby': describedBy })
    : children;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="font-mono text-[10px] uppercase tracking-widest text-faint"
      >
        {label}
      </label>

      {control}

      {help && !error && (
        <p id={helpId} className="text-[11px] leading-relaxed text-muted">
          {help}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="font-mono text-[11px] text-text">
          {error}
        </p>
      )}
    </div>
  );
}
