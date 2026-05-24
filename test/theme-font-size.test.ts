import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  MAX_EDITOR_FONT_SIZE,
  MIN_EDITOR_FONT_SIZE,
  applyEditorFontSize,
} from '../src/lib/theme/theme';

describe('applyEditorFontSize', () => {
  beforeEach(() => {
    const root = { style: { setProperty: vi.fn() } };
    (globalThis as unknown as { document: Document }).document = {
      documentElement: root,
    } as unknown as Document;
  });

  it('writes the CSS variable in px on the root element', () => {
    applyEditorFontSize(15);
    const setProperty = document.documentElement.style.setProperty as unknown as ReturnType<typeof vi.fn>;
    expect(setProperty).toHaveBeenCalledWith('--ll-editor-font-size', '15px');
  });

  it('clamps below the minimum', () => {
    expect(applyEditorFontSize(MIN_EDITOR_FONT_SIZE - 5)).toBe(MIN_EDITOR_FONT_SIZE);
  });

  it('clamps above the maximum', () => {
    expect(applyEditorFontSize(MAX_EDITOR_FONT_SIZE + 99)).toBe(MAX_EDITOR_FONT_SIZE);
  });

  it('rounds non-integer values', () => {
    expect(applyEditorFontSize(13.7)).toBe(14);
    expect(applyEditorFontSize(12.4)).toBe(12);
  });

  it('returns the clamped/rounded value', () => {
    expect(applyEditorFontSize(13)).toBe(13);
    expect(applyEditorFontSize(11)).toBe(11);
    expect(applyEditorFontSize(17)).toBe(17);
  });
});
