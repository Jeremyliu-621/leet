import type { Problem } from '../types';

export const problem: Problem = {
  id: 'punishment-number-of-integer',
  title: 'Punishment Number of an Integer',
  difficulty: 'medium',
  tags: ['math', 'backtracking'],
  description: `The **punishment number** of an integer \`n\` is defined as the sum of the squares of all integers \`i\` in the range \`[1, n]\` such that the decimal representation of \`i * i\` can be **partitioned** into contiguous substrings that sum to \`i\`.

Return the **punishment number** of \`n\`.

**Example:** Is \`i = 10\` valid? \`i * i = 100\`. Can we split "100" into parts that sum to 10?
- "100" → 100 ≠ 10
- "1" + "00" → 1 + 0 = 1 ≠ 10
- "10" + "0" → 10 + 0 = 10 ✓

So \`10\` is valid, contributing \`100\` to the sum.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '182',
      explanation: 'i=1: 1²=1, "1"→1 ✓. i=9: 81, "8"+"1"=9 ✓. i=10: 100, "10"+"0"=10 ✓. Sum = 1+81+100 = 182.',
    },
    {
      input: 'n = 37',
      output: '1478',
      explanation: 'Valid i in [1,37]: 1, 9, 10, 36. 1+81+100+1296 = 1478.',
    },
  ],
  hints: [
    'For each integer i from 1 to n, check whether `i*i` can be partitioned into parts that sum to i.',
    'Convert `i*i` to a string. Use backtracking (or recursion): at each position, try every prefix as a number and recurse on the remaining suffix with a reduced target.',
    'Base case: if the remaining string is empty and the remaining target is 0, return true. Prune: if any extracted part exceeds the remaining target, stop that branch.',
  ],
  functionName: 'punishmentNumber',
  params: ['n'],
  starterCode: {
    javascript: `function punishmentNumber(n) {
  const canSplit = (s, target) => {
    if (s.length === 0) return target === 0;
    for (let len = 1; len <= s.length; len++) {
      const part = parseInt(s.slice(0, len));
      if (part > target) break;
      if (canSplit(s.slice(len), target - part)) return true;
    }
    return false;
  };
  let ans = 0;
  for (let i = 1; i <= n; i++) if (canSplit(String(i * i), i)) ans += i * i;
  return ans;
}`,
    typescript: `function punishmentNumber(n: number): number {
  const canSplit = (s: string, target: number): boolean => {
    if (s.length === 0) return target === 0;
    for (let len = 1; len <= s.length; len++) {
      const part = parseInt(s.slice(0, len));
      if (part > target) break;
      if (canSplit(s.slice(len), target - part)) return true;
    }
    return false;
  };
  let ans = 0;
  for (let i = 1; i <= n; i++) if (canSplit(String(i * i), i)) ans += i * i;
  return ans;
}`,
    python: `def punishmentNumber(n):
    def can_split(s, target):
        if not s:
            return target == 0
        for length in range(1, len(s) + 1):
            part = int(s[:length])
            if part > target:
                break
            if can_split(s[length:], target - part):
                return True
        return False
    return sum(i * i for i in range(1, n + 1) if can_split(str(i * i), i))
`,
  },
  visibleTests: [
    { args: [10], expected: 182 },
    { args: [37], expected: 1478 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [5], expected: 1 },
    { args: [9], expected: 82 },
    { args: [20], expected: 182 },
    { args: [50], expected: 3503 },
    { args: [100], expected: 41334 },
  ],
};
