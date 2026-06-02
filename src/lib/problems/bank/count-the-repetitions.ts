import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-repetitions',
  title: 'Count The Repetitions',
  difficulty: 'hard',
  tags: ['strings', 'hash-map', 'simulation'],
  description: `We define \`str = [s, n]\` as the string \`str\` which consists of the string \`s\` concatenated \`n\` times.

- For example, \`str == ["abc", 3] == "abcabcabc"\`.

We define that string \`s1\` can be **obtained** from string \`s2\` if we can remove some characters from \`s2\` such that the remaining characters form \`s1\`.

- For example, \`"abc"\` can be obtained from \`"adbec"\` but not from \`"aabc"\`.

You are given four integers \`n1\`, \`n2\`, and two strings \`s1\` and \`s2\`.

Return the **maximum** integer \`m\` such that \`[s2, m]\` can be **obtained** from \`[s1, n1]\`.`,
  constraints: [
    '1 <= s1.length, s2.length <= 100',
    '1 <= n1, n2 <= 10^6',
    's1 and s2 consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's1 = "acb", n1 = 4, s2 = "ab", n2 = 2',
      output: '2',
      explanation: '[s1,4]="acbacbacbacb". Matching s2="ab": find 4 complete copies of "ab" as subsequences. 4 / n2=2 = 2.',
    },
    {
      input: 's1 = "a", n1 = 5, s2 = "a", n2 = 1',
      output: '5',
      explanation: '[s1,5]="aaaaa". We can match "a" five times. 5 / 1 = 5.',
    },
    {
      input: 's1 = "aaa", n1 = 3, s2 = "aa", n2 = 1',
      output: '4',
      explanation: '"aaaaaaaaa" (9 chars) contains 4 non-overlapping subsequences of "aa" (using 8 chars). 4 / 1 = 4.',
    },
  ],
  hints: [
    'Level 1: Simulate matching s2 as a subsequence through copies of s1. After each full copy of s1, record the current position in s2 and how many full s2 copies have been matched.',
    'Level 2: The position in s2 after each s1 copy is bounded by len(s2), so it must eventually cycle. Detect the cycle to skip ahead instead of simulating all n1 copies.',
    'Level 3: Use a hash map: key = position j in s2 at start of copy i, value = (i, s2_count). When j repeats, compute cycle_len and cycle_count; extrapolate: s2_count += (remaining // cycle_len) * cycle_count, then simulate the remainder. Return s2_count // n2.',
  ],
  functionName: 'getMaxRepetitions',
  params: ['s1', 'n1', 's2', 'n2'],
  starterCode: {
    javascript: `function getMaxRepetitions(s1, n1, s2, n2) {
  const l1 = s1.length, l2 = s2.length;
  const seen = new Map(); // j -> [copy_i, s2_count]
  let j = 0, s2Count = 0;
  for (let i = 0; i < n1; i++) {
    for (const c of s1) {
      if (c === s2[j]) { j++; if (j === l2) { j = 0; s2Count++; } }
    }
    if (seen.has(j)) {
      const [ci, cc] = seen.get(j);
      const cycleLen = i - ci, cycleCount = s2Count - cc;
      const rem = n1 - 1 - i;
      s2Count += Math.floor(rem / cycleLen) * cycleCount;
      const leftover = rem % cycleLen;
      for (let k = 0; k < leftover; k++) {
        for (const c of s1) {
          if (c === s2[j]) { j++; if (j === l2) { j = 0; s2Count++; } }
        }
      }
      return Math.floor(s2Count / n2);
    }
    seen.set(j, [i, s2Count]);
  }
  return Math.floor(s2Count / n2);
}`,
    typescript: `function getMaxRepetitions(s1: string, n1: number, s2: string, n2: number): number {
  const l2 = s2.length;
  const seen = new Map<number, [number, number]>();
  let j = 0, s2Count = 0;
  for (let i = 0; i < n1; i++) {
    for (const c of s1) {
      if (c === s2[j]) { j++; if (j === l2) { j = 0; s2Count++; } }
    }
    if (seen.has(j)) {
      const [ci, cc] = seen.get(j)!;
      const cycleLen = i - ci, cycleCount = s2Count - cc;
      const rem = n1 - 1 - i;
      s2Count += Math.floor(rem / cycleLen) * cycleCount;
      const leftover = rem % cycleLen;
      for (let k = 0; k < leftover; k++) {
        for (const c of s1) {
          if (c === s2[j]) { j++; if (j === l2) { j = 0; s2Count++; } }
        }
      }
      return Math.floor(s2Count / n2);
    }
    seen.set(j, [i, s2Count]);
  }
  return Math.floor(s2Count / n2);
}`,
    python: `def getMaxRepetitions(s1, n1, s2, n2):
    l2 = len(s2)
    seen = {}  # j -> (i, s2_count)
    j = s2_count = 0
    for i in range(n1):
        for c in s1:
            if c == s2[j]:
                j += 1
                if j == l2: j = 0; s2_count += 1
        if j in seen:
            ci, cc = seen[j]
            cycle_len = i - ci; cycle_count = s2_count - cc
            rem = n1 - 1 - i
            s2_count += (rem // cycle_len) * cycle_count
            for _ in range(rem % cycle_len):
                for c in s1:
                    if c == s2[j]:
                        j += 1
                        if j == l2: j = 0; s2_count += 1
            return s2_count // n2
        seen[j] = (i, s2_count)
    return s2_count // n2`,
  },
  visibleTests: [
    { args: ['acb', 4, 'ab', 2], expected: 2 },
    { args: ['a', 5, 'a', 1], expected: 5 },
    { args: ['aaa', 3, 'aa', 1], expected: 4 },
  ],
  hiddenTests: [
    { args: ['a', 1, 'b', 1], expected: 0 },
    { args: ['ab', 3, 'ba', 1], expected: 2 },
    { args: ['abcde', 5, 'xyz', 1], expected: 0 },
    { args: ['bab', 4, 'ba', 2], expected: 2 },
    { args: ['aa', 100, 'a', 100], expected: 2 },
    { args: ['a', 10, 'a', 3], expected: 3 },
    { args: ['abc', 4, 'bc', 1], expected: 4 },
    { args: ['ba', 6, 'ab', 3], expected: 1 },
  ],
};
