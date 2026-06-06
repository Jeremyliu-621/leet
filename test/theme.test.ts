import { describe, it, expect, beforeEach, vi } from 'vitest';
import { applyTheme, isLightTheme, resolveBaseTheme, resolveTheme } from '../src/lib/theme/theme';

describe('resolveTheme', () => {
  beforeEach(() => {
    (globalThis as { window?: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: true })),
    } as unknown as Window;
  });

  it('returns the explicit choice when given dark or light', () => {
    expect(resolveTheme('dark')).toBe('dark');
    expect(resolveTheme('light')).toBe('light');
  });

  it('resolves system to dark when OS prefers dark', () => {
    (globalThis as unknown as { window: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: true })),
    } as unknown as Window;
    expect(resolveTheme('system')).toBe('dark');
  });

  it('resolves system to light when OS prefers light', () => {
    (globalThis as unknown as { window: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: false })),
    } as unknown as Window;
    expect(resolveTheme('system')).toBe('light');
  });

  it('falls back to dark when matchMedia is unavailable', () => {
    (globalThis as unknown as { window: Window }).window = {} as unknown as Window;
    expect(resolveTheme('system')).toBe('dark');
  });

  it('returns custom themes as-is', () => {
    expect(resolveTheme('serika-dark')).toBe('serika-dark');
    expect(resolveTheme('nord')).toBe('nord');
    expect(resolveTheme('botanical')).toBe('botanical');
    expect(resolveTheme('carbon')).toBe('carbon');
    expect(resolveTheme('moonlight')).toBe('moonlight');
    expect(resolveTheme('muted-ink')).toBe('muted-ink');
    expect(resolveTheme('terminal')).toBe('terminal');
    expect(resolveTheme('dracula')).toBe('dracula');
    expect(resolveTheme('paper')).toBe('paper');
  });
});

describe('applyTheme', () => {
  beforeEach(() => {
    const root = { setAttribute: vi.fn() };
    (globalThis as unknown as { document: Document }).document = {
      documentElement: root,
    } as unknown as Document;
    (globalThis as unknown as { window: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: true })),
    } as unknown as Window;
  });

  it('writes the resolved theme to data-theme on the root element', () => {
    applyTheme('light');
    const setAttribute = document.documentElement.setAttribute as unknown as ReturnType<typeof vi.fn>;
    expect(setAttribute).toHaveBeenCalledWith('data-theme', 'light');
  });

  it('returns the resolved theme', () => {
    expect(applyTheme('dark')).toBe('dark');
    expect(applyTheme('light')).toBe('light');
  });

  it('writes dark when system preference is dark', () => {
    applyTheme('system');
    const setAttribute = document.documentElement.setAttribute as unknown as ReturnType<typeof vi.fn>;
    expect(setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
  });

  it('writes light when system preference is light', () => {
    (globalThis as unknown as { window: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: false })),
    } as unknown as Window;
    applyTheme('system');
    const setAttribute = document.documentElement.setAttribute as unknown as ReturnType<typeof vi.fn>;
    expect(setAttribute).toHaveBeenCalledWith('data-theme', 'light');
  });

  it('writes custom theme names directly', () => {
    applyTheme('nord');
    const setAttribute = document.documentElement.setAttribute as unknown as ReturnType<typeof vi.fn>;
    expect(setAttribute).toHaveBeenCalledWith('data-theme', 'nord');
  });
});

describe('resolveBaseTheme', () => {
  beforeEach(() => {
    (globalThis as { window?: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: true })),
    } as unknown as Window;
  });

  it('returns dark for dark preference', () => {
    expect(resolveBaseTheme('dark')).toBe('dark');
  });

  it('returns light for light preference', () => {
    expect(resolveBaseTheme('light')).toBe('light');
  });

  it('returns dark for system when OS prefers dark', () => {
    expect(resolveBaseTheme('system')).toBe('dark');
  });

  it('returns light for system when OS prefers light', () => {
    (globalThis as unknown as { window: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: false })),
    } as unknown as Window;
    expect(resolveBaseTheme('system')).toBe('light');
  });

  it('returns light for paper theme', () => {
    expect(resolveBaseTheme('paper')).toBe('light');
  });

  it('returns dark for custom dark themes', () => {
    expect(resolveBaseTheme('nord')).toBe('dark');
    expect(resolveBaseTheme('serika-dark')).toBe('dark');
    expect(resolveBaseTheme('terminal')).toBe('dark');
    expect(resolveBaseTheme('dracula')).toBe('dark');
  });
});

describe('isLightTheme', () => {
  it('returns true for light themes', () => {
    expect(isLightTheme('light')).toBe(true);
    expect(isLightTheme('paper')).toBe(true);
  });

  it('returns false for dark themes', () => {
    expect(isLightTheme('dark')).toBe(false);
    expect(isLightTheme('nord')).toBe(false);
    expect(isLightTheme('terminal')).toBe(false);
    expect(isLightTheme('dracula')).toBe(false);
  });
});
