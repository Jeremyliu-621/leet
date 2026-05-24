import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { loadPyodide } from 'pyodide';
import type { PyodideInterface } from 'pyodide';
import { problems } from '../src/lib/problems/bank';
import { pythonSolutions } from './bank-solutions-python';
import type { Problem } from '../src/lib/problems/types';

// Boots Pyodide once and proves every Python reference solution passes its
// problem's visible + hidden tests. Mirrors `test/problem-bank.test.ts` but
// for the Python language, against the SAME shared test cases.
//
// Boot is slow (~1–3 s on a laptop) so we share the interpreter across the
// whole suite. Per-problem state is isolated via fresh `globals` dicts.

let pyodide: PyodideInterface;

beforeAll(async () => {
  pyodide = await loadPyodide();
}, 60_000);

afterAll(() => {
  // Pyodide doesn't expose a destroy hook; the Node process exits anyway.
});

function hasPythonStarter(problem: Problem): boolean {
  return typeof problem.starterCode.python === 'string' && problem.starterCode.python.length > 0;
}

describe('problem bank (python)', () => {
  const pythonProblems = problems.filter(hasPythonStarter);

  it('has at least one problem with a Python starter', () => {
    expect(pythonProblems.length).toBeGreaterThan(0);
  });

  it('has a Python reference solution for every Python-capable problem', () => {
    for (const problem of pythonProblems) {
      expect(
        typeof pythonSolutions[problem.id] === 'string',
        `missing python reference for "${problem.id}"`,
      ).toBe(true);
    }
  });

  for (const problem of problems.filter(hasPythonStarter)) {
    describe(`${problem.id} — ${problem.title} (python)`, () => {
      it('reference solution passes every visible and hidden test', async () => {
        const source = pythonSolutions[problem.id];
        expect(source, `missing reference for ${problem.id}`).toBeDefined();

        // Fresh globals per problem keeps name collisions impossible.
        const namespace = pyodide.toPy({});
        try {
          await pyodide.runPythonAsync(source!, { globals: namespace });
          const fn = namespace.get(problem.functionName);
          expect(typeof fn).toBe('function');

          const allTests = [...problem.visibleTests, ...problem.hiddenTests];
          for (let i = 0; i < allTests.length; i++) {
            const testCase = allTests[i]!;
            const raw = fn(...testCase.args);
            let value: unknown;
            if (raw && typeof (raw as { toJs?: unknown }).toJs === 'function') {
              value = (raw as {
                toJs: (opts: { create_proxies?: boolean; dict_converter?: unknown }) => unknown;
              }).toJs({ create_proxies: false, dict_converter: Object.fromEntries });
              if (typeof (raw as { destroy?: unknown }).destroy === 'function') {
                (raw as { destroy: () => void }).destroy();
              }
            } else {
              value = raw;
            }
            expect(value, `${problem.id} test #${i} (python)`).toEqual(testCase.expected);
          }

          if (typeof (fn as { destroy?: unknown }).destroy === 'function') {
            (fn as { destroy: () => void }).destroy();
          }
        } finally {
          namespace.destroy();
        }
      });
    });
  }
});
