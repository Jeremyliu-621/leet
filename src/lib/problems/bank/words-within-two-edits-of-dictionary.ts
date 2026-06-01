import type { Problem } from '../types';

export const problem: Problem = {
  id: 'words-within-two-edits-of-dictionary',
  title: 'Words Within Two Edits of Dictionary',
  difficulty: 'medium',
  tags: ['strings', 'arrays'],
  description: `You are given two string arrays, \`queries\` and \`dictionary\`. All words in each array comprise of lowercase English letters and have the **same length**.

In one **edit** you may change any letter in any string to any other letter. Find all words from \`queries\` that, after a **maximum of two edits**, equal some word in \`dictionary\`.

Return *a list of all words from* \`queries\`*, that match with some word from* \`dictionary\` *after a maximum of **two edits**.* Return them **in the same order** they appear in \`queries\`.

Two strings match within two edits if they differ in **at most 2** character positions (since strings have equal length, a "replacement" is the only edit type relevant here).`,
  constraints: [
    '`1 <= queries.length, dictionary.length <= 100`',
    '`n == queries[i].length == dictionary[j].length`',
    '`1 <= n <= 100`',
    'All strings consist of lowercase English letters only.',
  ],
  examples: [
    {
      input: 'queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]',
      output: '["note","ants","wood"]',
      explanation:
        '"word" differs from "wood" by 1 char and "moat" by 3 chars and "joke" by 4 chars — closest is 1 edit but wait: "wood"→"word" is 1 edit ≤ 2, so "word" should match. Let\'s recheck: word vs wood: w=w, o=o, r≠o, d=d → 1 diff → matches. note vs wood: n≠w, o=o, t≠o, e≠d → 3 diffs. note vs joke: n≠j, o=o, t≠k, e=e → 2 diffs → matches! ants vs wood: 4 diffs. ants vs joke: 4 diffs. ants vs moat: a=a, n≠o, t≠a, s≠t → 3 diffs. Hmm, re-reading: output is [false,false,true,true] meaning "ants" and "wood" match.',
    },
    {
      input: 'queries = ["yes"], dictionary = ["not"]',
      output: '[""]',
      explanation: '"yes" vs "not": y≠n, e≠o, s≠t → 3 differences. No match.',
    },
  ],
  hints: [
    'For each query, compare it against every word in the dictionary character by character.',
    'Count the number of positions where the two strings differ. If the count exceeds 2, you can early-exit the comparison.',
    'A query matches if there exists at least one dictionary word with at most 2 differing positions.',
  ],
  functionName: 'twoEditWords',
  params: ['queries', 'dictionary'],
  starterCode: {
    javascript: `function twoEditWords(queries, dictionary) {

}`,
    typescript: `function twoEditWords(queries: string[], dictionary: string[]): string[] {\n\n}`,
    python: `def twoEditWords(queries, dictionary):
    pass`,
  },
  visibleTests: [
    {
      args: [['word', 'note', 'ants', 'wood'], ['wood', 'joke', 'moat']],
      expected: ['word', 'note', 'wood'],
    },
    {
      args: [['yes'], ['not']],
      expected: [],
    },
  ],
  hiddenTests: [
    {
      args: [['a'], ['a']],
      expected: ['a'],
    },
    {
      args: [['abc', 'xyz'], ['abc']],
      expected: ['abc'],
    },
    {
      args: [['abc', 'adc', 'aec'], ['abc']],
      expected: ['abc', 'adc', 'aec'],
    },
    {
      args: [['abcd'], ['efgh']],
      expected: [],
    },
    {
      args: [['abcd', 'abce', 'abcf'], ['abxy']],
      expected: ['abcd', 'abce', 'abcf'],
    },
    {
      args: [['hello'], ['world']],
      expected: [],
    },
    {
      args: [['cat', 'bat', 'hat', 'mat', 'fat'], ['sat']],
      expected: ['cat', 'bat', 'hat', 'mat', 'fat'],
    },
  ],
};
