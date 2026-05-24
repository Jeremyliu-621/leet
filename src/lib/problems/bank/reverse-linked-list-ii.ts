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
function reverseBetweenRunner(arr, left, right) {
  return __toArray__(reverseBetween(__fromArray__(arr), left, right));
}
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

def reverseBetweenRunner(arr, left, right):
    return __to_array__(reverseBetween(__from_array__(arr), left, right))
`.trim();

export const problem: Problem = {
  id: 'reverse-linked-list-ii',
  title: 'Reverse Linked List II',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the head of a singly linked list and two integers \`left\` and \`right\` where \`left <= right\`, reverse the nodes of the list from position \`left\` to position \`right\`, and return the reversed list.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and must return the modified head.`,
  constraints: [
    'The number of nodes in the list is `n`',
    '`1 <= n <= 500`',
    '`-500 <= Node.val <= 500`',
    '`1 <= left <= right <= n`',
  ],
  examples: [
    { input: 'head = [1,2,3,4,5], left = 2, right = 4', output: '[1,4,3,2,5]' },
    { input: 'head = [5], left = 1, right = 1', output: '[5]' },
  ],
  hints: [
    'Use a dummy node before head. Walk to node at position `left - 1` (call it `pre`). Keep `pre.next` as the start of the reversal zone.',
    'Reverse the sublist from `left` to `right` using standard iterative reversal: repeatedly insert `cur.next` after `pre`.',
    'After reversal, `pre.next` is the new head of the reversed section. Return `dummy.next`.',
  ],
  functionName: 'reverseBetweenRunner',
  params: ['head', 'left', 'right'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and reverseBetweenRunner wrapper are pre-defined.\n// Implement the function below:\nfunction reverseBetween(head, left, right) {\n  \n}\n',
    python: '# ListNode class and reverseBetweenRunner wrapper are pre-defined.\n# Implement the function below:\ndef reverseBetween(head, left, right):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2, 4], expected: [1, 4, 3, 2, 5] },
    { args: [[5], 1, 1], expected: [5] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1, 3], expected: [3, 2, 1] },
    { args: [[1, 2, 3, 4, 5], 1, 5], expected: [5, 4, 3, 2, 1] },
    { args: [[3, 5], 1, 2], expected: [5, 3] },
    { args: [[1, 2, 3, 4, 5], 3, 5], expected: [1, 2, 5, 4, 3] },
  ],
};
