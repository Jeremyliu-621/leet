import type { Problem } from '../types';

export const problem: Problem = {
  id: 'throne-inheritance',
  title: 'Throne Inheritance',
  difficulty: 'medium',
  tags: ['design', 'simulation'],
  description: `A kingdom consists of a king, his children, his grandchildren, and so on. Over time, this family spans multiple generations. The order of inheritance follows the following rules:

1. The king is the first in the line of inheritance.
2. Among the king's children, order them according to birth order.
3. Place the child's children before the child's next sibling.
4. Repeat (recursively for the entire family tree).
5. If a member of the family dies, they are removed from the order.

Implement \`throneInheritance(operations, args)\` using the ops-array pattern where:
- \`"ThroneInheritance"\` with args \`[kingName]\` — initializes the inheritance. Returns \`null\`.
- \`"birth"\` with args \`[parentName, childName]\` — registers parentName's new child. Returns \`null\`.
- \`"death"\` with args \`[name]\` — marks the person as dead. Returns \`null\`.
- \`"getInheritanceOrder"\` with args \`[]\` — returns the inheritance order (preorder DFS, skipping dead members).`,
  constraints: [
    '1 <= kingName.length, parentName.length, childName.length, name.length <= 15',
    'All names are lowercase English letters.',
    'At most 10^5 calls will be made to birth, death, and getInheritanceOrder.',
  ],
  examples: [
    {
      input: 'operations = ["ThroneInheritance","birth","birth","birth","birth","birth","birth","getInheritanceOrder","death","getInheritanceOrder"]\nargs = [["king"],["king","andy"],["king","bob"],["king","catherine"],["andy","matthew"],["bob","alex"],["bob","asha"],[],["bob"],[]]',
      output: '[null,null,null,null,null,null,null,["king","andy","matthew","bob","alex","asha","catherine"],null,["king","andy","matthew","alex","asha","catherine"]]',
      explanation: 'Preorder DFS traversal of the family tree; death(bob) removes bob but keeps his children.',
    },
  ],
  hints: [
    'Build a tree: a Map from name → list of children (in birth order). Track dead members in a Set.',
    'getInheritanceOrder does a preorder DFS from the king: visit the node (if alive, add to result), then recursively visit each child.',
    'Death only adds the name to the dead set — the node and its subtree stay in the tree structure.',
  ],
  functionName: 'throneInheritance',
  params: ['operations', 'args'],
  starterCode: {
    javascript: `function throneInheritance(operations, args) {
  const results = [];
  let king = '';
  const children = new Map(); // name → [child names in order]
  const dead = new Set();

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const arg = args[i];
    if (op === 'ThroneInheritance') {
      king = arg[0];
      children.set(king, []);
      results.push(null);
    } else if (op === 'birth') {
      const [parent, child] = arg;
      children.get(parent).push(child);
      children.set(child, []);
      results.push(null);
    } else if (op === 'death') {
      dead.add(arg[0]);
      results.push(null);
    } else { // getInheritanceOrder
      const order = [];
      const dfs = (name) => {
        if (!dead.has(name)) order.push(name);
        for (const child of children.get(name) ?? []) dfs(child);
      };
      dfs(king);
      results.push(order);
    }
  }
  return results;
}`,
    typescript: `function throneInheritance(operations: string[], args: (string[])[]): (null | string[])[] {
  const results: (null | string[])[] = [];
  let king = '';
  const children = new Map<string, string[]>();
  const dead = new Set<string>();

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const arg = args[i]!;
    if (op === 'ThroneInheritance') {
      king = arg[0]!;
      children.set(king, []);
      results.push(null);
    } else if (op === 'birth') {
      const parent = arg[0]!, child = arg[1]!;
      children.get(parent)!.push(child);
      children.set(child, []);
      results.push(null);
    } else if (op === 'death') {
      dead.add(arg[0]!);
      results.push(null);
    } else {
      const order: string[] = [];
      const dfs = (name: string) => {
        if (!dead.has(name)) order.push(name);
        for (const child of children.get(name) ?? []) dfs(child);
      };
      dfs(king);
      results.push(order);
    }
  }
  return results;
}`,
    python: `def throneInheritance(operations, args):
    if hasattr(operations, 'to_py'): operations = list(operations.to_py())
    if hasattr(args, 'to_py'): args = list(args.to_py())
    results = []
    king = ''
    children = {}  # name -> list of children in order
    dead = set()

    for i in range(len(operations)):
        op = operations[i]
        arg = list(args[i]) if hasattr(args[i], 'to_py') else list(args[i])
        if op == 'ThroneInheritance':
            king = arg[0]
            children[king] = []
            results.append(None)
        elif op == 'birth':
            parent, child = arg[0], arg[1]
            children[parent].append(child)
            children[child] = []
            results.append(None)
        elif op == 'death':
            dead.add(arg[0])
            results.append(None)
        else:  # getInheritanceOrder
            order = []
            stack = [king]
            # Use iterative DFS to avoid recursion limit
            def dfs(name):
                if name not in dead:
                    order.append(name)
                for child in children.get(name, []):
                    dfs(child)
            dfs(king)
            results.append(order)
    return results`,
  },
  visibleTests: [
    {
      args: [
        ['ThroneInheritance', 'birth', 'birth', 'birth', 'birth', 'birth', 'birth', 'getInheritanceOrder', 'death', 'getInheritanceOrder'],
        [['king'], ['king', 'andy'], ['king', 'bob'], ['king', 'catherine'], ['andy', 'matthew'], ['bob', 'alex'], ['bob', 'asha'], [], ['bob'], []],
      ],
      expected: [null, null, null, null, null, null, null, ['king', 'andy', 'matthew', 'bob', 'alex', 'asha', 'catherine'], null, ['king', 'andy', 'matthew', 'alex', 'asha', 'catherine']],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['ThroneInheritance', 'getInheritanceOrder'],
        [['alice'], []],
      ],
      expected: [null, ['alice']],
    },
    {
      args: [
        ['ThroneInheritance', 'birth', 'birth', 'death', 'getInheritanceOrder'],
        [['king'], ['king', 'a'], ['king', 'b'], ['king'], []],
      ],
      expected: [null, null, null, null, ['a', 'b']],
    },
    {
      args: [
        ['ThroneInheritance', 'birth', 'birth', 'birth', 'death', 'death', 'getInheritanceOrder'],
        [['k'], ['k', 'a'], ['a', 'b'], ['a', 'c'], ['a'], ['b'], []],
      ],
      expected: [null, null, null, null, null, null, ['k', 'c']],
    },
    {
      args: [
        ['ThroneInheritance', 'birth', 'getInheritanceOrder', 'birth', 'getInheritanceOrder', 'death', 'getInheritanceOrder'],
        [['king'], ['king', 'alice'], [], ['alice', 'bob'], [], ['alice'], []],
      ],
      expected: [null, null, ['king', 'alice'], null, ['king', 'alice', 'bob'], null, ['king', 'bob']],
    },
  ],
};
