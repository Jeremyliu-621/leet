import { describe, it, expect } from 'vitest';
import { numberLines, buildUserContent, buildHintRequestBody, MAX_CODE_CHARS } from '../src/lib/ai/prompt';
import type { Problem } from '../src/lib/problems/types';

const PROBLEM: Problem = {
  id: 'two-sum',
  title: 'Two Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: 'Return indices of the two numbers that add up to target.',
  constraints: ['2 <= nums.length <= 10^4'],
  examples: [{ input: 'nums = [2,7], target = 9', output: '[0,1]', explanation: '2 + 7 = 9' }],
  functionName: 'twoSum',
  params: ['nums', 'target'],
  starterCode: { javascript: 'function twoSum(nums, target) {}' },
  visibleTests: [],
  hiddenTests: [],
};

describe('numberLines', () => {
  it('prefixes each line with a right-aligned 1-based number', () => {
    expect(numberLines('a\nb')).toBe('1 | a\n2 | b');
  });

  it('pads numbers to a consistent width', () => {
    const out = numberLines(Array.from({ length: 12 }, (_, i) => `L${i}`).join('\n'));
    const lines = out.split('\n');
    expect(lines[0]).toBe(' 1 | L0');
    expect(lines[11]).toBe('12 | L11');
  });

  it('handles a single line and empty string', () => {
    expect(numberLines('only')).toBe('1 | only');
    expect(numberLines('')).toBe('1 | ');
  });
});

describe('buildUserContent', () => {
  it('includes the problem title, function signature, language and numbered code', () => {
    const out = buildUserContent(PROBLEM, 'return [];', 'javascript', 'review');
    expect(out).toContain('Two Sum');
    expect(out).toContain('twoSum(nums, target)');
    expect(out).toContain('Language: javascript');
    expect(out).toContain('1 | return [];');
    expect(out).toContain('REVIEW');
  });

  it('switches mode instruction between nudge and review', () => {
    expect(buildUserContent(PROBLEM, 'x', 'python', 'nudge')).toContain('NUDGE');
    expect(buildUserContent(PROBLEM, 'x', 'python', 'review')).toContain('REVIEW');
  });

  it('truncates very long code', () => {
    const huge = 'x'.repeat(MAX_CODE_CHARS + 500);
    const out = buildUserContent(PROBLEM, huge, 'javascript', 'review');
    expect(out).toContain('(truncated)');
  });
});

describe('buildHintRequestBody', () => {
  it('requests JSON output with a response schema', () => {
    const body = buildHintRequestBody(PROBLEM, 'code', 'javascript', 'review') as {
      generationConfig: { responseMimeType: string; responseSchema: unknown };
      contents: { role: string; parts: { text: string }[] }[];
      systemInstruction: { parts: { text: string }[] };
    };
    expect(body.generationConfig.responseMimeType).toBe('application/json');
    expect(body.generationConfig.responseSchema).toBeTruthy();
    expect(body.contents[0]!.role).toBe('user');
    expect(body.systemInstruction.parts[0]!.text).toContain('JSON');
  });

  it('uses a lower temperature for review than nudge', () => {
    const review = buildHintRequestBody(PROBLEM, 'c', 'javascript', 'review') as { generationConfig: { temperature: number } };
    const nudge = buildHintRequestBody(PROBLEM, 'c', 'javascript', 'nudge') as { generationConfig: { temperature: number } };
    expect(review.generationConfig.temperature).toBeLessThan(nudge.generationConfig.temperature);
  });
});
