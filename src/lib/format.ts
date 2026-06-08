// Small display-string formatters shared across pages.

/** Capitalises first letter, lowercases rest. */
export function capitalise(s: string): string {
  if (s.length === 0) return s;
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

/** Formats a kebab tag for display: hyphens to spaces, each word capitalised. */
export function formatTag(tag: string): string {
  return tag.split('-').map(capitalise).join(' ');
}
