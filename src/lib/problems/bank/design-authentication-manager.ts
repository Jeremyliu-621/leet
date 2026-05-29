import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-authentication-manager',
  title: 'Design Authentication Manager',
  difficulty: 'medium',
  tags: ['design', 'simulation', 'hash-map'],
  description: `There is an authentication system that works with authentication tokens. For each session, the user will receive a new authentication token that will expire \`timeToLive\` seconds after the \`currentTime\`. If the token is renewed, the expiry time will be extended to expire \`timeToLive\` seconds after the **renewed** time.

Implement \`authManager(operations, args)\` where:
- \`"AuthenticationManager"\` — initializes the system with \`timeToLive\`. Returns \`null\`.
- \`"generate"\` — generates a new token with \`tokenId\` at \`currentTime\`. Returns \`null\`.
- \`"renew"\` — renews the **unexpired** token with \`tokenId\` at \`currentTime\`. If the token has already expired, the call is ignored. Returns \`null\`.
- \`"countUnexpiredTokens"\` — returns the number of **unexpired** tokens at \`currentTime\`. A token expires at time \`t\` if \`currentTime >= t\`.

The first operation is always \`"AuthenticationManager"\`.`,
  constraints: [
    '1 <= timeToLive <= 10^8',
    '1 <= currentTime <= 10^8',
    '1 <= tokenId.length <= 5',
    'tokenId consists only of lowercase letters.',
    'All generate calls have unique tokenIds.',
    'The values of currentTime across all the function calls are strictly increasing.',
    'At most 2000 calls made to generate, renew, and countUnexpiredTokens.',
  ],
  examples: [
    {
      input: 'operations = ["AuthenticationManager","renew","generate","countUnexpiredTokens","generate","renew","renew","countUnexpiredTokens"], args = [[5],["aaa",1],["aaa",2],[6],["bbb",7],["aaa",8],["bbb",10],[15]]',
      output: '[null,null,null,1,null,null,null,0]',
      explanation: '"renew aaa at 1" is ignored (aaa not generated yet). "generate aaa at 2" → expires at 7. "countUnexpiredTokens at 6" → aaa expires 7>6 ✓, count=1. "generate bbb at 7" → expires 12. "renew aaa at 8" → aaa expired (7 NOT > 8), ignored. "renew bbb at 10" → bbb expires 12>10, renew → expires 15. "countUnexpiredTokens at 15" → bbb expires 15 NOT > 15, count=0.',
    },
    {
      input: 'operations = ["AuthenticationManager","generate","countUnexpiredTokens","renew","countUnexpiredTokens"], args = [[2],["tok",1],[4],["tok",4],[5]]',
      output: '[null,null,0,null,0]',
      explanation: '"generate tok at 1" → expires 3. "countUnexpiredTokens at 4" → tok expired (3 NOT > 4), count=0. "renew tok at 4" → tok expired, ignored. "countUnexpiredTokens at 5" → still 0.',
    },
  ],
  hints: [
    'Use a hash map from tokenId to expiration time. Generate: set expiry = currentTime + timeToLive. Renew: update expiry only if the current expiry is strictly greater than currentTime.',
    'Count: iterate over all tokens in the map and count those with expiry > currentTime.',
    'Optionally, lazily remove expired tokens during generate/renew/count operations to keep the map from growing unboundedly.',
  ],
  functionName: 'authManager',
  params: ['operations', 'args'],
  starterCode: {
    javascript: `function authManager(operations, args) {
  const results = [];
  let timeToLive;
  const tokenMap = new Map(); // tokenId -> expirationTime

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i], arg = args[i];
    if (op === 'AuthenticationManager') {
      timeToLive = arg[0];
      tokenMap.clear();
      results.push(null);
    } else if (op === 'generate') {
      tokenMap.set(arg[0], arg[1] + timeToLive);
      results.push(null);
    } else if (op === 'renew') {
      const [tokenId, currentTime] = arg;
      if (tokenMap.has(tokenId) && tokenMap.get(tokenId) > currentTime) {
        tokenMap.set(tokenId, currentTime + timeToLive);
      }
      results.push(null);
    } else { // countUnexpiredTokens
      const currentTime = arg[0];
      let count = 0;
      for (const [, expiry] of tokenMap) {
        if (expiry > currentTime) count++;
      }
      results.push(count);
    }
  }
  return results;
}`,
    typescript: "function authManager(operations: string[], args: (number[] | (string | number)[])[]): (null | number)[] {\n  const results = [];\n  let timeToLive;\n  const tokenMap = new Map(); // tokenId -> expirationTime\n\n  for (let i = 0; i < operations.length; i++) {\n    const op = operations[i], arg = args[i];\n    if (op === 'AuthenticationManager') {\n      timeToLive = arg[0];\n      tokenMap.clear();\n      results.push(null);\n    } else if (op === 'generate') {\n      tokenMap.set(arg[0], arg[1] + timeToLive);\n      results.push(null);\n    } else if (op === 'renew') {\n      const [tokenId, currentTime] = arg;\n      if (tokenMap.has(tokenId) && tokenMap.get(tokenId) > currentTime) {\n        tokenMap.set(tokenId, currentTime + timeToLive);\n      }\n      results.push(null);\n    } else { // countUnexpiredTokens\n      const currentTime = arg[0];\n      let count = 0;\n      for (const [, expiry] of tokenMap) {\n        if (expiry > currentTime) count++;\n      }\n      results.push(count);\n    }\n  }\n  return results;\n}",

    python: `def authManager(operations, args):
    results = []
    time_to_live = 0
    token_map = {}  # tokenId -> expirationTime

    for op, arg in zip(operations, args):
        if op == 'AuthenticationManager':
            time_to_live = arg[0]
            token_map.clear()
            results.append(None)
        elif op == 'generate':
            token_map[arg[0]] = arg[1] + time_to_live
            results.append(None)
        elif op == 'renew':
            token_id, current_time = arg[0], arg[1]
            if token_id in token_map and token_map[token_id] > current_time:
                token_map[token_id] = current_time + time_to_live
            results.append(None)
        else:  # countUnexpiredTokens
            current_time = arg[0]
            results.append(sum(1 for expiry in token_map.values() if expiry > current_time))
    return results`,
  },
  visibleTests: [
    {
      args: [
        ['AuthenticationManager', 'renew', 'generate', 'countUnexpiredTokens', 'generate', 'renew', 'renew', 'countUnexpiredTokens'],
        [[5], ['aaa', 1], ['aaa', 2], [6], ['bbb', 7], ['aaa', 8], ['bbb', 10], [15]],
      ],
      expected: [null, null, null, 1, null, null, null, 0],
    },
    {
      args: [
        ['AuthenticationManager', 'generate', 'countUnexpiredTokens', 'renew', 'countUnexpiredTokens'],
        [[2], ['tok', 1], [4], ['tok', 4], [5]],
      ],
      expected: [null, null, 0, null, 0],
    },
    {
      args: [
        ['AuthenticationManager', 'generate', 'generate', 'countUnexpiredTokens', 'generate', 'countUnexpiredTokens'],
        [[3], ['a', 1], ['b', 2], [3], ['c', 3], [4]],
      ],
      expected: [null, null, null, 2, null, 2],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['AuthenticationManager', 'generate', 'renew', 'countUnexpiredTokens'],
        [[10], ['xyz', 1], ['xyz', 5], [12]],
      ],
      expected: [null, null, null, 1],
    },
    {
      args: [
        ['AuthenticationManager', 'generate', 'generate', 'generate', 'renew', 'countUnexpiredTokens'],
        [[5], ['a', 1], ['b', 2], ['c', 3], ['a', 4], [6]],
      ],
      expected: [null, null, null, null, null, 3],
    },
    {
      args: [
        ['AuthenticationManager', 'generate', 'countUnexpiredTokens'],
        [[1], ['t', 5], [6]],
      ],
      expected: [null, null, 0],
    },
    {
      args: [
        ['AuthenticationManager', 'generate', 'generate', 'renew', 'renew', 'countUnexpiredTokens'],
        [[100000000], ['a', 1], ['b', 2], ['a', 3], ['b', 4], [5]],
      ],
      expected: [null, null, null, null, null, 2],
    },
    {
      args: [
        ['AuthenticationManager', 'generate', 'renew', 'countUnexpiredTokens', 'countUnexpiredTokens'],
        [[5], ['tok', 10], ['tok', 12], [14], [16]],
      ],
      expected: [null, null, null, 1, 1],
    },
  ],
};
