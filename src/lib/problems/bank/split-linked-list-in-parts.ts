import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-linked-list-in-parts',
  title: 'Split Linked List in Parts',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the \`head\` of a singly linked list and an integer \`k\`, split the linked list into \`k\` consecutive linked list **parts**.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being \`null\`.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

**Implement a function** \`splitListToParts(head, k)\` where \`head\` is an array (linked list in array form) and returns a 2D array of linked lists (each also in array form).`,
  constraints: [
    'The number of nodes in the list is in the range [0, 1000]',
    '0 <= Node.val <= 1000',
    '1 <= k <= 50',
  ],
  examples: [
    {
      input: 'head = [1,2,3], k = 5',
      output: '[[1],[2],[3],[],[]]',
      explanation: 'Only 3 elements, split into 5 parts. The first 3 parts have 1 element each; the remaining 2 are empty.',
    },
    {
      input: 'head = [1,2,3,4,5,6,7,8,9,10], k = 3',
      output: '[[1,2,3,4],[5,6,7],[8,9,10]]',
      explanation: 'Length 10, k=3. 10 = 3*3+1, so first 1 part gets 4 elements, rest get 3.',
    },
  ],
  hints: [
    'Level 1: First find total length n. Each part has base size n/k (integer division). The first n%k parts get one extra element.',
    'Level 2: Calculate base = Math.floor(n/k) and extra = n%k. Iterate k times: each part takes base elements (plus 1 if extra > 0 and we have extras left). Build each part as a subarray.',
    'Level 3: const n=head.length,base=Math.floor(n/k),extra=n%k,res=[];let i=0;for(let p=0;p<k;p++){const size=base+(p<extra?1:0);res.push(head.slice(i,i+size));i+=size;}return res;',
  ],
  functionName: 'splitListToParts',
  params: ['head', 'k'],
  starterCode: {
    javascript: 'function splitListToParts(head, k) {\n  // head is an array; return array of arrays\n}\n',
    python: 'def splitListToParts(head, k):\n    # head is a list; return list of lists\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3], 5], expected: [[1], [2], [3], [], []] },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3], expected: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]] },
  ],
  hiddenTests: [
    { args: [[], 3], expected: [[], [], []] },
    { args: [[1], 1], expected: [[1]] },
    { args: [[1, 2, 3, 4], 2], expected: [[1, 2], [3, 4]] },
    { args: [[1, 2, 3, 4, 5], 2], expected: [[1, 2, 3], [4, 5]] },
    { args: [[1, 2], 5], expected: [[1], [2], [], [], []] },
  ],
};
