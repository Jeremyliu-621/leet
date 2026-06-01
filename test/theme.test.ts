import { describe, it, expect, beforeEach, vi } from 'vitest';
import { applyTheme, resolveTheme } from '../src/lib/theme/theme';

describe('resolveTheme', () => {
  beforeEach(() => {
    // Make matchMedia resolve to dark by default; tests override.
    (globalThis as { window?: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: true })),
    } as unknown as Window;
  });

  it('returns the explicit choice when given dark or light', () => {
    expect(resolveTheme('dark')).toBe('dark');
    expect(resolveTheme('light')).toBe('light');
  });

  it('follows the OS for system when the OS prefers dark', () => {
    (globalThis as unknown as { window: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: true })),
    } as unknown as Window;
    expect(resolveTheme('system')).toBe('system-dark');
  });

  it('follows the OS for system when the OS prefers light', () => {
    (globalThis as unknown as { window: Window }).window = {
      matchMedia: vi.fn(() => ({ matches: false })),
    } as unknown as Window;
    expect(resolveTheme('system')).toBe('system-light');
  });

  it('falls back to system-dark when matchMedia is unavailable', () => {
    (globalThis as unknown as { window: Window }).window = {} as unknown as Window;
    expect(resolveTheme('system')).toBe('system-dark');
  });
});

describe('applyTheme', () => {
  beforeEach(() => {
    // Stub a minimal document with documentElement.
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
});
