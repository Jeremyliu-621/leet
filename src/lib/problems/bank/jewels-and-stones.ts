import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jewels-and-stones',
  title: 'Jewels and Stones',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `You're given strings \`jewels\` representing the types of stones that are jewels, and \`stones\` representing the stones you have. Each character in \`stones\` is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so \`"a"\` is different from \`"A"\`.`,
  constraints: [
    '1 <= jewels.length, stones.length <= 50',
    'jewels and stones consist of only English letters',
    'All the characters of jewels are unique',
  ],
  examples: [
    { input: 'jewels = "aA", stones = "aAAbbbb"', output: '3' },
    { input: 'jewels = "z", stones = "ZZ"', output: '0' },
  ],
  hints: [
    'Put all jewel types into a set, then count how many stones are in the set.',
    "Create a Set from the jewels string. Then iterate stones and count characters that appear in the set.",
    'const j=new Set(jewels);return [...stones].filter(s=>j.has(s)).length;',
  ],
  functionName: 'numJewelsInStones',
  params: ['jewels', 'stones'],
  starterCode: {
    javascript: 'function numJewelsInStones(jewels, stones) {\n  \n}\n',
    python: 'def numJewelsInStones(jewels, stones):\n    pass\n',
  },
  visibleTests: [
    { args: ['aA', 'aAAbbbb'], expected: 3 },
    { args: ['z', 'ZZ'], expected: 0 },
    { args: ['abc', 'aabbcc'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a', 'bb'], expected: 0 },
    { args: ['A', 'AaA'], expected: 2 },
    { args: ['zZ', 'zZzZz'], expected: 5 },
    { args: ['abc', 'xyz'], expected: 0 },
    { args: ['x', 'x'], expected: 1 },
  ],
};
