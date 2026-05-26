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
function getDecimalValueRunner(arr) { return getDecimalValue(__fromArray__(arr)); }
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

def getDecimalValueRunner(arr):
    return getDecimalValue(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'convert-binary-linked-list',
  title: 'Convert Binary Number in a Linked List to Integer',
  difficulty: 'easy',
  tags: ['linked-list', 'math'],
  description: `Given the \`head\` of a singly-linked list, each node holds a binary digit (0 or 1). The most significant bit is at the head. Return the **decimal value** of the binary number the list represents.

> **Note:** A \`ListNode\` class is pre-defined. Your function receives a \`ListNode | null\` head.

**Example:**

List: \`1 → 0 → 1\`

Binary: \`101\` → Decimal: **5**`,
  constraints: [
    'The Linked List is not empty.',
    'Number of nodes will not exceed 30.',
    'Each node value is either 0 or 1.',
  ],
  examples: [
    { input: 'head = [1,0,1]', output: '5', explanation: 'Binary 101 = 5.' },
    { input: 'head = [0]', output: '0' },
    { input: 'head = [1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1]', output: '37773' },
  ],
  hints: [
    'Traverse the list from head to tail. At each step, shift your running result left by 1 bit and OR in the current node\'s value.',
    'The formula is: `result = result * 2 + node.val` (equivalent to `result = (result << 1) | node.val`).',
    'Alternatively, collect all node values into an array, join into a string, and use `parseInt(str, 2)` (JS) or `int(str, 2)` (Python).',
  ],
  functionName: 'getDecimalValueRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// ListNode class and getDecimalValueRunner wrapper are pre-defined.
// Implement the function below:
function getDecimalValue(head) {

}`,
    python: `# ListNode class and getDecimalValueRunner wrapper are pre-defined.
# Implement the function below:
def getDecimalValue(head):
    pass
`,
  },
  visibleTests: [
    { args: [[1, 0, 1]], expected: 5 },
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1]], expected: 37773 },
    { args: [[1, 1]], expected: 3 },
    { args: [[0, 1]], expected: 1 },
    { args: [[1, 0, 0, 0]], expected: 8 },
    { args: [[1, 0, 1, 0, 1, 0]], expected: 42 },
    { args: [[1, 1, 1, 1]], expected: 15 },
  ],
};
