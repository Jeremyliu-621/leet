import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-difference',
  title: 'Minimum Time Difference',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given a list of 24-hour clock time points in \`"HH:MM"\` format, return the minimum **minutes** difference between any two time points in the list.`,
  constraints: [
    '2 <= timePoints.length <= 2 * 10^4',
    'timePoints[i] is in the format "HH:MM".',
  ],
  examples: [
    {
      input: 'timePoints = ["23:59","00:00"]',
      output: '1',
      explanation: 'The difference between 23:59 and 00:00 wraps around: 1 minute.',
    },
    {
      input: 'timePoints = ["00:00","23:59","00:00"]',
      output: '0',
      explanation: 'There are two "00:00" entries — their difference is 0.',
    },
  ],
  hints: [
    'Convert every time string to total minutes from midnight: hours * 60 + minutes.',
    'Sort the minute values. The minimum difference is either between consecutive values or wraps around (1440 - last + first). Check both.',
    `\`\`\`js
function findMinDifference(timePoints) {
  const mins = timePoints.map(t => {
    const [h,m]=t.split(":").map(Number); return h*60+m;
  }).sort((a,b)=>a-b);
  let best = 1440 - mins[mins.length-1] + mins[0]; // wrap
  for (let i = 1; i < mins.length; i++) best = Math.min(best, mins[i]-mins[i-1]);
  return best;
}\`\`\``,
  ],
  functionName: 'findMinDifference',
  params: ['timePoints'],
  starterCode: {
    javascript: 'function findMinDifference(timePoints) {\n  \n}\n',
    typescript: "function findMinDifference(timePoints: string[]): number {\n  \n}",

    python: 'def findMinDifference(timePoints):\n    pass\n',
  },
  visibleTests: [
    { args: [['23:59', '00:00']], expected: 1 },
    { args: [['00:00', '23:59', '00:00']], expected: 0 },
    { args: [['00:00', '04:00', '22:00']], expected: 120 },
  ],
  hiddenTests: [
    { args: [['12:00', '00:00']], expected: 720 },
    { args: [['01:00', '01:01']], expected: 1 },
    { args: [['00:00', '12:00', '23:30']], expected: 30 },
    { args: [['05:31', '22:08', '00:35']], expected: 147 },
    { args: [['06:06', '06:06']], expected: 0 },
  ],
};
