import type { Problem } from '../types';

export const problem: Problem = {
  id: 'broken-calculator',
  title: 'Broken Calculator',
  difficulty: 'medium',
  tags: ['math'],
  description: `There is a broken calculator that has the integer \`startValue\` on its display initially.

In one operation, you can:
- Multiply the number on display by \`2\`, or
- Subtract \`1\` from the number on display.

Given two integers \`startValue\` and \`target\`, return the minimum number of operations needed to display \`target\` on the calculator.`,
  constraints: [
    '`1 <= startValue, target <= 10⁹`',
  ],
  examples: [
    {
      input: 'startValue = 2, target = 3',
      output: '2',
      explanation: 'Use multiply: 2 → 4, then subtract: 4 → 3. 2 operations.',
    },
    {
      input: 'startValue = 5, target = 8',
      output: '2',
      explanation: 'Use subtract: 5 → 4, then multiply: 4 → 8. 2 operations.',
    },
    {
      input: 'startValue = 3, target = 10',
      output: '3',
      explanation: 'Use multiply: 3 → 6, multiply: 6 → 12, subtract: 12 → 11... Actually: multiply: 3→6, subtract: 6→5... Better: multiply 3→6, multiply 6→12, subtract 12→11, subtract 11→10 = 4? No: multiply 3→6, subtract 6→5, multiply 5→10 = 3 ops.',
    },
  ],
  hints: [
    'Work backwards from target to startValue.',
    'If target is odd, the previous step must have been target+1 (reverse of subtract). If target is even, halve it (reverse of multiply).',
    'If target ≤ startValue, the only way is to subtract, costing startValue - target steps.',
  ],
  functionName: 'brokenCalc',
  params: ['startValue', 'target'],
  starterCode: {
    javascript: `function brokenCalc(startValue, target) {
  let steps = 0;
  while (target > startValue) {
    if (target % 2 === 1) target++;
    else target /= 2;
    steps++;
  }
  return steps + (startValue - target);
}`,
    typescript: `function brokenCalc(startValue: number, target: number): number {
  let steps = 0;
  while (target > startValue) {
    if (target % 2 === 1) target++;
    else target /= 2;
    steps++;
  }
  return steps + (startValue - target);
}`,
    python: `def brokenCalc(startValue, target):
    steps = 0
    while target > startValue:
        if target % 2 == 1:
            target += 1
        else:
            target //= 2
        steps += 1
    return steps + (startValue - target)`,
  },
  visibleTests: [
    { args: [2, 3], expected: 2 },
    { args: [5, 8], expected: 2 },
    { args: [3, 10], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 0 },
    { args: [1, 1000000000], expected: 39 },
    { args: [1024, 1], expected: 1023 },
    { args: [10, 10], expected: 0 },
  ],
};
