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
function removeElementsRunner(arr, val) {
  return __toArray__(removeElements(__fromArray__(arr), val));
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

def removeElementsRunner(arr, val):
    return __to_array__(removeElements(__from_array__(arr), val))
`.trim();

export const problem: Problem = {
  id: 'remove-linked-list-elements',
  title: 'Remove Linked List Elements',
  difficulty: 'easy',
  tags: ['linked-list'],
  description: `Given the head of a linked list and an integer \`val\`, remove all the nodes of the linked list that have \`Node.val == val\`, and return the new head.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and must return the modified head.`,
  constraints: [
    'The number of nodes in the list is in the range `[0, 10^4]`',
    '`1 <= Node.val <= 50`',
    '`0 <= val <= 50`',
  ],
  examples: [
    { input: 'head = [1,2,6,3,4,5,6], val = 6', output: '[1,2,3,4,5]' },
    { input: 'head = [], val = 1', output: '[]' },
    { input: 'head = [7,7,7,7], val = 7', output: '[]' },
  ],
  hints: [
    'Use a dummy node pointing to head. Iterate with a `prev` pointer; when `prev.next.val === val`, skip that node by setting `prev.next = prev.next.next`. Otherwise advance `prev`.',
    'Return `dummy.next`.',
    `\`\`\`js
function removeElements(head, val) {
  const dummy={next:head};
  let curr=dummy;
  while(curr.next){
    if(curr.next.val===val)curr.next=curr.next.next;
    else curr=curr.next;
  }
  return dummy.next;
}\`\`\``,
  ],
  functionName: 'removeElementsRunner',
  params: ['head', 'val'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and removeElementsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction removeElements(head, val) {\n  \n}\n',
    typescript: "function removeElementsRunner(head: number[], val: number): number[] {\n  \n}",

    python: '# ListNode class and removeElementsRunner wrapper are pre-defined.\n# Implement the function below:\ndef removeElements(head, val):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 6, 3, 4, 5, 6], 6], expected: [1, 2, 3, 4, 5] },
    { args: [[], 1], expected: [] },
    { args: [[7, 7, 7, 7], 7], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [] },
    { args: [[1, 2, 3], 2], expected: [1, 3] },
    { args: [[1, 1, 1, 2, 3], 1], expected: [2, 3] },
    { args: [[1, 2, 3, 3, 3], 3], expected: [1, 2] },
  ],
};
