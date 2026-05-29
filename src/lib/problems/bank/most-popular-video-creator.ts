import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-popular-video-creator',
  title: 'Most Popular Video Creator',
  difficulty: 'medium',
  tags: ['hash-map', 'arrays'],
  description: `You are given two string arrays \`creators\` and \`ids\`, and an integer array \`views\`, all of length \`n\`. The \`i\`th video on a platform was created by \`creators[i]\`, has an id of \`ids[i]\`, and has \`views[i]\` views.

The **popularity** of a creator is the **sum** of the number of views of all of their videos. Find the creator with the **highest** popularity and the id of their **most viewed** video.

- If multiple creators have the highest popularity, return them all.
- If multiple videos from the same creator have the same (maximum) views, return the one with the **lexicographically smallest** id.

Return a 2D array of strings \`ans\` where \`ans[i] = [creator_i, id_i]\` represents the creator with the \`i\`th highest popularity and their most viewed video. The answer can be returned in any order.`,
  constraints: [
    'n == creators.length == ids.length == views.length',
    '1 <= n <= 10^5',
    '1 <= creators[i].length, ids[i].length <= 5',
    'creators[i] and ids[i] consist only of lowercase English letters.',
    '0 <= views[i] <= 10^8',
  ],
  examples: [
    {
      input: 'creators = ["alice","bob","alice","chris"], ids = ["one","two","three","four"], views = [5,10,5,4]',
      output: '[["alice","one"],["bob","two"]]',
      explanation:
        'alice total=10, bob total=10, chris total=4. Both alice and bob tie at max 10. alice\'s best video is "one" (tied at 5 views; "one" < "three" lex). bob\'s best is "two" (10 views).',
    },
    {
      input: 'creators = ["alice","alice"], ids = ["a","b"], views = [1,2]',
      output: '[["alice","b"]]',
      explanation: 'alice total=3. Her most viewed video is "b" with 2 views.',
    },
  ],
  hints: [
    'Use a hash map to accumulate total views per creator.',
    'Use another hash map to track the best video per creator: highest views, then smallest id on tie.',
    'Find the maximum total, filter creators with that total, and return [creator, best_id] sorted by creator name.',
  ],
  functionName: 'mostPopularCreator',
  params: ['creators', 'ids', 'views'],
  starterCode: {
    javascript: `function mostPopularCreator(creators, ids, views) {

}`,
    typescript: `function mostPopularCreator(creators: string[], ids: string[], views: number[]): string[][] {

}`,
    python: `def mostPopularCreator(creators, ids, views):
    pass`,
  },
  visibleTests: [
    {
      args: [['alice', 'bob', 'alice', 'chris'], ['one', 'two', 'three', 'four'], [5, 10, 5, 4]],
      expected: [['alice', 'one'], ['bob', 'two']],
    },
    {
      args: [['alice', 'alice'], ['a', 'b'], [1, 2]],
      expected: [['alice', 'b']],
    },
  ],
  hiddenTests: [
    {
      args: [['a'], ['x'], [10]],
      expected: [['a', 'x']],
    },
    {
      args: [['a', 'b'], ['1', '2'], [5, 5]],
      expected: [['a', '1'], ['b', '2']],
    },
    {
      args: [['a', 'a', 'b'], ['id1', 'id2', 'id3'], [10, 5, 8]],
      expected: [['a', 'id1']],
    },
    {
      args: [['a', 'a'], ['z', 'a'], [5, 5]],
      expected: [['a', 'a']],
    },
    {
      args: [['x', 'y', 'z', 'x'], ['v1', 'v2', 'v3', 'v4'], [3, 7, 7, 4]],
      expected: [['x', 'v4'], ['y', 'v2'], ['z', 'v3']],
    },
  ],
};
