import type { Problem } from '../types';

export const problem: Problem = {
  id: 'meeting-scheduler',
  title: 'Meeting Scheduler',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given the availability time slots arrays \`slots1\` and \`slots2\` of two people and a meeting \`duration\`, return the **earliest time slot** that works for both of them and is of duration \`duration\`.

If there is no common time slot that satisfies the requirements, return an **empty array**.

The format of a time slot is an array of two elements \`[start, end]\` representing an inclusive time range from \`start\` to \`end\`.

It is guaranteed there is no two availability slots of the same person that intersect with each other.`,
  constraints: [
    '1 <= slots1.length, slots2.length <= 10^4',
    'slots1[i].length, slots2[i].length == 2',
    'slots1[i][0] < slots1[i][1]',
    '0 <= slots1[i][j], slots2[i][j] <= 10^9',
    '1 <= duration <= 10^6',
  ],
  examples: [
    {
      input: 'slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8',
      output: '[60,68]',
      explanation: 'The earliest overlapping window of length 8 starts at 60.',
    },
    {
      input: 'slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12',
      output: '[]',
      explanation: 'No overlap of length ≥ 12 exists.',
    },
  ],
  hints: [
    'Level 1: Sort both slot arrays by start time.',
    'Level 2: Use two pointers i and j. For each pair, compute the intersection: start=max(slots1[i][0],slots2[j][0]), end=min(slots1[i][1],slots2[j][1]).',
    'Level 3: If end-start >= duration, return [start, start+duration]. Otherwise, advance the pointer whose slot ends earlier.',
  ],
  functionName: 'minAvailableDuration',
  params: ['slots1', 'slots2', 'duration'],
  starterCode: {
    javascript: `function minAvailableDuration(slots1, slots2, duration) {
  slots1.sort((a, b) => a[0] - b[0]);
  slots2.sort((a, b) => a[0] - b[0]);
  let i = 0, j = 0;
  while (i < slots1.length && j < slots2.length) {
    const start = Math.max(slots1[i][0], slots2[j][0]);
    const end   = Math.min(slots1[i][1], slots2[j][1]);
    if (end - start >= duration) return [start, start + duration];
    if (slots1[i][1] < slots2[j][1]) i++;
    else j++;
  }
  return [];
}`,
    typescript: `function minAvailableDuration(slots1: number[][], slots2: number[][], duration: number): number[] {
  slots1.sort((a, b) => a[0]! - b[0]!);
  slots2.sort((a, b) => a[0]! - b[0]!);
  let i = 0, j = 0;
  while (i < slots1.length && j < slots2.length) {
    const start = Math.max(slots1[i]![0]!, slots2[j]![0]!);
    const end   = Math.min(slots1[i]![1]!, slots2[j]![1]!);
    if (end - start >= duration) return [start, start + duration];
    if (slots1[i]![1]! < slots2[j]![1]!) i++;
    else j++;
  }
  return [];
}`,
    python: `def minAvailableDuration(slots1, slots2, duration):
    slots1 = [list(s.to_py() if hasattr(s, 'to_py') else s) for s in (slots1.to_py() if hasattr(slots1, 'to_py') else slots1)]
    slots2 = [list(s.to_py() if hasattr(s, 'to_py') else s) for s in (slots2.to_py() if hasattr(slots2, 'to_py') else slots2)]
    duration = int(duration)
    slots1.sort(key=lambda x: x[0])
    slots2.sort(key=lambda x: x[0])
    i = j = 0
    while i < len(slots1) and j < len(slots2):
        start = max(slots1[i][0], slots2[j][0])
        end   = min(slots1[i][1], slots2[j][1])
        if end - start >= duration:
            return [start, start + duration]
        if slots1[i][1] < slots2[j][1]:
            i += 1
        else:
            j += 1
    return []`,
  },
  visibleTests: [
    { args: [[[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8], expected: [60, 68] },
    { args: [[[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 12], expected: [] },
  ],
  hiddenTests: [
    { args: [[[0, 100]], [[0, 100]], 50], expected: [0, 50] },
    { args: [[[0, 10]], [[20, 30]], 5], expected: [] },
    { args: [[[1, 2]], [[1, 2]], 1], expected: [1, 2] },
    { args: [[[0, 60]], [[30, 90]], 15], expected: [30, 45] },
    { args: [[[0, 5], [10, 20]], [[2, 8], [12, 18]], 3], expected: [2, 5] },
  ],
};
