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
  tags: ['linked-list', 'two-pointers'],
  description: `You are given the head of a singly linked list. The list can be represented as:

\`L0 → L1 → … → Ln-1 → Ln\`

Reorder it to:

\`L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …\`

You may not modify the values in the list's nodes. Only nodes themselves may be changed. The function modifies the list **in-place** (no return value needed).

**Approach:** (1) Find the middle with slow/fast pointers. (2) Reverse the second half. (3) Merge the two halves by interleaving.`,
  constraints: [
    'The number of nodes in the list is in the range [1, 50000]',
    '1 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'head = [1,2,3,4]',
      output: '[1,4,2,3]',
      explanation: 'Interleave first half [1,2] with reversed second half [4,3].',
    },
    {
      input: 'head = [1,2,3,4,5]',
      output: '[1,5,2,4,3]',
      explanation: 'Interleave first half [1,2,3] with reversed second half [5,4].',
    },
  ],
  hints: [
    'Step 1: find the middle (slow/fast pointers). Step 2: reverse the second half starting from mid.next. Step 3: interleave the two halves.',
    'To interleave: advance two pointers `first` (from head) and `second` (from reversed half). At each step: save nexts, point first.next to second, point second.next to savedFirst, advance both.',
    'Remember to set `mid.next = null` after finding the middle to cleanly split the list into two halves before reversing.',
  ],
  functionName: 'reorderListRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and reorderListRunner wrapper are pre-defined.\n// Modify the list in-place; the runner reads head after your call.\nfunction reorderList(head) {\n  \n}\n',
    typescript: "function reorderListRunner(head: number[]): number[] {\n  \n}",

    python:
      '# ListNode class and reorderListRunner wrapper are pre-defined.\n# Modify the list in-place; the runner reads head after your call.\ndef reorderList(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [1, 4, 2, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 5, 2, 4, 3] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[1, 2, 3]], expected: [1, 3, 2] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [1, 6, 2, 5, 3, 4] },
    { args: [[5, 10, 15, 20, 25]], expected: [5, 25, 10, 20, 15] },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: [1, 8, 2, 7, 3, 6, 4, 5] },
  ],
};
