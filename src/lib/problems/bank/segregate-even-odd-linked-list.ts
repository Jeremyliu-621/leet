import type { Problem } from '../types';

const JS_PREAMBLE = `
class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) { cur.next = new ListNode(arr[i]); cur = cur.next; }
  return head;
}
function __toArray__(head) {
  const result = [];
  while (head) { result.push(head.val); head = head.next; }
  return result;
}
function segregateEvenOddRunner(arr) { return __toArray__(segregateEvenOdd(__fromArray__(arr))); }
`.trim();

const PY_PREAMBLE = `
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def __from_array__(arr):
    arr = list(arr)
    if not arr:
        return None
    head = ListNode(arr[0])
    cur = head
    for v in arr[1:]:
        cur.next = ListNode(v)
        cur = cur.next
    return head

def __to_array__(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

def segregateEvenOddRunner(arr):
    return __to_array__(segregateEvenOdd(__from_array__(list(arr))))
`.trim();

export const problem: Problem = {
  id: 'segregate-even-odd-linked-list',
  title: 'Segregate Even and Odd Values in Linked List',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the head of a singly linked list, rearrange the nodes so that all nodes with **even values** come before all nodes with **odd values**. The **relative order** of nodes within each group must be preserved.

Return the head of the rearranged list.

> **Note:** This groups nodes by **value parity**, not by index position. A \`ListNode\` class and helper utilities are pre-defined. Implement \`segregateEvenOdd(head)\`.`,
  constraints: [
    'The number of nodes in the list is in the range [0, 10^4]',
    '0 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'head = [17,15,8,9,2,4,6]',
      output: '[8,2,4,6,17,15,9]',
      explanation: 'Even values [8,2,4,6] come first (in original relative order), then odd values [17,15,9].',
    },
    {
      input: 'head = [1,2,3,4,5]',
      output: '[2,4,1,3,5]',
      explanation: 'Even values in order: [2,4]. Odd values in order: [1,3,5].',
    },
    {
      input: 'head = [2,4,6]',
      output: '[2,4,6]',
      explanation: 'All values are even — list is unchanged.',
    },
  ],
  hints: [
    'Create two separate chains: an "even" chain (for nodes whose value is even) and an "odd" chain (for nodes whose value is odd). Use dummy head nodes for each.',
    'Walk through the original list. For each node, append it to either the even or odd chain based on `node.val % 2 === 0`.',
    'After the traversal, connect the tail of the even chain to the head of the odd chain. Ensure the tail of the odd chain points to `null`. Return `evenDummy.next`.',
  ],
  functionName: 'segregateEvenOddRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and segregateEvenOddRunner wrapper are pre-defined.\n// Implement the function below:\nfunction segregateEvenOdd(head) {\n  \n}\n',
    python: '# ListNode class and segregateEvenOddRunner wrapper are pre-defined.\n# Implement the function below:\ndef segregateEvenOdd(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[17, 15, 8, 9, 2, 4, 6]], expected: [8, 2, 4, 6, 17, 15, 9] },
    { args: [[1, 2, 3, 4, 5]], expected: [2, 4, 1, 3, 5] },
    { args: [[2, 4, 6]], expected: [2, 4, 6] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 3, 5]], expected: [1, 3, 5] },
    { args: [[2]], expected: [2] },
    { args: [[3]], expected: [3] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[10, 3, 6, 7, 2]], expected: [10, 6, 2, 3, 7] },
  ],
};
