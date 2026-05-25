import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-greater-node-in-linked-list',
  title: 'Next Greater Node In Linked List',
  difficulty: 'medium',
  tags: ['stack', 'linked-list'],
  description: `You are given the \`head\` of a linked list with \`n\` nodes.

For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

Return an integer array \`answer\` where \`answer[i]\` is the value of the next greater node of the \`i\`-th node (**1-indexed**). If the \`i\`-th node does not have a next greater node, set \`answer[i] = 0\`.`,
  constraints: [
    'The number of nodes is n.',
    '1 <= n <= 10^4',
    '1 <= Node.val <= 10^9',
  ],
  examples: [
    {
      input: 'head = [2,1,5]',
      output: '[5,5,0]',
      explanation: '2 → next greater is 5; 1 → next greater is 5; 5 → no greater.',
    },
    {
      input: 'head = [2,7,4,3,5]',
      output: '[7,0,5,5,0]',
      explanation: '2→7, 7→none, 4→5, 3→5, 5→none.',
    },
  ],
  hints: [
    'Convert the linked list to an array first.',
    'Use a monotonic decreasing stack: for each element, pop elements from the stack that are smaller, setting their answer to the current element.',
  ],
  functionName: 'nextLargerNodesRunner',
  params: ['arr'],
  preamble: {
    javascript: `// Input is a flat array; output is a flat result array.
// The runner receives the array directly (no ListNode conversion needed for test harness).`,
    python: `# Input is a flat array; output is a flat result array.`,
  },
  starterCode: {
    javascript: `function nextLargerNodes(head) {

}`,
    python: `def nextLargerNodes(head):
    pass`,
  },
  visibleTests: [
    { args: [[2,1,5]], expected: [5,5,0] },
    { args: [[2,7,4,3,5]], expected: [7,0,5,5,0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[1,2]], expected: [2,0] },
    { args: [[2,1]], expected: [0,0] },
    { args: [[1,7,5,1,9,2,5,1]], expected: [7,9,9,9,0,5,0,0] },
    { args: [[5,4,3,2,1]], expected: [0,0,0,0,0] },
    { args: [[1,2,3,4,5]], expected: [2,3,4,5,0] },
  ],
};
