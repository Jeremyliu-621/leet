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
function swapPairsRunner(arr) { return __toArray__(swapPairs(__fromArray__(arr))); }
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

def swapPairsRunner(arr):
    return __to_array__(swapPairs(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'swap-nodes-in-pairs',
  title: 'Swap Nodes in Pairs',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the \`head\` of a linked list, swap every two adjacent nodes and return the head of the modified list.

You must swap the **nodes themselves**, not just their values.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and must return the head of the rearranged list.`,
  constraints: [
    'The number of nodes in the list is in the range [0, 100]',
    '0 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'head = [1, 2, 3, 4]',
      output: '[2, 1, 4, 3]',
      explanation: 'Pair (1,2) becomes (2,1) and pair (3,4) becomes (4,3).',
    },
    {
      input: 'head = []',
      output: '[]',
      explanation: 'Empty list — nothing to swap.',
    },
    {
      input: 'head = [1, 2, 3]',
      output: '[2, 1, 3]',
      explanation: 'Pair (1,2) swaps to (2,1); node 3 has no partner and stays in place.',
    },
  ],
  hints: [
    'Use a dummy head node before the list. Keep a `prev` pointer starting at the dummy. Each iteration, let `a = prev.next` and `b = a.next`. If either is null, stop.',
    'To swap: `prev.next = b`, `a.next = b.next`, `b.next = a`. After the swap, advance `prev = a` (which is now the second node of the pair) to set up the next iteration.',
    'Repeat until `prev.next` or `prev.next.next` is null. Return `dummy.next`.',
  ],
  functionName: 'swapPairsRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and swapPairsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction swapPairs(head) {\n  \n}\n',
    python:
      '# ListNode class and swapPairsRunner wrapper are pre-defined.\n# Implement the function below:\ndef swapPairs(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [2, 1, 4, 3] },
    { args: [[]], expected: [] },
    { args: [[1, 2, 3]], expected: [2, 1, 3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[1, 2, 3, 4, 5]], expected: [2, 1, 4, 3, 5] },
    { args: [[5, 4, 3, 2, 1]], expected: [4, 5, 2, 3, 1] },
  ],
};
