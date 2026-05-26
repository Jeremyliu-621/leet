import type { Problem } from '../types';

export const problem: Problem = {
  id: 'monotonic-stack-daily-temperatures',
  title: 'Daily Temperatures',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `Given an array of integers \`temperatures\` representing daily temperatures, return an array \`answer\` such that \`answer[i]\` is the number of days you have to wait after the \`i\`th day to get a warmer temperature. If there is no future day with a warmer temperature, set \`answer[i] = 0\`.

**Example:** \`temperatures = [73,74,75,71,69,72,76,73]\` → \`[1,1,4,2,1,1,0,0]\`

Day 0 is 73°; the next warmer day is day 1 (74°), so \`answer[0] = 1\`. Day 2 is 75°; the next warmer day is day 6 (76°), so \`answer[2] = 4\`.`,
  constraints: [
    '`1 <= temperatures.length <= 10⁵`',
    '`30 <= temperatures[i] <= 100`',
  ],
  examples: [
    {
      input: 'temperatures = [73,74,75,71,69,72,76,73]',
      output: '[1,1,4,2,1,1,0,0]',
      explanation: 'Each value shows how many days until the next warmer temperature.',
    },
    {
      input: 'temperatures = [30,40,50,60]',
      output: '[1,1,1,0]',
      explanation: 'Strictly increasing — each day is resolved by the next day except the last.',
    },
    {
      input: 'temperatures = [30,60,90]',
      output: '[1,1,0]',
    },
  ],
  hints: [
    'A brute-force O(n²) approach checks every future day. Can you do better?',
    'Maintain a **monotonic decreasing stack** of indices of "unresolved" days. When a warmer day arrives, pop all colder days and record the gap.',
    '`const stack = [], ans = new Array(n).fill(0); for (let i = 0; i < n; i++) { while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) { const j = stack.pop(); ans[j] = i - j; } stack.push(i); } return ans;`',
  ],
  functionName: 'dailyTemperatures',
  params: ['temperatures'],
  starterCode: {
    javascript: `function dailyTemperatures(temperatures) {
  // Return array of days to wait for a warmer temperature
}`,
    python: `def dailyTemperatures(temperatures: list[int]) -> list[int]:
    # Return array of days to wait for a warmer temperature
    pass`,
  },
  visibleTests: [
    { args: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
    { args: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
    { args: [[30, 60, 90]], expected: [1, 1, 0] },
  ],
  hiddenTests: [
    { args: [[89]], expected: [0] },
    { args: [[50, 50]], expected: [0, 0] },
    { args: [[50, 60]], expected: [1, 0] },
    { args: [[60, 50, 40, 70]], expected: [3, 2, 1, 0] },
    { args: [[100, 90, 80, 70, 100]], expected: [0, 3, 2, 1, 0] },
    { args: [[30, 30, 30]], expected: [0, 0, 0] },
  ],
};
