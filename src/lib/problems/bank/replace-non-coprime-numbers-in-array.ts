import type { Problem } from '../types';

export const problem: Problem = {
  id: 'replace-non-coprime-numbers-in-array',
  title: 'Replace Non-Coprime Numbers in Array',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'stack'],
  description: `You are given an array of integers \`nums\`. Perform the following steps repeatedly until it is impossible:

1. Find the **leftmost** pair of **adjacent** elements in \`nums\` that are **not coprime**.
2. Replace both with their **LCM** (least common multiple).

Return the final array after **all** such replacements. The final array is guaranteed to be **uniquely determined**. Two integers are **not coprime** if their GCD is greater than 1.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
    'The test cases are generated such that the final answer fits in a 32-bit signed integer.',
  ],
  examples: [
    {
      input: 'nums = [6,4,3,2,7,6,2]',
      output: '[12,7,6]',
      explanation:
        'Merge adjacent non-coprime pairs from the left: (6,4)→12, giving [12,3,2,7,6,2]. Then (12,3)→12, giving [12,2,7,6,2]. Then (12,2)→12, giving [12,7,6,2]. Then (6,2)→6, giving [12,7,6]. All adjacent pairs are now coprime.',
    },
    {
      input: 'nums = [2,2,1,1,3,3,3]',
      output: '[2,1,1,3]',
      explanation:
        '(2,2)→2, giving [2,1,1,3,3,3]. Then (3,3)→3 twice: [2,1,1,3].',
    },
  ],
  hints: [
    'Use a stack. Push elements one by one. After each push, check if the top two elements are non-coprime; if so, pop both and push their LCM. Repeat the check with the new top pair.',
    'This stack approach correctly simulates finding the leftmost adjacent non-coprime pair, because a new merge can only create a non-coprime relationship with the element to its left (already on the stack).',
    'To compute `gcd(a, b)`, use the Euclidean algorithm: `gcd(a, 0) = a; gcd(a, b) = gcd(b, a % b)`. Then `lcm(a, b) = a / gcd(a, b) * b`.',
  ],
  functionName: 'replaceNonCoprimes',
  params: ['nums'],
  starterCode: {
    javascript: `function replaceNonCoprimes(nums) {
  function gcd(a, b) { while (b) { [a, b] = [b, a % b]; } return a; }
  const stack = [];
  for (const v of nums) {
    stack.push(v);
    while (stack.length >= 2) {
      const top = stack[stack.length - 1], prev = stack[stack.length - 2];
      const g = gcd(top, prev);
      if (g === 1) break;
      stack.pop(); stack.pop(); stack.push(prev / g * top);
    }
  }
  return stack;
}`,
    typescript: `function replaceNonCoprimes(nums: number[]): number[] {
  function gcd(a: number, b: number): number { while (b) { [a, b] = [b, a % b]; } return a; }
  const stack: number[] = [];
  for (const v of nums) {
    stack.push(v);
    while (stack.length >= 2) {
      const top = stack[stack.length - 1]!, prev = stack[stack.length - 2]!;
      const g = gcd(top, prev);
      if (g === 1) break;
      stack.pop(); stack.pop(); stack.push(prev / g * top);
    }
  }
  return stack;
}`,
    python: `def replaceNonCoprimes(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    from math import gcd
    stack = []
    for v in nums:
        stack.append(v)
        while len(stack) >= 2:
            g = gcd(stack[-1], stack[-2])
            if g == 1: break
            top = stack.pop(); prev = stack.pop()
            stack.append(prev // g * top)
    return stack`,
  },
  visibleTests: [
    { args: [[6, 4, 3, 2, 7, 6, 2]], expected: [12, 7, 6] },
    { args: [[2, 2, 1, 1, 3, 3, 3]], expected: [2, 1, 1, 3] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: [1, 2, 3, 4] },
    { args: [[4, 6]], expected: [12] },
    { args: [[2, 3, 6]], expected: [6] },
    { args: [[1]], expected: [1] },
    { args: [[6, 10, 15]], expected: [30] },
    { args: [[2, 4, 8]], expected: [8] },
    { args: [[3, 5, 7]], expected: [3, 5, 7] },
    { args: [[6, 35, 15]], expected: [210] },
    { args: [[4, 2, 6, 3]], expected: [12] },
  ],
};
