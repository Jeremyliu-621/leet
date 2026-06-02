import type { Problem } from '../types';

export const problem: Problem = {
  id: 'can-you-eat-your-favorite-candy-on-your-favorite-day',
  title: 'Can You Eat Your Favorite Candy on Your Favorite Day?',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **(0-indexed)** array \`candiesCount\` of \`n\` integers, where \`candiesCount[i]\` represents the number of candies of the \`i\`th type you have. You are also given a 2D array \`queries\`, where \`queries[j] = [favoriteTypej, favoriteDayj, dailyCapj]\`.

You play a game with the following rules:
- You start eating candies on **day 0**.
- You **cannot** eat **any** candy of type \`i\` unless you have eaten **all** candies of type \`i - 1\`.
- You must eat **at least one** candy per day until you finish all the candies.

Construct a boolean array \`answer\` such that \`answer[j]\` is \`true\` if you can eat a candy of type \`favoriteType[j]\` on day \`favoriteDay[j]\` without eating **more than** \`dailyCap[j]\` candies on any given day, and \`false\` otherwise.

Note that you can eat **different** types of candies on the same day, provided that you follow rule 2.`,
  constraints: [
    '1 <= candiesCount.length <= 10^5',
    '1 <= candiesCount[i] <= 10^5',
    '1 <= queries.length <= 10^5',
    'queries[j].length == 3',
    '0 <= favoriteType[j] < candiesCount.length',
    '0 <= favoriteDay[j] <= 10^9',
    '1 <= dailyCap[j] <= 10^9',
  ],
  examples: [
    {
      input: 'candiesCount = [7,4,5,3,8], queries = [[0,2,2],[4,2,4],[2,13,1000000000]]',
      output: '[true,false,true]',
      explanation: 'For query 0: eat 2/day, on day 2 have eaten 6 of type 0 (7 total), so can eat type 0 on day 2. For query 1: max 4/day, by day 2 ate at most 12, but type 4 starts after 7+4+5+3=19 > 12. False. For query 2: type 2 starts after index 11, by day 13 at least 14 > 11. True.',
    },
    {
      input: 'candiesCount = [5,2,6,4,1], queries = [[3,1,2],[4,10,3],[3,10,100],[4,100,30],[1,3,1]]',
      output: '[false,true,true,false,false]',
      explanation: 'Multiple queries tested against different candiesCount prefixes and capacities.',
    },
  ],
  hints: [
    'Build a prefix sum array where prefix[i] = sum of candiesCount[0..i-1]. prefix[0] = 0.',
    'For a query (favoriteType, favoriteDay, dailyCap): the latest you can be in favoriteType is if you eat 1/day — by day favoriteDay you\'ve eaten favoriteDay+1 total, so need favoriteDay+1 <= prefix[favoriteType+1].',
    'The earliest you can reach favoriteType is eating max/day — by day favoriteDay you\'ve eaten (favoriteDay+1)*dailyCap total, so need (favoriteDay+1)*dailyCap > prefix[favoriteType].',
  ],
  functionName: 'canEat',
  params: ['candiesCount', 'queries'],
  starterCode: {
    javascript: `function canEat(candiesCount, queries) {
  const n = candiesCount.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + candiesCount[i];
  return queries.map(([type, day, cap]) => {
    // earliest: eat cap/day -> must have eaten cap*(day+1) > prefix[type] candies
    // latest: eat 1/day -> need day+1 <= prefix[type+1] total candies
    return (day + 1) * cap > prefix[type] && day + 1 <= prefix[type + 1];
  });
}`,
    typescript: `function canEat(candiesCount: number[], queries: number[][]): boolean[] {
  const n = candiesCount.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + candiesCount[i]!;
  return queries.map(q => {
    const [type, day, cap] = [q[0]!, q[1]!, q[2]!];
    return (day + 1) * cap > prefix[type]! && day + 1 <= prefix[type + 1]!;
  });
}`,
    python: `def canEat(candiesCount, queries):
    n = len(candiesCount)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + candiesCount[i]
    result = []
    for fav_type, fav_day, daily_cap in queries:
        earliest = (fav_day + 1) * daily_cap > prefix[fav_type]
        latest = fav_day + 1 <= prefix[fav_type + 1]
        result.append(earliest and latest)
    return result`,
  },
  visibleTests: [
    {
      args: [[7, 4, 5, 3, 8], [[0, 2, 2], [4, 2, 4], [2, 13, 1000000000]]],
      expected: [true, false, true],
    },
    {
      args: [[5, 2, 6, 4, 1], [[3, 1, 2], [4, 10, 3], [3, 10, 100], [4, 100, 30], [1, 3, 1]]],
      expected: [false, true, true, false, false],
    },
    {
      args: [[2, 1], [[0, 0, 1], [0, 1, 1], [0, 2, 1], [1, 0, 1]]],
      expected: [true, true, false, false],
    },
  ],
  hiddenTests: [
    { args: [[1], [[0, 0, 1]]], expected: [true] },
    { args: [[1], [[0, 1, 1]]], expected: [false] },
    { args: [[3], [[0, 0, 5], [0, 2, 1]]], expected: [true, true] },
    { args: [[3], [[0, 3, 1]]], expected: [false] },
    { args: [[1, 2], [[1, 0, 1], [1, 1, 1], [1, 0, 10]]], expected: [false, true, true] },
    { args: [[5, 5], [[0, 4, 1], [1, 4, 1], [1, 9, 1]]], expected: [true, false, true] },
    { args: [[2, 2], [[0, 1, 1], [1, 0, 2]]], expected: [true, false] },
    { args: [[100000], [[0, 99999, 1], [0, 100000, 1]]], expected: [true, false] },
  ],
};
