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
function addTwoNumbersRunner(arr1, arr2) {
  return __toArray__(addTwoNumbers(__fromArray__(arr1), __fromArray__(arr2)));
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

def addTwoNumbersRunner(arr1, arr2):
    l1 = __from_array__(list(arr1))
    l2 = __from_array__(list(arr2))
    return __to_array__(addTwoNumbers(l1, l2))
`.trim();

export const problem: Problem = {
  id: 'add-two-numbers',
  title: 'Add Two Numbers',
  difficulty: 'medium',
  tags: ['linked-list', 'math'],
  description: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not have leading zeros, except the number 0 itself.

**Approach:** Simulate grade-school addition. Walk both lists simultaneously, tracking a carry. Create a new node for each digit of the result. Don't forget a final carry node if needed.`,
  constraints: [
    'The number of nodes in each linked list is in the range [1, 100]',
    '0 <= Node.val <= 9',
    'It is guaranteed that the list represents a number that does not have leading zeros',
  ],
  examples: [
    {
      input: 'l1 = [2,4,3], l2 = [5,6,4]',
      output: '[7,0,8]',
      explanation: '342 + 465 = 807, stored in reverse: [7,0,8].',
    },
    {
      input: 'l1 = [0], l2 = [0]',
      output: '[0]',
      explanation: '0 + 0 = 0.',
    },
    {
      input: 'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]',
      output: '[8,9,9,9,0,0,0,1]',
      explanation: '9999999 + 9999 = 10009998.',
    },
  ],
  hints: [
    'Use a dummy head to simplify result list construction. Track a `carry` variable (0 or 1).',
    'While either list has nodes or carry is non-zero: sum = l1.val + l2.val + carry; create node with (sum % 10); carry = Math.floor(sum / 10).',
    '`let dummy=new ListNode(0),cur=dummy,carry=0; while(l1||l2||carry){const s=(l1?.val??0)+(l2?.val??0)+carry; cur.next=new ListNode(s%10); carry=Math.floor(s/10); l1=l1?.next; l2=l2?.next; cur=cur.next;} return dummy.next;`',
  ],
  functionName: 'addTwoNumbersRunner',
  params: ['arr1', 'arr2'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and addTwoNumbersRunner wrapper are pre-defined.\n// Implement the function below:\nfunction addTwoNumbers(l1, l2) {\n  \n}\n',
    python:
      '# ListNode class and addTwoNumbersRunner wrapper are pre-defined.\n# Implement the function below:\ndef addTwoNumbers(l1, l2):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 4, 3], [5, 6, 4]], expected: [7, 0, 8] },
    { args: [[0], [0]], expected: [0] },
    { args: [[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]], expected: [8, 9, 9, 9, 0, 0, 0, 1] },
  ],
  hiddenTests: [
    { args: [[1], [9, 9]], expected: [0, 0, 1] },
    { args: [[5], [5]], expected: [0, 1] },
    { args: [[1, 8], [0]], expected: [1, 8] },
    { args: [[9, 9], [1]], expected: [0, 0, 1] },
    { args: [[2, 4, 9], [5, 6, 4, 9]], expected: [7, 0, 4, 0, 1] },
  ],
};
