import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-days-spent-together',
  title: 'Count Days Spent Together',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Alice and Bob are traveling to Rome for several days. You are given 4 strings \`arriveAlice\`, \`leaveAlice\`, \`arriveBob\`, and \`leaveBob\`. Alice will be in Rome from \`arriveAlice\` to \`leaveAlice\`, and Bob will be in Rome from \`arriveBob\` to \`leaveBob\`. Each string is formatted as \`"MM-DD"\`.

Return the total number of days that Alice and Bob are in Rome **together**.`,
  constraints: [
    'All dates are provided in the format "MM-DD".',
    'Alice and Bob\'s are guaranteed to arrive at and leave Rome with valid dates.',
    'The year is not a leap year.',
    'It is guaranteed that Alice and Bob\'s arrival dates are not after their respective leaving dates.',
  ],
  examples: [
    {
      input: 'arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"',
      output: '3',
      explanation: 'They are both in Rome from 08-16 to 08-18, which is 3 days.',
    },
    {
      input: 'arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"',
      output: '0',
      explanation: 'Their stays do not overlap.',
    },
  ],
  hints: [
    'Convert each date to a day-of-year number (1-365, non-leap year).',
    'The overlap starts at max(arriveAlice, arriveBob) and ends at min(leaveAlice, leaveBob).',
    'Number of days = max(0, end - start + 1).',
  ],
  functionName: 'countDaysTogether',
  params: ['arriveAlice', 'leaveAlice', 'arriveBob', 'leaveBob'],
  starterCode: {
    javascript:
      'function countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob) {\n  \n}\n',
    typescript: "function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {\n  \n}",

    python: 'def countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob):\n    pass\n',
  },
  visibleTests: [
    { args: ['08-15', '08-18', '08-16', '08-19'], expected: 3 },
    { args: ['10-01', '10-31', '11-01', '12-31'], expected: 0 },
    { args: ['01-01', '12-31', '01-01', '12-31'], expected: 365 },
  ],
  hiddenTests: [
    { args: ['01-01', '01-01', '01-01', '01-01'], expected: 1 },
    { args: ['01-01', '01-05', '01-06', '01-10'], expected: 0 },
    { args: ['06-01', '06-30', '06-15', '07-15'], expected: 16 },
    { args: ['03-01', '06-30', '01-01', '03-15'], expected: 15 },
    { args: ['01-01', '03-31', '02-01', '12-31'], expected: 59 },
  ],
};
