import type { Problem } from '../types';

const JS_PREAMBLE = `
function reconstructItineraryRunner(tickets) {
  return reconstructItinerary(tickets.map(t => Array.isArray(t) ? t : [...t]));
}
`.trim();

const PY_PREAMBLE = `
def reconstructItineraryRunner(tickets):
    t = [list(x) for x in tickets]
    return reconstructItinerary(t)
`.trim();

export const problem: Problem = {
  id: 'reconstruct-itinerary',
  title: 'Reconstruct Itinerary',
  difficulty: 'hard',
  tags: ['graph'],
  description: `Given a list of airline \`tickets\` represented as \`[from, to]\` pairs, reconstruct the itinerary in order. All of the tickets belong to a man who departs from \`"JFK"\`. Thus, the itinerary must begin with \`"JFK"\`.

If there are multiple valid itineraries, return the one with the **smallest lexicographic order** when read as a single string.

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.`,
  constraints: [
    '1 <= tickets.length <= 300',
    'tickets[i].length == 2',
    'from_i.length == 3, to_i.length == 3',
    'from_i and to_i consist of uppercase English letters',
    'from_i != to_i',
  ],
  examples: [
    {
      input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
      output: '["JFK","MUC","LHR","SFO","SJC"]',
    },
    {
      input: 'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]',
      output: '["JFK","ATL","JFK","SFO","ATL","SFO"]',
      explanation: 'Another itinerary ["JFK","SFO","ATL","JFK","ATL","SFO"] exists but is larger in lexical order.',
    },
  ],
  hints: [
    'Build an adjacency list (graph) from the tickets. Sort each destination list so you always visit the lexicographically smallest destination first.',
    "Use Hierholzer's algorithm: do a DFS from JFK. When you have no more destinations from a node, prepend that node to the result.",
    'Prepend (not append) so the final reversal step is unnecessary — collecting in reverse DFS post-order gives the correct itinerary.',
  ],
  functionName: 'reconstructItineraryRunner',
  params: ['tickets'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function reconstructItinerary(tickets) {\n\n}\n',
    python: 'def reconstructItinerary(tickets):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']]],
      expected: ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'],
    },
    {
      args: [[['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']]],
      expected: ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'],
    },
  ],
  hiddenTests: [
    {
      args: [[['JFK', 'KUL'], ['JFK', 'NRT'], ['NRT', 'JFK']]],
      expected: ['JFK', 'NRT', 'JFK', 'KUL'],
    },
    {
      args: [[['JFK', 'A'], ['A', 'JFK'], ['JFK', 'B']]],
      expected: ['JFK', 'A', 'JFK', 'B'],
    },
  ],
};
