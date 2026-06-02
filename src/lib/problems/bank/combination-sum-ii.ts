import type { Problem } from '../types';

export const problem: Problem = {
  id: 'combination-sum-ii',
  title: 'Combination Sum II',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given a collection of candidate numbers (\`candidates\`) and a target number (\`target\`), find all unique combinations in \`candidates\` where the candidate numbers sum to \`target\`.

Each number in \`candidates\` may only be used **once** in the combination.

**Note:** The solution set must not contain duplicate combinations.`,
  constraints: [
    '1 <= candidates.length <= 100',
    '1 <= candidates[i] <= 50',
    '1 <= target <= 30',
  ],
  examples: [
    {
      input: 'candidates = [10,1,2,7,6,1,5], target = 8',
      output: '[[1,1,6],[1,2,5],[1,7],[2,6]]',
    },
    {
      input: 'candidates = [2,5,2,1,2], target = 5',
      output: '[[1,2,2],[5]]',
    },
    {
      input: 'candidates = [1,1,1], target = 2',
      output: '[[1,1]]',
    },
  ],
  hints: [
    'Sort candidates first. Use backtracking, but skip duplicates at the same recursion level.',
    'To skip duplicates: when i > start and candidates[i] === candidates[i-1], skip (this avoids reusing the same element at the same depth).',
    'Each element can only be used once, so recurse with start = i+1 (not i like in Combination Sum I).',
  ],
  functionName: 'combinationSum2',
  params: ['candidates', 'target'],
  starterCode: {
    javascript: `function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) break;
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      current.push(candidates[i]);
      backtrack(i + 1, current, remaining - candidates[i]);
      current.pop();
    }
  }
  backtrack(0, [], target);
  return result;
}`,
    typescript: `function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  function backtrack(start: number, current: number[], remaining: number): void {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) break;
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      current.push(candidates[i]);
      backtrack(i + 1, current, remaining - candidates[i]);
      current.pop();
    }
  }
  backtrack(0, [], target);
  return result;
}`,
    python: `def combinationSum2(candidates, target):
    candidates.sort()
    result = []
    def backtrack(start, current, remaining):
        if remaining == 0:
            result.append(list(current))
            return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining:
                break
            if i > start and candidates[i] == candidates[i - 1]:
                continue
            current.append(candidates[i])
            backtrack(i + 1, current, remaining - candidates[i])
            current.pop()
    backtrack(0, [], target)
    return result`,
  },
  visibleTests: [
    { args: [[10, 1, 2, 7, 6, 1, 5], 8], expected: [[1,1,6],[1,2,5],[1,7],[2,6]] },
    { args: [[2, 5, 2, 1, 2], 5], expected: [[1,2,2],[5]] },
    { args: [[1, 1, 1], 2], expected: [[1,1]] },
  ],
  hiddenTests: [
    { args: [[1, 2], 3], expected: [[1,2]] },
    { args: [[3, 1, 3, 5, 1, 1], 8], expected: [[1,1,1,5],[1,1,3,3],[3,5]] },
    { args: [[1], 1], expected: [[1]] },
    { args: [[1, 1], 3], expected: [] },
  ],
};
