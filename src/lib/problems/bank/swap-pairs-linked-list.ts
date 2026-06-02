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
function swapPairsRunner(vals) {
  return __toArray__(swapPairs(__fromArray__(vals)));
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

def swapPairsRunner(vals):
    vals = list(vals.to_py() if hasattr(vals, 'to_py') else vals)
    return __to_array__(swapPairs(__from_array__(vals)))
`.trim();

export const problem: Problem = {
  id: 'swap-pairs-linked-list',
  title: 'Swap Every Two Adjacent Nodes',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the head of a linked list, swap every two adjacent nodes and return its head.

You must solve the problem without modifying the values in the list's nodes (i.e., only node pointers may be changed).

**Example:**
- Input: \`[1, 2, 3, 4]\` → Output: \`[2, 1, 4, 3]\`
- Input: \`[1, 2, 3]\` → Output: \`[2, 1, 3]\` (odd-length: last node stays)

> **Note:** A \`ListNode\` class with helper utilities is pre-defined. Your function receives a \`ListNode | null\` head and must return the new head.`,
  constraints: [
    'The number of nodes in the list is in the range [0, 100]',
    '0 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'vals = [1,2,3,4]',
      output: '[2,1,4,3]',
      explanation: 'Pairs (1,2) and (3,4) are swapped.',
    },
    {
      input: 'vals = []',
      output: '[]',
      explanation: 'Empty list stays empty.',
    },
    {
      input: 'vals = [1]',
      output: '[1]',
      explanation: 'Single node has no pair; stays unchanged.',
    },
    {
      input: 'vals = [1,2,3]',
      output: '[2,1,3]',
      explanation: 'Pair (1,2) is swapped; node 3 has no pair.',
    },
  ],
  hints: [
    'Use a dummy head node to simplify edge cases. Keep a `prev` pointer that trails one pair behind the current pair.',
    'For each pair (first, second): set `prev.next = second`, `first.next = second.next`, `second.next = first`. Then advance `prev` to `first` and repeat.',
    'Alternatively, solve recursively: swap the first two nodes, then recursively swap the rest and attach.',
  ],
  functionName: 'swapPairsRunner',
  params: ['vals'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// ListNode class and swapPairsRunner wrapper are pre-defined.
// Implement the function below:
function swapPairs(head) {
  const dummy = { val: 0, next: head };
  let prev = dummy;
  while (prev.next && prev.next.next) {
    const first = prev.next, second = prev.next.next;
    first.next = second.next;
    second.next = first;
    prev.next = second;
    prev = first;
  }
  return dummy.next;
}`,
    typescript: `function swapPairsRunner(vals: number[]): number[] {
  const result = [...vals];
  for (let i = 0; i + 1 < result.length; i += 2) {
    const t = result[i]!;
    result[i] = result[i + 1]!;
    result[i + 1] = t;
  }
  return result;
}`,
    python: `# ListNode class and swapPairsRunner wrapper are pre-defined.
# Implement the function below:
def swapPairs(head):
    dummy = ListNode(0)
    dummy.next = head
    prev = dummy
    while prev.next and prev.next.next:
        first = prev.next
        second = prev.next.next
        first.next = second.next
        second.next = first
        prev.next = second
        prev = first
    return dummy.next
`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [2, 1, 4, 3] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
    { args: [[1, 2, 3]], expected: [2, 1, 3] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[1, 2, 3, 4, 5]], expected: [2, 1, 4, 3, 5] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [2, 1, 4, 3, 6, 5] },
    { args: [[0, 0, 0, 0]], expected: [0, 0, 0, 0] },
    { args: [[5, 10, 15, 20, 25]], expected: [10, 5, 20, 15, 25] },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: [1, 3, 1, 4, 9, 5, 6, 2] },
    { args: [[7, 8]], expected: [8, 7] },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: [2, 1, 4, 3, 6, 5, 8, 7] },
  ],
};
