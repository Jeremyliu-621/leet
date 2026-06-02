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
  const tweets = new Map();
  const following = new Map();
  function getFollowing(userId) {
    if (!following.has(userId)) following.set(userId, new Set());
    return following.get(userId);
  }
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const a = args[i];
    if (op === 'postTweet') {
      const [userId, tweetId] = a;
      if (!tweets.has(userId)) tweets.set(userId, []);
      tweets.get(userId).push({ time: ++time, tweetId });
      results.push(null);
    } else if (op === 'getNewsFeed') {
      const [userId] = a;
      const feed = [];
      for (const uid of [userId, ...getFollowing(userId)]) {
        if (tweets.has(uid)) feed.push(...tweets.get(uid));
      }
      feed.sort((x, y) => y.time - x.time);
      results.push(feed.slice(0, 10).map(t => t.tweetId));
    } else if (op === 'follow') {
      getFollowing(a[0]).add(a[1]);
      results.push(null);
    } else if (op === 'unfollow') {
      getFollowing(a[0]).delete(a[1]);
      results.push(null);
    }
  }
  return results;
}
`,
    typescript: `function twitterRunner(ops: string[], args: unknown[][]): unknown[] {
  const results: unknown[] = [null];
  let time = 0;
  const tweets = new Map<number, {time: number; tweetId: number}[]>();
  const following = new Map<number, Set<number>>();
  function getFollowing(uid: number): Set<number> {
    if (!following.has(uid)) following.set(uid, new Set());
    return following.get(uid)!;
  }
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i]!;
    const a = args[i] as number[];
    if (op === 'postTweet') {
      const [userId, tweetId] = a as [number, number];
      if (!tweets.has(userId)) tweets.set(userId, []);
      tweets.get(userId)!.push({time: ++time, tweetId});
      results.push(null);
    } else if (op === 'getNewsFeed') {
      const userId = a[0]!;
      const feed: {time: number; tweetId: number}[] = [];
      for (const uid of [userId, ...getFollowing(userId)]) {
        const t = tweets.get(uid);
        if (t) feed.push(...t);
      }
      feed.sort((x, y) => y.time - x.time);
      results.push(feed.slice(0, 10).map(t => t.tweetId));
    } else if (op === 'follow') {
      getFollowing(a[0]!).add(a[1]!);
      results.push(null);
    } else if (op === 'unfollow') {
      getFollowing(a[0]!).delete(a[1]!);
      results.push(null);
    }
  }
  return results;
}`,
    python: `def twitterRunner(ops, args):
    if hasattr(ops, 'to_py'): ops = ops.to_py()
    if hasattr(args, 'to_py'): args = args.to_py()
    ops = [str(o) for o in ops]
    results = [None]; tc = [0]
    tweets = {}; following = {}
    def get_following(uid):
        if uid not in following: following[uid] = set()
        return following[uid]
    for i in range(1, len(ops)):
        op = ops[i]
        a_raw = args[i]
        a = [int(x) for x in (a_raw.to_py() if hasattr(a_raw, 'to_py') else list(a_raw))]
        if op == 'postTweet':
            uid, tid = a[0], a[1]
            if uid not in tweets: tweets[uid] = []
            tc[0] += 1; tweets[uid].append((tc[0], tid)); results.append(None)
        elif op == 'getNewsFeed':
            uid = a[0]; feed = []
            for u in [uid] + list(get_following(uid)):
                if u in tweets: feed.extend(tweets[u])
            feed.sort(key=lambda x: -x[0])
            results.append([t[1] for t in feed[:10]])
        elif op == 'follow':
            get_following(a[0]).add(a[1]); results.append(None)
        elif op == 'unfollow':
            get_following(a[0]).discard(a[1]); results.append(None)
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
