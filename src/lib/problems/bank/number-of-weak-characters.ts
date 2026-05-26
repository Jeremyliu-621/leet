import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-weak-characters',
  title: 'The Number of Weak Characters in the Game',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are playing a game that contains multiple characters, and each of the characters has **two** main properties: **attack** and **defense**. You are given a 2D integer array \`properties\` where \`properties[i] = [attack_i, defense_i]\` represents the properties of the \`i\`th character in the game.

A character is said to be **weak** if any other character has **both** a strictly greater attack and a strictly greater defense. More formally, a character \`i\` is said to be weak if there exists some character \`j\` where \`attack_j > attack_i\` and \`defense_j > defense_i\`.

Return the number of **weak** characters.`,
  constraints: [
    '`2 <= properties.length <= 10^5`',
    '`properties[i].length == 2`',
    '`1 <= attack_i, defense_i <= 10^5`',
  ],
  examples: [
    {
      input: 'properties = [[5,5],[6,3],[3,6]]',
      output: '0',
      explanation: 'No character is strictly dominated by another.',
    },
    {
      input: 'properties = [[2,2],[3,3]]',
      output: '1',
      explanation: 'Character at index 0 is weak because [3,3] has both greater attack and defense.',
    },
    {
      input: 'properties = [[1,5],[10,4],[4,3]]',
      output: '1',
      explanation: 'Character [4,3] is weak because [10,4] has greater attack and defense.',
    },
  ],
  hints: [
    'Sort by attack descending. For ties in attack, sort by defense ascending (so same-attack chars don\'t beat each other). Then track the max defense seen; a character is weak if its defense < max so far.',
    'Sort by attack descending. For ties in attack, sort by defense ascending (to prevent same-attack pairs being compared). Scan once, tracking max defense seen; any defense below max is weak.',
    `\`\`\`js
props.sort((a,b) => a[0]!==b[0] ? b[0]-a[0] : a[1]-b[1]);
let maxDef = 0, count = 0;
for (const [,d] of props) {
  if (d < maxDef) count++;
  maxDef = Math.max(maxDef, d);
}
return count;\`\`\``
  ],
  functionName: 'numberOfWeakCharacters',
  params: ['properties'],
  starterCode: {
    javascript: 'function numberOfWeakCharacters(properties) {\n  \n}\n',
    python: 'def numberOfWeakCharacters(properties):\n    pass\n',
  },
  visibleTests: [
    { args: [[[5, 5], [6, 3], [3, 6]]], expected: 0 },
    { args: [[[2, 2], [3, 3]]], expected: 1 },
    { args: [[[1, 5], [10, 4], [4, 3]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[7, 9], [10, 7], [6, 9], [10, 4], [7, 5], [7, 10]]], expected: 2 },
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 2 },
    { args: [[[1, 1], [1, 1]]], expected: 0 },
  ],
};
