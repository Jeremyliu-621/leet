import { describe, it, expect } from 'vitest';
import { parseHintResponse, extractText } from '../src/lib/ai/parse';

describe('extractText', () => {
  it('pulls concatenated part text from a Gemini response', () => {
    const json = { candidates: [{ content: { parts: [{ text: 'a' }, { text: 'b' }] } }] };
    expect(extractText(json)).toBe('ab');
  });

  it('returns empty string for unexpected shapes', () => {
    expect(extractText(null)).toBe('');
    expect(extractText({})).toBe('');
    expect(extractText({ candidates: [] })).toBe('');
    expect(extractText({ candidates: [{ content: {} }] })).toBe('');
  });
});

describe('parseHintResponse', () => {
  it('parses a clean JSON object', () => {
    const raw = JSON.stringify({
      summary: 'Close — one edge case.',
      hints: [{ line: 2, severity: 'bug', title: 'Off by one', comment: 'i should start at 0.' }],
    });
    const out = parseHintResponse(raw, 10);
    expect(out.summary).toBe('Close — one edge case.');
    expect(out.hints).toHaveLength(1);
    expect(out.hints[0]).toEqual({ line: 2, severity: 'bug', title: 'Off by one', comment: 'i should start at 0.' });
  });

  it('strips ```json code fences', () => {
    const raw = '```json\n{"summary":"hi","hints":[]}\n```';
    expect(parseHintResponse(raw, 5).summary).toBe('hi');
  });

  it('clamps out-of-range line numbers to the last line', () => {
    const raw = JSON.stringify({ summary: '', hints: [{ line: 999, severity: 'info', title: 't', comment: 'c' }] });
    expect(parseHintResponse(raw, 4).hints[0]!.line).toBe(4);
  });

  it('treats line < 1 and non-numbers as null', () => {
    const raw = JSON.stringify({
      summary: '',
      hints: [
        { line: 0, severity: 'info', title: 'a', comment: 'c' },
        { line: 'x', severity: 'info', title: 'b', comment: 'c' },
        { line: null, severity: 'info', title: 'd', comment: 'c' },
      ],
    });
    const out = parseHintResponse(raw, 10);
    expect(out.hints.map((h) => h.line)).toEqual([null, null, null]);
  });

  it('coerces unknown severity to info', () => {
    const raw = JSON.stringify({ summary: '', hints: [{ line: 1, severity: 'critical', title: 't', comment: 'c' }] });
    expect(parseHintResponse(raw, 3).hints[0]!.severity).toBe('info');
  });

  it('drops hints with neither title nor comment', () => {
    const raw = JSON.stringify({ summary: '', hints: [{ line: 1, severity: 'info', title: '', comment: '' }] });
    expect(parseHintResponse(raw, 3).hints).toHaveLength(0);
  });

  it('caps the number of hints at 12', () => {
    const hints = Array.from({ length: 30 }, (_, i) => ({ line: 1, severity: 'info', title: `t${i}`, comment: 'c' }));
    const out = parseHintResponse(JSON.stringify({ summary: '', hints }), 5);
    expect(out.hints).toHaveLength(12);
  });

  it('falls back to raw text as summary on invalid JSON', () => {
    const out = parseHintResponse('not json at all', 5);
    expect(out.summary).toBe('not json at all');
    expect(out.hints).toEqual([]);
  });

  it('isolates a JSON object embedded in stray prose', () => {
    const raw = 'Here you go: {"summary":"ok","hints":[]} hope that helps';
    expect(parseHintResponse(raw, 5).summary).toBe('ok');
  });
});
