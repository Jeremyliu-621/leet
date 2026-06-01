import type { Problem } from '../types';

export const problem: Problem = {
  id: 'vowels-game-in-a-string',
  title: 'Vowels Game in a String',
  difficulty: 'medium',
  tags: ['math', 'strings'],
  description: `Alice and Bob are playing a game on a string \`s\`. Alice goes first.

On each turn, the current player **removes a non-empty substring** of \`s\`:
- **Alice** must remove a substring that contains an **odd** number of vowels.
- **Bob** must remove a substring that contains an **even** number of vowels (including zero).

A player **loses** if they cannot make a valid move. The game ends when a player loses.

Return \`true\` if **Alice wins** the game, and \`false\` otherwise.

**Note:** Both players play optimally. The vowels in English are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "leetcoder"',
      output: 'true',
      explanation:
        'The string has vowels: e, e, o, e (4 vowels). Alice takes the single vowel "e" at index 1, leaving "ltcoder" (3 vowels). Bob must take even vowels, but any substring has 0 or 1 remaining vowels — 0 is even (Bob takes consonants), 1 is odd (Bob cannot). Alice then takes all remaining vowels. Alice wins.',
    },
    {
      input: 's = "bbbb"',
      output: 'false',
      explanation:
        'The string has 0 vowels. Alice cannot remove a substring with an odd number of vowels. Alice loses.',
    },
    {
      input: 's = "leetcode"',
      output: 'true',
      explanation: 'The string has vowels e, e, o, e (4 vowels > 0). Alice wins.',
    },
  ],
  hints: [
    'Level 1: Count the total number of vowels in s.',
    'Level 2: If vowelCount == 0, Alice has no valid move (she needs odd vowels). Alice loses.',
    'Level 3: If vowelCount > 0, Alice can always win: if odd, she removes the whole string; if even, she removes one vowel (1 = odd), leaving odd vowels. Bob can only remove consonants (0 = even), never reducing the vowel count. Alice then removes all remaining (odd) vowels. Alice wins.',
  ],
  functionName: 'doesAliceWin',
  params: ['s'],
  starterCode: {
    javascript: `function doesAliceWin(s) {
  const vowels = new Set('aeiou');
  let count = 0;
  for (const c of s) if (vowels.has(c)) count++;
  return count > 0;
}`,
    typescript: `function doesAliceWin(s: string): boolean {
  const vowels = new Set('aeiou');
  let count = 0;
  for (const c of s) if (vowels.has(c)) count++;
  return count > 0;
}`,
    python: `def doesAliceWin(s):
    vowels = set('aeiou')
    return any(c in vowels for c in s)`,
  },
  visibleTests: [
    { args: ['leetcoder'], expected: true },
    { args: ['bbbb'], expected: false },
    { args: ['leetcode'], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['b'], expected: false },
    { args: ['aeiou'], expected: true },
    { args: ['bcdfgh'], expected: false },
    { args: ['abc'], expected: true },
    { args: ['xyz'], expected: false },
    { args: ['aabbcc'], expected: true },
    { args: ['zz'], expected: false },
  ],
};
