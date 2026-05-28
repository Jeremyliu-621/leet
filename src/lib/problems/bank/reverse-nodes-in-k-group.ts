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
function reverseKGroupRunner(arr, k) {
  return __toArray__(reverseKGroup(__fromArray__(arr), k));
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

def reverseKGroupRunner(arr, k):
    return __to_array__(reverseKGroup(__from_array__(list(arr)), int(k)))
`.trim();

export const problem: Problem = {
  id: 'reverse-nodes-in-k-group',
  title: 'Reverse Nodes in k-Group',
  difficulty: 'hard',
  tags: ['linked-list'],
  description: `Given the head of a linked list, reverse the nodes of the list **k** at a time, and return the modified list.

**k** is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of **k**, the remaining nodes at the end are left as-is.

You may not alter the values in the list's nodes — only nodes themselves may be changed.

**Example:**
- Input: \`[1,2,3,4,5]\`, k = 2 → Output: \`[2,1,4,3,5]\`
- Input: \`[1,2,3,4,5]\`, k = 3 → Output: \`[3,2,1,4,5]\``,
  constraints: [
    'The number of nodes in the list is n',
    '1 <= k <= n <= 5000',
    '0 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'head = [1,2,3,4,5], k = 2',
      output: '[2,1,4,3,5]',
      explanation: 'Groups of 2: (2,1), (4,3), leftover (5) stays as-is.',
    },
    {
      input: 'head = [1,2,3,4,5], k = 3',
      output: '[3,2,1,4,5]',
      explanation: 'One full group of 3: (3,2,1), leftover (4,5) stays as-is.',
    },
  ],
  hints: [
    'Count k nodes ahead. If fewer than k nodes remain, return the head unchanged — that group is left as-is.',
    'Reverse exactly k nodes using `prev`, `curr`, and `next` pointers in a loop of k iterations.',
    'After reversing, `head` (which was the first node) is now the tail of the reversed group. Set `head.next` to the result of recursing on the remaining list.',
  ],
  functionName: 'reverseKGroupRunner',
  params: ['head', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and reverseKGroupRunner wrapper are pre-defined.\nfunction reverseKGroup(head, k) {\n  // Reverse every k nodes; leave the tail as-is if < k nodes remain\n}\n',
    typescript: "function reverseKGroupRunner(head: number[], k: number): number[] {\n  // Reverse every k nodes; leave the tail as-is if < k nodes remain\n}",

    python:
      '# ListNode class and reverseKGroupRunner wrapper are pre-defined.\ndef reverseKGroup(head, k):\n    # Reverse every k nodes; leave the tail as-is if < k nodes remain\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [2, 1, 4, 3, 5] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [3, 2, 1, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4, 5] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2], 2], expected: [2, 1] },
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: [3, 2, 1, 6, 5, 4] },
    { args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [3, 2, 1, 6, 5, 4, 7] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [5, 4, 3, 2, 1] },
  ],
};
