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
function hasCycleRunner(arr) { return hasCycle(__fromArray__(arr)); }
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

def hasCycleRunner(arr):
    return hasCycle(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'linked-list-cycle',
  title: 'Linked List Cycle',
  difficulty: 'easy',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the head of a linked list, determine if the linked list has a cycle in it.

> **Note:** For this problem the test harness passes an acyclic list. A function is available in the runtime that returns true for any list it can detect a cycle in. Your task: implement the Floyd's tortoise-and-hare algorithm to detect cycles without using extra memory.`,
  constraints: [
    'The number of the nodes in the list is in the range [0, 10⁴]',
    '-10⁵ <= Node.val <= 10⁵',
  ],
  examples: [
    {
      input: 'head = [3, 2, 0, -4] (cycle: tail connects to index 1)',
      output: 'true',
      explanation: 'There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).',
    },
    {
      input: 'head = [1, 2] (no cycle)',
      output: 'false',
    },
    {
      input: 'head = [] (empty list)',
      output: 'false',
    },
  ],
  hints: [
    'Use two pointers: a slow pointer that moves one step at a time and a fast pointer that moves two steps. If there is a cycle, the fast pointer will eventually catch up to the slow pointer.',
    'If fast or fast.next ever becomes null, the list is acyclic. If fast === slow (after at least one step), there is a cycle.',
    '`let slow=head, fast=head; while(fast && fast.next){slow=slow.next; fast=fast.next.next; if(slow===fast) return true;} return false;`',
  ],
  functionName: 'hasCycleRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and hasCycleRunner wrapper are pre-defined.\n// Implement the function below:\nfunction hasCycle(head) {\n  \n}\n',
    typescript: "function hasCycleRunner(head: number[]): boolean {\n  \n}",

    python: '# ListNode class and hasCycleRunner wrapper are pre-defined.\n# Implement the function below:\ndef hasCycle(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 2, 0, -4]], expected: false },
    { args: [[1, 2]], expected: false },
    { args: [[]], expected: false },
    { args: [[1]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: false },
    { args: [[0]], expected: false },
    { args: [[-1, -2, -3]], expected: false },
  ],
};
