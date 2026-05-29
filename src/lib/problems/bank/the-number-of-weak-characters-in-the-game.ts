import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-number-of-weak-characters-in-the-game',
  title: 'The Number of Weak Characters in the Game',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are playing a game that contains multiple characters, and each of the characters has **two** main properties: **attack** and **defense**. You are given a 2D integer array \`properties\` where \`properties[i] = [attacki, defensei]\` represents the properties of the \`i\`th character in the game.

A character is said to be **weak** if any other character has **both** a strictly greater attack and defense. More formally, a character \`i\` is weak if there exists some \`j\` such that \`attackj > attacki\` and \`defensej > defensei\`.

Return the number of **weak** characters.`,
  constraints: [
    '2 <= properties.length <= 10^5',
    'properties[i].length == 2',
    '1 <= attacki, defensei <= 10^5',
  ],
  examples: [
    {
      input: 'properties = [[5,5],[6,3],[3,6]]',
      output: '0',
      explanation: 'No character has both strictly greater attack and defense than another. [6,3] beats [5,5] in attack but not defense. [3,6] beats [5,5] in defense but not attack.',
    },
    {
      input: 'properties = [[2,2],[3,3]]',
      output: '1',
      explanation: '[2,2] is weak because [3,3] has 3>2 attack AND 3>2 defense.',
    },
    {
      input: 'properties = [[1,5],[10,4],[4,3]]',
      output: '1',
      explanation: '[4,3] is weak because [10,4] has 10>4 attack and 4>3 defense.',
    },
  ],
  hints: [
    'Sort by attack descending. Among characters with the same attack, sort by defense ascending (to avoid counting same-attack pairs as dominating).',
    'Scan left to right, tracking the maximum defense seen so far.',
    'A character is weak if its defense < maxDefense seen so far (all previous entries have strictly greater attack after sorting).',
  ],
  functionName: 'numberOfWeakCharacters',
  params: ['properties'],
  starterCode: {
    javascript: `function numberOfWeakCharacters(properties) {

}`,
    typescript: `function numberOfWeakCharacters(properties: number[][]): number {

}`,
    python: `def numberOfWeakCharacters(properties: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[5, 5], [6, 3], [3, 6]]], expected: 0 },
    { args: [[[2, 2], [3, 3]]], expected: 1 },
    { args: [[[1, 5], [10, 4], [4, 3]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 2 },
    { args: [[[1, 1], [2, 1], [3, 1]]], expected: 0 },
    { args: [[[1, 5], [10, 6], [2, 3]]], expected: 2 },
    { args: [[[7, 7], [1, 2], [9, 10], [4, 5]]], expected: 3 },
    { args: [[[1, 1], [1, 2], [1, 3]]], expected: 0 },
    { args: [[[5, 4], [4, 5]]], expected: 0 },
    { args: [[[1, 1], [2, 2], [3, 3], [2, 4]]], expected: 2 },
    { args: [[[3, 3], [3, 4], [4, 4]]], expected: 1 },
  ],
};
