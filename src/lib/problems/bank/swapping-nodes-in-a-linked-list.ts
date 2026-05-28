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
function swapNodesRunner(arr, k) { return __toArray__(swapNodes(__fromArray__(arr), k)); }
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

def swapNodesRunner(arr, k):
    return __to_array__(swapNodes(__from_array__(arr), k))
`.trim();

export const problem: Problem = {
  id: 'swapping-nodes-in-a-linked-list',
  title: 'Swapping Nodes in a Linked List',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the \`head\` of a linked list and an integer \`k\`, swap the values of the **kth node from the beginning** and the **kth node from the end** of the list (1-indexed). Return the head of the modified list.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives and returns a \`ListNode | null\`.`,
  constraints: [
    'The number of nodes in the list is n.',
    '1 <= k <= n <= 10^5',
    '0 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'head = [1,2,3,4,5], k = 2',
      output: '[1,4,3,2,5]',
      explanation: 'The 2nd node from start has value 2; the 2nd from end has value 4. Swap their values.',
    },
    {
      input: 'head = [7,9,6,6,7,8,3,0,9,5], k = 5',
      output: '[7,9,6,6,8,7,3,0,9,5]',
      explanation: 'The 5th from start (value 7) and 5th from end (value 8) are swapped.',
    },
    {
      input: 'head = [1,2,3], k = 3',
      output: '[3,2,1]',
      explanation: 'The 3rd from start (value 3) and 3rd from end (value 1) are swapped.',
    },
  ],
  hints: [
    'Find the kth node from the beginning by traversing k steps. To find the kth from the end efficiently, use a second pointer: advance it from head after the first pointer reaches the kth node, then move both until the first pointer reaches the last node.',
    'Alternatively, compute the list length n, then the kth from end is the (n − k + 1)th from start. Traverse to both nodes and swap their values only (not the node pointers).',
    'Swapping values (not nodes) is much simpler: `[first.val, second.val] = [second.val, first.val]`.',
  ],
  functionName: 'swapNodesRunner',
  params: ['head', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and swapNodesRunner wrapper are pre-defined.\n// Implement the function below:\nfunction swapNodes(head, k) {\n  \n}\n',
    typescript: "function swapNodesRunner(head: number[], k: number): number[] {\n  \n}",

    python:
      '# ListNode class and swapNodesRunner wrapper are pre-defined.\n# Implement the function below:\ndef swapNodes(head, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [1, 4, 3, 2, 5] },
    { args: [[7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 5], expected: [7, 9, 6, 6, 8, 7, 3, 0, 9, 5] },
    { args: [[1, 2, 3], 3], expected: [3, 2, 1] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2], 1], expected: [2, 1] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [5, 2, 3, 4, 1] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [1, 2, 3, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [5, 2, 3, 4, 1] },
    { args: [[0, 1, 2], 2], expected: [0, 1, 2] },
    { args: [[10, 20, 30, 40], 2], expected: [10, 30, 20, 40] },
  ],
};
