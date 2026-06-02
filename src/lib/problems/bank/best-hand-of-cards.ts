import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-hand-of-cards',
  title: 'Best Hand of Poker (Best Hand of Cards)',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`ranks\` and a character array \`suits\`. You have \`5\` cards where the \`i\`th card has a rank of \`ranks[i]\` and a suit of \`suits[i]\`.

The following are the types of **poker hands** you can make with your cards, ordered from best to worst:

1. **"Flush"**: Five cards of the same suit.
2. **"Three of a Kind"**: Three cards with the same rank.
3. **"Pair"**: Two cards with the same rank.
4. **"High Card"**: None of the above conditions is met.

Return a string representing the **best** hand you can make with the given cards.

**Note** that the ranking order of cards in each hand type is irrelevant; only the count matters.`,
  constraints: [
    'ranks.length == suits.length == 5',
    '1 <= ranks[i] <= 13',
    'suits[i] is either "a", "b", "c", or "d"',
  ],
  examples: [
    {
      input: 'ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]',
      output: '"Flush"',
      explanation: 'All five cards have suit "a", so we have a Flush.',
    },
    {
      input: 'ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]',
      output: '"Three of a Kind"',
      explanation:
        'Rank 4 appears 4 times, so the best hand is "Three of a Kind" (we need at least 3 of the same rank).',
    },
    {
      input: 'ranks = [10,10,2,12,9], suits = ["a","b","c","a","d"]',
      output: '"Pair"',
      explanation: 'Rank 10 appears twice; no three-of-a-kind, no flush. Best hand is "Pair".',
    },
  ],
  hints: [
    'Level 1: Check each hand type in order: Flush (all same suit), Three of a Kind (any rank appears ≥3 times), Pair (any rank appears ≥2 times), else High Card.',
    'Level 2: Count suit frequencies with a Map. Count rank frequencies with another Map. If all suits match → "Flush". If max rank freq ≥ 3 → "Three of a Kind". If max rank freq ≥ 2 → "Pair". Else → "High Card".',
    'Level 3: One pass: suitSet = new Set(suits); rankFreq = frequency map of ranks. If suitSet.size === 1 return "Flush". maxRankFreq = Math.max(...rankFreq.values()). If ≥3 return "Three of a Kind". If ≥2 return "Pair". Else return "High Card".',
  ],
  functionName: 'bestHand',
  params: ['ranks', 'suits'],
  starterCode: {
    javascript: `function bestHand(ranks, suits) {
  // Check Flush: all suits the same
  const suitSet = new Set(suits);
  // Build rank frequency map
  const rankFreq = new Map();
  for (const r of ranks) rankFreq.set(r, (rankFreq.get(r) || 0) + 1);
  const maxRankFreq = Math.max(...rankFreq.values());
  // TODO: return "Flush", "Three of a Kind", "Pair", or "High Card" in order
}`,
    typescript: `function bestHand(ranks: number[], suits: string[]): string {
  // Check Flush: all suits the same
  const suitSet = new Set(suits);
  // Build rank frequency map
  const rankFreq = new Map<number, number>();
  for (const r of ranks) rankFreq.set(r, (rankFreq.get(r) ?? 0) + 1);
  const maxRankFreq = Math.max(...rankFreq.values());
  // TODO: return "Flush", "Three of a Kind", "Pair", or "High Card" in order
}`,
    python: `def bestHand(ranks: list[int], suits: list[str]) -> str:
    from collections import Counter
    # Check Flush: all suits the same
    suit_set = set(suits)
    # Build rank frequency map
    rank_freq = Counter(ranks)
    max_rank_freq = max(rank_freq.values())
    # TODO: return "Flush", "Three of a Kind", "Pair", or "High Card" in order`,
  },
  visibleTests: [
    { args: [[13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a']], expected: 'Flush' },
    { args: [[4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c']], expected: 'Three of a Kind' },
    { args: [[10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd']], expected: 'Pair' },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'a']], expected: 'High Card' },
    { args: [[5, 5, 5, 5, 5], ['a', 'b', 'c', 'd', 'a']], expected: 'Three of a Kind' },
    { args: [[7, 7, 7, 7, 7], ['b', 'b', 'b', 'b', 'b']], expected: 'Flush' },
    { args: [[3, 3, 1, 2, 4], ['a', 'b', 'c', 'd', 'a']], expected: 'Pair' },
    { args: [[1, 1, 1, 2, 3], ['a', 'b', 'a', 'c', 'd']], expected: 'Three of a Kind' },
  ],
};
