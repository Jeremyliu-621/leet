import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bulls-and-cows',
  title: 'Bulls and Cows',
  difficulty: 'medium',
  tags: ['hash-map', 'strings'],
  description: `You are playing the Bulls and Cows game. You write down a secret number and ask a friend to guess it. When your friend makes a guess, you give a hint with two counts:

- **Bulls**: digits in the guess that are in the correct position.
- **Cows**: digits in the guess that are in the secret but in the **wrong** position (digits already counted as bulls are excluded).

Given the secret number and the friend's guess (as strings), return the hint formatted as \`"xAyB"\`, where \`x\` is the number of bulls and \`y\` is the number of cows.`,
  constraints: [
    '1 <= secret.length <= 1000',
    'secret.length == guess.length',
    'secret and guess consist of digits only.',
  ],
  examples: [
    {
      input: 'secret = "1807", guess = "7810"',
      output: '"1A3B"',
      explanation: '8 is a bull (correct position). 1, 7, and 0 are cows (present but wrong position).',
    },
    {
      input: 'secret = "1123", guess = "0111"',
      output: '"1A1B"',
      explanation: 'The 1 at position 0 of the guess matches secret position 0 (bull). Of the remaining 1s in the guess, one matches an unmatched 1 in the secret (cow).',
    },
  ],
  hints: [
    'Make a first pass to count bulls (same digit, same position).',
    'For cows, track frequency maps of non-bull digits in both secret and guess.',
    'For each digit, the number of cows it contributes is min(secretFreq[digit], guessFreq[digit]).',
  ],
  functionName: 'getHint',
  params: ['secret', 'guess'],
  starterCode: {
    javascript: `function getHint(secret, guess) {
  let bulls = 0, cows = 0;
  const sCount = new Array(10).fill(0), gCount = new Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) bulls++;
    else { sCount[Number(secret[i])]++; gCount[Number(guess[i])]++; }
  }
  for (let d = 0; d < 10; d++) cows += Math.min(sCount[d], gCount[d]);
  return bulls + 'A' + cows + 'B';
}`,
    typescript: `function getHint(secret: string, guess: string): string {
  let bulls = 0, cows = 0;
  const sCount = new Array<number>(10).fill(0), gCount = new Array<number>(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) bulls++;
    else { sCount[Number(secret[i])]!++; gCount[Number(guess[i])]!++; }
  }
  for (let d = 0; d < 10; d++) cows += Math.min(sCount[d]!, gCount[d]!);
  return bulls + 'A' + cows + 'B';
}`,
    python: `def getHint(secret: str, guess: str) -> str:
    bulls = sum(s == g for s, g in zip(secret, guess))
    from collections import Counter
    s_cnt, g_cnt = Counter(secret), Counter(guess)
    cows = sum(min(s_cnt[d], g_cnt[d]) for d in s_cnt) - bulls
    return str(bulls) + 'A' + str(cows) + 'B'`,
  },
  visibleTests: [
    { args: ['1807', '7810'], expected: '1A3B' },
    { args: ['1123', '0111'], expected: '1A1B' },
    { args: ['1', '1'], expected: '1A0B' },
  ],
  hiddenTests: [
    { args: ['1234', '5678'], expected: '0A0B' },
    { args: ['1234', '1234'], expected: '4A0B' },
    { args: ['1234', '1243'], expected: '2A2B' },
    { args: ['2222', '2222'], expected: '4A0B' },
    { args: ['0000', '1111'], expected: '0A0B' },
  ],
};
