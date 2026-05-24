import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-temperature',
  title: 'Convert the Temperature',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a non-negative floating point number rounded to two decimal places \`celsius\`, that denotes the **temperature in Celsius**.

You should convert Celsius into **Kelvin** and **Fahrenheit** and return it as an array \`ans = [kelvin, fahrenheit]\`.

Return the array \`ans\`. Answers within \`10^-5\` of the actual answer will be accepted.

Note that:
- \`Kelvin = Celsius + 273.15\`
- \`Fahrenheit = Celsius * 1.80 + 32.00\``,
  constraints: [
    '`0 <= celsius <= 1000`',
  ],
  examples: [
    {
      input: 'celsius = 36.50',
      output: '[309.65000, 97.70000]',
      explanation: '36.50 + 273.15 = 309.65. 36.50 * 1.80 + 32 = 97.70.',
    },
    {
      input: 'celsius = 122.11',
      output: '[395.26000, 251.79800]',
    },
  ],
  hints: [
    'Apply the formulas directly: kelvin = celsius + 273.15, fahrenheit = celsius * 1.8 + 32.',
  ],
  functionName: 'convertTemperature',
  params: ['celsius'],
  starterCode: {
    javascript: `function convertTemperature(celsius) {

}`,
    python: `def convertTemperature(celsius):
    pass`,
  },
  visibleTests: [
    { args: [36.50], expected: [309.65, 97.7] },
    { args: [122.11], expected: [395.26, 251.798] },
  ],
  hiddenTests: [
    { args: [0], expected: [273.15, 32] },
    { args: [100], expected: [373.15, 212] },
    { args: [-0], expected: [273.15, 32] },
    { args: [25], expected: [298.15, 77] },
    { args: [1000], expected: [1273.15, 1832] },
  ],
};
