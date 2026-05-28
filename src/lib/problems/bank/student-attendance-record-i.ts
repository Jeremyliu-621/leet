import type { Problem } from '../types';

export const problem: Problem = {
  id: 'student-attendance-record-i',
  title: 'Student Attendance Record I',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\` representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

- \`'A'\`: Absent.
- \`'L'\`: Late.
- \`'P'\`: Present.

The student is eligible for an attendance award if they meet **both** of the following criteria:

- The student was absent (\`'A'\`) for **strictly** fewer than 2 days total.
- The student was **never** late (\`'L'\`) for **3 or more consecutive** days.

Return \`true\` if the student is eligible for an attendance award, or \`false\` otherwise.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`s[i]` is either `\'A\'`, `\'L\'`, or `\'P\'`.',
  ],
  examples: [
    { input: 's = "PPALLP"', output: 'true' },
    { input: 's = "PPALLL"', output: 'false' },
  ],
  hints: [
    'Count the number of A\'s. If >= 2, return false.',
    'Check if "LLL" appears as a substring. If yes, return false.',
    `\`\`\`js
function checkRecord(s) {
  return (s.match(/A/g)||[]).length<2 && !s.includes("LLL");
}\`\`\``,
  ],
  functionName: 'checkRecord',
  params: ['s'],
  starterCode: {
    javascript: 'function checkRecord(s) {\n  \n}\n',
    typescript: "function checkRecord(s: string): boolean {\n  \n}",

    python: 'def checkRecord(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['PPALLP'], expected: true },
    { args: ['PPALLL'], expected: false },
  ],
  hiddenTests: [
    { args: ['P'], expected: true },
    { args: ['A'], expected: true },
    { args: ['AA'], expected: false },
    { args: ['PPALL'], expected: true },
    { args: ['LLLP'], expected: false },
    { args: ['PPPP'], expected: true },
    { args: ['AALL'], expected: false },
  ],
};
