import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-possible-recipes',
  title: 'Find All Possible Recipes from Given Supplies',
  difficulty: 'medium',
  tags: ['graph', 'hash-map', 'arrays'],
  description: `You have information about \`n\` different recipes. You are given a string array \`recipes\` and a 2D string array \`ingredients\`. The \`i\`th recipe has the name \`recipes[i]\`, and you can **create** it if you have **all** the needed ingredients from \`ingredients[i]\`. A recipe may use another recipe as an ingredient.

You are also given a string array \`supplies\` containing all the ingredients that you initially have, and you have an infinite supply of all of them.

Return a list of all the recipes that you can create. You may return the answer in **any order**.

Note that two recipes may contain each other in their ingredient lists.`,
  constraints: [
    'n == recipes.length == ingredients.length',
    '1 <= n <= 100',
    '1 <= ingredients[i].length, supplies.length <= 100',
    '1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10',
    'All the values of recipes and supplies combined are unique',
    'Each ingredients[i] does not contain any duplicate values',
  ],
  examples: [
    {
      input: 'recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]',
      output: '["bread"]',
      explanation: 'We can make bread from yeast and flour.',
    },
    {
      input: 'recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]',
      output: '["bread","sandwich"]',
      explanation: 'We can make bread, and then use bread to make sandwich.',
    },
    {
      input: 'recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]',
      output: '["bread","sandwich","burger"]',
      explanation: 'We can create all three by making them in order.',
    },
  ],
  hints: [
    'Build a graph: for each recipe, add edges from each ingredient to the recipe.',
    'Use topological sort (BFS/Kahn\'s): start with available supplies and recipes that have all supplies satisfied.',
    'Each time a new recipe becomes creatable, add it to the available pool and process its dependents.',
  ],
  functionName: 'findAllRecipes',
  params: ['recipes', 'ingredients', 'supplies'],
  starterCode: {
    javascript: `function findAllRecipes(recipes, ingredients, supplies) {

}`,
    typescript: "function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {\n\n}",

    python: `def findAllRecipes(recipes, ingredients, supplies):
    pass`,
  },
  visibleTests: [
    { args: [['bread'], [['yeast', 'flour']], ['yeast', 'flour', 'corn']], expected: ['bread'] },
    { args: [['bread', 'sandwich'], [['yeast', 'flour'], ['bread', 'meat']], ['yeast', 'flour', 'meat']], expected: ['bread', 'sandwich'] },
    { args: [['bread', 'sandwich', 'burger'], [['yeast', 'flour'], ['bread', 'meat'], ['sandwich', 'meat', 'bread']], ['yeast', 'flour', 'meat']], expected: ['bread', 'sandwich', 'burger'] },
  ],
  hiddenTests: [
    { args: [['a'], [['b']], []], expected: [] },
    { args: [['a', 'b'], [['b'], ['a']], ['c']], expected: [] },
    { args: [['r1', 'r2'], [['i1', 'i2'], ['r1', 'i3']], ['i1', 'i2', 'i3']], expected: ['r1', 'r2'] },
  ],
};
