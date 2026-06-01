import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-the-confusion-of-an-exam',
  title: 'Maximize the Confusion of an Exam',
  difficulty: 'medium',
  tags: ['sliding-window', 'strings'],
  description: `A teacher is writing a test with \`n\` true/false questions, with \`'T'\` denoting true and \`'F'\` denoting false.

The teacher wants to **confuse** students by **maximizing** the number of **consecutive** questions with the **same** answer (either all true or all false).

Given a string \`answerKey\` where \`answerKey[i]\` is the original answer to the \`i\`-th question and an integer \`k\`, you may change the answer to **at most \`k\`** questions.

Return the **maximum** number of consecutive 'T's or 'F's after performing the operation at most \`k\` times.`,
  constraints: [
    'n == answerKey.length',
    '1 <= n <= 5 * 10^4',
    'answerKey[i] is either "T" or "F"',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'answerKey = "TTFF", k = 2',
      output: '4',
      explanation: 'Change the two F\'s to T\'s (using both k=2 changes). The entire string "TTTT" is 4 consecutive T\'s.',
    },
    {
      input: 'answerKey = "TFFT", k = 1',
      output: '3',
      explanation: 'Change one F to T giving "TTFT" or "TFTT". Either way, 3 consecutive T\'s.',
    },
    {
      input: 'answerKey = "TTFTTFTT", k = 1',
      output: '5',
      explanation: 'Change the F at index 5 to T: "TTFTTTTT" gives 5 consecutive T\'s (indices 3-7).',
    },
  ],
  hints: [
    "Level 1: Solve two separate subproblems: maximum window with at most k 'F's, and maximum window with at most k 'T's. The answer is the max of both.",
    "Level 2: For each subproblem, use a sliding window. Expand right pointer; if the count of the 'bad' character exceeds k, shrink left pointer. Track maximum window size.",
    "Level 3: Write a helper maxWindow(ch) that slides a window counting character ch; when count > k, advance left pointer. Run for ch='F' (window of T's + up to k F's) and ch='T' (window of F's + up to k T's). Return max of both results.",
  ],
  functionName: 'maxConsecutiveAnswers',
  params: ['answerKey', 'k'],
  starterCode: {
    javascript: `function maxConsecutiveAnswers(answerKey, k) {
  function maxWindow(ch) {
    let left = 0, count = 0, best = 0;
    for (let right = 0; right < answerKey.length; right++) {
      if (answerKey[right] === ch) count++;
      while (count > k) {
        if (answerKey[left] === ch) count--;
        left++;
      }
      best = Math.max(best, right - left + 1);
    }
    return best;
  }
  return Math.max(maxWindow('T'), maxWindow('F'));
}`,
    typescript: `function maxConsecutiveAnswers(answerKey: string, k: number): number {
  function maxWindow(ch: string): number {
    let left = 0, count = 0, best = 0;
    for (let right = 0; right < answerKey.length; right++) {
      if (answerKey[right] === ch) count++;
      while (count > k) {
        if (answerKey[left] === ch) count--;
        left++;
      }
      best = Math.max(best, right - left + 1);
    }
    return best;
  }
  return Math.max(maxWindow('T'), maxWindow('F'));
}`,
    python: `def maxConsecutiveAnswers(answerKey, k):
    def max_window(ch):
        left = count = best = 0
        for right in range(len(answerKey)):
            if answerKey[right] == ch:
                count += 1
            while count > k:
                if answerKey[left] == ch:
                    count -= 1
                left += 1
            best = max(best, right - left + 1)
        return best
    return max(max_window('T'), max_window('F'))`,
  },
  visibleTests: [
    { args: ['TTFF', 2], expected: 4 },
    { args: ['TFFT', 1], expected: 3 },
    { args: ['TTFTTFTT', 1], expected: 5 },
  ],
  hiddenTests: [
    { args: ['T', 1], expected: 1 },
    { args: ['F', 1], expected: 1 },
    { args: ['TTTTT', 2], expected: 5 },
    { args: ['FFFFF', 2], expected: 5 },
    { args: ['TFTTFFT', 2], expected: 5 },
    { args: ['TTFTFF', 3], expected: 6 },
  ],
};
