import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rle-iterator',
  title: 'RLE Iterator',
  difficulty: 'medium',
  tags: ['design', 'simulation', 'arrays'],
  description: `We can use **run-length encoding** (RLE) to represent a sequence of integers. The encoding is a flat array where consecutive pairs \`[freq, val, freq, val, ...]\` mean the sequence contains \`freq\` copies of \`val\`.

Design an iterator over such an RLE-encoded sequence:

- **Constructor** \`RLEIterator(encoding)\`: Initialises the iterator with the given encoding.
- \`next(n)\`: **Exhausts** the next \`n\` elements from the sequence and returns the **last element** exhausted. If there are fewer than \`n\` elements remaining, return \`-1\`.

Implement \`rleIterator(ops, params)\`: given operation names and parameter arrays, return results (\`null\` for the constructor call).`,
  constraints: [
    '`2 <= encoding.length <= 1000`, encoding has even length.',
    '`0 <= encoding[i] <= 10^9`',
    '`1 <= n <= 10^9`',
    'At most `1000` calls will be made to `next`.',
    'The total number of elements in the encoded sequence does not exceed `10^9`.',
  ],
  examples: [
    {
      input: `ops = ["RLEIterator","next","next","next","next"]
params = [[[3,8,0,9,2,5]],[2],[1],[1],[2]]`,
      output: '[null,8,8,5,-1]',
      explanation: `The sequence is [8,8,8,5,5] (3 eights, 0 nines, 2 fives).
next(2): exhausts 8,8 → returns 8.
next(1): exhausts 8 → returns 8.
next(1): the 3 eights are gone; exhausts 5 → returns 5.
next(2): only 1 five remains, can\\'t exhaust 2 → returns -1.`,
    },
  ],
  hints: [
    'Store the encoding in a mutable array and a pointer to the current group. Keep consuming groups until you have exhausted all n elements.',
    'If `encoding[ptr] >= n`, subtract n from `encoding[ptr]` and return `encoding[ptr+1]`. Otherwise, subtract `encoding[ptr]` from n, advance the pointer by 2, and repeat.',
    'If the pointer goes past the end of the encoding before n elements are exhausted, return -1.',
  ],
  functionName: 'rleIterator',
  params: ['ops', 'params'],
  starterCode: {
    javascript: `function rleIterator(ops, params) {

}`,
    typescript: `function rleIterator(ops: string[], params: number[][][]): unknown[] {

}`,
    python: `def rleIterator(ops, params):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['RLEIterator','next','next','next','next'],
        [[[3,8,0,9,2,5]],[2],[1],[1],[2]],
      ],
      expected: [null,8,8,5,-1],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['RLEIterator','next'],
        [[[5,3]],[5]],
      ],
      expected: [null,3],
    },
    {
      args: [
        ['RLEIterator','next','next'],
        [[[5,3]],[5],[1]],
      ],
      expected: [null,3,-1],
    },
    {
      args: [
        ['RLEIterator','next','next','next'],
        [[[2,1,3,2]],[1],[2],[3]],
      ],
      expected: [null,1,2,-1],
    },
    {
      args: [
        ['RLEIterator','next','next','next','next'],
        [[[0,10,0,20,4,30]],[1],[1],[1],[1]],
      ],
      expected: [null,30,30,30,30],
    },
    {
      args: [
        ['RLEIterator','next','next'],
        [[[1,7,2,8,1,9]],[2],[2]],
      ],
      expected: [null,8,9],
    },
    {
      args: [
        ['RLEIterator','next'],
        [[[0,0,0,0]],[1]],
      ],
      expected: [null,-1],
    },
  ],
};
