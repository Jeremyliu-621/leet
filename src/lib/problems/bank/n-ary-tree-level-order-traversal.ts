import type { Problem } from '../types';

const JS_PREAMBLE = `
class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children || [];
  }
}
function __buildNAry__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new Node(arr[0]);
  const queue = [root];
  let i = 2;
  while (i < arr.length && queue.length > 0) {
    const node = queue.shift();
    while (i < arr.length && arr[i] !== null) {
      const child = new Node(arr[i]);
      node.children.push(child);
      queue.push(child);
      i++;
    }
    i++;
  }
  return root;
}
function levelOrderRunner(arr) { return levelOrder(__buildNAry__(arr)); }
`.trim();

const PY_PREAMBLE = `
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []

def __build_nary__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not arr or arr[0] is None:
        return None
    root = Node(arr[0])
    queue = [root]
    i = 2
    while i < len(arr) and queue:
        node = queue.pop(0)
        while i < len(arr) and arr[i] is not None:
            child = Node(arr[i])
            node.children.append(child)
            queue.append(child)
            i += 1
        i += 1
    return root

def levelOrderRunner(arr):
    return levelOrder(__build_nary__(arr))
`.trim();

export const problem: Problem = {
  id: 'n-ary-tree-level-order-traversal',
  title: 'N-ary Tree Level Order Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of an N-ary tree, return the **level order traversal** of its nodes' values (i.e., from left to right, level by level).

The tree is serialized as a flat array in level-order format where groups of children are separated by \`null\`. For example, \`[1,null,3,2,4,null,5,6]\` represents a tree where node 1 has children [3, 2, 4], and node 3 has children [5, 6].

Return a list of lists, where each inner list contains the values of nodes at that level.

> **Note:** A \`Node\` class is pre-defined. Your function receives a \`Node | null\`.`,
  examples: [
    {
      input: 'root = [1,null,3,2,4,null,5,6]',
      output: '[[1],[3,2,4],[5,6]]',
      explanation: 'Level 1: [1]. Level 2: [3, 2, 4]. Level 3: [5, 6].',
    },
    {
      input: 'root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]',
      output: '[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]',
      explanation: 'The tree has 5 levels.',
    },
    {
      input: 'root = null',
      output: '[]',
      explanation: 'Empty tree has no levels.',
    },
  ],
  constraints: [
    'The total number of nodes is in the range [0, 10^4].',
    'The depth of the n-ary tree is at most 1000.',
    '1 <= Node.val <= 10^5',
  ],
  functionName: 'levelOrderRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// Node class and levelOrderRunner wrapper are pre-defined.
// Implement the function below:
function levelOrder(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const size = queue.length, level = [];
    for (let i = 0; i < size; i++) {
      const nd = queue.shift();
      level.push(nd.val);
      for (const child of nd.children) queue.push(child);
    }
    result.push(level);
  }
  return result;
}`,
    typescript: `function levelOrderRunner(root: (number | null)[]): number[][] {
  if (!root.length) return [];
  type N = { v: number; children: N[] };
  const mk = (v: number): N => ({v, children: []});
  const r = mk(root[0] as number);
  const q: N[] = [r]; let i = 2;
  while (i < root.length && q.length) {
    const nd = q.shift()!;
    while (i < root.length && root[i] != null) { const c = mk(root[i] as number); nd.children.push(c); q.push(c); i++; }
    i++;
  }
  const result: number[][] = [], bq: N[] = [r];
  while (bq.length) {
    const size = bq.length, level: number[] = [];
    for (let j = 0; j < size; j++) { const nd = bq.shift()!; level.push(nd.v); for (const c of nd.children) bq.push(c); }
    result.push(level);
  }
  return result;
}`,
    python: `# Node class and levelOrderRunner wrapper are pre-defined.
# Implement the function below:
def levelOrder(root):
    if root is None: return []
    result = []; queue = [root]
    while queue:
        result.append([nd.val for nd in queue])
        queue = [child for nd in queue for child in nd.children]
    return result`,
  },
  hints: [
    'Use a queue (BFS). Start with the root in the queue. For each level, process all nodes currently in the queue, collect their values, and enqueue their children.',
    'Track level boundaries by recording the queue length at the start of each iteration: process exactly that many nodes, then enqueue their children.',
    'Return an empty list if root is null/None.',
  ],
  visibleTests: [
    {
      args: [[1, null, 3, 2, 4, null, 5, 6]],
      expected: [[1], [3, 2, 4], [5, 6]],
    },
    {
      args: [[]],
      expected: [],
    },
    {
      args: [[1]],
      expected: [[1]],
    },
  ],
  hiddenTests: [
    {
      args: [[1, null, 2]],
      expected: [[1], [2]],
    },
    {
      args: [[1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]],
      expected: [[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]],
    },
    {
      args: [[1, null, 2, 3, null, 4, 5]],
      expected: [[1], [2, 3], [4, 5]],
    },
    {
      args: [[5, null, 1, 2, 3, 4]],
      expected: [[5], [1, 2, 3, 4]],
    },
  ],
};
