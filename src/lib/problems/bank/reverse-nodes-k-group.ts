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
function reverseKGroupRunner(arr, k) { return __toArray__(reverseKGroup(__fromArray__(arr), k)); }
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

def reverseKGroupRunner(arr, k):
    return __to_array__(reverseKGroup(__from_array__(arr), int(k)))
`.trim();

export const problem: Problem = {
  id: 'reverse-nodes-k-group',
  title: 'Reverse Nodes in k-Group',
  difficulty: 'hard',
  tags: ['linked-list'],
  description: `Given the \`head\` of a linked list, reverse the nodes of the list \`k\` at a time, and return the modified list.

\`k\` is a positive integer less than or equal to the length of the linked list. If the number of nodes is not a multiple of \`k\`, then the last remaining nodes are left as-is.

You may not alter the values in the nodes — only the nodes themselves may be changed.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and an integer \`k\`, and must return the head of the modified list.`,
  constraints: [
    'The number of nodes in the list is n',
    '1 <= k <= n <= 5000',
    '0 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'head = [1, 2, 3, 4, 5], k = 2',
      output: '[2, 1, 4, 3, 5]',
      explanation: 'Groups of 2: (1,2)→(2,1), (3,4)→(4,3), and node 5 has no partner so it stays.',
    },
    {
      input: 'head = [1, 2, 3, 4, 5], k = 3',
      output: '[3, 2, 1, 4, 5]',
      explanation: 'First group of 3: (1,2,3)→(3,2,1). Remaining 2 nodes are fewer than k, so they stay as (4,5).',
    },
    {
      input: 'head = [1], k = 1',
      output: '[1]',
      explanation: 'k=1 means no reordering occurs.',
    },
  ],
  hints: [
    'First check if there are at least k nodes remaining starting from the current position. If not, leave them as-is.',
    'If k nodes exist, reverse those k nodes in place using a standard reversal loop. Track the tail of the just-reversed group — it will need to connect to the result of the next recursive/iterative call.',
    'After reversing, the old head of the group is now the tail. Set `oldHead.next = reverseKGroup(nextGroupStart, k)` and return the new head of the reversed group.',
  ],
  functionName: 'reverseKGroupRunner',
  params: ['head', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and reverseKGroupRunner wrapper are pre-defined.\n// Implement the function below:\nfunction reverseKGroup(head, k) {\n  \n}\n',
    python:
      '# ListNode class and reverseKGroupRunner wrapper are pre-defined.\n# Implement the function below:\ndef reverseKGroup(head, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [2, 1, 4, 3, 5] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [3, 2, 1, 4, 5] },
    { args: [[1], 1], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 2], expected: [2, 1, 4, 3] },
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: [2, 1, 4, 3, 6, 5] },
    { args: [[1, 2, 3], 3], expected: [3, 2, 1] },
    { args: [[1, 2, 3, 4, 5], 4], expected: [4, 3, 2, 1, 5] },
  ],
};
