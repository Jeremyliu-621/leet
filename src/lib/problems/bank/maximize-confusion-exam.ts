import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-confusion-exam',
  title: 'Maximize the Confusion of an Exam',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `A teacher is writing a test with \`n\` true/false questions, with \`'T'\` denoting true and \`'F'\` denoting false. The teacher wants to confuse the students by maximizing the number of **consecutive** questions with the **same** answer (multiple trues or multiple falses in a row).

The teacher can change at most \`k\` answers. Return the **maximum** number of consecutive answers of the same type.`,
  constraints: [
    'n == answerKey.length',
    '1 <= n <= 5 * 10^4',
    '1 <= k <= n',
    "answerKey[i] is either 'T' or 'F'",
  ],
  examples: [
    {
      input: 'answerKey = "TTFF", k = 2',
      output: '4',
      explanation: 'We can change both F\'s to T\'s, making "TTTT". Or change both T\'s, making "FFFF".',
    },
    {
      input: 'answerKey = "TFFT", k = 1',
      output: '3',
      explanation: 'Change the first T to F: "FFFT" (3 consecutive F\'s); or change last T to F: "TFFF" (3 consecutive F\'s).',
    },
  ],
  hints: [
    'Level 1: Use a sliding window. For each character type (T and F), find the longest window where the count of the opposite character is ≤ k. The answer is the max window size across both types.',
    'Level 2: Run the sliding window twice: once limiting F count to k (to maximize T runs), once limiting T count to k (to maximize F runs). Return the overall maximum.',
    "Level 3: function solve(c){let l=0,cnt=0,ans=0;for(let r=0;r<answerKey.length;r++){if(answerKey[r]!==c)cnt++;while(cnt>k)if(answerKey[l++]!==c)cnt--;ans=Math.max(ans,r-l+1);}return ans;}return Math.max(solve('T'),solve('F'));",
  ],
  functionName: 'maxConsecutiveAnswers',
  params: ['answerKey', 'k'],
  starterCode: {
    javascript: 'function maxConsecutiveAnswers(answerKey, k) {\n  // your code here\n}\n',
    typescript: "function maxConsecutiveAnswers(answerKey: string, k: number): number {\n  // your code here\n}",

    python: 'def maxConsecutiveAnswers(answerKey, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['TTFF', 2], expected: 4 },
    { args: ['TFFT', 1], expected: 3 },
  ],
  hiddenTests: [
    { args: ['T', 1], expected: 1 },
    { args: ['TF', 1], expected: 2 },
    { args: ['TTTTTTTT', 3], expected: 8 },
    { args: ['FFFTTTFF', 2], expected: 5 },
    { args: ['TFTT', 1], expected: 4 },
  ],
};
