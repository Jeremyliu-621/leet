import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-food-rating-system',
  title: 'Design a Food Rating System',
  difficulty: 'medium',
  tags: ['design', 'simulation', 'heap', 'hash-map'],
  description: `Design a food rating system that can do the following:
- **Modify** the rating of a food item listed in the system.
- Return the **highest-rated** food item for a type of cuisine.

Implement the \`FoodRatings\` class:
- \`FoodRatings(foods, cuisines, ratings)\` — Initializes the system. \`foods[i]\`, \`cuisines[i]\`, and \`ratings[i]\` describe the \`i\`-th food, its cuisine, and its initial rating.
- \`changeRating(food, newRating)\` — Changes the rating of the food item named \`food\`.
- \`highestRated(cuisine)\` — Returns the name of the food item that has the highest rating for the given \`cuisine\`. If there is a tie, return the item with the lexicographically **smaller** name.

The input is given as an array of operations. Return results for \`highestRated\` calls (null for constructor/changeRating).`,
  constraints: [
    '1 <= n <= 2 * 10^4',
    'n == foods.length == cuisines.length == ratings.length',
    '1 <= foods[i].length, cuisines[i].length <= 10',
    'foods[i], cuisines[i] consist of lowercase English letters',
    '1 <= ratings[i] <= 10^8',
    'All strings in foods are distinct',
    '1 <= food.length <= 10',
    '1 <= newRating <= 10^8',
    '1 <= cuisine.length <= 10',
  ],
  examples: [
    {
      input: 'ops = [["FoodRatings",[["kimchi","miso","sushi","moussaka","ramen","bulgogi"],["korean","japanese","japanese","greek","japanese","korean"],[9,12,8,10,14,7]]],["highestRated",["korean"]],["highestRated",["japanese"]],["changeRating",["sushi",16]],["highestRated",["japanese"]],["changeRating",["ramen",16]],["highestRated",["japanese"]]]',
      output: '[null,"kimchi","ramen",null,"sushi",null,"ramen"]',
      explanation: 'Initially korean highest is kimchi (9>7). Japanese highest is ramen (14>12>8). After sushi→16, sushi(16)>ramen(14). After ramen→16, both ramen and sushi at 16; "ramen"<"sushi" alphabetically.',
    },
  ],
  hints: [
    'Maintain a hash map from food → {cuisine, rating}. Maintain a hash map from cuisine → max-heap (or sorted structure) of (-rating, food_name) pairs.',
    'For changeRating(food, newRating): update the food\'s rating in the food map, then push the new (-rating, food) to the cuisine\'s heap (lazy deletion).',
    'For highestRated(cuisine): pop from the heap while the top entry\'s rating doesn\'t match the current rating for that food (stale/outdated). Return the first valid entry.',
  ],
  functionName: 'foodRatingOps',
  params: ['ops'],
  starterCode: {
    javascript: `function foodRatingOps(ops) {
  // ops: [["FoodRatings", [foods, cuisines, ratings]], ["highestRated", [cuisine]], ["changeRating", [food, newRating]], ...]
  // Return array of results (null for FoodRatings/changeRating, string for highestRated)
}`,
    typescript: "function foodRatingOps(ops: ((string | (string[] | number[])[])[] | (string | string[])[] | (string | (string | number)[])[])[]): (null | string)[] {\n  // ops: [[\"FoodRatings\", [foods, cuisines, ratings]], [\"highestRated\", [cuisine]], [\"changeRating\", [food, newRating]], ...]\n  // Return array of results (null for FoodRatings/changeRating, string for highestRated)\n}",

    python: `def foodRatingOps(ops):
    # ops: [["FoodRatings", [foods, cuisines, ratings]], ["highestRated", [cuisine]], ["changeRating", [food, newRating]], ...]
    # Return list of results (None for FoodRatings/changeRating, string for highestRated)
    pass`,
  },
  visibleTests: [
    {
      args: [[
        ['FoodRatings', [['kimchi','miso','sushi','moussaka','ramen','bulgogi'], ['korean','japanese','japanese','greek','japanese','korean'], [9,12,8,10,14,7]]],
        ['highestRated', ['korean']],
        ['highestRated', ['japanese']],
        ['changeRating', ['sushi', 16]],
        ['highestRated', ['japanese']],
        ['changeRating', ['ramen', 16]],
        ['highestRated', ['japanese']],
      ]],
      expected: [null,'kimchi','ramen',null,'sushi',null,'ramen'],
    },
  ],
  hiddenTests: [
    {
      args: [[
        ['FoodRatings', [['a','b'], ['x','x'], [5,3]]],
        ['highestRated', ['x']],
        ['changeRating', ['b', 7]],
        ['highestRated', ['x']],
      ]],
      expected: [null,'a',null,'b'],
    },
    {
      args: [[
        ['FoodRatings', [['c','b','a'], ['x','x','x'], [5,5,5]]],
        ['highestRated', ['x']],
        ['changeRating', ['b', 10]],
        ['highestRated', ['x']],
      ]],
      expected: [null,'a',null,'b'],
    },
  ],
};
