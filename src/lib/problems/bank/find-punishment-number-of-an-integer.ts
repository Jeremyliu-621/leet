import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-punishment-number-of-an-integer',
  title: 'Find the Punishment Number of an Integer',
  difficulty: 'medium',
  tags: ['math', 'backtracking'],
  description: `Given a positive integer \`n\`, return *the **punishment number** of \`n\`*.

The **punishment number** of \`n\` is defined as the sum of the squares of all integers \`i\` such that:

- \`1 <= i <= n\`
- The decimal representation of \`i * i\` can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals \`i\`.`,
  constraints: ['1 <= n <= 1000'],
  examples: [
    {
      input: 'n = 10',
      output: '182',
      explanation:
        'i=1: 1²=1, partition "1"→1=1 ✓. i=9: 81, "8"+"1"=9 ✓. i=10: 100, "10"+"0"=10 ✓. Sum = 1+81+100 = 182.',
    },
    {
      input: 'n = 37',
      output: '1478',
      explanation:
        'Additional valid: i=36: 1296, "1"+"29"+"6"=36 ✓. Sum = 1+81+100+1296 = 1478.',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: 'Only i=1: 1²=1, "1"→1=1 ✓.',
    },
  ],
  hints: [
    'Level 1: For each i in [1,n], check if the decimal string of i*i can be split into contiguous parts summing to i.',
    'Level 2: Use recursive backtracking: try each prefix length from 1 to len(s), subtract its value from the target, and recurse on the remaining suffix.',
    'Level 3: Base case: empty string with target=0 → valid. Target<0 → prune.',
  ],
  functionName: 'punishmentNumber',
  params: ['n'],
  starterCode: {
    javascript: `function punishmentNumber(n) {
  function canPartition(s, target) {
    if (target < 0) return false;
    if (s.length === 0) return target === 0;
    for (let len = 1; len <= s.length; len++) {
      if (canPartition(s.slice(len), target - parseInt(s.slice(0, len)))) return true;
    }
    return false;
  }
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (canPartition(String(i * i), i)) ans += i * i;
  }
  return ans;
}`,
    typescript: `function punishmentNumber(n: number): number {
  function canPartition(s: string, target: number): boolean {
    if (target < 0) return false;
    if (s.length === 0) return target === 0;
    for (let len = 1; len <= s.length; len++) {
      if (canPartition(s.slice(len), target - parseInt(s.slice(0, len)))) return true;
    }
    return false;
  }
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (canPartition(String(i * i), i)) ans += i * i;
  }
  return ans;
}`,
    python: `def punishmentNumber(n):
    n = int(n)
    def can_partition(s, target):
        if target < 0: return False
        if not s: return target == 0
        for length in range(1, len(s) + 1):
            if can_partition(s[length:], target - int(s[:length])):
                return True
        return False
    ans = 0
    for i in range(1, n + 1):
        if can_partition(str(i * i), i):
            ans += i * i
    return ans`,
  },
  visibleTests: [
    { args: [10], expected: 182 },
    { args: [37], expected: 1478 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2], expected: 1 },
    { args: [9], expected: 82 },
    { args: [36], expected: 1478 },
    { args: [100], expected: 41334 },
    { args: [55], expected: 6528 },
  ],
};
