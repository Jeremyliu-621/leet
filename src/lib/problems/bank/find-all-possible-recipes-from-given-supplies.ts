import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-possible-recipes-from-given-supplies',
  title: 'Find All Possible Recipes from Given Supplies',
  difficulty: 'medium',
  tags: ['graph', 'hash-map'],
  description: `You have information about \`n\` different recipes. You are given a string array \`recipes\` and a 2D string array \`ingredients\`. The \`i\`th recipe has the name \`recipes[i]\`, and you can **create** it if you have all the needed ingredients from \`ingredients[i]\`. A recipe can also be an ingredient of another recipe.

You are also given a string array \`supplies\` containing all the ingredients that you initially have, and you have an infinite supply of all of them.

Return *a list of all the recipes that you can create*. You may return the answer in **any order**.

Note that two recipes may contain each other in their ingredient lists.`,
  constraints: [
    'n == recipes.length == ingredients.length',
    '1 <= n <= 100',
    '1 <= ingredients[i].length, supplies.length <= 100',
    '1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10',
    'All values in recipes and supplies are unique',
    'ingredients[i][j] may equal recipes[k]',
  ],
  examples: [
    {
      input: 'recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]',
      output: '["bread"]',
      explanation: 'We can create "bread" since we have "yeast" and "flour".',
    },
    {
      input: 'recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]',
      output: '["bread","sandwich"]',
      explanation: 'We can create "bread" directly. Then "sandwich" uses "bread" (created) + "meat" (supply).',
    },
    {
      input: 'recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]',
      output: '["bread","sandwich","burger"]',
    },
  ],
  hints: [
    'Model as a directed graph: each ingredient → recipes that need it.',
    'Use topological sort (Kahn\'s algorithm) with in-degree tracking.',
    'Start with all supply items in the queue; process each, reducing in-degree of recipes that need it.',
    'A recipe becomes available when its in-degree reaches 0.',
  ],
  functionName: 'findAllRecipes',
  params: ['recipes', 'ingredients', 'supplies'],
  starterCode: {
    javascript: `function findAllRecipes(recipes, ingredients, supplies) {\n\n}`,
    python: `def findAllRecipes(recipes, ingredients, supplies):\n    pass`,
    typescript: `function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {\n\n}`,
  },
  visibleTests: [
    {
      args: [['bread'], [['yeast', 'flour']], ['yeast', 'flour', 'corn']],
      expected: ['bread'],
    },
    {
      args: [
        ['bread', 'sandwich'],
        [['yeast', 'flour'], ['bread', 'meat']],
        ['yeast', 'flour', 'meat'],
      ],
      expected: ['bread', 'sandwich'],
    },
    {
      args: [
        ['bread', 'sandwich', 'burger'],
        [['yeast', 'flour'], ['bread', 'meat'], ['sandwich', 'meat', 'bread']],
        ['yeast', 'flour', 'meat'],
      ],
      expected: ['bread', 'sandwich', 'burger'],
    },
  ],
  hiddenTests: [
    {
      args: [['a'], [['b', 'c']], ['b']],
      expected: [],
    },
    {
      args: [['a', 'b'], [['x'], ['a', 'x']], ['x']],
      expected: ['a', 'b'],
    },
    {
      args: [['xe', 'yz', 'yy'], [['b', 'c'], ['b', 'c', 'xe', 'yy'], ['b', 'c', 'xe', 'yy']], ['b', 'c']],
      expected: ['xe'],
    },
  ],
};
