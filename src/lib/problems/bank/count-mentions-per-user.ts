import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-mentions-per-user',
  title: 'Count Mentions Per User',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given an integer \`numberOfUsers\` and a 2D string array \`events\`.

Each \`events[i]\` is either:
- \`["MESSAGE", timestamp, mentionString]\` — where \`mentionString\` is either \`"ALL"\`, \`"HERE"\`, or a space-separated list of user IDs like \`"id0 id4 id7"\`.
- \`["OFFLINE", timestamp, userId]\` — the user with ID \`userId\` goes offline at \`timestamp\` and returns online at \`timestamp + 60\`.

All users start online. A \`"HERE"\` mention only counts for users who are **currently online** at that timestamp.

Return an array \`mentions\` of length \`numberOfUsers\` where \`mentions[i]\` is the number of times user \`i\` was mentioned.`,
  constraints: [
    '1 <= numberOfUsers <= 100',
    '1 <= events.length <= 100',
    'events[i].length == 3',
    '1 <= timestamp <= 10^5',
    'The values of timestamps are not necessarily in sorted order.',
    '1 <= userId <= numberOfUsers - 1',
    '0 <= id in mentionString <= numberOfUsers - 1',
  ],
  examples: [
    {
      input: 'numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]',
      output: '[2,2]',
      explanation: 'User 0 and 1 get 1 mention at t=10. User 0 goes offline at t=11, back online at t=71. At t=71, HERE includes both (user 0 just came back). Both have 2 total.',
    },
    {
      input: 'numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","70","HERE"]]',
      output: '[1,2]',
      explanation: 'User 0 and 1 get 1 mention at t=10. User 0 offline until t=71. HERE at t=70 only catches user 1 (online). User 0: 1, User 1: 2.',
    },
    {
      input: 'numberOfUsers = 2, events = [["OFFLINE","11","0"],["MESSAGE","11","HERE"]]',
      output: '[0,1]',
      explanation: 'User 0 goes offline at t=11. MESSAGE HERE at t=11: user 0 is offline, user 1 is online.',
    },
  ],
  hints: [
    'Sort events by timestamp ascending; at equal timestamps process OFFLINE events before MESSAGE events so "HERE" correctly excludes just-offlined users.',
    'Track offline_until[user]: timestamp when the user returns online (default 0). At OFFLINE event: offline_until[userId] = timestamp + 60.',
    'For MESSAGE ALL: increment all. For MESSAGE HERE: increment users where timestamp >= offline_until[user]. For MESSAGE ids: parse the space-separated list and increment those users.',
  ],
  functionName: 'countMentions',
  params: ['numberOfUsers', 'events'],
  starterCode: {
    javascript: `function countMentions(numberOfUsers, events) {
  events.sort((a, b) => {
    const t = Number(a[1]) - Number(b[1]);
    if (t !== 0) return t;
    return a[0] === 'OFFLINE' ? -1 : 1;
  });
  const mentions = new Array(numberOfUsers).fill(0);
  const offlineUntil = new Array(numberOfUsers).fill(0);
  for (const [type, ts, info] of events) {
    const t = Number(ts);
    if (type === 'OFFLINE') {
      offlineUntil[Number(info)] = t + 60;
    } else if (info === 'ALL') {
      for (let i = 0; i < numberOfUsers; i++) mentions[i]++;
    } else if (info === 'HERE') {
      for (let i = 0; i < numberOfUsers; i++) {
        if (t >= offlineUntil[i]) mentions[i]++;
      }
    } else {
      for (const id of info.split(' ')) mentions[Number(id.slice(2))]++;
    }
  }
  return mentions;
}`,
    typescript: `function countMentions(numberOfUsers: number, events: string[][]): number[] {
  events.sort((a, b) => {
    const t = Number(a[1]) - Number(b[1]);
    if (t !== 0) return t;
    return a[0] === 'OFFLINE' ? -1 : 1;
  });
  const mentions = new Array<number>(numberOfUsers).fill(0);
  const offlineUntil = new Array<number>(numberOfUsers).fill(0);
  for (const ev of events) {
    const type = ev[0]!;
    const t = Number(ev[1]);
    const info = ev[2]!;
    if (type === 'OFFLINE') {
      offlineUntil[Number(info)] = t + 60;
    } else if (info === 'ALL') {
      for (let i = 0; i < numberOfUsers; i++) mentions[i]!++;
    } else if (info === 'HERE') {
      for (let i = 0; i < numberOfUsers; i++) {
        if (t >= offlineUntil[i]!) mentions[i]!++;
      }
    } else {
      for (const id of info.split(' ')) mentions[Number(id.slice(2))]!++;
    }
  }
  return mentions;
}`,
    python: `def countMentions(numberOfUsers: int, events: list[list[str]]) -> list[int]:
    if hasattr(events, 'to_py'): events = events.to_py()
    events = [[str(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in events]
    events.sort(key=lambda e: (int(e[1]), 0 if e[0] == 'OFFLINE' else 1))
    mentions = [0] * numberOfUsers
    offline_until = [0] * numberOfUsers
    for event_type, ts, info in events:
        t = int(ts)
        if event_type == 'OFFLINE':
            offline_until[int(info)] = t + 60
        elif info == 'ALL':
            for i in range(numberOfUsers):
                mentions[i] += 1
        elif info == 'HERE':
            for i in range(numberOfUsers):
                if t >= offline_until[i]:
                    mentions[i] += 1
        else:
            for uid in info.split():
                mentions[int(uid[2:])] += 1
    return mentions`,
  },
  visibleTests: [
    {
      args: [2, [['MESSAGE', '10', 'id1 id0'], ['OFFLINE', '11', '0'], ['MESSAGE', '71', 'HERE']]],
      expected: [2, 2],
    },
    {
      args: [2, [['MESSAGE', '10', 'id1 id0'], ['OFFLINE', '11', '0'], ['MESSAGE', '70', 'HERE']]],
      expected: [1, 2],
    },
    {
      args: [2, [['OFFLINE', '11', '0'], ['MESSAGE', '11', 'HERE']]],
      expected: [0, 1],
    },
    {
      args: [3, [['MESSAGE', '5', 'ALL']]],
      expected: [1, 1, 1],
    },
  ],
  hiddenTests: [
    {
      args: [1, [['MESSAGE', '1', 'id0']]],
      expected: [1],
    },
    {
      args: [3, [['MESSAGE', '10', 'id0 id2'], ['MESSAGE', '20', 'ALL']]],
      expected: [2, 1, 2],
    },
    {
      args: [2, [['OFFLINE', '5', '0'], ['MESSAGE', '5', 'HERE']]],
      expected: [0, 1],
    },
    {
      args: [2, [['OFFLINE', '5', '0'], ['MESSAGE', '65', 'HERE']]],
      expected: [1, 1],
    },
    {
      args: [2, [['OFFLINE', '5', '0'], ['MESSAGE', '64', 'HERE']]],
      expected: [0, 1],
    },
    {
      args: [3, [['OFFLINE', '10', '1'], ['MESSAGE', '10', 'ALL']]],
      expected: [1, 1, 1],
    },
  ],
};
