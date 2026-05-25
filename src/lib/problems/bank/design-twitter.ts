import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-twitter',
  title: 'Design Twitter',
  difficulty: 'medium',
  tags: ['hash-map', 'heap'],
  description: `Design a simplified version of Twitter where users can post tweets, follow/unfollow other users, and see the 10 most recent tweets in their news feed.

Implement \`designTwitter(actions, args)\` which simulates the following operations:

- \`"postTweet", [userId, tweetId]\` — User posts a tweet. No return value (null).
- \`"getNewsFeed", [userId]\` — Returns the 10 most recent tweet IDs in the user's news feed. The feed includes the user's own tweets and tweets from users they follow, ordered newest to oldest.
- \`"follow", [followerId, followeeId]\` — The follower follows the followee. No return value (null).
- \`"unfollow", [followerId, followeeId]\` — The follower unfollows the followee. No return value (null).

The first action is always \`"Twitter"\` (constructor), which returns \`null\`.

**Note:** All tweet IDs and user IDs are integers. Tweets appear in the feed in reverse chronological order (most recent first). Each user implicitly follows themselves.`,
  constraints: [
    '1 <= userId, followerId, followeeId, tweetId <= 500',
    'All tweetIds are unique.',
    'At most 3 * 10^4 operations total.',
    'The number of tweets in a news feed is at most 10.',
  ],
  examples: [
    {
      input: 'actions = ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"], args = [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]',
      output: '[null,null,[5],null,null,[6,5],null,[5]]',
      explanation: 'User 1 posts tweet 5. User 1\'s feed: [5]. User 1 follows user 2. User 2 posts tweet 6. User 1\'s feed: [6,5] (tweet 6 is newer). User 1 unfollows user 2. User 1\'s feed: [5] again.',
    },
  ],
  functionName: 'designTwitter',
  params: ['actions', 'args'],
  starterCode: {
    javascript: `function designTwitter(actions, args) {
  // Simulate the Twitter class.
  // Return array of results; null for void operations.
  const results = [null];
  let time = 0;
  const tweets = new Map(); // userId -> [{tweetId, time}]
  const following = new Map(); // userId -> Set of followeeIds

  function getFollowing(userId) {
    if (!following.has(userId)) following.set(userId, new Set());
    return following.get(userId);
  }

  for (let i = 1; i < actions.length; i++) {
    const action = actions[i];
    const a = args[i];
    if (action === 'postTweet') {
      // your code here
    } else if (action === 'getNewsFeed') {
      // your code here — push the result
    } else if (action === 'follow') {
      // your code here
    } else if (action === 'unfollow') {
      // your code here
    }
  }
  return results;
}
`,
    python: `def designTwitter(actions, args):
    results = [None]
    time = 0
    tweets = {}   # userId -> list of (time, tweetId)
    following = {}  # userId -> set of followeeIds

    def get_following(user_id):
        if user_id not in following:
            following[user_id] = set()
        return following[user_id]

    for i in range(1, len(actions)):
        action = actions[i]
        a = args[i]
        if action == 'postTweet':
            pass  # your code here
        elif action == 'getNewsFeed':
            pass  # your code here — append result
        elif action == 'follow':
            pass  # your code here
        elif action == 'unfollow':
            pass  # your code here
    return results
`,
  },
  visibleTests: [
    {
      args: [
        ['Twitter','postTweet','getNewsFeed','follow','postTweet','getNewsFeed','unfollow','getNewsFeed'],
        [[], [1,5], [1], [1,2], [2,6], [1], [1,2], [1]],
      ],
      expected: [null, null, [5], null, null, [6,5], null, [5]],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['Twitter','postTweet','getNewsFeed'],
        [[], [1,1], [2]],
      ],
      expected: [null, null, []],
    },
    {
      args: [
        ['Twitter','postTweet','follow','getNewsFeed'],
        [[], [1,10], [2,1], [2]],
      ],
      expected: [null, null, null, [10]],
    },
    {
      args: [
        ['Twitter','postTweet','postTweet','postTweet','getNewsFeed'],
        [[], [1,1], [1,2], [1,3], [1]],
      ],
      expected: [null, null, null, null, [3,2,1]],
    },
    {
      args: [
        ['Twitter','follow','postTweet','getNewsFeed'],
        [[], [1,1], [1,99], [1]],
      ],
      expected: [null, null, null, [99]],
    },
  ],
  hints: [
    'Use a global counter (timestamp) that increments on each postTweet to track tweet ordering.',
    'For getNewsFeed, collect tweets from the user and all their followees, then take the 10 most recent by timestamp.',
    'Use a max-heap (priority queue by timestamp) to efficiently merge tweet streams from multiple users and extract the top 10.',
  ],
};
