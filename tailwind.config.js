/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      // Pure-grayscale design system — zero hue. Emphasis is carried by
      // contrast and typographic weight, never color.
      colors: {
        bg: '#0A0A0A',
        surface: '#161616',
        'surface-2': '#1E1E1E',
        border: '#262626',
        'border-strong': '#383838',
        text: '#EDEDED',
        muted: '#8A8A8A',
        faint: '#5A5A5A',
        accent: '#FFFFFF',
        'on-accent': '#0A0A0A',
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
