import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-watch',
  title: 'Binary Watch',
  difficulty: 'easy',
  tags: ['math', 'backtracking'],
  description: `A binary watch has 4 LEDs on the top to represent the **hours** (0-11), and 6 LEDs on the bottom to represent the **minutes** (0-59). Each LED represents a zero or one, with the least significant bit on the right.

Given an integer \`turnedOn\` which represents the number of LEDs that are currently on (ignoring the PM), return **all possible times** the watch could represent. You may return the answer in **any order**.

The hour must not contain a leading zero.
- For example, "01:00" is not valid. It should be "1:00".

The minute must consist of **two digits** and may contain a leading zero.
- For example, "10:2" is not valid. It should be "10:02".`,
  constraints: ['`0 <= turnedOn <= 10`'],
  examples: [
    {
      input: 'turnedOn = 1',
      output: '["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]',
      explanation: 'All times where exactly one LED is on.',
    },
    {
      input: 'turnedOn = 9',
      output: '[]',
    },
  ],
  hints: [
    'Iterate all valid (hour, minute) pairs and count how many bits are on. Return those matching turnedOn.',
  ],
  functionName: 'readBinaryWatch',
  params: ['turnedOn'],
  starterCode: {
    javascript: 'function readBinaryWatch(turnedOn) {\n  \n}\n',
    python: 'def readBinaryWatch(turnedOn):\n    pass\n',
  },
  visibleTests: [
    { args: [1], expected: ['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00'] },
    { args: [9], expected: [] },
  ],
  hiddenTests: [
    { args: [0], expected: ['0:00'] },
    { args: [10], expected: [] },
    { args: [2], expected: ['0:03', '0:05', '0:06', '0:09', '0:10', '0:12', '0:17', '0:18', '0:20', '0:24', '0:33', '0:34', '0:36', '0:40', '0:48', '1:01', '1:02', '1:04', '1:08', '1:16', '1:32', '2:01', '2:02', '2:04', '2:08', '2:16', '2:32', '3:00', '4:01', '4:02', '4:04', '4:08', '4:16', '4:32', '5:00', '6:00', '8:01', '8:02', '8:04', '8:08', '8:16', '8:32', '9:00', '10:00'] },
  ],
};
