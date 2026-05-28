import type { Problem } from '../types';

export const problem: Problem = {
  id: 'compare-version-numbers',
  title: 'Compare Version Numbers',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given two version strings \`version1\` and \`version2\`, compare them. A version string consists of **revisions** separated by dots \`'.'\`. The value of the revision is its integer value ignoring leading zeros.

To compare version strings, compare their revision values in **left-to-right** order. If a version string does not have enough revisions, treat the missing revision as \`0\`.

Return \`-1\` if \`version1 < version2\`, \`1\` if \`version1 > version2\`, and \`0\` otherwise.`,
  constraints: [
    '1 <= version1.length, version2.length <= 500',
    'version1 and version2 only contain digits and ".".',
    'version1 and version2 are valid version strings.',
  ],
  examples: [
    { input: 'version1 = "1.2", version2 = "1.10"', output: '-1', explanation: '1.2 < 1.10 because 2 < 10.' },
    { input: 'version1 = "1.01", version2 = "1.001"', output: '0', explanation: 'Ignoring leading zeros, both equal 1.1.' },
    { input: 'version1 = "1.0", version2 = "1.0.0"', output: '0', explanation: 'Missing revision treated as 0.' },
  ],
  hints: [
    'Level 1: Split both strings by "." and compare each segment as integers from left to right.',
    'Level 2: Pad the shorter array with 0s so both have the same number of segments.',
    'Level 3: const a=version1.split("."),b=version2.split(".");const n=Math.max(a.length,b.length);for(let i=0;i<n;i++){const x=+(a[i]??0),y=+(b[i]??0);if(x<y)return -1;if(x>y)return 1;}return 0;',
  ],
  functionName: 'compareVersion',
  params: ['version1', 'version2'],
  starterCode: {
    javascript: 'function compareVersion(version1, version2) {\n  // your code here\n}\n',
    python: 'def compareVersion(version1, version2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['1.2', '1.10'], expected: -1 },
    { args: ['1.01', '1.001'], expected: 0 },
    { args: ['1.0', '1.0.0'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['0.1', '1.1'], expected: -1 },
    { args: ['1.0.1', '1'], expected: 1 },
    { args: ['7.5.2.4', '7.5.3'], expected: -1 },
    { args: ['1', '1'], expected: 0 },
    { args: ['2', '2.0.0'], expected: 0 },
  ],
};
