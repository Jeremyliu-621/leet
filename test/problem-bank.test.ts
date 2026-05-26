import { describe, it, expect } from 'vitest';
import { problems } from '../src/lib/problems/bank';
import { solutions } from './bank-solutions';
import { PROBLEM_TAGS, DIFFICULTIES } from '../src/lib/types';

// Validates the integrity of the local problem bank and proves every test
// case's `expected` value is correct by running it against the problem's
// reference solution. If this suite is green, the bank is trustworthy.

const VALID_TAGS = new Set<string>(PROBLEM_TAGS);

describe('problem bank', () => {
  it('contains problems', () => {
    expect(problems.length).toBeGreaterThan(0);
  });

  it('has unique, kebab-case problem ids', () => {
    const ids = problems.map((p) => p.id);
    expect(new Set(ids).size, 'duplicate problem id').toBe(ids.length);
    for (const id of ids) {
      expect(id, `id "${id}" is not kebab-case`).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('has a reference solution for every problem', () => {
    for (const p of problems) {
      expect(typeof solutions[p.id], `missing reference solution for "${p.id}"`).toBe('function');
    }
  });

  for (const problem of problems) {
    describe(`${problem.id} — ${problem.title}`, () => {
      it('is structurally valid', () => {
        expect(problem.title.trim()).not.toBe('');
        expect(problem.description.trim()).not.toBe('');
        expect(problem.functionName.trim()).not.toBe('');
        expect(DIFFICULTIES).toContain(problem.difficulty);
        expect(problem.params.length).toBeGreaterThan(0);
        expect(problem.tags.length).toBeGreaterThan(0);
        for (const tag of problem.tags) {
          expect(VALID_TAGS.has(tag), `invalid tag "${tag}" on "${problem.id}"`).toBe(true);
        }
        expect(problem.constraints.length).toBeGreaterThan(0);
        expect(problem.examples.length).toBeGreaterThan(0);
        for (const example of problem.examples) {
          expect(example.input.trim()).not.toBe('');
          expect(example.output.trim()).not.toBe('');
        }
        expect(problem.starterCode.javascript.trim()).not.toBe('');
        // When a preamble is present it may define the runner function; otherwise
        // the starter code itself must declare the expected function name.
        if (!problem.preamble?.javascript) {
          expect(
            problem.starterCode.javascript.includes(problem.functionName),
            'starter code should declare the solution function',
          ).toBe(true);
        }
        expect(problem.visibleTests.length).toBeGreaterThan(0);
        expect(problem.hiddenTests.length).toBeGreaterThan(0);
        // Every problem must have at least 3 progressive hints for a good UX.
        expect(
          (problem.hints?.length ?? 0) >= 3,
          `"${problem.id}" has ${problem.hints?.length ?? 0} hint(s); need at least 3`,
        ).toBe(true);
      });

      it('reference solution passes every visible and hidden test', () => {
        const solve = solutions[problem.id];
        expect(typeof solve).toBe('function');
        const allTests = [...problem.visibleTests, ...problem.hiddenTests];
        allTests.forEach((testCase, index) => {
          const result = solve!(...testCase.args);
          expect(result, `${problem.id}: test #${index} produced the wrong result`).toEqual(
            testCase.expected,
          );
        });
      });
    });
  }
});
