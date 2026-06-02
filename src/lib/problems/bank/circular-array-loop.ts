import type { Problem } from '../types';

export const problem: Problem = {
  id: 'circular-array-loop',
  title: 'Circular Array Loop',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given a circular integer array \`nums\`, determine if there is a **valid cycle**.

A cycle is valid when:
1. All indices visited move in the **same direction** (all \`nums[i] > 0\` or all \`nums[i] < 0\`).
2. The cycle length is **greater than 1**.

From index \`i\`, the next index is \`next(i) = ((i + nums[i]) % n + n) % n\`.

**Approach:** Floyd's slow/fast pointer — for each starting index, advance slow by 1 step and fast by 2. If they meet, a cycle exists. Verify length > 1.`,
  constraints: [
    '1 <= nums.length <= 5000',
    '-1000 <= nums[i] <= 1000',
    'nums[i] != 0',
  ],
  examples: [
    {
      input: 'nums = [2,-1,1,2,2]',
      output: 'true',
      explanation: 'Cycle: 0→2→3→0 (all positive moves, length 3).',
    },
    {
      input: 'nums = [-1,2]',
      output: 'false',
      explanation: 'No valid cycle — direction changes or cycle length is 1.',
    },
    {
      input: 'nums = [-2,1,-1,-2,-2]',
      output: 'false',
    },
  ],
  hints: [
    'Define `next(i) = ((i + nums[i]) % n + n) % n`. Direction changes when `nums[i] * nums[next(i)] < 0`. Stop early if direction flips.',
    'Use Floyd\'s slow/fast pointer. Advance slow by 1 step and fast by 2. If slow === fast, a cycle is detected. Then check `next(slow) !== slow` to confirm length > 1.',
    '```js\nconst n = nums.length;\nconst nxt = i => ((i + nums[i]) % n + n) % n;\nfor (let i = 0; i < n; i++) {\n  let s = i, f = i;\n  while (nums[s]*nums[nxt(s)] > 0 && nums[f]*nums[nxt(nxt(f))] > 0) {\n    s = nxt(s);\n    f = nxt(nxt(f));\n    if (s === f) return nxt(s) !== s;\n  }\n}\nreturn false;\n```',
  ],
  functionName: 'circularArrayLoop',
  params: ['nums'],
  starterCode: {
    javascript: `function circularArrayLoop(nums) {
  const n = nums.length;
  const nxt = i => ((i + nums[i]) % n + n) % n;
  for (let i = 0; i < n; i++) {
    let s = i, f = i;
    while (nums[s] * nums[nxt(s)] > 0 && nums[f] * nums[nxt(nxt(f))] > 0) {
      s = nxt(s);
      f = nxt(nxt(f));
      if (s === f) return nxt(s) !== s;
    }
  }
  return false;
}`,
    typescript: `function circularArrayLoop(nums: number[]): boolean {
  const n = nums.length;
  const nxt = (i: number) => ((i + nums[i]!) % n + n) % n;
  for (let i = 0; i < n; i++) {
    let s = i, f = i;
    while (nums[s]! * nums[nxt(s)]! > 0 && nums[f]! * nums[nxt(nxt(f))]! > 0) {
      s = nxt(s);
      f = nxt(nxt(f));
      if (s === f) return nxt(s) !== s;
    }
  }
  return false;
}`,

    python: `def circularArrayLoop(nums: list) -> bool:
    n = len(nums)
    def nxt(i):
        return ((i + nums[i]) % n + n) % n
    for i in range(n):
        s, f = i, i
        while nums[s] * nums[nxt(s)] > 0 and nums[f] * nums[nxt(nxt(f))] > 0:
            s = nxt(s)
            f = nxt(nxt(f))
            if s == f:
                return nxt(s) != s
    return False
`,
  },
  visibleTests: [
    { args: [[2,-1,1,2,2]], expected: true },
    { args: [[-1,2]], expected: false },
    { args: [[-2,1,-1,-2,-2]], expected: false },
  ],
  hiddenTests: [
    { args: [[1,1,1,1]], expected: true },
    { args: [[2,2,2,2]], expected: true },
    { args: [[-1,-1,-1]], expected: true },
    { args: [[1,-1]], expected: false },
    { args: [[2,1,1]], expected: true },
  ],
};
