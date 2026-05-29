import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-consecutive-integers-from-a-data-stream',
  title: 'Find Consecutive Integers from a Data Stream',
  difficulty: 'medium',
  tags: ['design', 'simulation', 'hash-map'],
  description: `For a stream of integers, implement a data structure that checks if the last \`k\` integers parsed are equal to \`value\`.

Implement the \`DataStream\` class:

- \`DataStream(int value, int k)\` Initializes the object with an empty integer stream and the two integers \`value\` and \`k\`.
- \`boolean consec(int num)\` Adds \`num\` to the stream. Returns \`true\` if the last \`k\` integers are equal to \`value\`, and \`false\` otherwise.

Simulate the class operations as follows: the first argument to your function is a list of method names, and the second is a list of argument lists. Return a list of results (use \`null\` for constructor calls).`,
  constraints: [
    '`1 <= value, num <= 10^9`',
    '`1 <= k <= 10^5`',
    'At most `10^5` calls to `consec`',
  ],
  examples: [
    {
      input: 'ops = ["DataStream","consec","consec","consec","consec"], args = [[4,3],[4],[4],[4],[3]]',
      output: '[null,false,false,true,false]',
      explanation: 'After [4,4,4] the last 3 are all 4 → true. After adding 3, last 3 includes 3 → false.',
    },
  ],
  hints: [
    'Track a counter of how many consecutive values equal to `value` are at the end of the stream.',
    'When `consec(num)` is called: increment the streak if `num == value`, otherwise reset to 0.',
    'Return `streak >= k`.',
  ],
  functionName: 'dataStream',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function dataStream(ops, args) {
  // ops[0] === "DataStream", args[0] === [value, k]
  // ops[i] === "consec", args[i] === [num]
  // Return array of results (null for constructor)
}`,
    typescript: `function dataStream(ops: string[], args: (number[] | number[])[]): (boolean | null)[] {
  // ops[0] === "DataStream", args[0] === [value, k]
  // ops[i] === "consec", args[i] === [num]
  // Return array of results (null for constructor)
}`,
    python: `def dataStream(ops, args):
    # ops[0] == "DataStream", args[0] == [value, k]
    # ops[i] == "consec", args[i] == [num]
    # Return list of results (None for constructor)
    pass`,
  },
  visibleTests: [
    {
      args: [['DataStream', 'consec', 'consec', 'consec', 'consec'], [[4, 3], [4], [4], [4], [3]]],
      expected: [null, false, false, true, false],
    },
  ],
  hiddenTests: [
    {
      args: [['DataStream', 'consec', 'consec', 'consec'], [[1, 1], [1], [2], [1]]],
      expected: [null, true, false, true],
    },
    {
      args: [['DataStream', 'consec', 'consec', 'consec', 'consec', 'consec'], [[5, 2], [5], [5], [5], [4], [5]]],
      expected: [null, false, true, true, false, false],
    },
    {
      args: [['DataStream', 'consec', 'consec'], [[7, 3], [7], [7]]],
      expected: [null, false, false],
    },
    {
      args: [['DataStream', 'consec', 'consec', 'consec', 'consec'], [[3, 3], [3], [3], [3], [3]]],
      expected: [null, false, false, true, true],
    },
  ],
};
