// Indentation normalization for starter code loaded into the editor.
//
// Starter snippets in the problem bank are authored with a fixed 4-space
// indent, but the editor inserts `indentSize` (2 or 4) spaces when the user
// presses Enter or Tab. Without reconciling the two, a freshly loaded starter
// disagrees with freshly typed lines — e.g. a 4-space `pass` sitting under
// 2-space auto-indent. `normalizeIndentation` rescales a snippet's leading
// whitespace so every indent level uses exactly `targetSize` spaces, matching
// what the editor produces from then on.

/**
 * Rescale the leading-space indentation of `code` so each indent level is
 * `targetSize` spaces wide.
 *
 * The snippet's own indent unit is detected as the smallest non-zero
 * leading-space width across its lines (one indent level), so the function is
 * correct whether the snippet was authored at 2 or 4 spaces. Only leading
 * spaces are rewritten:
 *
 *  - Blank and whitespace-only lines pass through untouched.
 *  - Tab-indented lines are left alone (no space prefix to rescale).
 *  - Any leftover spaces that don't divide evenly into the unit (manual
 *    alignment) are preserved after the rescaled portion.
 *
 * Returns `code` unchanged when there is nothing to indent or the snippet is
 * already at the target size.
 */
export function normalizeIndentation(code: string, targetSize: number): string {
  if (targetSize <= 0) return code;

  const lines = code.split('\n');

  // Detect the source indent unit: the shallowest non-zero space prefix.
  // Whitespace-only lines and tab-indented lines (leadingSpaces === 0) are
  // ignored so they can't skew the unit.
  let unit = Infinity;
  for (const line of lines) {
    if (line.trim() === '') continue;
    const spaces = leadingSpaces(line);
    if (spaces > 0) unit = Math.min(unit, spaces);
  }

  if (!Number.isFinite(unit) || unit === targetSize) return code;

  return lines
    .map((line) => {
      if (line.trim() === '') return line;
      const spaces = leadingSpaces(line);
      if (spaces === 0) return line;
      const level = Math.floor(spaces / unit);
      const remainder = spaces % unit; // preserve non-unit alignment spaces
      return ' '.repeat(level * targetSize + remainder) + line.slice(spaces);
    })
    .join('\n');
}

/** Number of leading space (U+0020) characters on a line. */
function leadingSpaces(line: string): number {
  let i = 0;
  while (i < line.length && line[i] === ' ') i++;
  return i;
}
