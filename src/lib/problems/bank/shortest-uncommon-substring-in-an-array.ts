import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-uncommon-substring-in-an-array',
  title: 'Shortest Uncommon Substring in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'strings', 'trie'],
  description: `You are given an array \`arr\` of \`n\` strings.

For each string \`arr[i]\`, find the **shortest** substring of \`arr[i]\` that does not appear as a substring in **any other string** in the array. If multiple substrings have the same shortest length, any one of them can be returned. If no such substring exists, return \`"-1"\`.

Return the array \`answer\`, where \`answer[i]\` is the shortest uncommon substring of \`arr[i]\`.`,
  constraints: [
    '1 <= arr.length <= 100',
    '1 <= arr[i].length <= 20',
    'arr[i] consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 'arr = ["aa","bb"]',
      output: '["a","b"]',
      explanation:
        '"a" does not appear in "bb". "b" does not appear in "aa". Both are length 1.',
    },
    {
      input: 'arr = ["aa","bb","aa"]',
      output: '["-1","b","-1"]',
      explanation:
        '"aa"[0] and "aa"[2] are identical, so every substring of "aa" also appears in the other "aa". For "bb", "b" is not in "aa" (either copy).',
    },
    {
      input: 'arr = ["abc","bcd","abcd"]',
      output: '["-1","-1","abcd"]',
      explanation:
        'All substrings of "abc" appear in "abcd". All substrings of "bcd" appear in "abcd". For "abcd", the length-4 substring "abcd" itself does not appear in "abc" or "bcd".',
    },
  ],
  hints: [
    'Level 1: For each arr[i], collect all substrings of all other arr[j] into a set. Then iterate over substrings of arr[i] in order of increasing length, returning the first not found in the set.',
    'Level 2: Precompute a set of substrings for each string separately. For arr[i], a substring is "uncommon" if it does not appear in the set of any arr[j] (j ≠ i).',
    'Level 3: For each length 1..len(arr[i]), try all starting positions. For each candidate substring, check whether it occurs in any other string using a simple contains check. Return the first valid one found, or "-1" if none.',
  ],
  functionName: 'shortestUncommonSubstring',
  params: ['arr'],
  starterCode: {
    javascript: `function shortestUncommonSubstring(arr) {
  const n = arr.length;
  const subsets = arr.map(w => {
    const s = new Set();
    for (let a = 0; a < w.length; a++)
      for (let b = a + 1; b <= w.length; b++)
        s.add(w.slice(a, b));
    return s;
  });
  return arr.map((w, i) => {
    for (let len = 1; len <= w.length; len++) {
      for (let a = 0; a + len <= w.length; a++) {
        const sub = w.slice(a, a + len);
        let unique = true;
        for (let j = 0; j < n; j++) {
          if (j !== i && subsets[j].has(sub)) { unique = false; break; }
        }
        if (unique) return sub;
      }
    }
    return '-1';
  });
}`,
    typescript: `function shortestUncommonSubstring(arr: string[]): string[] {
  const n = arr.length;
  const subsets = arr.map(w => {
    const s = new Set<string>();
    for (let a = 0; a < w.length; a++)
      for (let b = a + 1; b <= w.length; b++)
        s.add(w.slice(a, b));
    return s;
  });
  return arr.map((w, i) => {
    for (let len = 1; len <= w.length; len++) {
      for (let a = 0; a + len <= w.length; a++) {
        const sub = w.slice(a, a + len);
        let unique = true;
        for (let j = 0; j < n; j++) {
          if (j !== i && subsets[j]!.has(sub)) { unique = false; break; }
        }
        if (unique) return sub;
      }
    }
    return '-1';
  });
}`,
    python: `def shortestUncommonSubstring(arr):
    n = len(arr)
    subsets = []
    for w in arr:
        s = set()
        for a in range(len(w)):
            for b in range(a + 1, len(w) + 1):
                s.add(w[a:b])
        subsets.append(s)
    result = []
    for i, w in enumerate(arr):
        found = None
        for length in range(1, len(w) + 1):
            for a in range(len(w) - length + 1):
                sub = w[a:a + length]
                unique = all(j == i or sub not in subsets[j] for j in range(n))
                if unique:
                    found = sub
                    break
            if found:
                break
        result.append(found if found else '-1')
    return result`,
  },
  visibleTests: [
    { args: [['aa', 'bb']], expected: ['a', 'b'] },
    { args: [['aa', 'bb', 'aa']], expected: ['-1', 'b', '-1'] },
    { args: [['abc', 'bcd', 'abcd']], expected: ['-1', '-1', 'abcd'] },
  ],
  hiddenTests: [
    { args: [['x']], expected: ['x'] },
    { args: [['abc', 'abc']], expected: ['-1', '-1'] },
    { args: [['ab', 'cd', 'ef']], expected: ['a', 'c', 'e'] },
    { args: [['ax', 'bx', 'cx']], expected: ['a', 'b', 'c'] },
    { args: [['a', 'b', 'c']], expected: ['a', 'b', 'c'] },
    { args: [['ab', 'bc']], expected: ['a', 'c'] },
    { args: [['aab', 'aac']], expected: ['b', 'c'] },
  ],
};
