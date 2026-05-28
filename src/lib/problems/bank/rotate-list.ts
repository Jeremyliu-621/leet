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
function rotateRightRunner(arr, k) {
  return __toArray__(rotateRight(__fromArray__(arr), k));
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

def rotateRightRunner(arr, k):
    return __to_array__(rotateRight(__from_array__(arr), k))
`.trim();

export const problem: Problem = {
  id: 'rotate-list',
  title: 'Rotate List',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the head of a linked list, rotate the list to the right by \`k\` places.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and must return the new head.`,
  constraints: [
    'The number of nodes in the list is in the range `[0, 500]`',
    '`-100 <= Node.val <= 100`',
    '`0 <= k <= 2 * 10^9`',
  ],
  examples: [
    { input: 'head = [1,2,3,4,5], k = 2', output: '[4,5,1,2,3]' },
    { input: 'head = [0,1,2], k = 4', output: '[2,0,1]' },
  ],
  hints: [
    'Find the length `n` and form a cycle by connecting the tail to the head. The effective rotation is `k % n`. The new tail is at position `n - k % n - 1`.',
    'Traverse to position `n - k % n - 1`, save `newHead = cur.next`, break the cycle (`cur.next = null`), and return `newHead`.',
    `\`\`\`js
function rotateRight(head, k) {
  if(!head||!head.next||k===0) return head;
  let len=1,tail=head;
  while(tail.next){tail=tail.next;len++;}
  tail.next=head; // make circular
  k=k%len;
  let newTail=head;
  for(let i=0;i<len-k-1;i++) newTail=newTail.next;
  const newHead=newTail.next;
  newTail.next=null;
  return newHead;
}\`\`\``,
  ],
  functionName: 'rotateRightRunner',
  params: ['head', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and rotateRightRunner wrapper are pre-defined.\n// Implement the function below:\nfunction rotateRight(head, k) {\n  \n}\n',
    typescript: "function rotateRightRunner(head: number[], k: number): number[] {\n  \n}",

    python: '# ListNode class and rotateRightRunner wrapper are pre-defined.\n# Implement the function below:\ndef rotateRight(head, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
    { args: [[0, 1, 2], 4], expected: [2, 0, 1] },
  ],
  hiddenTests: [
    { args: [[], 0], expected: [] },
    { args: [[1], 100], expected: [1] },
    { args: [[1, 2], 1], expected: [2, 1] },
    { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
  ],
};
