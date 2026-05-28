import type { Problem } from '../types';

export const problem: Problem = {
  id: 'validate-stack-sequences',
  title: 'Validate Stack Sequences',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Given two integer arrays \`pushed\` and \`popped\` each with distinct values, return \`true\` *if this could have been the result of a sequence of push and pop operations on an initially empty stack, or* \`false\` *otherwise.*`,
  constraints: [
    '1 <= pushed.length <= 1000',
    '0 <= pushed[i] <= 1000',
    'All the elements of pushed are unique.',
    'popped.length == pushed.length',
    'popped is a permutation of pushed.',
  ],
  examples: [
    {
      input: 'pushed = [1,2,3,4,5], popped = [4,5,3,2,1]',
      output: 'true',
      explanation: 'Push 1,2,3,4, pop 4. Push 5, pop 5,3,2,1.',
    },
    {
      input: 'pushed = [1,2,3,4,5], popped = [4,3,5,1,2]',
      output: 'false',
      explanation: 'Cannot pop 1 before 2 in this sequence.',
    },
  ],
  hints: [
    'Simulate the push/pop process with an auxiliary stack.',
    'After pushing each element, greedily pop while the top matches the next popped value.',
    'If the stack is empty at the end, the sequence is valid.',
  ],
  functionName: 'validateStackSequences',
  params: ['pushed', 'popped'],
  starterCode: {
    javascript: `function validateStackSequences(pushed, popped) {

}`,
    typescript: "function validateStackSequences(pushed: number[], popped: number[]): boolean {\n\n}",

    python: `def validateStackSequences(pushed, popped):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], [4, 5, 3, 2, 1]], expected: true },
    { args: [[1, 2, 3, 4, 5], [4, 3, 5, 1, 2]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [3, 2, 1]], expected: true },
    { args: [[1, 2, 3], [1, 2, 3]], expected: true },
    { args: [[1, 2, 3], [3, 1, 2]], expected: false },
    { args: [[2, 1, 0], [1, 2, 0]], expected: true },
    { args: [[1], [1]], expected: true },
  ],
};
