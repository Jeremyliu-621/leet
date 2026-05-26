import type { Problem } from '../types';

export const problem: Problem = {
  id: 'daily-temperatures',
  title: 'Daily Temperatures',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `Given an array of integers \`temperatures\` representing the daily temperatures, return an array \`answer\` such that \`answer[i]\` is the number of days you have to wait after the \`i\`-th day to get a warmer temperature. If there is no future day for which this is possible, keep \`answer[i] == 0\`.`,
  examples: [
    {
      input: 'temperatures = [73,74,75,71,69,72,76,73]',
      output: '[1,1,4,2,1,1,0,0]',
      explanation: 'After day 0 (73), day 1 is warmer (74): wait 1 day. After day 2 (75), day 6 (76) is next warmer: wait 4 days.',
    },
    {
      input: 'temperatures = [30,40,50,60]',
      output: '[1,1,1,0]',
    },
    {
      input: 'temperatures = [30,60,90]',
      output: '[1,1,0]',
    },
  ],
  constraints: [
    '1 <= temperatures.length <= 10^5',
    '30 <= temperatures[i] <= 100',
  ],
  functionName: 'dailyTemperatures',
  params: ['temperatures'],
  starterCode: {
    javascript: 'function dailyTemperatures(temperatures) {\n  // your code here\n}\n',
    python: 'def dailyTemperatures(temperatures):\n    # your code here\n    pass\n',
  },
  hints: [
    'Use a monotonic decreasing stack of indices. When you find a warmer temperature, pop and record the wait.',
    'Iterate through temperatures. For each index i, pop all indices from the stack where temperatures[stack.top] < temperatures[i], recording answer[popped] = i - popped.',
    'Push the current index onto the stack. Remaining elements in the stack at the end have answer 0.',
  ],
  visibleTests: [
    { args: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
    { args: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
    { args: [[30, 60, 90]], expected: [1, 1, 0] },
  ],
  hiddenTests: [
    { args: [[89, 62, 70, 58, 47, 47, 46, 76, 100, 70]], expected: [8, 1, 5, 4, 3, 2, 1, 1, 0, 0] },
    { args: [[100]], expected: [0] },
    { args: [[50, 50, 50]], expected: [0, 0, 0] },
  ],
};
