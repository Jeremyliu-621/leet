import type { Problem } from '../types';

export const problem: Problem = {
  id: 'relative-ranks',
  title: 'Relative Ranks',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an integer array \`score\` of size \`n\`, where \`score[i]\` is the score of the \`i-th\` athlete in a competition. All scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place has the 2nd highest, and so on. The placement of each athlete determines their rank:

- The 1st place athlete's rank is \`"Gold Medal"\`.
- The 2nd place athlete's rank is \`"Silver Medal"\`.
- The 3rd place athlete's rank is \`"Bronze Medal"\`.
- For the 4th place to the \`n-th\` place, their rank is their placement number.

Return an array \`answer\` of size \`n\` where \`answer[i]\` is the rank of the \`i-th\` athlete.`,
  constraints: [
    '1 <= n <= 10^4',
    '0 <= score[i] <= 10^6',
    'All values in score are unique',
  ],
  examples: [
    { input: 'score = [5,4,3,2,1]', output: '["Gold Medal","Silver Medal","Bronze Medal","4","5"]', explanation: 'Scores in descending order: 5,4,3,2,1.' },
    { input: 'score = [10,3,8,9,4]', output: '["Gold Medal","5","Bronze Medal","Silver Medal","4"]', explanation: '10=Gold, 9=Silver, 8=Bronze, 4=4th, 3=5th.' },
  ],
  hints: [
    'Create an index array sorted by score descending. Map position to rank label.',
  ],
  functionName: 'findRelativeRanks',
  params: ['score'],
  starterCode: {
    javascript: 'function findRelativeRanks(score) {\n  \n}\n',
    python: 'def findRelativeRanks(score):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 4, 3, 2, 1]], expected: ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'] },
    { args: [[10, 3, 8, 9, 4]], expected: ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'] },
    { args: [[1]], expected: ['Gold Medal'] },
  ],
  hiddenTests: [
    { args: [[3, 1, 2]], expected: ['Gold Medal', 'Bronze Medal', 'Silver Medal'] },
    { args: [[100, 50]], expected: ['Gold Medal', 'Silver Medal'] },
    { args: [[1, 2, 3, 4, 5]], expected: ['5', '4', 'Bronze Medal', 'Silver Medal', 'Gold Medal'] },
    { args: [[7, 5, 3]], expected: ['Gold Medal', 'Silver Medal', 'Bronze Medal'] },
  ],
};
