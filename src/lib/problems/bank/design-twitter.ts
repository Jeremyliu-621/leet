import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-twitter',
  title: 'Design a Social Feed',
  difficulty: 'medium',
  tags: ['design', 'hash-map', 'heap'],
  description: `Design a simplified social feed where users can post tweets, follow or unfollow other users, and retrieve their 10 most recent feed items.

Implement \`twitterRunner(ops, args)\` which simulates the following class operations:

- \`"Twitter"\` — constructor, returns \`null\`.
- \`"postTweet", [userId, tweetId]\` — User posts a tweet with the given ID. Returns \`null\`.
- \`"getNewsFeed", [userId]\` — Returns the **10 most recent** tweet IDs from the user's own posts and the posts of everyone they follow, ordered newest first.
- \`"follow", [followerId, followeeId]\` — The follower starts following the followee. Returns \`null\`.
- \`"unfollow", [followerId, followeeId]\` — The follower stops following the followee. Returns \`null\`.

Each user implicitly sees their own tweets in their feed. All \`tweetId\`s are unique across all calls.`,
  constraints: [
    '`1 <= userId, followerId, followeeId, tweetId <= 500`',
    'All `tweetId`s are unique.',
    'At most `3 * 10^4` operations in total.',
    'The news feed contains at most 10 tweets.',
  ],
  examples: [
    {
      input: `ops = ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]
args = [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]`,
      output: '[null,null,[5],null,null,[6,5],null,[5]]',
      explanation:
        'User 1 posts tweet 5. Feed: [5]. User 1 follows user 2. User 2 posts tweet 6. Feed: [6,5] (newer first). User 1 unfollows user 2. Feed: [5].',
    },
  ],
  hints: [
    'Maintain a global timestamp counter that increments with each `postTweet` call. Store tweets as `(timestamp, tweetId)` pairs per user so you can order them.',
    'For `getNewsFeed`, collect all tweets from the user and every user they follow. Sort by timestamp descending and return at most 10 tweet IDs.',
    'A min-heap of size 10 can merge multiple tweet streams efficiently, but a simple collect-and-sort also works within the given constraints.',
  ],
  functionName: 'twitterRunner',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function twitterRunner(ops, args) {
  const results = [null];
  let time = 0;
  const tweets = new Map();   // userId -> [{time, tweetId}]
  const following = new Map(); // userId -> Set of followeeIds

  function getFollowing(userId) {
    if (!following.has(userId)) following.set(userId, new Set());
    return following.get(userId);
  }

  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const a = args[i];
    if (op === 'postTweet') {
      // your code here
    } else if (op === 'getNewsFeed') {
      // your code here — push result into results
    } else if (op === 'follow') {
      // your code here
    } else if (op === 'unfollow') {
      // your code here
    }
  }
  return results;
}
`,
    python: `def twitterRunner(ops, args):
    results = [None]
    time = 0
    tweets = {}    # userId -> list of (time, tweetId)
    following = {} # userId -> set of followeeIds

    def get_following(user_id):
        if user_id not in following:
            following[user_id] = set()
        return following[user_id]

    for i in range(1, len(ops)):
        op = ops[i]
        a = list(args[i].to_py() if hasattr(args[i], 'to_py') else args[i])
        if op == 'postTweet':
            pass  # your code here
        elif op == 'getNewsFeed':
            pass  # your code here — append result
        elif op == 'follow':
            pass  # your code here
        elif op == 'unfollow':
            pass  # your code here
    return results
`,
  },
  visibleTests: [
    {
      args: [
        ['Twitter', 'postTweet', 'getNewsFeed', 'follow', 'postTweet', 'getNewsFeed', 'unfollow', 'getNewsFeed'],
        [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]],
      ],
      expected: [null, null, [5], null, null, [6, 5], null, [5]],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['Twitter', 'postTweet', 'getNewsFeed'],
        [[], [1, 1], [2]],
      ],
      expected: [null, null, []],
    },
    {
      args: [
        ['Twitter', 'postTweet', 'follow', 'getNewsFeed'],
        [[], [1, 10], [2, 1], [2]],
      ],
      expected: [null, null, null, [10]],
    },
    {
      args: [
        ['Twitter', 'postTweet', 'postTweet', 'postTweet', 'getNewsFeed'],
        [[], [1, 1], [1, 2], [1, 3], [1]],
      ],
      expected: [null, null, null, null, [3, 2, 1]],
    },
    {
      args: [
        ['Twitter', 'follow', 'postTweet', 'getNewsFeed'],
        [[], [1, 1], [1, 99], [1]],
      ],
      expected: [null, null, null, [99]],
    },
    {
      args: [
        ['Twitter', 'postTweet', 'postTweet', 'follow', 'unfollow', 'getNewsFeed'],
        [[], [1, 5], [2, 10], [1, 2], [1, 2], [1]],
      ],
      expected: [null, null, null, null, null, [5]],
    },
    {
      args: [
        ['Twitter', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'getNewsFeed'],
        [[], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1]],
      ],
      expected: [null, null, null, null, null, null, null, null, null, null, null, null, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]],
    },
    {
      args: [
        ['Twitter', 'postTweet', 'follow', 'follow', 'postTweet', 'getNewsFeed'],
        [[], [1, 1], [1, 2], [1, 3], [2, 2], [1]],
      ],
      expected: [null, null, null, null, null, [2, 1]],
    },
    {
      args: [
        ['Twitter', 'postTweet', 'postTweet', 'follow', 'getNewsFeed', 'unfollow', 'getNewsFeed'],
        [[], [1, 3], [2, 4], [1, 2], [1], [1, 2], [1]],
      ],
      expected: [null, null, null, null, [4, 3], null, [3]],
    },
  ],
};
