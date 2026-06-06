/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      // Grayscale design tokens — values come from CSS variables so the theme
      // (`[data-theme="light"]` / `[data-theme="dark"]`) can flip at runtime
      // without rebuilding the bundle. Both themes are pure grayscale, zero
      // hue. Default-document attribute is set in `src/ui/mount.tsx` before
      // React renders.
      colors: {
        bg: 'var(--ll-bg)',
        surface: 'var(--ll-surface)',
        'surface-2': 'var(--ll-surface-2)',
        border: 'var(--ll-border)',
        'border-strong': 'var(--ll-border-strong)',
        text: 'var(--ll-text)',
        muted: 'var(--ll-muted)',
        faint: 'var(--ll-faint)',
        accent: 'var(--ll-accent)',
        'on-accent': 'var(--ll-on-accent)',
        // Semantic + brand colors (color is allowed where it carries meaning:
        // syntax, verdicts, run/submit actions, and LeetMeow's identity).
        brand: 'var(--ll-brand)',
        'brand-strong': 'var(--ll-brand-strong)',
        success: 'var(--ll-success)',
        'success-bg': 'var(--ll-success-bg)',
        error: 'var(--ll-error)',
        'error-bg': 'var(--ll-error-bg)',
        warning: 'var(--ll-warning)',
        'warning-bg': 'var(--ll-warning-bg)',
        info: 'var(--ll-info)',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      borderRadius: {
        card: '6px',
      },
    },
  },
  plugins: [],
};
