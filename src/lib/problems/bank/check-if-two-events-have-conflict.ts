import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-two-events-have-conflict',
  title: 'Check if Two Events Have Conflict',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given two events where each event is represented as a pair of strings \`[startTime, endTime]\` in **HH:MM** format (zero-padded, 24-hour clock).

Two events have a **conflict** if they overlap — that is, there exists at least one moment in time that both events are active.

Return \`true\` if there is a conflict between the two events, and \`false\` otherwise.`,
  constraints: [
    '`event1.length == event2.length == 2`',
    '`event1[i].length == event2[i].length == 5`',
    '`0 <= HH <= 23`',
    '`0 <= MM <= 59`',
    'All times use the format `"HH:MM"` with leading zeros.',
  ],
  examples: [
    {
      input: 'event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]',
      output: 'true',
      explanation: 'Both events share the moment 02:00, so there is a conflict.',
    },
    {
      input: 'event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]',
      output: 'true',
      explanation: 'The events overlap from 01:20 to 02:00.',
    },
    {
      input: 'event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]',
      output: 'false',
      explanation: 'The events are entirely non-overlapping.',
    },
  ],
  hints: [
    'Level 1: Two intervals [s1, e1] and [s2, e2] overlap if and only if s1 <= e2 AND s2 <= e1.',
    'Level 2: Because the times are in zero-padded HH:MM format, lexicographic (string) comparison gives the correct ordering — no parsing required.',
    'Level 3: Return event1[0] <= event2[1] && event2[0] <= event1[1]. O(1) — just two string comparisons.',
  ],
  functionName: 'haveConflict',
  params: ['event1', 'event2'],
  starterCode: {
    javascript: `function haveConflict(event1, event2) {

}`,
    typescript: `function haveConflict(event1: string[], event2: string[]): boolean {

}`,
    python: `def haveConflict(event1, event2):
    pass`,
  },
  visibleTests: [
    { args: [['01:15', '02:00'], ['02:00', '03:00']], expected: true },
    { args: [['01:00', '02:00'], ['01:20', '03:00']], expected: true },
    { args: [['10:00', '11:00'], ['14:00', '15:00']], expected: false },
  ],
  hiddenTests: [
    { args: [['00:00', '23:59'], ['00:00', '23:59']], expected: true },
    { args: [['00:00', '01:00'], ['02:00', '03:00']], expected: false },
    { args: [['05:00', '06:00'], ['06:00', '06:30']], expected: true },
    { args: [['01:00', '02:30'], ['02:00', '04:00']], expected: true },
    { args: [['10:00', '11:00'], ['11:01', '12:00']], expected: false },
  ],
};
