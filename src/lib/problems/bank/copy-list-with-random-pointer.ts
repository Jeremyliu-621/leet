import type { Problem } from '../types';

const JS_PREAMBLE = `
class ListNode {
  constructor(val, next = null, random = null) {
    this.val = val; this.next = next; this.random = random;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const nodes = arr.map(([val]) => new ListNode(val));
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length) nodes[i].next = nodes[i + 1];
    const ri = arr[i][1];
    nodes[i].random = ri === null ? null : nodes[ri];
  }
  return nodes[0];
}
function __toArray__(head) {
  const nodes = [];
  let cur = head;
  while (cur) { nodes.push(cur); cur = cur.next; }
  const idx = new Map(nodes.map((n, i) => [n, i]));
  return nodes.map(n => [n.val, n.random === null ? null : idx.get(n.random)]);
}
function copyRandomListRunner(arr) {
  return __toArray__(copyRandomList(__fromArray__(arr)));
}
`;

const PY_PREAMBLE = `
class ListNode:
    def __init__(self, val=0, next=None, random=None):
        self.val = val; self.next = next; self.random = random

def __from_array__(arr):
    if not arr: return None
    nodes = [ListNode(v) for v, _ in arr]
    for i in range(len(arr) - 1): nodes[i].next = nodes[i + 1]
    for i, (_, ri) in enumerate(arr):
        nodes[i].random = None if ri is None else nodes[ri]
    return nodes[0]

def __to_array__(head):
    nodes = []
    cur = head
    while cur:
        nodes.append(cur)
        cur = cur.next
    idx = {n: i for i, n in enumerate(nodes)}
    return [[n.val, None if n.random is None else idx[n.random]] for n in nodes]

def copyRandomListRunner(arr):
    return __to_array__(copyRandomList(__from_array__(arr)))
`;

export const problem: Problem = {
  id: 'copy-list-with-random-pointer',
  title: 'Copy List with Random Pointer',
  difficulty: 'medium',
  tags: ['linked-list', 'hash-map'],
  description: `A linked list of length \`n\` is given such that each node contains an additional **random pointer**, which could point to any node in the list, or \`null\`.

Construct a [deep copy](https://en.wikipedia.org/wiki/Object_copying#Deep_copy) of the list. The deep copy should consist of exactly \`n\` **brand new** nodes, where each new node has its value set to the value of its corresponding original node. Both the \`next\` and \`random\` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state.

For this problem, implement \`copyRandomList(head)\` that accepts the head of the linked list and returns the head of the copied list.

The input/output uses an array \`[[val, randomIndex], ...]\` where \`randomIndex\` is the index (0-indexed) of the node that the random pointer points to, or \`null\` if there is no random pointer.`,
  constraints: [
    '`0 <= n <= 1000`',
    '`-10^4 <= Node.val <= 10^4`',
    '`Node.random\` is \`null\` or is pointing to some node in the linked list.',
  ],
  examples: [
    {
      input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]',
      output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]',
    },
    {
      input: 'head = [[1,1],[2,1]]',
      output: '[[1,1],[2,1]]',
    },
  ],
  hints: [
    'Use a hash map to map each original node to its copy. In a first pass, create all new nodes. In a second pass, wire up `next` and `random` pointers using the map.',
    'Alternatively, interleave copied nodes with original nodes (e.g., 1→1\'→2→2\'→...), set random pointers using `orig.random.next`, then separate the two lists.',
    `\`\`\`js
const map = new Map();
let cur = head;
while (cur) { map.set(cur, { val: cur.val, next: null, random: null }); cur=cur.next; }
cur = head;
while (cur) { if(cur.next) map.get(cur).next=map.get(cur.next); if(cur.random) map.get(cur).random=map.get(cur.random); cur=cur.next; }
return map.get(head) || null;\`\`\``
  ],
  functionName: 'copyRandomListRunner',
  params: ['arr'],
  starterCode: {
    javascript: `${JS_PREAMBLE}
function copyRandomList(head) {

}`,
    python: `${PY_PREAMBLE}
def copyRandomList(head):
    pass`,
  },
  visibleTests: [
    { args: [[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]], expected: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]] },
    { args: [[[1, 1], [2, 1]]], expected: [[1, 1], [2, 1]] },
    { args: [[[3, null], [3, 0], [3, null]]], expected: [[3, null], [3, 0], [3, null]] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[[1, null]]], expected: [[1, null]] },
    { args: [[[1, 0], [2, 0]]], expected: [[1, 0], [2, 0]] },
    { args: [[[5, 3], [2, 0], [13, 2], [11, null], [1, 0]]], expected: [[5, 3], [2, 0], [13, 2], [11, null], [1, 0]] },
  ],
};
