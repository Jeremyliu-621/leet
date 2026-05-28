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
function isPalindromeRunner(arr) { return isPalindrome(__fromArray__(arr)); }
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

def isPalindromeRunner(arr):
    return isPalindrome(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'palindrome-linked-list',
  title: 'Palindrome Linked List',
  difficulty: 'easy',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the head of a singly linked list, return \`true\` if it is a palindrome or \`false\` otherwise.

**Approach:** Find the middle using slow/fast pointers, reverse the second half, compare the two halves, then restore the list.`,
  constraints: [
    'The number of nodes in the list is in the range [1, 100000]',
    '0 <= Node.val <= 9',
  ],
  examples: [
    {
      input: 'head = [1,2,2,1]',
      output: 'true',
      explanation: 'The list reads the same forwards and backwards.',
    },
    {
      input: 'head = [1,2]',
      output: 'false',
      explanation: '1->2 is not a palindrome.',
    },
  ],
  hints: [
    'Collect all values into an array, then check if the array equals its reverse. O(n) time, O(n) space.',
    'For O(1) space: find the middle node, reverse the second half in-place, then compare with the first half.',
    'After reversing the second half, `left` starts at head and `right` starts at the reversed second-half head. Walk both while right is non-null and compare values.',
  ],
  functionName: 'isPalindromeRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and isPalindromeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction isPalindrome(head) {\n  \n}\n',
    typescript: "function isPalindromeRunner(head: number[]): boolean {\n  \n}",

    python:
      '# ListNode class and isPalindromeRunner wrapper are pre-defined.\n# Implement the function below:\ndef isPalindrome(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 1]], expected: true },
    { args: [[1, 2]], expected: false },
    { args: [[1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 2, 1]], expected: true },
    { args: [[1, 2, 3, 2, 1]], expected: true },
    { args: [[1, 2, 3]], expected: false },
    { args: [[0, 0]], expected: true },
    { args: [[1, 0, 0, 1]], expected: true },
  ],
};
