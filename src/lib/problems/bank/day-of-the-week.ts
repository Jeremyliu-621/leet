import type { Problem } from '../types';

export const problem: Problem = {
  id: 'day-of-the-week',
  title: 'Day of the Week',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given three integers \`day\`, \`month\`, and \`year\`, return the day of the week for that date.

Return one of \`"Sunday"\`, \`"Monday"\`, \`"Tuesday"\`, \`"Wednesday"\`, \`"Thursday"\`, \`"Friday"\`, or \`"Saturday"\`.`,
  constraints: [
    '`1 <= day <= 31`',
    '`1 <= month <= 12`',
    '`1971 <= year <= 2100`',
    'The given dates are valid.',
  ],
  examples: [
    {
      input: 'day = 31, month = 8, year = 2019',
      output: '"Saturday"',
    },
    {
      input: 'day = 18, month = 7, year = 1999',
      output: '"Sunday"',
    },
    {
      input: 'day = 15, month = 8, year = 1993',
      output: '"Sunday"',
    },
  ],
  hints: [
    'Use built-in date functions or Zeller\'s congruence.',
    'JavaScript: `new Date(year, month - 1, day).getDay()` gives 0 = Sunday, 1 = Monday, …, 6 = Saturday.',
  ],
  functionName: 'dayOfTheWeek',
  params: ['day', 'month', 'year'],
  starterCode: {
    javascript: `function dayOfTheWeek(day, month, year) {

}`,
    python: `def dayOfTheWeek(day, month, year):
    pass`,
  },
  visibleTests: [
    { args: [31, 8, 2019], expected: 'Saturday' },
    { args: [18, 7, 1999], expected: 'Sunday' },
    { args: [15, 8, 1993], expected: 'Sunday' },
  ],
  hiddenTests: [
    { args: [1, 1, 2000], expected: 'Saturday' },
    { args: [1, 1, 2023], expected: 'Sunday' },
    { args: [25, 12, 2022], expected: 'Sunday' },
    { args: [4, 7, 2020], expected: 'Saturday' },
  ],
};
