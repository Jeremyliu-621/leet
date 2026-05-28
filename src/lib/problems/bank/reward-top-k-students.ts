import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reward-top-k-students',
  title: 'Reward Top K Students',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two string arrays \`positive_feedback\` and \`negative_feedback\`, containing the words that denote positive and negative feedback respectively. Note that **no word** is both positive and negative.

You are given \`n\` students each with a report given in string array \`report\`, and a list of student ids in \`student_id\`. The \`i\`th student's report is \`report[i]\`, and their id is \`student_id[i]\`.

Each student starts with **0 points**. For each **positive word** in their report, they gain **+3 points**; for each **negative word** in their report, they lose **1 point**.

Return the top \`k\` students based on their points, sorted by points in **descending** order. In case of a **tie**, sort them by their id in **ascending** order.`,
  constraints: [
    '1 <= positive_feedback.length, negative_feedback.length <= 10^4',
    '1 <= positive_feedback[i].length, negative_feedback[i].length <= 100',
    'Both positive_feedback and negative_feedback consist of lowercase English letters.',
    'No word is in both positive_feedback and negative_feedback.',
    'n == report.length == student_id.length',
    '1 <= n <= 10^4',
    'student_id[i] is between 1 and 10^9.',
    'All student_id[i] are unique.',
    '1 <= report[i].length <= 100',
    'report[i] consists of lowercase English letters and spaces.',
    '1 <= k <= n',
  ],
  examples: [
    {
      input:
        'positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2',
      output: '[1,2]',
      explanation:
        'Student 1 has "studious" (+3 pts) = 3. Student 2 has "smart" (+3 pts) = 3. Tie broken by id: [1, 2].',
    },
    {
      input:
        'positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is not studious","the student is smart"], student_id = [1,2], k = 2',
      output: '[2,1]',
      explanation:
        'Student 1: "studious" (+3) and "not" (-1) = 2 pts. Student 2: "smart" (+3) = 3 pts. Sorted by score: [2, 1].',
    },
  ],
  hints: [
    'Build a set for positive words and a set for negative words for O(1) lookup.',
    'For each student, split their report into words and accumulate +3 for positives and -1 for negatives.',
    'Sort students by (score desc, id asc) and return the first k ids.',
  ],
  functionName: 'topStudents',
  params: ['positive_feedback', 'negative_feedback', 'report', 'student_id', 'k'],
  starterCode: {
    javascript:
      'function topStudents(positive_feedback, negative_feedback, report, student_id, k) {\n\n}',
    typescript: "function topStudents(positive_feedback: string[], negative_feedback: string[], report: string[], student_id: number[], k: number): number[] {\n\n}",

    python:
      'def topStudents(positive_feedback, negative_feedback, report, student_id, k):\n    pass',
  },
  visibleTests: [
    {
      args: [
        ['smart', 'brilliant', 'studious'],
        ['not'],
        ['this student is studious', 'the student is smart'],
        [1, 2],
        2,
      ],
      expected: [1, 2],
    },
    {
      args: [
        ['smart', 'brilliant', 'studious'],
        ['not'],
        ['this student is not studious', 'the student is smart'],
        [1, 2],
        2,
      ],
      expected: [2, 1],
    },
  ],
  hiddenTests: [
    {
      args: [['good'], ['bad'], ['good good good', 'bad bad', 'good bad'], [3, 1, 2], 2],
      expected: [3, 2],
    },
    {
      args: [['a'], ['b'], ['a b', 'a a', 'b b'], [10, 20, 30], 1],
      expected: [20],
    },
    {
      args: [['excellent'], ['poor'], ['poor excellent', 'excellent'], [5, 5], 1],
      expected: [5],
    },
    {
      args: [['great'], ['bad'], ['great great', 'bad bad bad'], [100, 200], 2],
      expected: [100, 200],
    },
    {
      args: [['x'], ['y'], ['x x x', 'x x', 'x'], [3, 1, 2], 3],
      expected: [3, 1, 2],
    },
  ],
};
