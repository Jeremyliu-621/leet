import type { Problem } from '../types';

export const problem: Problem = {
  id: 'students-unable-to-eat-lunch',
  title: 'Number of Students Unable to Eat Lunch',
  difficulty: 'easy',
  tags: ['arrays', 'stack'],
  description: `The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers \`0\` and \`1\` respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a **stack**. At each step:

- If the student at the front of the queue **prefers** the sandwich on the top of the stack, they will **take it** and leave the queue.
- Otherwise, they will **leave it** and go to the queue's end.

This continues until none of the queue students want to take the top sandwich, at which point no more students can eat.

Return the number of students that are unable to eat.`,
  constraints: [
    '`1 <= students.length <= 100`',
    '`students.length == sandwiches.length`',
    '`sandwiches[i]` is `0` or `1`.',
    '`students[i]` is `0` or `1`.',
  ],
  examples: [
    {
      input: 'students = [1,1,0,0], sandwiches = [0,1,0,1]',
      output: '0',
      explanation: 'All students eat: s0 goes to end, s1 goes to end, s0 takes sandwich 0, s0 takes sandwich 1... eventually all eat.',
    },
    {
      input: 'students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]',
      output: '3',
    },
  ],
  hints: [
    'Count how many students prefer each type. For each sandwich on the stack, if no remaining student wants it, all remaining students cannot eat.',
    'Count students preferring each type (0 and 1). Process the sandwiches: if a sandwich type has no remaining students, stop. Otherwise decrement that type\'s count.',
    `\`\`\`js
const cnt = [0, 0];
for (const s of students) cnt[s]++;
for (const s of sandwiches) {
  if (cnt[s] === 0) break;
  cnt[s]--;
}
return cnt[0] + cnt[1];\`\`\``
  ],
  functionName: 'countStudents',
  params: ['students', 'sandwiches'],
  starterCode: {
    javascript: 'function countStudents(students, sandwiches) {\n  \n}\n',
    python: 'def countStudents(students, sandwiches):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 0, 0], [0, 1, 0, 1]], expected: 0 },
    { args: [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0], [0]], expected: 0 },
    { args: [[1], [0]], expected: 1 },
    { args: [[0, 0], [1, 1]], expected: 2 },
    { args: [[1, 0, 1, 0], [1, 1, 0, 0]], expected: 0 },
  ],
};
