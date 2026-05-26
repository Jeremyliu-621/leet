import type { Problem } from '../types';

const JS_PREAMBLE = `
function isBadVersion(version, firstBad) {
  return version >= firstBad;
}
function firstBadVersionRunner(n, firstBad) {
  const isBad = (v) => isBadVersion(v, firstBad);
  return firstBadVersion(n, isBad);
}
`;

const PY_PREAMBLE = `
def firstBadVersionRunner(n, first_bad):
    def is_bad_version(v):
        return v >= first_bad
    return firstBadVersion(n, is_bad_version)
`;

export const problem: Problem = {
  id: 'first-bad-version',
  title: 'First Bad Version',
  difficulty: 'easy',
  tags: ['binary-search'],
  description: `You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have \`n\` versions \`[1, 2, ..., n]\` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API \`bool isBadVersion(version)\` which returns whether \`version\` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

**Note:** For this problem, your function receives a second parameter \`isBadVersion\` — a function you can call to check if a version is bad.`,
  constraints: ['`1 <= bad <= n <= 2^31 - 1`'],
  examples: [
    {
      input: 'n = 5, bad = 4',
      output: '4',
      explanation: 'isBadVersion(3) = false; isBadVersion(4) = true. So 4 is the first bad version.',
    },
    { input: 'n = 1, bad = 1', output: '1' },
  ],
  hints: [
    'Binary search: if isBadVersion(mid) is true, the first bad is at mid or earlier.',
    'If isBadVersion(mid) is false, the first bad is after mid.',
    `\`\`\`js
function solution(isBadVersion) {
  return function(n) {
    let lo = 1, hi = n;
    while (lo < hi) {
      const mid = lo + Math.floor((hi-lo)/2);
      if (isBadVersion(mid)) hi = mid;
      else lo = mid+1;
    }
    return lo;
  };
}\`\`\``,
  ],
  functionName: 'firstBadVersionRunner',
  params: ['n', 'firstBad'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: 'function firstBadVersion(n, isBadVersion) {\n  \n}\n',
    python: 'def firstBadVersion(n, is_bad_version):\n    pass\n',
  },
  visibleTests: [
    { args: [5, 4], expected: 4 },
    { args: [1, 1], expected: 1 },
    { args: [10, 7], expected: 7 },
  ],
  hiddenTests: [
    { args: [3, 1], expected: 1 },
    { args: [100, 50], expected: 50 },
    { args: [1000000, 999999], expected: 999999 },
    { args: [6, 6], expected: 6 },
  ],
};
