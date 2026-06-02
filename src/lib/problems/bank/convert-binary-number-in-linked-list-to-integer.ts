import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-binary-number-in-linked-list-to-integer',
  title: 'Convert Binary Number in a Linked List to Integer',
  difficulty: 'easy',
  tags: ['linked-list', 'math'],
  description: `Given a singly linked list whose nodes contain binary digits (only \`0\` or \`1\`), the linked list represents a binary number with the **most significant bit** at the head.

Return the **decimal value** of the number in the linked list.

For this problem, the linked list is represented as an array of integers (e.g., \`[1, 0, 1]\` represents the number \`101\` in binary, which equals \`5\` in decimal).`,
  constraints: [
    'The linked list is not empty',
    '`1 <= Node.val <= 1` (each node is 0 or 1)',
    'The number of nodes will not exceed `30`',
  ],
  examples: [
    {
      input: 'head = [1,0,1]',
      output: '5',
      explanation: '(1) → (0) → (1) represents the binary number 101, which equals 5.',
    },
    {
      input: 'head = [0]',
      output: '0',
      explanation: 'A single node with value 0 represents the binary number 0.',
    },
  ],
  hints: [
    'Traverse the list from head to tail. Build the decimal value by shifting the current result left by one bit and adding the current node\'s value.',
    'The formula is: `result = result * 2 + node.val`. This works because each new bit is appended at the least significant position.',
    '```js\nfunction getDecimalValue(head) {\n  let val = 0;\n  for (const bit of head) val = val * 2 + bit;\n  return val;\n}\n```',
  ],
  functionName: 'getDecimalValue',
  params: ['head'],
  starterCode: {
    javascript: `function getDecimalValue(head) {
  let val = 0;
  for (const bit of head) val = val * 2 + bit;
  return val;
}`,
    typescript: `function getDecimalValue(head: number[]): number {
  let val = 0;
  for (const bit of head) val = val * 2 + bit;
  return val;
}`,
    python: `def getDecimalValue(head: list[int]) -> int:
    val = 0
    for bit in head:
        val = val * 2 + bit
    return val`,
  },
  visibleTests: [
    { args: [[1, 0, 1]], expected: 5 },
    { args: [[0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 0, 0, 0, 0]], expected: 16 },
    { args: [[1, 1, 1, 1, 1]], expected: 31 },
    { args: [[1, 0, 1, 1]], expected: 11 },
  ],
};
