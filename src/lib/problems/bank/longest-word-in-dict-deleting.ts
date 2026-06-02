import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-word-in-dict-deleting',
  title: 'Longest Word in Dictionary through Deleting',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\` and a string array \`dictionary\`, return the **longest string** in the dictionary that can be formed by deleting some characters from \`s\` without reordering the remaining characters.

If there are multiple possible results, return the **longest word with the smallest lexicographical order**. If there is no valid result, return an empty string.

A string \`t\` is a **subsequence** of \`s\` if \`t\` can be obtained by deleting characters from \`s\` (without changing order).`,
  constraints: [
    '1 <= s.length <= 10^3',
    '1 <= dictionary.length <= 10^3',
    '1 <= dictionary[i].length <= 10^3',
    's and dictionary[i] consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abpcplea", dictionary = ["ale","apple","monkey","plea"]',
      output: '"apple"',
      explanation: '"apple" (length 5) is a subsequence of "abpcplea". "monkey" and "plea" are not. "apple" > "ale" alphabetically but is longer.',
    },
    {
      input: 's = "abpcplea", dictionary = ["a","b","c"]',
      output: '"a"',
      explanation: 'All three are subsequences. "a" < "b" < "c" lexicographically, so "a" is chosen.',
    },
    {
      input: 's = "aewfafwafjlwajflwajflwafj", dictionary = ["apple","ewaf","awefawfwaf","awef"]',
      output: '"ewaf"',
    },
  ],
  hints: [
    'For each word in the dictionary, check if it is a subsequence of `s` using two pointers.',
    'To check if `t` is a subsequence of `s`: use pointer `i` into `s` and `j` into `t`. Advance `i` until `s[i] === t[j]`, then advance `j`. If `j` reaches `t.length`, return true.',
    'Among all valid subsequences, select the one that is longest. Break ties by choosing the lexicographically smallest.',
  ],
  functionName: 'findLongestWord',
  params: ['s', 'dictionary'],
  starterCode: {
    javascript: `function findLongestWord(s, dictionary) {
  const isSub = t => {
    let j = 0;
    for (const c of s) if (c === t[j]) j++;
    return j === t.length;
  };
  let best = '';
  for (const word of dictionary) {
    if (isSub(word) && (word.length > best.length || (word.length === best.length && word < best)))
      best = word;
  }
  return best;
}`,
    typescript: `function findLongestWord(s: string, dictionary: string[]): string {
  const isSub = (t: string) => {
    let j = 0;
    for (const c of s) if (c === t[j]) j++;
    return j === t.length;
  };
  let best = '';
  for (const word of dictionary) {
    if (isSub(word) && (word.length > best.length || (word.length === best.length && word < best)))
      best = word;
  }
  return best;
}`,
    python: `def findLongestWord(s, dictionary):
    def is_sub(t):
        j = 0
        for c in s:
            if j < len(t) and c == t[j]:
                j += 1
        return j == len(t)
    best = ''
    for word in dictionary:
        if is_sub(word) and (len(word) > len(best) or (len(word) == len(best) and word < best)):
            best = word
    return best`,
  },
  visibleTests: [
    { args: ['abpcplea', ['ale','apple','monkey','plea']], expected: 'apple' },
    { args: ['abpcplea', ['a','b','c']], expected: 'a' },
    { args: ['aewfafwafjlwajflwajflwafj', ['apple','ewaf','awefawfwaf','awef']], expected: 'ewaf' },
  ],
  hiddenTests: [
    { args: ['abc', ['a','ab','abc']], expected: 'abc' },
    { args: ['abc', ['bc','b','a']], expected: 'bc' },
    { args: ['z', ['abc']], expected: '' },
    { args: ['abcd', ['ab','ad','ac']], expected: 'ab' },
    { args: ['ab', ['ba']], expected: '' },
    { args: ['abc', ['c','b','a']], expected: 'a' },
  ],
};
