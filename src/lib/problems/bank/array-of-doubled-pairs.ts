import type { Problem } from '../types';

export const problem: Problem = {
  id: 'array-of-doubled-pairs',
  title: 'Array of Doubled Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`changed\`, return \`true\` if you can rearrange it so that for every element \`v\` in the array there is also an element \`2 * v\`. Each element is used exactly once in pairing.

**Approach:** Count element frequencies. Process elements sorted by **absolute value** (so negatives like -2 pair with -4). For each unpaired element, check if its double still has remaining count; if not, return false.`,
  constraints: [
    '1 <= changed.length <= 10^5',
    'changed.length is even',
    '-10^5 <= changed[i] <= 10^5',
  ],
  examples: [
    {
      input: 'changed = [3,1,3,6]',
      output: 'false',
      explanation: '1 needs a 2, but there is no 2.',
    },
    {
      input: 'changed = [2,1,2,6]',
      output: 'false',
      explanation: '1 pairs with 2, but the remaining 2 needs a 4 which is not present.',
    },
    {
      input: 'changed = [4,-2,2,-4]',
      output: 'true',
      explanation: 'Pairs: (-2,-4) and (2,4). Sorted by absolute value, -2 pairs with -4, then 2 pairs with 4.',
    },
  ],
  hints: [
    'Build a frequency map. Sort all distinct values by absolute value — this ensures smaller absolutes are paired first.',
    'For each value x (with remaining count > 0): check that count[2x] >= count[x]. Consume them. Handle x=0 specially: it must appear an even number of times.',
    '```js\nconst cnt = new Map();\nfor (const x of changed) cnt.set(x, (cnt.get(x) ?? 0) + 1);\nconst keys = [...cnt.keys()].sort((a,b) => Math.abs(a)-Math.abs(b));\nfor (const x of keys) {\n  if (!cnt.get(x)) continue;\n  if (x === 2*x) { if (cnt.get(x) % 2) return false; cnt.set(x,0); continue; }\n  if ((cnt.get(2*x) ?? 0) < cnt.get(x)) return false;\n  cnt.set(2*x, cnt.get(2*x) - cnt.get(x));\n  cnt.set(x, 0);\n}\nreturn true;\n```',
  ],
  functionName: 'canReorderDoubled',
  params: ['changed'],
  starterCode: {
    javascript: `function canReorderDoubled(changed) {
  // return true if changed can be rearranged into doubled pairs

}`,
    python: `def canReorderDoubled(changed: list) -> bool:
    # return True if changed can be rearranged into doubled pairs
    pass
`,
  },
  visibleTests: [
    { args: [[3, 1, 3, 6]], expected: false },
    { args: [[2, 1, 2, 6]], expected: false },
    { args: [[4, -2, 2, -4]], expected: true },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: true },
    { args: [[0, 0, 0, 0]], expected: true },
    { args: [[0, 0, 0]], expected: false },
    { args: [[1, 2, 4, 8]], expected: true },
    { args: [[1, 2, 2, 4]], expected: true },
    { args: [[2, 4, 0, 0, 8, -2, -4, -1]], expected: false },
  ],
};
