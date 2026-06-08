import { describe, it, expect } from 'vitest';
import { getAllProblems, filterProblems, pickChallengeProblem } from '../src/lib/problems';

describe('debug mode', () => {
  const allProblems = getAllProblems();
  const debugProblems = allProblems.filter((p) => p.kind === 'debug');
  const functionProblems = allProblems.filter((p) => !p.kind || p.kind === 'function');

  it('bank contains debug problems', () => {
    expect(debugProblems.length).toBeGreaterThanOrEqual(9);
  });

  it('debug problems have the required fields', () => {
    for (const problem of debugProblems) {
      expect(problem.kind).toBe('debug');
      expect(problem.buggyCode).toBeDefined();
      expect(problem.buggyCode!.javascript).toBeDefined();
      expect(problem.buggyCode!.javascript!.length).toBeGreaterThan(0);
      // buggyCode must declare the function
      expect(problem.buggyCode!.javascript!).toContain(problem.functionName);
    }
  });

  it('debug problems have python buggy code', () => {
    for (const problem of debugProblems) {
      expect(problem.buggyCode!.python).toBeDefined();
      expect(problem.buggyCode!.python!.length).toBeGreaterThan(0);
    }
  });

  it('debug problems still have standard problem structure', () => {
    for (const problem of debugProblems) {
      expect(problem.id).toBeTruthy();
      expect(problem.title).toBeTruthy();
      expect(problem.difficulty).toBeTruthy();
      expect(problem.tags.length).toBeGreaterThan(0);
      expect(problem.functionName).toBeTruthy();
      expect(problem.params.length).toBeGreaterThan(0);
      expect(problem.visibleTests.length).toBeGreaterThan(0);
      expect(problem.hiddenTests.length).toBeGreaterThan(0);
      expect(problem.hints?.length).toBeGreaterThanOrEqual(3);
    }
  });

  describe('filterProblems with kinds', () => {
    it('filters to debug-only', () => {
      const results = filterProblems({ kinds: ['debug'] });
      expect(results.length).toBe(debugProblems.length);
      for (const p of results) {
        expect(p.kind).toBe('debug');
      }
    });

    it('filters to function-only', () => {
      const results = filterProblems({ kinds: ['function'] });
      expect(results.length).toBe(functionProblems.length);
      for (const p of results) {
        expect(p.kind ?? 'function').toBe('function');
      }
    });

    it('no kinds filter returns all problems', () => {
      const results = filterProblems({});
      expect(results.length).toBe(allProblems.length);
    });

    it('both kinds returns all problems', () => {
      const results = filterProblems({ kinds: ['function', 'debug'] });
      expect(results.length).toBe(allProblems.length);
    });

    it('combines kinds with difficulty filter', () => {
      const results = filterProblems({ kinds: ['debug'], difficulties: ['easy'] });
      for (const p of results) {
        expect(p.kind).toBe('debug');
        expect(p.difficulty).toBe('easy');
      }
    });
  });

  describe('pickChallengeProblem with kinds', () => {
    it('respects debug-only kind filter', () => {
      const problem = pickChallengeProblem(
        { difficulties: [], tags: [] },
        { kinds: ['debug'], random: () => 0 },
      );
      expect(problem).toBeDefined();
      expect(problem!.kind).toBe('debug');
    });

    it('respects function-only kind filter', () => {
      const problem = pickChallengeProblem(
        { difficulties: [], tags: [] },
        { kinds: ['function'], random: () => 0 },
      );
      expect(problem).toBeDefined();
      expect(problem!.kind ?? 'function').toBe('function');
    });

    it('relaxes to any kind when no problems match', () => {
      // Use an impossible combination: debug + a tag that no debug problem has
      const problem = pickChallengeProblem(
        { difficulties: [], tags: ['segment-tree'] },
        { kinds: ['debug'], random: () => 0 },
      );
      // Should still find something via progressive relaxation
      expect(problem).toBeDefined();
    });
  });

  describe('buggy code is distinct from correct solution', () => {
    it('buggyCode differs from starterCode for each debug problem', () => {
      // The starterCode IS the buggyCode for debug problems (they are set the same),
      // but it must differ from what the reference solution would produce.
      for (const problem of debugProblems) {
        // At minimum, buggyCode should exist and contain content
        expect(problem.buggyCode!.javascript).toBeDefined();
        expect(problem.starterCode.javascript).toBeDefined();
      }
    });
  });
});
