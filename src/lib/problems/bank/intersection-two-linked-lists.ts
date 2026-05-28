import type { Problem } from '../types';

const JS_PREAMBLE = `
class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}
function __buildIntersecting__(arrA, arrB, shared) {
  // Build shared suffix
  let sharedHead = null;
  for (let i = shared.length - 1; i >= 0; i--) {
    sharedHead = new ListNode(shared[i], sharedHead);
  }
  // Build headA
  let headA = sharedHead;
  for (let i = arrA.length - 1; i >= 0; i--) {
    headA = new ListNode(arrA[i], headA);
  }
  // Build headB
  let headB = sharedHead;
  for (let i = arrB.length - 1; i >= 0; i--) {
    headB = new ListNode(arrB[i], headB);
  }
  return [headA, headB];
}
function getIntersectionNodeRunner(arrA, arrB, shared) {
  const [headA, headB] = __buildIntersecting__(arrA, arrB, shared);
  const result = getIntersectionNode(headA, headB);
  return result ? result.val : -1;
}
`.trim();

const PY_PREAMBLE = `
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def __build_intersecting__(arr_a, arr_b, shared):
    arr_a = list(arr_a)
    arr_b = list(arr_b)
    shared = list(shared)
    shared_head = None
    for v in reversed(shared):
        shared_head = ListNode(v, shared_head)
    head_a = shared_head
    for v in reversed(arr_a):
        head_a = ListNode(v, head_a)
    head_b = shared_head
    for v in reversed(arr_b):
        head_b = ListNode(v, head_b)
    return head_a, head_b

def getIntersectionNodeRunner(arr_a, arr_b, shared):
    head_a, head_b = __build_intersecting__(arr_a, arr_b, shared)
    result = getIntersectionNode(head_a, head_b)
    return result.val if result else -1
`.trim();

export const problem: Problem = {
  id: 'intersection-two-linked-lists',
  title: 'Intersection of Two Linked Lists',
  difficulty: 'easy',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the heads of two singly linked lists \`headA\` and \`headB\`, return the node at which the two lists intersect. If the two linked lists have no intersection, return \`null\`.

The test inputs are encoded as three arrays: \`arrA\` (nodes before intersection unique to A), \`arrB\` (nodes before intersection unique to B), and \`shared\` (the shared suffix). Return the **value** of the first intersecting node, or \`-1\` if none.

**Approach:** Use two pointers. When pointer A reaches the end of list A, redirect it to the head of list B. Do the same for pointer B. They will meet at the intersection after traversing equal total distances.`,
  constraints: [
    'The number of nodes of listA is m, listB is n',
    '1 <= m, n <= 30000',
    '0 <= Node.val <= 100000',
    'The lists share at most one suffix (no cycles)',
  ],
  examples: [
    {
      input: 'arrA = [4,1], arrB = [5,6,1], shared = [8,4,5]',
      output: '8',
      explanation: 'Lists intersect at the node with value 8.',
    },
    {
      input: 'arrA = [2,6,4], arrB = [1,5], shared = []',
      output: '-1',
      explanation: 'The two lists do not intersect.',
    },
  ],
  hints: [
    'Walk both lists simultaneously. If a pointer reaches null, redirect it to the head of the *other* list. They will eventually meet if there is an intersection (or both reach null at the same time if there is no intersection).',
    'This works because both pointers traverse |A| + |B| total nodes. At that point they are either at the intersection or both null.',
    '`let a=headA, b=headB; while(a!==b){a=a?a.next:headB; b=b?b.next:headA;} return a;`',
  ],
  functionName: 'getIntersectionNodeRunner',
  params: ['arrA', 'arrB', 'shared'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and getIntersectionNodeRunner wrapper are pre-defined.\n// headA and headB are built for you; implement the function below:\nfunction getIntersectionNode(headA, headB) {\n  \n}\n',
    typescript: "function getIntersectionNodeRunner(arrA: number[], arrB: number[], shared: number[]): number {\n  \n}",

    python:
      '# ListNode class and getIntersectionNodeRunner wrapper are pre-defined.\n# headA and headB are built for you; implement the function below:\ndef getIntersectionNode(headA, headB):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 1], [5, 6, 1], [8, 4, 5]], expected: 8 },
    { args: [[2, 6, 4], [1, 5], []], expected: -1 },
    { args: [[], [], [1, 2, 3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], [2, 3], [7, 8]], expected: 7 },
    { args: [[1, 2, 3], [4], [5, 6]], expected: 5 },
    { args: [[1, 2], [3, 4, 5], []], expected: -1 },
    { args: [[], [1], [9]], expected: 9 },
  ],
};
