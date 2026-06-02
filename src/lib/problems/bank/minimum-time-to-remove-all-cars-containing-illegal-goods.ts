import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-remove-all-cars-containing-illegal-goods',
  title: 'Minimum Time to Remove All Cars Containing Illegal Goods',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a **0-indexed** binary string \`s\` where \`s[i] = '1'\` denotes the presence of a car containing illegal goods in the \`i\`-th cell, and \`s[i] = '0'\` denotes no illegal goods.

You must remove **all** cars containing illegal goods from the string \`s\`. You may apply any of the following three operations **any** number of times:
1. Remove the **leftmost** car from \`s\` (cost = 1)
2. Remove the **rightmost** car from \`s\` (cost = 1)
3. Remove a car from the **middle** of \`s\` (cost = 2)

Return the **minimum time** to remove all the cars containing illegal goods.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "1100101"',
      output: '5',
      explanation:
        'Remove cars 0,1 from left (cost 2), remove car 4 from middle (cost 2), remove car 6 from right (cost 1). Total=5. Alternatively, remove from left up to index 4 (cost 5) then remove car 6 (cost 2) = 7. Or: remove all from right (cost 7). Optimal is 5.',
    },
    {
      input: 's = "0010"',
      output: '2',
      explanation: 'Remove car at index 2 from middle (cost 2) or remove last 2 from right (cost 2). Min = 2.',
    },
  ],
  hints: [
    'Let `prefix[i]` = min cost to clear all 1s in `s[0..i]`. Let `suffix[i]` = min cost to clear all 1s in `s[i..n-1]`.',
    'For `prefix[i]`: if `s[i] == 0`, then `prefix[i] = prefix[i-1]`. If `s[i] == 1`, then `prefix[i] = min(prefix[i-1] + 2, i + 1)` — either remove this 1 from the middle (costs +2) or strip everything from the left up to i (costs i+1).',
    'Similarly, `suffix[i]`: if `s[i] == 0`, then `suffix[i] = suffix[i+1]`. If `s[i] == 1`, then `suffix[i] = min(suffix[i+1] + 2, n - i)`. Answer = min over all split points i of `prefix[i] + suffix[i+1]`.',
  ],
  functionName: 'minimumTime',
  params: ['s'],
  starterCode: {
    javascript: `function minimumTime(s) {
  const n = s.length;
  const prefix = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') {
      prefix[i] = Math.min((i > 0 ? prefix[i - 1] : 0) + 2, i + 1);
    } else {
      prefix[i] = i > 0 ? prefix[i - 1] : 0;
    }
  }
  const suffix = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '1') {
      suffix[i] = Math.min((i < n - 1 ? suffix[i + 1] : 0) + 2, n - i);
    } else {
      suffix[i] = i < n - 1 ? suffix[i + 1] : 0;
    }
  }
  let ans = suffix[0]; // remove all from right
  for (let i = 0; i < n - 1; i++) {
    ans = Math.min(ans, prefix[i] + suffix[i + 1]);
  }
  ans = Math.min(ans, prefix[n - 1]); // remove all from left
  return ans;
}`,
    typescript: `function minimumTime(s: string): number {
  const n = s.length;
  const prefix = new Array<number>(n).fill(0);
  for (let i = 0; i < n; i++) {
    const prev = i > 0 ? prefix[i - 1]! : 0;
    prefix[i] = s[i] === '1' ? Math.min(prev + 2, i + 1) : prev;
  }
  const suffix = new Array<number>(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    const nxt = i < n - 1 ? suffix[i + 1]! : 0;
    suffix[i] = s[i] === '1' ? Math.min(nxt + 2, n - i) : nxt;
  }
  let ans = suffix[0]!;
  for (let i = 0; i < n - 1; i++) {
    ans = Math.min(ans, prefix[i]! + suffix[i + 1]!);
  }
  return Math.min(ans, prefix[n - 1]!);
}`,
    python: `def minimumTime(s: str) -> int:
    n = len(s)
    prefix = [0] * n
    for i in range(n):
        prev = prefix[i - 1] if i > 0 else 0
        prefix[i] = min(prev + 2, i + 1) if s[i] == '1' else prev
    suffix = [0] * n
    for i in range(n - 1, -1, -1):
        nxt = suffix[i + 1] if i < n - 1 else 0
        suffix[i] = min(nxt + 2, n - i) if s[i] == '1' else nxt
    ans = suffix[0]
    for i in range(n - 1):
        ans = min(ans, prefix[i] + suffix[i + 1])
    return min(ans, prefix[n - 1])`,
  },
  visibleTests: [
    { args: ['1100101'], expected: 5 },
    { args: ['0010'], expected: 2 },
    { args: ['0000'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['1'], expected: 1 },
    { args: ['0'], expected: 0 },
    { args: ['11'], expected: 2 },
    { args: ['10'], expected: 1 },
    { args: ['01'], expected: 1 },
    { args: ['1111'], expected: 4 },
    { args: ['10001'], expected: 2 },
    { args: ['0110'], expected: 3 },
    { args: ['1010101'], expected: 6 },
    { args: ['11111'], expected: 5 },
  ],
};
