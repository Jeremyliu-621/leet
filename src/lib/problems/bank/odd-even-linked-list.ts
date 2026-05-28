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
function oddEvenListRunner(arr) { return __toArray__(oddEvenList(__fromArray__(arr))); }
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

def oddEvenListRunner(arr):
    return __to_array__(oddEvenList(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'odd-even-linked-list',
  title: 'Odd Even Linked List',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the head of a singly linked list, group all the nodes with **odd indices** together followed by the nodes with **even indices**, and return the reordered list.

The **first** node is considered odd, the **second** node is even, and so on.

Note that the relative order inside both the odd and even groups should remain as in the input.

**Approach:** Maintain two separate chains — one for odd-indexed nodes and one for even-indexed nodes. Weave through the list and join the odd chain's tail to the even chain's head.`,
  constraints: [
    'The number of nodes in the linked list is in the range [0, 10000]',
    '-1000000 <= Node.val <= 1000000',
  ],
  examples: [
    {
      input: 'head = [1,2,3,4,5]',
      output: '[1,3,5,2,4]',
      explanation: 'Odd-indexed nodes (1-based): 1,3,5. Even-indexed: 2,4.',
    },
    {
      input: 'head = [2,1,3,5,6,4,7]',
      output: '[2,3,6,7,1,5,4]',
      explanation: 'Odd nodes: 2,3,6,7. Even nodes: 1,5,4.',
    },
  ],
  hints: [
    'Create two dummy heads: one for the odd chain, one for the even chain. Walk through with a counter and append each node to the appropriate chain.',
    'Point the last odd node\'s `next` to the head of the even chain (not the dummy). Return the odd chain\'s head.',
    '`let odd=head, even=head?.next, evenHead=even; while(even&&even.next){odd.next=even.next;odd=odd.next;even.next=odd.next;even=even.next;} odd.next=evenHead; return head;`',
  ],
  functionName: 'oddEvenListRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and oddEvenListRunner wrapper are pre-defined.\n// Implement the function below:\nfunction oddEvenList(head) {\n  \n}\n',
    typescript: "function oddEvenListRunner(head: number[]): number[] {\n  \n}",

    python:
      '# ListNode class and oddEvenListRunner wrapper are pre-defined.\n# Implement the function below:\ndef oddEvenList(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [1, 3, 5, 2, 4] },
    { args: [[2, 1, 3, 5, 6, 4, 7]], expected: [2, 3, 6, 7, 1, 5, 4] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[1, 2, 3]], expected: [1, 3, 2] },
    { args: [[1, 2, 3, 4]], expected: [1, 3, 2, 4] },
    { args: [[5, 4, 3, 2, 1, 0]], expected: [5, 3, 1, 4, 2, 0] },
  ],
};
