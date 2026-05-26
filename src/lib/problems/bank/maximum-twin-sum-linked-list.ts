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
function pairSumRunner(arr) { return pairSum(__fromArray__(arr)); }
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

def pairSumRunner(arr):
    return pairSum(__from_array__(list(arr)))
`.trim();

export const problem: Problem = {
  id: 'maximum-twin-sum-linked-list',
  title: 'Maximum Twin Sum of a Linked List',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `In a linked list of size \`n\`, where \`n\` is even, the \`i\`th node (**0-indexed**) of the linked list is known as the **twin** of the \`(n-1-i)\`th node, if \`0 <= i <= (n / 2) - 1\`.

The **twin sum** is defined as the sum of a node and its twin.

Given the \`head\` of a linked list with even length, return the **maximum twin sum** of the linked list.`,
  constraints: [
    'The number of nodes in the list is an **even** integer in the range `[2, 10^5]`.',
    '`1 <= Node.val <= 10^5`',
  ],
  examples: [
    {
      input: 'head = [5,4,2,1]',
      output: '6',
      explanation: 'Pairs: (5,1)=6, (4,2)=6. Maximum twin sum = 6.',
    },
    {
      input: 'head = [4,2,2,3]',
      output: '7',
      explanation: 'Pairs: (4,3)=7, (2,2)=4. Maximum twin sum = 7.',
    },
    {
      input: 'head = [1,100000]',
      output: '100001',
    },
  ],
  hints: [
    'Collect all values into an array, then use two pointers from both ends.',
    'Alternatively: find the middle with slow/fast pointers, reverse the second half, then iterate both halves simultaneously.',
    `\`\`\`js
// Convert to array, then sum [i] + [n-1-i] for i in 0..n/2-1
const vals = [];
let node = head;
while (node) { vals.push(node.val); node=node.next; }
const n = vals.length;
let best = 0;
for (let i = 0; i < n/2; i++) best = Math.max(best, vals[i]+vals[n-1-i]);
return best;\`\`\``,
  ],
  functionName: 'pairSumRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and pairSumRunner wrapper are pre-defined.\nfunction pairSum(head) {\n  \n}\n',
    python:
      '# ListNode class and pairSumRunner wrapper are pre-defined.\ndef pairSum(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 4, 2, 1]], expected: 6 },
    { args: [[4, 2, 2, 3]], expected: 7 },
    { args: [[1, 100000]], expected: 100001 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 2 },
    { args: [[3, 1, 2, 4]], expected: 7 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 7 },
    { args: [[5, 5, 5, 5]], expected: 10 },
  ],
};
