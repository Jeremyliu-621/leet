import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-the-confusion-of-an-exam',
  title: 'Maximize the Confusion of an Exam',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `A teacher is writing a test with \`n\` true/false questions, with \`'T'\` denoting true and \`'F'\` denoting false. He wants to confuse the students by **maximizing** the number of **consecutive** questions with the **same** answer (either all \`'T'\` or all \`'F'\`).

You are given a string \`answerKey\`, where \`answerKey[i]\` is the original answer to the \`i\`th question. In addition, you are given an integer \`k\`, the maximum number of times you may perform the following operation:

- Change the answer key for any question to \`'T'\` or \`'F'\` (i.e., set \`answerKey[i]\` to \`'T'\` or \`'F'\`).

Return the **maximum** number of consecutive \`'T'\`s or \`'F'\`s in the answer key after performing the operation at most \`k\` times.`,
  constraints: [
    'n == answerKey.length',
    '1 <= n <= 5 * 10^4',
    'answerKey[i] is either \'T\' or \'F\'',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'answerKey = "TTFF", k = 2',
      output: '4',
      explanation: 'Change both F\'s to T\'s → "TTTT", length 4.',
    },
    {
      input: 'answerKey = "TFFT", k = 1',
      output: '3',
      explanation: 'Change F at index 1 → "TTFT" or change F at index 2 → "TFTT". Max run = 3.',
    },
  ],
  hints: [
    'Run the sliding window twice: once allowing up to k changes of \'F\'→\'T\', once allowing k changes of \'T\'→\'F\'.',
    'For each run, expand right freely; shrink left whenever the count of the character being replaced exceeds k.',
    'The answer is the maximum window size seen across both passes.',
  ],
  functionName: 'maxConsecutiveAnswers',
  params: ['answerKey', 'k'],
  starterCode: {
    javascript: `function maxConsecutiveAnswers(answerKey, k) {\n  \n}`,
    typescript: `function maxConsecutiveAnswers(answerKey: string, k: number): number {\n  \n}`,
    python: `def maxConsecutiveAnswers(answerKey, k):\n    `,
  },
  visibleTests: [
    { args: ['TTFF', 2], expected: 4 },
    { args: ['TFFT', 1], expected: 3 },
    { args: ['TTFTTFTT', 1], expected: 5 },
  ],
  hiddenTests: [
    { args: ['TTFF', 2], expected: 4 },
    { args: ['TFFT', 1], expected: 3 },
    { args: ['TTFTTFTT', 1], expected: 5 },
    { args: ['T', 1], expected: 1 },
    { args: ['FFFF', 2], expected: 4 },
    { args: ['TFFTF', 2], expected: 5 },
    { args: ['TTTTTTTT', 0], expected: 8 },
    { args: ['TFTFTF', 2], expected: 5 },
  ],
};
