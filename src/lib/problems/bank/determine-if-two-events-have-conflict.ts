import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-two-events-have-conflict',
  title: 'Determine if Two Events Have Conflict',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given two arrays of strings \`event1\` and \`event2\` where:
- \`event1 = [startTime1, endTime1]\`
- \`event2 = [startTime2, endTime2]\`

Each event is a closed time interval, meaning the event includes the start and end times. Times are in the format \`"HH:MM"\`.

Return \`true\` if there is a **conflict** between the two events (they share at least one minute), and \`false\` otherwise.

**Examples:**
- \`event1 = ["01:15","02:00"]\`, \`event2 = ["02:00","03:00"]\` → **true** (both include 02:00)
- \`event1 = ["01:00","02:00"]\`, \`event2 = ["01:20","03:00"]\` → **true** (overlap 01:20–02:00)
- \`event1 = ["10:00","11:00"]\`, \`event2 = ["14:00","15:00"]\` → **false** (no overlap)

**Constraints:**
- \`event1.length == event2.length == 2\`
- \`event1[i], event2[i]\` are in the format \`"HH:MM"\`
- \`"00:00" ≤ event1[i], event2[i] ≤ "23:59"\`
- \`event1[0] ≤ event1[1]\`
- \`event2[0] ≤ event2[1]\``,
  constraints: [
    'event1.length == event2.length == 2',
    'event1[i], event2[i] are in the format "HH:MM"',
    '"00:00" ≤ event1[i], event2[i] ≤ "23:59"',
    'event1[0] ≤ event1[1]',
    'event2[0] ≤ event2[1]',
  ],
  examples: [
    {
      input: 'event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]',
      output: 'true',
      explanation: 'Both events share the time 02:00.',
    },
    {
      input: 'event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]',
      output: 'true',
    },
    {
      input: 'event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]',
      output: 'false',
    },
  ],
  hints: [
    'Two intervals [s1, e1] and [s2, e2] overlap if and only if `s1 <= e2` AND `s2 <= e1`. They do NOT overlap only when one ends strictly before the other starts.',
    'Since the time strings use zero-padded "HH:MM" format, you can compare them directly as strings (lexicographic order matches time order). No need to parse to minutes.',
    'One-liner: `return event1[0] <= event2[1] && event2[0] <= event1[1]`. Both conditions must hold simultaneously.',
  ],
  functionName: 'haveConflict',
  params: ['event1', 'event2'],
  starterCode: {
    javascript: `function haveConflict(event1, event2) {
  // Return true if the two time-interval events overlap
}`,
    python: `def haveConflict(event1: list[str], event2: list[str]) -> bool:
    # Return True if the two time-interval events overlap
    pass`,
  },
  visibleTests: [
    { args: [['01:15', '02:00'], ['02:00', '03:00']], expected: true },
    { args: [['01:00', '02:00'], ['01:20', '03:00']], expected: true },
    { args: [['10:00', '11:00'], ['14:00', '15:00']], expected: false },
  ],
  hiddenTests: [
    { args: [['00:00', '23:59'], ['00:00', '23:59']], expected: true },
    { args: [['01:00', '01:00'], ['01:00', '01:00']], expected: true },
    { args: [['01:00', '02:00'], ['03:00', '04:00']], expected: false },
    { args: [['00:00', '01:00'], ['01:00', '02:00']], expected: true },
    { args: [['05:00', '06:00'], ['04:59', '05:00']], expected: true },
    { args: [['05:00', '06:00'], ['06:01', '07:00']], expected: false },
    { args: [['23:00', '23:59'], ['00:00', '22:59']], expected: false },
  ],
};
