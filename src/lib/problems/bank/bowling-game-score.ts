import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bowling-game-score',
  title: 'Bowling Game Score',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `In a simplified version of bowling, a game consists of **10 frames**. In each frame, a player has up to two rolls to knock down 10 pins.

**Scoring rules:**
- **Strike** (\`10\` on the first roll of a frame): The frame's score is \`10\` plus the total of the next **two** rolls.
- **Spare** (\`10\` total from two rolls in a frame): The frame's score is \`10\` plus the next **one** roll.
- **Open frame**: Score is simply the total of the two rolls.

The input is a flat array of individual roll scores (not frames). Spare/strike bonus rolls at the end are included. Return the total score.

**Constraints:** The input always represents a valid completed bowling game (exactly enough rolls for 10 frames including bonus rolls).`,
  constraints: [
    'The rolls array represents a valid 10-frame bowling game',
    '0 <= rolls[i] <= 10',
    'Rolls within a non-strike frame sum to at most 10',
  ],
  examples: [
    {
      input: 'rolls = [10,10,10,10,10,10,10,10,10,10,10,10]',
      output: '300',
      explanation: 'Perfect game — 12 strikes. Each of the 10 frames scores 30. Total = 300.',
    },
    {
      input: 'rolls = [3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6]',
      output: '90',
      explanation: '10 open frames, each scoring 9 (3+6). Total = 90.',
    },
    {
      input: 'rolls = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]',
      output: '150',
      explanation: 'All spares (5+5), each worth 5+5+5_next=15, for 10 frames = 150.',
    },
  ],
  hints: [
    'Iterate through 10 frames. Keep a roll index `i`. For each frame, check if `rolls[i] === 10` (strike): add `10 + rolls[i+1] + rolls[i+2]`, advance `i` by 1. If `rolls[i] + rolls[i+1] === 10` (spare): add `10 + rolls[i+2]`, advance `i` by 2. Otherwise add `rolls[i] + rolls[i+1]`, advance `i` by 2.',
    'After 10 frames the loop ends — the bonus rolls for strike/spare in frame 10 are already consumed by the lookahead.',
    'Initialize `score = 0` and `i = 0`. Use a `for` loop for exactly 10 frames.',
  ],
  functionName: 'bowlingScore',
  params: ['rolls'],
  starterCode: {
    javascript: `function bowlingScore(rolls) {\n  \n}`,
    typescript: "function bowlingScore(rolls: number[]): number {\n  \n}",

    python: `def bowlingScore(rolls):\n    pass`,
  },
  visibleTests: [
    {
      args: [[10,10,10,10,10,10,10,10,10,10,10,10]],
      expected: 300,
    },
    {
      args: [[3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6]],
      expected: 90,
    },
    {
      args: [[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]],
      expected: 150,
    },
  ],
  hiddenTests: [
    {
      args: [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
      expected: 0,
    },
    {
      args: [[10,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6]],
      expected: 100,
    },
    {
      args: [[4,6,5,3,7,2,3,6,4,4,5,3,3,3,4,5,8,1,2,6]],
      expected: 89,
    },
    {
      args: [[6,3,9,0,0,3,8,2,7,3,6,4,5,3,3,3,2,8,9,1,7]],
      expected: 119,
    },
    {
      args: [[10,0,0,10,0,0,10,0,0,10,0,0,10,0,0]],
      expected: 50,
    },
  ],
};
