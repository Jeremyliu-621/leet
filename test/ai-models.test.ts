import { describe, expect, it } from 'vitest';
import {
  GEMINI_MODELS,
  DEFAULT_GEMINI_MODEL,
  isValidGeminiModel,
  normalizeModel,
} from '../src/lib/ai/models';

describe('gemini model registry', () => {
  it('exposes at least one selectable model', () => {
    expect(GEMINI_MODELS.length).toBeGreaterThan(0);
  });

  it('uses the first listed model as the default', () => {
    expect(GEMINI_MODELS[0]?.value).toBe(DEFAULT_GEMINI_MODEL);
  });

  it('the default is itself a valid model', () => {
    expect(isValidGeminiModel(DEFAULT_GEMINI_MODEL)).toBe(true);
  });

  it('has unique model values and non-empty labels/descriptions', () => {
    const values = GEMINI_MODELS.map((m) => m.value);
    expect(new Set(values).size).toBe(values.length);
    for (const m of GEMINI_MODELS) {
      expect(m.label.length).toBeGreaterThan(0);
      expect(m.description.length).toBeGreaterThan(0);
    }
  });

  it('does not offer any retired model id', () => {
    const retired = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-pro'];
    for (const id of retired) {
      expect(isValidGeminiModel(id)).toBe(false);
    }
  });
});

describe('isValidGeminiModel', () => {
  it('accepts every offered model', () => {
    for (const m of GEMINI_MODELS) {
      expect(isValidGeminiModel(m.value)).toBe(true);
    }
  });

  it('rejects null, undefined, empty, and unknown ids', () => {
    expect(isValidGeminiModel(null)).toBe(false);
    expect(isValidGeminiModel(undefined)).toBe(false);
    expect(isValidGeminiModel('')).toBe(false);
    expect(isValidGeminiModel('not-a-model')).toBe(false);
  });
});

describe('normalizeModel', () => {
  it('passes through a currently-valid model unchanged', () => {
    for (const m of GEMINI_MODELS) {
      expect(normalizeModel(m.value)).toBe(m.value);
    }
  });

  it('migrates a retired model id to the default', () => {
    expect(normalizeModel('gemini-2.0-flash')).toBe(DEFAULT_GEMINI_MODEL);
    expect(normalizeModel('gemini-1.5-flash')).toBe(DEFAULT_GEMINI_MODEL);
  });

  it('falls back to the default for null/undefined/empty', () => {
    expect(normalizeModel(null)).toBe(DEFAULT_GEMINI_MODEL);
    expect(normalizeModel(undefined)).toBe(DEFAULT_GEMINI_MODEL);
    expect(normalizeModel('')).toBe(DEFAULT_GEMINI_MODEL);
  });
});
