import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-substrings-containing-every-vowel-and-k-consonants-ii',
  title: 'Count of Substrings Containing Every Vowel and K Consonants II',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a string \`word\` and a **non-negative** integer \`k\`.

Return the total number of **substrings** of \`word\` that contain every vowel (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`) **at least** once and **exactly** \`k\` consonants.

**Note:** Unlike Part I (which had \`n <= 10^5\`), this problem has \`n <= 2*10^5\`, so an O(n) sliding-window approach is required.`,
  constraints: [
    '`5 <= word.length <= 2 * 10^5`',
    '`word` consists only of lowercase English letters.',
    '`0 <= k <= word.length - 5`',
  ],
  examples: [
    {
      input: 'word = "aeioqq", k = 1',
      output: '0',
      explanation: 'There is no substring with every vowel and exactly 1 consonant.',
    },
    {
      input: 'word = "aeiou", k = 0',
      output: '1',
      explanation: '"aeiou" itself is the only such substring.',
    },
    {
      input: 'word = "ieaouqqieaouqq", k = 1',
      output: '3',
    },
  ],
  hints: [
    'Use the identity: exactly(k) = atLeast(k) - atLeast(k+1).',
    'atLeast(k): sliding window counting substrings with all 5 vowels and ≥k consonants. When valid, all extensions to the right are also valid.',
    `\`\`\`js
function countOfSubstrings(word, k) {
  const atLeast = (minK) => {
    const VOWELS = new Set('aeiou');
    const vowelCount = new Map(), consonants = 0;
    let result = 0, left = 0;
    [vowelCount, consonants] = [new Map(), 0];
    for (let right = 0; right < word.length; right++) {
      const c = word[right];
      if (VOWELS.has(c)) vowelCount.set(c, (vowelCount.get(c) ?? 0) + 1);
      else consonants++;
      while (vowelCount.size === 5 && consonants >= minK) {
        result += word.length - right;
        const lc = word[left++];
        if (VOWELS.has(lc)) {
          vowelCount.set(lc, vowelCount.get(lc) - 1);
          if (vowelCount.get(lc) === 0) vowelCount.delete(lc);
        } else consonants--;
      }
    }
    return result;
  };
  return atLeast(k) - atLeast(k + 1);
}\`\`\``,
  ],
  functionName: 'countOfSubstrings',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function countOfSubstrings(word, k) {
  const VOWELS = new Set('aeiou');
  function atLeast(minK) {
    const vowelCnt = new Map();
    let consonants = 0, result = 0, left = 0;
    for (let right = 0; right < word.length; right++) {
      const c = word[right];
      if (VOWELS.has(c)) vowelCnt.set(c, (vowelCnt.get(c) ?? 0) + 1);
      else consonants++;
      while (vowelCnt.size === 5 && consonants >= minK) {
        result += word.length - right;
        const lc = word[left++];
        if (VOWELS.has(lc)) {
          vowelCnt.set(lc, vowelCnt.get(lc) - 1);
          if (vowelCnt.get(lc) === 0) vowelCnt.delete(lc);
        } else consonants--;
      }
    }
    return result;
  }
  return atLeast(k) - atLeast(k + 1);
}`,
    typescript: `function countOfSubstrings(word: string, k: number): number {
  const VOWELS = new Set('aeiou');
  function atLeast(minK: number): number {
    const vowelCnt = new Map<string, number>();
    let consonants = 0, result = 0, left = 0;
    for (let right = 0; right < word.length; right++) {
      const c = word[right]!;
      if (VOWELS.has(c)) vowelCnt.set(c, (vowelCnt.get(c) ?? 0) + 1);
      else consonants++;
      while (vowelCnt.size === 5 && consonants >= minK) {
        result += word.length - right;
        const lc = word[left++]!;
        if (VOWELS.has(lc)) {
          vowelCnt.set(lc, vowelCnt.get(lc)! - 1);
          if (vowelCnt.get(lc) === 0) vowelCnt.delete(lc);
        } else consonants--;
      }
    }
    return result;
  }
  return atLeast(k) - atLeast(k + 1);
}`,
    python: `def countOfSubstrings(word, k):
    VOWELS = set('aeiou')
    def at_least(min_k):
        vowel_cnt = {}
        consonants = result = left = 0
        for right, c in enumerate(word):
            if c in VOWELS: vowel_cnt[c] = vowel_cnt.get(c, 0) + 1
            else: consonants += 1
            while len(vowel_cnt) == 5 and consonants >= min_k:
                result += len(word) - right
                lc = word[left]; left += 1
                if lc in VOWELS:
                    vowel_cnt[lc] -= 1
                    if vowel_cnt[lc] == 0: del vowel_cnt[lc]
                else: consonants -= 1
        return result
    return at_least(k) - at_least(k + 1)`,
  },
  visibleTests: [
    { args: ['aeioqq', 1], expected: 0 },
    { args: ['aeiou', 0], expected: 1 },
    { args: ['ieaouqqieaouqq', 1], expected: 3 },
  ],
  hiddenTests: [
    { args: ['aeiou', 1], expected: 0 },
    { args: ['aaeiouq', 1], expected: 2 },
    { args: ['aeiouaeiou', 0], expected: 21 },
    { args: ['aeioubc', 2], expected: 1 },
    { args: ['aeiouba', 1], expected: 3 },
    { args: ['aabbeeiioouu', 0], expected: 0 },
  ],
};
