import type { Problem } from '../types';

export const problem: Problem = {
  id: 'day-of-the-year',
  title: 'Day of the Year',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `Given a string \`date\` representing a Gregorian calendar date formatted as \`YYYY-MM-DD\`, return the **day number** of the year.

**Approach:** Parse year, month, day. Sum the days in all preceding months; if the year is a leap year and month > 2, add one extra day. A year is a leap year if divisible by 4, except centuries unless divisible by 400.`,
  constraints: [
    'date.length == 10',
    'date[4] == date[7] == \'-\'',
    'The given dates are valid dates between the years 1900 and 2019.',
  ],
  examples: [
    {
      input: 'date = "2019-01-09"',
      output: '9',
      explanation: 'January 9 is the 9th day of the year.',
    },
    {
      input: 'date = "2019-02-10"',
      output: '41',
      explanation: '31 days in January + 10 days into February = 41.',
    },
  ],
  hints: [
    'Parse year, month, day from the string. Sum days in prior months.',
    'For leap years (div by 4, except centuries unless div by 400), add 1 if past February.',
    '```js\nfunction dayOfYear(date) {\n  const [y, m, d] = date.split(\'-\').map(Number);\n  const leap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;\n  const days = [31,28,31,30,31,30,31,31,30,31,30,31];\n  let sum = d;\n  for (let i = 0; i < m - 1; i++) sum += days[i];\n  if (leap && m > 2) sum++;\n  return sum;\n}\n```',
  ],
  functionName: 'dayOfYear',
  params: ['date'],
  starterCode: {
    javascript: `function dayOfYear(date) {
  // return the day number of the year

}`,
    typescript: "function dayOfYear(date: string): number {\n  // return the day number of the year\n\n}",

    python: `def dayOfYear(date: str) -> int:
    # return the day number of the year
    pass
`,
  },
  visibleTests: [
    { args: ['2019-01-09'], expected: 9 },
    { args: ['2019-02-10'], expected: 41 },
  ],
  hiddenTests: [
    { args: ['2003-03-01'], expected: 60 },
    { args: ['2004-03-01'], expected: 61 },
    { args: ['2000-03-01'], expected: 61 },
    { args: ['1900-03-01'], expected: 60 },
    { args: ['2019-12-31'], expected: 365 },
    { args: ['2000-12-31'], expected: 366 },
    { args: ['2016-06-15'], expected: 167 },
  ],
};
