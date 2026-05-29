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
function insertGCDRunner(arr) {
  return __toArray__(insertGreatestCommonDivisors(__fromArray__(arr)));
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

def insertGCDRunner(arr):
    if hasattr(arr, 'to_py'): arr = list(arr.to_py())
    arr = [int(x) for x in arr]
    return __to_array__(insertGreatestCommonDivisors(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'insert-greatest-common-divisors-in-linked-list',
  title: 'Insert Greatest Common Divisors in Linked List',
  difficulty: 'medium',
  tags: ['linked-list', 'math'],
  description: `Given the head of a linked list, insert a new node between every pair of adjacent nodes with a value equal to the GCD of those two values.

Return the head of the modified list.

The function \`insertGCDRunner(arr)\` is used for testing.`,
  constraints: [
    'The number of nodes in the list is in the range [1, 5000].',
    '1 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'head = [18,6,10,3]',
      output: '[18,6,6,2,10,1,3]',
      explanation: 'gcd(18,6)=6, gcd(6,10)=2, gcd(10,3)=1. Insert these between each pair.',
    },
    {
      input: 'head = [7]',
      output: '[7]',
      explanation: 'Single node, no pairs to insert between.',
    },
  ],
  hints: [
    'Iterate through adjacent pairs (curr, curr.next). Compute gcd(curr.val, curr.next.val).',
    'Insert a new ListNode with that GCD value between curr and curr.next.',
    'Advance curr by two steps (skip the inserted node) to process the next original pair.',
  ],
  functionName: 'insertGCDRunner',
  params: ['arr'],
  starterCode: {
    javascript: `${JS_PREAMBLE}\n\nfunction insertGreatestCommonDivisors(head) {\n  \n}\n`,
    typescript: `${JS_PREAMBLE}\n\nfunction insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {\n  \n}\n`,
    python: `${PY_PREAMBLE}\n\ndef insertGreatestCommonDivisors(head):\n    pass\n`,
  },
  visibleTests: [
    { args: [[18, 6, 10, 3]], expected: [18, 6, 6, 2, 10, 1, 3] },
    { args: [[7]], expected: [7] },
  ],
  hiddenTests: [
    { args: [[2, 4]], expected: [2, 2, 4] },
    { args: [[6, 4, 2]], expected: [6, 2, 4, 2, 2] },
    { args: [[12, 8, 6, 4]], expected: [12, 4, 8, 2, 6, 2, 4] },
    { args: [[1, 1, 1]], expected: [1, 1, 1, 1, 1] },
    { args: [[100, 75, 50]], expected: [100, 25, 75, 25, 50] },
  ],
};
