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
function reorderListRunner(arr) {
  const head = __fromArray__(arr);
  reorderList(head);
  return __toArray__(head);
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

def reorderListRunner(arr):
    head = __from_array__(list(arr))
    reorderList(head)
    return __to_array__(head)
`.trim();

export const problem: Problem = {
  id: 'reorder-list',
  title: 'Reorder List',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `You are given the head of a singly linked list. The list can be represented as:

\`L0 → L1 → … → Ln-1 → Ln\`

Reorder it to: \`L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …\`

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

**Do not return anything, modify the list in-place instead.**

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and should modify the list in-place.`,
  constraints: [
    'The number of nodes in the list is in the range [1, 5 * 10^4]',
    '1 <= Node.val <= 1000',
  ],
  examples: [
    { input: 'head = [1, 2, 3, 4]', output: '[1, 4, 2, 3]' },
    { input: 'head = [1, 2, 3, 4, 5]', output: '[1, 5, 2, 4, 3]' },
  ],
  hints: [
    'Break the problem into three steps: (1) find the middle of the list, (2) reverse the second half, (3) merge the two halves by alternating nodes.',
    'To find the middle, use slow/fast pointers. To reverse, iterate with prev/curr. To merge, interleave by carefully re-linking next pointers.',
    'After finding the middle (slow), set `slow.next = null` to split the list. Reverse from the second half head, then merge: `first → second → first.next → second.next → ...`.',
  ],
  functionName: 'reorderListRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and reorderListRunner wrapper are pre-defined.\n// Modify the list in-place (do not return anything):\nfunction reorderList(head) {\n  \n}\n',
    python: '# ListNode class and reorderListRunner wrapper are pre-defined.\n# Modify the list in-place (do not return anything):\ndef reorderList(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [1, 4, 2, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 5, 2, 4, 3] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [1, 3, 2] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [1, 6, 2, 5, 3, 4] },
    { args: [[5, 10, 15, 20, 25]], expected: [5, 25, 10, 20, 15] },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: [1, 8, 2, 7, 3, 6, 4, 5] },
  ],
};
